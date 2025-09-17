self.addEventListener('install', event => {
    console.log('Service Worker installing...');
});

self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
});

// Fetch event - intercept all requests
self.addEventListener('fetch', event => {
    console.log("fetch request")
    event.respondWith(new Promise())
});
