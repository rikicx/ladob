import { spawn } from "node:child_process";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const project = resolve(import.meta.dirname, "..");
const markup = await readFile(resolve(project, "app/site-markup.ts"), "utf8");
const localImages = Array.from(markup.matchAll(/src="(\/images\/[^\"]+)"/g), (match) => match[1]);

for (const image of new Set(localImages)) {
  const info = await stat(resolve(project, `public${image}`));
  if (!info.isFile() || info.size === 0) {
    throw new Error(`Imagem local inválida: ${image}`);
  }
}

const port = 3010;
const server = spawn("npm", ["run", "start", "--", "-p", String(port)], {
  cwd: project,
  stdio: ["ignore", "pipe", "pipe"],
});

let ready = false;
let serverOutput = "";
server.stdout.on("data", (chunk) => {
  serverOutput += chunk.toString();
});
server.stderr.on("data", (chunk) => {
  serverOutput += chunk.toString();
});
const timeout = setTimeout(() => server.kill("SIGTERM"), 15_000);

try {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`);
      const html = await response.text();
      if (!response.ok || !html.includes("Existe um lado seu")) {
        throw new Error(`Resposta inválida: ${response.status}`);
      }
      ready = true;
      console.log(`Página inicial: ${response.status}`);
      console.log(`Imagens locais verificadas: ${new Set(localImages).size}`);
      break;
    } catch {
      await new Promise((resolveWait) => setTimeout(resolveWait, 150));
    }
  }
} finally {
  clearTimeout(timeout);
  server.kill("SIGTERM");
}

if (!ready) {
  throw new Error(`O servidor não respondeu dentro do prazo de validação.\n${serverOutput}`);
}
