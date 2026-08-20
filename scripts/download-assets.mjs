import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const project = resolve(here, "..");
const migration = await readFile(resolve(here, "migrate-html.mjs"), "utf8");
const mappings = Array.from(
  migration.matchAll(/\["(https:\/\/[^\"]+)", "(\/images\/[^\"]+)"\]/g),
  (match) => ({ remote: match[1], local: match[2] }),
);

await mkdir(resolve(project, "public/images"), { recursive: true });

for (const { remote, local } of mappings) {
  const response = await fetch(remote, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; StudioLadoB/1.0)" },
  });

  if (!response.ok) {
    throw new Error(`Falha ao baixar ${remote}: ${response.status}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.startsWith("image/")) {
    throw new Error(`Resposta inesperada para ${remote}: ${contentType}`);
  }

  const data = new Uint8Array(await response.arrayBuffer());
  await writeFile(resolve(project, `public${local}`), data);
  console.log(`${local} — ${Math.round(data.length / 1024)} KB`);
}
