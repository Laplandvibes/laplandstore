// _promo-shot.mjs — AppPromoHero-kortin kaappaus + geometria usealla leveydellä (CDP).
// Käyttö: node _promo-shot.mjs "375,412,640,768,834,1024" ./['_promo_shots'] http://localhost:5205/fi/
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import os from "node:os";
import { WebSocket } from "ws";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const widths = (process.argv[2] || "375,768").split(",").map(Number);
const outDir = process.argv[3] || "./_promo_shots";
const url = process.argv[4] || "http://localhost:5205/fi/";
const PORT = 9224;

fs.mkdirSync(outDir, { recursive: true });
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "pshot-"));
const chrome = spawn(CHROME, [
  "--headless=new", "--disable-gpu", "--no-first-run", "--mute-audio",
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, "about:blank",
], { stdio: "ignore" });

const httpJson = (method, p) => new Promise((res, rej) => {
  const req = http.request({ host: "127.0.0.1", port: PORT, path: p, method }, (r) => {
    let b = ""; r.on("data", (c) => (b += c)); r.on("end", () => { try { res(JSON.parse(b)); } catch (e) { rej(e); } });
  });
  req.on("error", rej); req.end();
});
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let target;
for (let i = 0; i < 40; i++) {
  try { target = await httpJson("PUT", "/json/new?about:blank"); break; } catch { await sleep(250); }
}
if (!target) { chrome.kill(); throw new Error("Chrome DevTools ei käynnistynyt"); }

const ws = new WebSocket(target.webSocketDebuggerUrl, { maxPayload: 512 * 1024 * 1024 });
await new Promise((r) => ws.on("open", r));
let id = 0; const pending = new Map();
const events = [];
ws.on("message", (raw) => {
  const m = JSON.parse(raw);
  if (m.id && pending.has(m.id)) { const { res, rej } = pending.get(m.id); pending.delete(m.id); m.error ? rej(new Error(m.error.message)) : res(m.result); }
  else if (m.method) events.push(m.method);
});
const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pending.set(i, { res, rej }); ws.send(JSON.stringify({ id: i, method, params })); });
const waitEvent = async (name, timeout = 12000) => { const t0 = Date.now(); while (Date.now() - t0 < timeout) { const ix = events.indexOf(name); if (ix >= 0) { events.splice(ix, 1); return true; } await sleep(100); } return false; };

await send("Page.enable");

const results = [];
for (const W of widths) {
  const H = Math.max(812, 900);
  await send("Emulation.setDeviceMetricsOverride", { width: W, height: H, deviceScaleFactor: 2, mobile: W < 768 });
  await send("Page.navigate", { url });
  await waitEvent("Page.loadEventFired");
  // localStorage-seed: ei consent-banneria kuviin
  await send("Runtime.evaluate", { expression: `try{localStorage.setItem('laplandstore_cookie_consent','{"accepted":true}');}catch{}` });
  await sleep(1600);
  await send("Runtime.evaluate", { expression: `(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    const h2 = [...document.querySelectorAll('h2')].find(h => /Koko Lappi/i.test(h.textContent));
    if (!h2) return;
    const card = h2.closest('section');
    window.scrollTo({ top: card.getBoundingClientRect().top + window.scrollY - 80, behavior: 'instant' });
  })()` });
  await sleep(450);
  const { result } = await send("Runtime.evaluate", { returnByValue: true, expression: `(() => {
    const h2 = [...document.querySelectorAll('h2')].find(h => /Koko Lappi/i.test(h.textContent));
    if (!h2) return { W: innerWidth, err: 'promo not found' };
    const card = h2.closest('section');
    const r = el => { const b = el.getBoundingClientRect(); return { x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height) }; };
    const imgs = [...card.querySelectorAll('img')].filter(i => i.checkVisibility()).map(i => ({ src: i.src.split('/').pop(), ...r(i) }));
    const stats = card.querySelector('.flex.flex-wrap');
    const statRows = stats ? [...new Set([...stats.children].map(c => Math.round(c.getBoundingClientRect().y)))].length : null;
    const ul = card.querySelector('ul');
    const wrapped = [...ul.children].filter(li => li.getBoundingClientRect().height > 26).length;
    return { W: innerWidth, card: r(card), h2: r(h2), imgs, statRowCount: statRows, bulletsWrapped: wrapped, cardH: r(card).h };
  })()` });
  results.push(result.value);
  await sleep(350);
  const shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(path.join(outDir, `promo-${W}.png`), Buffer.from(shot.data, "base64"));
}
console.log(JSON.stringify(results, null, 1));
ws.close(); chrome.kill();
try { fs.rmSync(profile, { recursive: true, force: true }); } catch {}
