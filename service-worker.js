const CACHE_NAME = 'sts-lernapp-v1';
const ASSETS = [
  './',
  './index.html',
  './quiz-data.json',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        const respClone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, respClone));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
