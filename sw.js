// The name of the cache store in variable
let staticCacheName = 'restaurant-app-page-cache-v1';

// Files that should be stored
var filesToCache = [
  '.',
  'css/styles.css',
  'img/1-230w.jpg',
  'img/1-400w.jpg',
  'img/1-455w.jpg',
  'img/1-800w.jpg',
  'img/2-230w.jpg',
  'img/2-400w.jpg',
  'img/2-455w.jpg',
  'img/2-800w.jpg',
  'img/3-230w.jpg',
  'img/3-400w.jpg',
  'img/3-455w.jpg',
  'img/3-800w.jpg',
  'img/4-230w.jpg',
  'img/4-400w.jpg',
  'img/4-455w.jpg',
  'img/4-800w.jpg',
  'img/5-230w.jpg',
  'img/5-400w.jpg',
  'img/5-455w.jpg',
  'img/5-800w.jpg',
  'img/6-230w.jpg',
  'img/6-400w.jpg',
  'img/6-455w.jpg',
  'img/6-800w.jpg',
  'img/7-230w.jpg',
  'img/7-400w.jpg',
  'img/7-455w.jpg',
  'img/7-800w.jpg',
  'img/8-230w.jpg',
  'img/8-400w.jpg',
  'img/8-455w.jpg',
  'img/8-800w.jpg',
  'img/9-230w.jpg',
  'img/9-400w.jpg',
  'img/9-455w.jpg',
  'img/9-800w.jpg',
  'img/10-230w.jpg',
  'img/10-400w.jpg',
  'img/10-455w.jpg',
  'img/10-800w.jpg',
  'index.html',
  'restaurant.html',
  'js/main.js',
  'js/restaurant_info.js',
  'data/restaurants.json'
];

// When service worker is installing,
// store the filesToCache in the cache
self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/*
 * Serve files from the cache
 * When request to server is sent,
 * bypass the request if the url matches the one in the cache.
 * Then serve the files from the cache for that url.
 */
self.addEventListener('fetch', function(event) {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    // Check the caches for url (event.request),
    // and then return response from cache
    caches.match(event.request).then(function(response) {

      // if there is any response (data) in the cache for that url
      // return that data (response)
      if (response) {
        console.log('Found ', event.request.url, ' in cache');

        return response;
      }

      // if there is no response in the cache,
      // make a request over the network to the server
      console.log('Network request for ', event.request.url);
      return fetch(event.request);
    })
  );
});
