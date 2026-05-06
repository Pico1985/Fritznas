// FRITZConnect Service Worker
// Cached Shell: App lädt auch bei schlechtem Signal sofort

const CACHE = 'fritzconnect-v1';
const SHELL = ['/', '/index.html'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // NAS-Anfragen (WebDAV) nie cachen
  if (e.request.url.includes('/nas/') || e.request.url.includes('myfritz.net')) return;

  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
