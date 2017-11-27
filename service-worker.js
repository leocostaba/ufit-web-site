"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","01c39d9d4e05109c32cdddac2cc74f02"],["static/css/main.74a7f7fa.css","542231690dc33e049a73bac4264cb88f"],["static/js/main.45eeebd2.js","5c29a2b471d9549008453563e9125ee6"],["static/media/1.3d8f3ceb.jpg","3d8f3ceb8da68b253708a1a6edae57a1"],["static/media/2.32b16fbb.jpg","32b16fbb7335ebcb0d6404a0ae8075f3"],["static/media/apple-store.699459d2.svg","699459d2fe8b648e9dd8475414a2525d"],["static/media/facebook.27d15bc0.svg","27d15bc0c9f96a6bde88555629a8ff22"],["static/media/form.34751de0.svg","34751de09d35de362016b19e95eed695"],["static/media/hand.2e35fda9.png","2e35fda9c92ab8b331de247102fa527b"],["static/media/hard.1c733ac4.svg","1c733ac460dd43cfb2822433fdb85727"],["static/media/intro-bg.ac096ee9.jpg","ac096ee958b16cb95c51b9110dfb9cd4"],["static/media/list.b39f919d.svg","b39f919d7794f4888e499bca11fb7e31"],["static/media/logo.968decb4.svg","968decb4421f30f97e3b98990277d099"],["static/media/logobranca.527f3a33.svg","527f3a33067c09c6aede423829d9fcb9"],["static/media/mail.17e75088.svg","17e750883d534efce02877d5524a0d1e"],["static/media/meu.1480524f.svg","1480524ffdba52b53c2d16ae3f634c80"],["static/media/motivation.71690d6c.svg","71690d6ce2609338e9e9a10e824050bd"],["static/media/play-store.b9597078.svg","b959707805c96ef0838b15869abf5cf8"],["static/media/share.3c7fc7cc.svg","3c7fc7cc190cb652424e36b60815b5f0"],["static/media/site.e98d3557.svg","e98d3557f59229e04892c0e53eff4c5b"],["static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["static/media/stakeholders-bg.0b152f16.jpg","0b152f165bc9a0c22d9b0a1c15cdcd13"],["static/media/travel.6a51aba0.svg","6a51aba083b39b691339dea1179e8d7b"],["static/media/waitlist-bg.7928ec0d.jpg","7928ec0d7908edf2d3b72c520c2bce21"],["static/media/web-app.ac25c946.svg","ac25c94646b05e483ebd222bba291b14"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});