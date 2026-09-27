const CACHE_NAME = "tagihan-harian-pwa-v1";
const APP_SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg"];
const APP_SHELL_URLS = APP_SHELL.map((path) => new URL(path, self.registration.scope).href);
const CDN_HOSTS = new Set(["cdn.tailwindcss.com", "fonts.googleapis.com", "fonts.gstatic.com"]);

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL_URLS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(cacheNames.filter((cacheName) => cacheName.startsWith("tagihan-harian-pwa-") && cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const requestUrl = new URL(request.url);
  if (requestUrl.origin === self.location.origin) {
    if (request.mode === "navigate") {
      event.respondWith(
        fetch(request)
          .then((response) => {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(new URL("./index.html", self.registration.scope).href, copy));
            return response;
          })
          .catch(async () => (await caches.match(request)) || caches.match(new URL("./index.html", self.registration.scope).href))
      );
      return;
    }

    event.respondWith(caches.match(request).then((cached) => cached || fetch(request).then((response) => {
      if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
      return response;
    })));
    return;
  }

  if (CDN_HOSTS.has(requestUrl.hostname)) {
    event.respondWith(caches.match(request).then((cached) => {
      const networkRequest = fetch(request).then((response) => {
        if (response.ok || response.type === "opaque") caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
        return response;
      });
      return cached || networkRequest;
    }));
  }
});