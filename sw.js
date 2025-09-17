addEventListener('install', event => {
    console.log('Service Worker installing...');
});

addEventListener('activate', event => {
    console.log('Service Worker activating...');
});

addEventListener('fetch', event => {
    console.log("fetch request")
    event.respondWith(new Promise())
});
