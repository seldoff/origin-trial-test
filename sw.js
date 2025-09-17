// Service Worker - sw.js
const CACHE_NAME = 'demo-cache-v1';

// Install event
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    self.skipWaiting(); // Activate immediately
});

// Activate event
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    event.waitUntil(self.clients.claim()); // Take control immediately
});

// Fetch event - intercept all requests
self.addEventListener('fetch', event => {
    event.respondWith(new Promise())
});
