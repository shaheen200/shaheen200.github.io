'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fb8cb333595b3e7abfc17927412f9de8",
"assets/AssetManifest.bin.json": "54761454c3f48c22dd5e06ec0571669b",
"assets/env/ar.env": "71d2bb5b7fbb70e71fefef1081a9d503",
"assets/env/en.env": "63966cecbac1c3ddd44ca6002144f568",
"assets/font/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/font/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"assets/FontManifest.json": "668fd402ebe90b484c2c105cc3d91079",
"assets/fonts/MaterialIcons-Regular.otf": "b94ca20c23f259be4897e7e417b1cfa7",
"assets/image/biotrack/1.png": "64ac33ed92e4f561bd16259b3dba2f90",
"assets/image/biotrack/2.png": "87997288b7d53ab85dc78402ea0ff351",
"assets/image/biotrack/3.png": "2ce478e58356fb28cb69196c993d7514",
"assets/image/biotrack/4.png": "970b34794ea2307e443e66033052e9cf",
"assets/image/biotrack/main.jpg": "c6e23363ef19cd85fdfcad7f17cfed6b",
"assets/image/click/1.png": "62dd86943d6c7827aa160a0d7b65c599",
"assets/image/click/2.png": "db69bf273c08b9a94d0b11c403ef0690",
"assets/image/click/3.png": "307bfaa4b00659990fdc273b60f00289",
"assets/image/click/4.png": "f5399f6c5e0405ef386f82f2989b8e33",
"assets/image/click/5.png": "99e6b0a4052e4a2c5520a2899bce0dc5",
"assets/image/click/6.png": "eafeaee8be9a45459844f08290d22690",
"assets/image/click/7.png": "f36a7b064096aabeff8a9e9b1586362d",
"assets/image/click/main.jpg": "ae3bf1b61c6e41867a7eab00d46585d8",
"assets/image/Hr%2520Shields/1.png": "146efbd3590e8efe8a44b39599d16af9",
"assets/image/Hr%2520Shields/2.png": "e873a57897cd6d043499c640a079deba",
"assets/image/Hr%2520Shields/3.png": "9974c4f68f3c8a19dbc831e0ded09a35",
"assets/image/Hr%2520Shields/4.png": "05277f245f1778c466e537904b9e0fac",
"assets/image/Hr%2520Shields/5.png": "4e1bf21daa20d0a2204c9ef750f138ab",
"assets/image/Hr%2520Shields/6.png": "92d4f86f0062883b74be76614055cc9d",
"assets/image/Hr%2520Shields/7.png": "9121093d81c621517de7debdcfa09dd2",
"assets/image/Hr%2520Shields/8.png": "397067deeac8c7ce7d65006ca11d1eb5",
"assets/image/Hr%2520Shields/main.jpg": "674e3d6e3e4b7581f373fcc29fb5377a",
"assets/image/man.jpg": "f9448fd75bd2ae3bab50e7d5bbf294fb",
"assets/image/massari/1.png": "28824e370e4c28870fdf8808a04c1dd4",
"assets/image/massari/2.png": "099c83a0d775be377f8d92f62561ceee",
"assets/image/massari/3.png": "a21687034bc5dc2b7eb0c80d04c156de",
"assets/image/massari/4.png": "5a2e3af0cb4db212729ea859738429c4",
"assets/image/massari/5.png": "4ad542c99a23de016ae51f1a52f7ab18",
"assets/image/massari/6.png": "cc0fe005e7a868d39faa223ddbad9507",
"assets/image/massari/7.png": "4896bb4f1ea51e747f912b9828405de3",
"assets/image/massari/main.jpg": "9b02b92d0f37e7d7209d30113e794c1c",
"assets/image/mysmart/1.png": "97920c6cdc272a8c49b3ee156e26c10a",
"assets/image/mysmart/2.png": "5dd215abe364102cc761883926c9216e",
"assets/image/mysmart/3.png": "199f0e1dbadd65d4d2511f4b66b8fc31",
"assets/image/mysmart/4.png": "06c1b7c58a79359df1c4cfa022ee65d7",
"assets/image/mysmart/main.png": "252b02f9f15af2971d1abc2a593ffeec",
"assets/image/plant/1.png": "535a0c0ef666903096021fd0f65c7eb4",
"assets/image/plant/2.png": "2504825cbde5e9eb4af59821f91707dc",
"assets/image/plant/3.png": "aa1cd81a6baa4a0c5fb34db3448e943d",
"assets/image/plant/4.png": "55013791ba7925bf6659392063f2e453",
"assets/image/plant/5.png": "1d5086c0225093694a5c77518339e8ee",
"assets/image/plant/6.png": "fe2ab053ba0bb891b6c43361318cc699",
"assets/image/plant/7.png": "72415cdd4c1d10934357f871f85c6b31",
"assets/image/plant/8.png": "a74b5966dd582db81e657b577bb0ba29",
"assets/image/plant/main.jpg": "f6527f1b9717c7c8ba82b0a4167b4b26",
"assets/image/razan/1.png": "adcd290aba068e6a1a3dab8012728410",
"assets/image/razan/2.png": "cf3e7d50202588735113ff5e4099adc5",
"assets/image/razan/3.png": "355483431a4f163b02176612ea12dbf0",
"assets/image/razan/4.png": "b3e9932ffb1c1855a2147ecc9d16743d",
"assets/image/razan/5.png": "d4cfd71edb20d9b6bc1b50ca67a738be",
"assets/image/razan/6.png": "27b0ca2052480acee9a53e10e9f6d520",
"assets/image/razan/7.png": "afafbafa2412251f8d052da0305cc956",
"assets/image/razan/8.png": "e8a90dc98f7824150c972a902602a142",
"assets/image/razan/logo.png": "297620232ff891463dbf653c761252fc",
"assets/image/razan/main.jpg": "8ff359f6e006a0940649dbcf45bfb3cc",
"assets/NOTICES": "a34840d8f987f8eae86160ae3b4118c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "5191d958d8171d760c67cf0a27f81444",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "bb1ece8b24fc98a791a4eee20ddc1061",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "22ace60aa479e0575309d2c3a5d2d0ee",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "945ecbd5ac25ff75e9b1ccddb96cec50",
"icons/Icon-192.png": "a62ba1b35ceb83e540bc828eaae9212d",
"icons/Icon-512.png": "a844a4d28d4dad64825e8ec1b5f2a959",
"icons/Icon-maskable-192.png": "a62ba1b35ceb83e540bc828eaae9212d",
"icons/Icon-maskable-512.png": "a844a4d28d4dad64825e8ec1b5f2a959",
"index.html": "a3895f1c9c54289755ded840f6a44b8c",
"/": "a3895f1c9c54289755ded840f6a44b8c",
"main.dart.js": "b150860978aba3e41bdf1a344c293eb0",
"manifest.json": "302db64d1ce5eab90152ad3b77902223",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
