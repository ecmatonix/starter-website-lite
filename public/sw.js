var CACHE_NAME = "swl-app-cache";
var urlsToCache = [
  "/",
  "/assets/images/favicon/apple-touch-icon.png",
  "/assets/images/favicon/favicon-32x32.png",
  "/assets/images/favicon/favicon-16x16.png",
  "/site.webmanifest",
  "/assets/images/favicon/safari-pinned-tab.svg",
  "/assets/images/favicon/favicon.ico",
  "/assets/images/favicon/mstile-144x144.png",
  "/assets/images/favicon/mstile-70x70.png",
  "/assets/images/favicon/mstile-150x150.png",
  "/assets/images/favicon/mstile-310x150.png",
  "/assets/images/favicon/mstile-310x310.png",
  "/browserconfig.xml",
  "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css",
  "https://cdnjs.cloudflare.com/ajax/libs/mocha/6.0.2/mocha.css",
  "/assets/styles/local/main.css",
  "https://polyfill.io/v3/polyfill.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/mocha/6.0.2/mocha.js",
  "https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js",
  "/assets/scripts/local/main.js",
  "/tests/test.js",
  "/sw.js"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response ? response : update(event.request);
    })
  );
});

function update(request) {
  var fetchRequest = request.clone();

  return fetch(fetchRequest).then(function(response) {
    return checkResponse(response) ? response : addToCache(request, response);
  });
}

function checkResponse(response) {
  return (
    !response || response.status !== 200 || /browser-sync/.test(response.url)
  );
}

function addToCache(request, response) {
  var responseToCache = response.clone();

  caches.open(CACHE_NAME).then(function(cache) {
    cache.put(request, responseToCache);
  });

  return response;
}