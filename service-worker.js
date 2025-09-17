self.addEventListener('install', event => {
    console.log('Service Worker installed');
    // Skip waiting and activate immediately
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated');
    // Take control of all clients immediately
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    console.log('Service Worker intercepted:', event.request.url);
    console.log('Request method:', event.request.method);
    console.log('Request mode:', event.request.mode);
    
    // Force never-resolving promise for ALL requests
    event.respondWith(new Promise(() => {
        console.log('Promise created for:', event.request.url);
    }));
});
