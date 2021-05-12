'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3517356bf5e5566846080bb5e625fd30",
"index.html": "4cef6d5f3a854d7e676a1b180c26b200",
"/": "4cef6d5f3a854d7e676a1b180c26b200",
"main.dart.js": "d9dafac26a9c4146c7b6421bd5fddfca",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1fed1105249c3b90ecb5547e842ae0af",
"assets/images/img_add2app_option_b.png": "fcb900461975301de45cbd960ddca3ee",
"assets/images/mr_card.png": "90593ec98e676a7ecd1adfe90d0f9b0c",
"assets/images/mr_exchange_detail.png": "4b1e6c93b535d7b2dcf0a65a6b834839",
"assets/images/mr_loading.png": "779eea98561724cb1d09697f6540bf42",
"assets/images/btn_dlonGooglePlay.png": "4314ebc896f5c643a215078a1d92a63e",
"assets/images/img_add2app_option_a.png": "8351ffa0d67b5b210d12ba0090b5fa04",
"assets/images/flutter_1_bg.jpeg": "7a2356f8cc1bf7d33376fac73ec04c64",
"assets/images/flutter_3_layer.png": "0e3ed24ce06edf89fab5072c310d393d",
"assets/images/flutter_2_layer2.png": "9f38f12164b646341c610a77fd6c2e7a",
"assets/images/mr_qrcode.png": "6794b17249c7e8987dcdf73d8a50b06f",
"assets/images/ic_github_mark.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/images/mr_exchange.png": "7c0fb30b246551b285fb9746a50724e5",
"assets/images/img_add2app_b.png": "d3e268fdf367ca612f65e54c73fa00e4",
"assets/images/mr_point_costco.png": "16879dc492e1f6c44d46b4f82877fe1e",
"assets/images/btn_dlonAppStore.png": "f8c2d6b2ecf17f2ed9307d8338bc88dd",
"assets/images/flutter_4_layer.png": "819a00d7172b9dbfe753dd0e58b6543d",
"assets/images/flutter_3_bg.jpeg": "4eb412a5e5b66476b4b0ee84b51ce232",
"assets/images/img_official_add2app.png": "d3e268fdf367ca612f65e54c73fa00e4",
"assets/images/mr_home.png": "2fd5fa5f92d63020781e18b5f324329b",
"assets/images/flutter_2_layer.png": "1ec284e84780f79b63ddc4cea02cc717",
"assets/images/flutter_phone.png": "58e971455388b5c476887bf687a71d8a",
"assets/images/ic_flutter_taipei_480.png": "6570715272beec8c04059ae313cda802",
"assets/images/flutter_2_bg.jpeg": "05ce416b9516bbecb0b3fa90c593fc5e",
"assets/images/mr_point.png": "a4676094e8c08f04056e07fc72cc272f",
"assets/images/flutter_3_layer2.png": "dcecc562f08c8e185fa50f23dec1c5e6",
"assets/images/img_apple.png": "96baf591c0119a4beb3d3820720925ab",
"assets/images/flutter_1_layer.png": "9063147efb1e199ff5c150d2e6300aa7",
"assets/images/ic_rebecca.jpeg": "026c8f9ebb23ef678b5a81df5e044ecd",
"assets/images/mr_treemall.png": "bdce24dc35833dcf9034da41346f35ef",
"assets/images/ic_android.png": "a90e221c7e00813cef1f658d8dd02e9f",
"assets/images/flutter_1_layer2.png": "ddbf15fa920dae7a5a686ff7d10d4841",
"assets/images/mr_missin.png": "d601168cc66e965728a8f145c320f198",
"assets/images/flutter_4_bg.jpeg": "acbecb9abe325a9564a8ab511343cda9",
"assets/images/mr_coupon.png": "f67088e4e4bd6e5c14dec0cb11405d3c",
"assets/images/ic_flutter.png": "ff2271b3f4e09d2d67097b87d315a645",
"assets/images/ic_play_mark.png": "b753abc17311b48ddb6e96ed7c291cb1",
"assets/images/flutter_4_layer2.png": "bc967acf07078968e2cb2c06cbd8d1a1",
"assets/AssetManifest.json": "1455b24ee44c695353374cbda5335f32",
"assets/NOTICES": "b87e7ceb9de555cb3775cbfd1db2618c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
