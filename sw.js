// Service Worker mínimo - Solo para permitir instalación PWA
// NO cachea nada, solo cumple requisitos técnicos

self.addEventListener('install', (event) => {
    console.log('Service Worker instalado');
    // Saltarse la espera y activar inmediatamente
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activado');
    // Tomar control de todas las páginas inmediatamente
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // NO hacer nada - dejar que el navegador maneje todo normalmente
    // Esto evita cualquier problema de caché
    return;
});
