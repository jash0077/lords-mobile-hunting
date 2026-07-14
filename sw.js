const CACHE_NAME = 'lords-mobile-hub-cache-v3.0';
const urlsToCache = [
  '/lords-mobile-hunting/',
  '/lords-mobile-hunting/index.html?v=3.0',
  '/lords-mobile-hunting/style.css?v=3.0',
  '/lords-mobile-hunting/translations.js?v=3.0',
  '/lords-mobile-hunting/features.js?v=3.0',
  '/lords-mobile-hunting/calculator.html?v=3.0',
  '/lords-mobile-hunting/hunting.html?v=3.0',
  '/lords-mobile-hunting/training.html?v=3.0',
  '/lords-mobile-hunting/composition.html?v=3.0',
  '/lords-mobile-hunting/migration.html?v=3.0',
  '/lords-mobile-hunting/research.html?v=3.0',
  '/lords-mobile-hunting/admin.html?v=3.0',
  '/lords-mobile-hunting/icons/icon-192x192.png',
  '/lords-mobile-hunting/icons/icon-512x512.png',
  '/lords-mobile-hunting/icons/apple-touch-icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install - cache all essential resources
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching all resources for offline support');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch - Network first, fallback to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response and cache it
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request).then(response => {
          if (response) {
            return response;
          }
          // If not in cache, return offline page
          if (event.request.mode === 'navigate') {
            return caches.match('/lords-mobile-hunting/index.html?v=3.0');
          }
        });
      })
  );
});

// Activate - clean up old caches
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
    }).then(() => self.clients.claim())
  );
});
