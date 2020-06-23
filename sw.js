importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0-rc.3/workbox-sw.js");

//custom
// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );
  
  // Cache the underlying font files with a cache-first strategy for 1 year.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

workbox.precaching.precacheAndRoute([
  {
    "url": "angular/angular.min.js",
    "revision": "21da20ee83a7958c8af0051be0c979f4"
  },
  {
    "url": "angular/app.js",
    "revision": "4590f3d27923524036d237bfdcc8ac58"
  },
  {
    "url": "css/bootstrap.min.css",
    "revision": "f2240ef4a7d1f9f882e86d58ce812b4a"
  },
  {
    "url": "css/style.css",
    "revision": "3406f08f9a75d9702241b09b32602454"
  },
  {
    "url": "imgages/sky_day.jpg",
    "revision": "2da3c76a74f0be1d07c130c21d6c31b7"
  },
  {
    "url": "index.html",
    "revision": "552a6753eacc3f284aef4f678a4f78a4"
  }
]);