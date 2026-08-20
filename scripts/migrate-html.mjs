import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const project = resolve(here, "..");
const source = "/Users/henriquem.silva/Downloads/Sites Locais/LadoB/lado-b-ck_1.html";
const html = await readFile(source, "utf8");

const css = html.match(/<style>([\s\S]*?)<\/style>/)?.[1];
const body = html.match(/<body>([\s\S]*?)<script>\s*\(function\(\)/)?.[1];
const script = html.match(/<script>\s*(\(function\(\)[\s\S]*?\)\(\);)\s*<\/script>\s*<\/body>/)?.[1];

if (!css || !body || !script) {
  throw new Error("Não foi possível separar o HTML original.");
}

const assetMap = new Map([
  ["https://ladobck.com.br/wp-content/uploads/2025/01/logotipo-dourado-1024x576.png", "/images/logo-ladob.png"],
  ["https://ladobck.com.br/wp-content/uploads/2025/01/IMG_7404-scaled.jpg", "/images/hero-cobre.jpg"],
  ["https://ladobck.com.br/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-06-at-16.55.02.jpeg", "/images/hero-loiro.jpeg"],
  ["https://ladobck.com.br/wp-content/uploads/2025/01/IMG_7532-scaled.jpg", "/images/hero-ondas.jpg"],
  ["https://ladobck.com.br/wp-content/uploads/2025/02/noiva-1024x771.png", "/images/noiva.png"],
  ["https://ladobck.com.br/wp-content/uploads/2025/01/IMG_7540-scaled-e1738776803258.jpg", "/images/finalizacao.jpg"],
  ["https://ladobck.com.br/wp-content/uploads/2025/01/IMG_7604-scaled.jpg", "/images/galeria-corte-cor.jpg"],
  ["https://ladobck.com.br/wp-content/uploads/2025/01/IMG_7634-scaled.jpg", "/images/galeria-cobre.jpg"],
  ["https://ladobck.com.br/wp-content/uploads/2025/01/IMG_7643-scaled.jpg", "/images/galeria-cachos.jpg"],
  ["https://ladobck.com.br/wp-content/uploads/2025/01/IMG_7649-scaled.jpg", "/images/galeria-ruivo.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWly8tEdc6Uk_xiN_c1O9Ew3885a0Dl2YWcm8ND29a3dc2tzz-2rJAJcv_uMvAg3LrmALSY19w0nmAfOGgzn3_gJcRUxj_UMRfevfC7lvUkeieMunKSkzIHWUoJI4tfzG91OkAi2Ukz9pzj2=w1400-h1400-k-no", "/images/estudio-bancadas.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkimyxoL4JiMMhM-t750D_u3U0qnfYK-IKA41FGpzFL5pPQtYHK27tgL-_2l55cY0t4buR_Mp51GZruJ_7m97zfWY-shL3XAZjNom9-lakPY0xkdxub5tgZqIcHYhR9Z6hZAwfqXDJtsWQ4=w1400-h1400-k-no", "/images/estudio-atendimento.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkdqUS5exX9zFDlzoi1qbtDza1XDm7F8D_h_0nh-KdPO88iWTWuod12qYD9GEmqiLdZkuAT2V8cqGdzXCm98V6B-LCdjAT36Pg2nrqprSLyb4czKiLWyd8m5oV0lgvIJ0rf1kN_A5y5yc8t=w1400-h1400-k-no", "/images/estudio-detalhe.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlP4axbnlGFN0lIjTl0eYTwMcwxikooY4rV1wQjiGZtQbs3kXGPwpRVkduq0efgIEfGnfjV4SKvRmrZqzJ7ZHw4Gn9BJQW_WgXgyEki4GfO6suo4clcFzVxQ2zK_91jJgmfQ4sxqQ=w1400-h1400-k-no", "/images/recepcao-espumante.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnzHSuSRhGRm32D0OVLNu9t8OWJmjwmPtaMX4p83T4Hqid82EQnzw23JrdPcKCBUONWg-ofAv6IgjFuggfWRrx6cYqBcxeOVY9FMtDorkpCm3IxLuNlVn853oJDNxHhx-NGJs09QYN6G3Db=w1400-h1400-k-no", "/images/bastidores.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn2IUDGeRHjIpbqR1mC6wXr7CIcmIC5dG70l2-J2sU6qHj7dcCBxvpdaST876N-lo3KqVIw3FtTJSEAeWkz1KnY96h5lfEl4cbJx4qHclBHt4etmoB_JC4F_hdn4-wfh1k44UpJcghmQR0=w1400-h1400-k-no", "/images/servico-cabelo.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-D8_AJNtqDq2XvbC4zZ_qnIxqO7NwnvrWJcmyR-waOjMsHoCMUfUOEUZizNtOEBXMzYeh7FKPchPyFykeoqXW8wcaJicm727gew7w6MXB3K0JIVr970JFqVCdhFKIDNvjf9XWVg=w1400-h1400-k-no", "/images/servico-unhas.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlSJjOZaT9uIPPxRgPEDEhrHqr3mYYAu5w5ss-p0vwAMCTjXxQ6lE1jTtyzjJT-_XDcIxpkfjxz9FIpvmUOo-gZPZZTJDHV5ovlKsrLboahkMl9ZgI0mCreZ8N4jVePocKNI2UPqyZiX5s=w1400-h1400-k-no", "/images/servico-estetica.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnMgOIDCURtxuqNha6SX0WuJxX1W1TNbLduGszdbnikEIBVoRpmrmTfthYgf_qIN86JONMd8CziZHic-FsQFtx5MrlR53DHP64lli_u_OOxcZIRSNpdVc6XXsk69vUYMHEsYdi8fg=w1400-h1400-k-no", "/images/servico-maquiagem.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnTNiPeoxcB-61qg4c6n-e3Tg7gwdb1hzBRlKT5TPcoHbiJY8iwXOBgm3YIDoIUvBIxoYf_K0Gyprci66JbKW4diPoohWuon0FL0xDMOSeANjfBjHpJiDxTWaRA7dtvY6uJIQ-44XFjnPLF=w1400-h1400-k-no", "/images/noiva-ambiente.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkP0BNdrt8cAzHg0XsBtSkz412vBZtajQhd0ZvYe8aQtPJEbRllbaq0l5SFeIzRI6oP3KnXeOJGuLYySd7obNqV7HMl5WgbEeHkoVIvhTMHiT55WmbBiG1yJRsYCWrvoC2-Q-kjo2p2d1E=w1400-h1400-k-no", "/images/galeria-loiro.jpg"],
  ["https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk36ALB0NlHKBEIe-cuht9x5ntaG_Py1Xx3AwAIcPPphnfy1vilExOyawXgLzzlU3LWpOvpRnHDvWe_wV_Mya9rUwfRQ2PThDC9YIikBsxhfd4yEFHQpYV0q7ILTpuGOM_-z0uPCLOyNOtu=w1400-h1400-k-no", "/images/fachada.jpg"],
]);

let migratedBody = body;
for (const [remote, local] of assetMap) {
  migratedBody = migratedBody.replaceAll(remote, local);
}

const legacyWhatsAppUrl = "https://tintim.link/whatsapp/4b9fc82c-f263-4b19-b466-45c290edb2f7/000b1b56-732b-402b-8746-9e3dd65e5e18";
const bookingWhatsAppUrl = "https://wa.me/5511968542734?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Lado%20B%20CK%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.";
const bridalWhatsAppUrl = "https://wa.me/5511968542734?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Lado%20B%20CK%20e%20gostaria%20de%20conversar%20sobre%20o%20Dia%20da%20Noiva.";

migratedBody = migratedBody
  .replaceAll(legacyWhatsAppUrl, bookingWhatsAppUrl)
  .replace(
    `href="${bookingWhatsAppUrl}" target="_blank" rel="noopener" data-cursor="falar"`,
    `href="${bridalWhatsAppUrl}" target="_blank" rel="noopener" data-cursor="falar"`,
  );

migratedBody = migratedBody.replace(
  /<span class="wa__icon" aria-hidden="true">[\s\S]*?<\/span>\s*<span class="wa__txt">/,
  '<span class="wa__icon" aria-hidden="true"><img src="/images/whatsapp-icon.png" alt="" width="26" height="26"></span>\n  <span class="wa__txt">',
);

const migratedCss = css
  .replace('--ff-display:"Bodoni Moda", "Didot", "Times New Roman", serif;', '--ff-display:var(--font-display), "Avenir Next", Helvetica, Arial, sans-serif;')
  .replace('--ff-sans:"Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;', '--ff-sans:var(--font-body), -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;')
  .replace('--ff-mono:"DM Mono", ui-monospace, "SFMono-Regular", Menlo, monospace;', '--ff-mono:var(--font-mono), ui-monospace, "SFMono-Regular", Menlo, monospace;')
  .replace('.display{font-family:var(--ff-display); font-weight:400; line-height:.9; letter-spacing:-.022em}', '.display{font-family:var(--ff-display); font-weight:500; line-height:.94; letter-spacing:-.04em}')
  .replace('.serif-it{font-family:var(--ff-display); font-style:italic; font-weight:400}', '.serif-it{font-family:var(--ff-display); font-style:normal; font-weight:300; color:var(--brass)}')
  .replace('position:fixed; right:clamp(.85rem,1.6vw,1.6rem); top:50%; transform:translateY(-50%);', 'position:fixed; right:clamp(.85rem,1.6vw,1.6rem); bottom:calc(clamp(.85rem,1.6vw,1.6rem) + env(safe-area-inset-bottom));')
  .replace('.wa{top:auto; bottom:calc(1rem + env(safe-area-inset-bottom)); transform:none}', '.wa{right:1rem; bottom:calc(1rem + env(safe-area-inset-bottom))}')
  .replace('.wa__icon svg{width:100%; height:100%; fill:#5FCB7E}', '.wa__icon img{width:100%; height:100%; object-fit:contain}')
  .replace('.footer__logo{display:flex; justify-content:center; padding-block:clamp(.5rem,2vh,1.6rem)}', '.footer__logo{display:flex; justify-content:center; padding-block:clamp(1.5rem,4vh,3rem); border-top:1px solid var(--line)}')
  .replace('.footer__logo img{width:min(78vw,780px); height:auto; opacity:.92; mix-blend-mode:screen}', '.footer__logo img{width:clamp(150px,18vw,260px); height:auto; opacity:.88; mix-blend-mode:screen}');

const escapedMarkup = migratedBody
  .trim()
  .replaceAll('`', '\\`')
  .replaceAll('${', '\\${');

await mkdir(resolve(project, "app"), { recursive: true });
await mkdir(resolve(project, "public"), { recursive: true });
await writeFile(resolve(project, "app/globals.css"), migratedCss.trim() + "\n");
await writeFile(resolve(project, "app/site-markup.ts"), `export const siteMarkup = \`${escapedMarkup}\`;\n`);
const migratedScript = script
  .replace('(m.classList.contains("wa") && win.innerWidth > 760 ? "translateY(-50%) " : "") + "translate("+mx+"px,"+my+"px)"', '"translate("+mx+"px,"+my+"px)"')
  .replace('(m.classList.contains("wa") && win.innerWidth > 760 ? "translateY(-50%)" : "")', '""');

await writeFile(resolve(project, "public/site.js"), migratedScript.trim() + "\n");

console.log(`Migrado: ${assetMap.size} imagens externas mapeadas.`);
