// sw.js — ToolBox Online Service Worker
// Strategia: Cache-First con fallback Network
// Per aggiornare la cache incrementare CACHE_NAME (es: toolbox-v3)

const CACHE_NAME = 'toolbox-v4';

const PRECACHE_URLS = [
  // Assets statici
  '/style.css',
  '/favicon.svg',
  '/icona.svg',
  '/og-image.svg',
  '/manifest.json',

  // Pagine HTML
  '/',
  '/index.html',
  '/404.html',
  '/555-timer.html',
  '/area-perimeter.html',
  '/ascii-table.html',
  '/ballistic.html',
  '/base-converter.html',
  '/blog.html',
  '/blog-555-timer-guida.html',
  '/blog-come-leggere-resistori.html',
  '/blog-filtri-rc.html',
  '/blog-legge-di-ohm.html',
  '/blog-partitore-tensione.html',
  '/blog-qr-code-guida.html',
  '/blog-resistore-led.html',
  '/chi-siamo.html',
  '/color-converter.html',
  '/compound-interest.html',
  '/db-calculator.html',
  '/filters.html',
  '/frequency-calculator.html',
  '/hash-generator.html',
  '/inflation-calculator.html',
  '/iva-calculator.html',
  '/led-resistor.html',
  '/loan-calculator.html',
  '/lorem-generator.html',
  '/motion.html',
  '/ohm-calculator.html',
  '/password-generator.html',
  '/percentage-calculator.html',
  '/power-dissipation.html',
  '/privacy.html',
  '/pythagoras.html',
  '/qr-generator.html',
  '/rc-calculator.html',
  '/reactance.html',
  '/resistor-colors.html',
  '/series-parallel.html',
  '/text-encoder.html',
  '/unit-converter.html',
  '/voltage-divider.html',
  '/volume-surface.html',
  '/word-counter.html',

  // Immagini
  '/img-555-pinout.png',
  '/img-tlc555-chip.png'
];

// INSTALL: precache tutte le risorse
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ACTIVATE: elimina cache precedenti e prendi controllo immediato
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

// FETCH: Cache-First, fallback Network
// Le richieste cross-origin (AdSense, Analytics, Google Fonts) vengono ignorate
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request)
          .then(networkResponse => {
            if (
              networkResponse &&
              networkResponse.status === 200 &&
              networkResponse.type === 'basic'
            ) {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseToCache));
            }
            return networkResponse;
          });
      })
  );
});
