const CACHE_NAME = 'lords-mobile-hub-cache-v1';
const urlsToCache = [
  '/lords-mobile-hunting/',
  '/lords-mobile-hunting/index.html',
  '/lords-mobile-hunting/style.css',
  '/lords-mobile-hunting/translations.js',
  '/lords-mobile-hunting/calculator.html',
  '/lords-mobile-hunting/hunting.html',
  '/lords-mobile-hunting/training.html',
  '/lords-mobile-hunting/composition.html',
  '/lords-mobile-hunting/migration.html',
  '/lords-mobile-hunting/research.html',
  '/lords-mobile-hunting/admin.html',
  '/lords-mobile-hunting/icons/icon-192x192.png',
  '/lords-mobile-hunting/icons/icon-512x512.png',
  '/lords-mobile-hunting/icons/apple-touch-icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
