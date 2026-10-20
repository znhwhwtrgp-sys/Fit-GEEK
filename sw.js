const CACHE='fit-geek-luxury-v8';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 e.respondWith((async()=>{const isPage=r.mode==='navigate'||r.destination==='document';try{const res=await fetch(r,{cache:'no-cache'});if(res&&res.ok){const c=await caches.open(CACHE);c.put(r,res.clone()).catch(()=>{});return res}}catch(_){}const cached=await caches.match(r);if(cached)return cached;if(isPage)return (await caches.match('./index.html'))||Response.error();return Response.error()})())});
