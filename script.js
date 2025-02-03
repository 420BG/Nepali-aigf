self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('nepali-ai-gf').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/model.glb',
      '/textures/character_textures.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
