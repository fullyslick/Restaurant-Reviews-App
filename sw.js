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
self.addEventListener('install', function(event){
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
