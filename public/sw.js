var CACHE_NAME = "swl-app-cache";
var urlsToCache = ["/"];

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