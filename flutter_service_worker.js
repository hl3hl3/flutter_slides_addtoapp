'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3517356bf5e5566846080bb5e625fd30",
"index.html": "46be5459c7a1448d4ba0c8de6917fa61",
"/": "46be5459c7a1448d4ba0c8de6917fa61",
"main.dart.js": "8962f45bbe129adba8caa4b24b18ef4b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1fed1105249c3b90ecb5547e842ae0af",
".git/config": "d5452beb9fddc6cec14c4905b19364bd",
".git/objects/68/87675b3288c57f96ff426d7dba91a84b2f52ff": "6261de44fe1ed51c8300e6493a619386",
".git/objects/3b/ed5b27fe0ec618d3a908c3973a77a129fa9588": "84e6c3b989719eeeb848fd8ca8e2af96",
".git/objects/03/da6444fcd3fe6d687e083661757728dcc76fff": "198659b8ffe210796048e3addee5712e",
".git/objects/03/c64bd1b3e0818daf5f33253e0e86869d501ee0": "7b9ef1c49cbc3fd4ab8dd270f337e288",
".git/objects/9b/af1f4c4865fb162639e2051b9932987714cea4": "ee3ae1594ce9d03bb0f92ae50d35a876",
".git/objects/6a/c480bb9c54c18acd0ccbe462785c4612e30155": "608ad988ee10dde389b61932d526d959",
".git/objects/35/2893260ab76e55c3c06fd24581cbb9d1e22ae8": "9311874add8ad79e5132ae74aa8d421c",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/93/f24c94d94fadd91831cd765aaf293d8e71dc55": "2f442ccbdf6935b99d2d77f033373236",
".git/objects/0e/961b1a4883191f0910676168f8d929da2fb741": "bc1fae71f49e11fd04e0362f85b29b33",
".git/objects/34/8b160136933fff81a5f6156e6abe944b1fb521": "5dfa961bde6786f93e8d800d1f18408a",
".git/objects/05/283f63331e8da364c4de7d3b7c94a19422e2a1": "44f0d0ce538c95b5bb13f7af9c2e4ebd",
".git/objects/a4/40d0cfff31894ef02f1c9577aa2e365510ee62": "9dafcdc87e70f2867d70e0a3eb729c29",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/abb8ce1e95c23f410536f129fabd1ebb5dac42": "23fc100a85cb465a288f733e44a78785",
".git/objects/c9/ee59ee17ff760ece01e87d8ee1aa6d2af0cafa": "649fc50afef8d62dfbc27c7824726290",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fb/e570a4cae9a58f31119873aa2b94ccc5db47c7": "32d45ed747c1198b157a8d43b0866b6b",
".git/objects/4e/15bc9ffdbdf84a4d6a93b3e952b47c832b350c": "a1995dfe57342e2e2a6da129f0aea1bc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/636f2b67ef494a977c22b2379ebb20e0e4ac92": "4e5367169e47bb3fcecce608d33f2474",
".git/objects/1f/e28900be90c18e6a87448a7dd1d603c5b7bf68": "a6d892c6bb4152ff47c5228353403045",
".git/objects/80/3eda6cb42df9b778bed8f97a8b7aa31d7d997a": "081aefe52d3def5103523545a5029e53",
".git/objects/80/65d601374eda44bedc138888058c9f81375773": "3986fc266a14e2cc9c4a913c9712546a",
".git/objects/8f/0ba9898b807179ed2cb70fd7ed11126b1b08a2": "9fbfead085cc713e22f43e1c4dedf5fd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/0ea48741f0d028a422a3f4043e5865f40e14e2": "fe3cf8b349b2f83bdc118c92f54ad5bc",
".git/objects/72/5a38f29d302d5efd61ffef35c85bd8deac4edb": "bd4f7178816358a71f836c2b8bdfb7c5",
".git/objects/72/32382701dae210edbc36e39736449a87d2cfdb": "95ddbc5c8cb25eed495b6aa7909c7755",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/8e8b576203ff193f5560e2d517345527d6981c": "d4b27a5c93e8e8f75a67456befb2e3b9",
".git/objects/38/a002d3ab1ffcc650db6c5a1c8b1f3f2b376443": "1354e46f2f70366e9b0698f45a68daab",
".git/objects/9a/c3c7e6ff9677bcaed1edc919eb66f7d470303b": "d7a93a8d47540168eafdbcdbbaf3fb18",
".git/objects/62/5314c40244b36d0183c0135af909aca17ba2eb": "6896ae0547842d8211c29303b0dec9f3",
".git/objects/53/01839cc462529c635150e7f6dff2b25e225179": "7c421d6334d88319f3f34c78b9ba6106",
".git/objects/5b/3eeddf205f4ff4891435429dd49e938564da5c": "3274f6ca219ef70ef76df511a5ea1af2",
".git/objects/08/f90eb4c2fb0edba54941f97b531ef278361c1d": "ea5ecbeb5a263446fe8e91b27b0332be",
".git/objects/99/d37eef6413b7cd0cb3b3077dfc218ae7ec095e": "bfe2d0fe9df0a73ea90fc37457e6191e",
".git/objects/99/f5ad90e57694c64bc9ec03f0a726230a6f1b80": "9b33d0c238a84d1f461bbba5aa474314",
".git/objects/63/05ffd7e9bd44aaa8fa07a7158134e696b1d259": "80c50e03f7c84ec8833b9ca4c5ee3185",
".git/objects/90/cd69901e6d1b163246b968036f72c4a7c7e10a": "21a132127fa945db6a9c13cb8a519848",
".git/objects/b1/7073bd55cf7318288e8954859ebea36d19fb1e": "75a1200c84c518f7b62f28652a1ab35b",
".git/objects/a9/2d30cd423cf1f6164836b225e39deeab30343c": "86acbf105d50d3f0661bf4e2867b8b0b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/b4f91fc81d37e0300b7a87f07943041ab5f92b": "aba687d85aa6679070046238b330e5e2",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/5f790c59fcb1e901dddd6431f4ebd2a43d9969": "b2e639049662cf4b04d84f96582363e1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/6ff545a246caa64074ba809bbc86fcb8589071": "b2fdd5c59953cf2b34eb306ea074c8f7",
".git/objects/cd/fb249b158bd33654298bfcde8d63b4f4792689": "8b404f61b75381cca037c67b990fc039",
".git/objects/cc/a7c3085f4b12682515e043cf3142b8954c3d6b": "2a2f1e16c71e99c372ab79e5676a873c",
".git/objects/f9/26707601d0353aa3cf80ec43744ef3efa5ab5d": "4eea41a482d69c9a311801f8f6e8dd20",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/b23c7c9da77c1a416643f9ae47b3bd6ab4bdb8": "8de920f5ecebccd7f1a1c7506e3d393c",
".git/objects/1b/f70a072477f8eb9b3b83a520da3f819e3b8174": "c0219546607f0b8d0d3810c2a1974bb1",
".git/objects/1b/25d6c323b774f95e2dd16866f1bd63c3d6c822": "824757db0d09555c960e1fdfd2d8d087",
".git/objects/1c/1d3549db7e9a3bf5b15bf2c83aa18dd687a638": "6bda8c3087829c15634f5e12a8fda2e9",
".git/objects/7f/d6e5ed235f1ba3b7d487daef0eba615a389ba9": "dcbbb170cde119949df9e7c97d84eb18",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/remotes/hl3hl3/master": "366748068735eeebd54634194d6f954e",
".git/refs/remotes/hl3hl3/master": "f50599c573b687980e8c31c20005dd3b",
".git/FETCH_HEAD": "9adc6cd5b4607d74745bf475e192e1f9",
".git/sourcetreeconfig": "b1d8975c07bdb81b888294a07160b914",
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
