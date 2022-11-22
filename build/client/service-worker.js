const l = [
  "/_app/immutable/start-4c2f6aff.js",
  "/_app/immutable/components/pages/_layout.svelte-ddeaf5b5.js",
  "/_app/immutable/assets/_layout-c9995ebd.css",
  "/_app/immutable/components/pages/_error.svelte-4c7145ec.js",
  "/_app/immutable/components/pages/(login)/_layout.svelte-f2d2942c.js",
  "/_app/immutable/components/pages/(nologin)/_layout.svelte-3eb1a28e.js",
  "/_app/immutable/components/pages/(login)/_page.svelte-a0abaacc.js",
  "/_app/immutable/components/pages/(login)/billing/_page.svelte-a04ee690.js",
  "/_app/immutable/components/pages/(login)/newserver/_page.svelte-1d12d6a9.js",
  "/_app/immutable/components/pages/(login)/settings/_page.svelte-9d901e05.js",
  "/_app/immutable/components/pages/(nologin)/signin/_page.svelte-c651c657.js",
  "/_app/immutable/components/pages/(nologin)/signin/admin/_page.svelte-99badaa8.js",
  "/_app/immutable/chunks/index-cca7115e.js",
  "/_app/immutable/chunks/accountEmail-5eba9d8f.js",
  "/_app/immutable/chunks/i18n-36e90978.js",
  "/_app/immutable/chunks/Footer-44a80b1d.js",
  "/_app/immutable/chunks/req-8b6c2c07.js",
  "/_app/immutable/chunks/EmailSignin-394f7590.js",
  "/_app/immutable/chunks/0-d23160b4.js",
  "/_app/immutable/chunks/1-ed260456.js",
  "/_app/immutable/chunks/2-1f570e11.js",
  "/_app/immutable/chunks/3-4f0f3463.js",
  "/_app/immutable/chunks/4-a997c8be.js",
  "/_app/immutable/chunks/5-77461ed5.js",
  "/_app/immutable/chunks/6-066449c4.js",
  "/_app/immutable/chunks/7-8e90f378.js",
  "/_app/immutable/chunks/8-7a85ef08.js",
  "/_app/immutable/chunks/9-468b1e0d.js"
], u = [
  "/discord.ico",
  "/favicon.png",
  "/favicon.webp",
  "/icon/192-m.webp",
  "/icon/192.webp",
  "/icon/256.webp",
  "/icon/384.webp",
  "/icon/512-m.webp",
  "/icon/512.webp",
  "/manifest.json"
], p = "1669098225340", t = self, i = `cache${p}`, o = l.concat(u), h = new Set(o);
t.addEventListener("install", (e) => {
  e.waitUntil(caches.open(i).then((a) => a.addAll(o)).then(() => {
    t.skipWaiting();
  }));
});
t.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then(async (a) => {
    for (const s of a)
      s !== i && await caches.delete(s);
    t.clients.claim();
  }));
});
async function b(e) {
  const a = await caches.open(`offline${p}`);
  try {
    const s = await fetch(e);
    return a.put(e, s.clone()), s;
  } catch (s) {
    const n = await a.match(e);
    if (n)
      return n;
    throw s;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const a = new URL(e.request.url), s = a.protocol.startsWith("http"), n = a.hostname === self.location.hostname && a.port !== self.location.port, c = a.host === self.location.host && h.has(a.pathname), m = e.request.cache === "only-if-cached" && !c;
  s && !n && !m && e.respondWith((async () => c && await caches.match(e.request) || b(e.request))());
});
