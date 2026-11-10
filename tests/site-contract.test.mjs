import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const routes = [
  "app/page.tsx",
  "app/about/page.tsx",
  "app/faq/page.tsx",
  "app/contact/page.tsx",
  "app/services/page.tsx",
  "app/services/debt-review/page.tsx",
  "app/services/removal/page.tsx",
  "app/services/removal/about/page.tsx",
  "app/services/removal/faq/page.tsx",
  "app/services/removal/contact/page.tsx",
  "app/services/mediation/page.tsx",
  "app/services/mediation/about/page.tsx",
  "app/services/mediation/faq/page.tsx",
  "app/services/mediation/contact/page.tsx",
];

test("all public routes remain present", async () => {
  await Promise.all(routes.map((route) => access(route)));
});

test("shared contact actions remain present", async () => {
  const chrome = await readFile("components/site-chrome.tsx", "utf8");
  assert.match(chrome, /wa\.me/);
  assert.match(chrome, /tel:/);
  assert.match(chrome, /FloatingActions/);
});

test("the project no longer depends on ChatGPT Sites or Vinext", async () => {
  const packageJson = await readFile("package.json", "utf8");
  assert.doesNotMatch(packageJson, /vinext|wrangler|cloudflare|sites-env/i);
  assert.match(packageJson, /"build": "next build"/);
});
