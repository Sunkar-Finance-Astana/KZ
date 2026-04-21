// sw-push.js — Service Worker для Web Push уведомлений

self.addEventListener('push', function(event) {
  var data = {};
  try { data = event.data.json(); } catch(e) { data = { title: 'Sunkar Finance', body: event.data ? event.data.text() : '' }; }

  var title = data.title || 'Sunkar Finance';
  var options = {
    body: data.body || '',
    icon: '/KZ/img/icon-192.png',
    badge: '/KZ/img/icon-192.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || 'https://sunkar-finance-astana.github.io/KZ/index.html' }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  var url = event.notification.data && event.notification.data.url
    ? event.notification.data.url
    : 'https://sunkar-finance-astana.github.io/KZ/index.html';
  event.waitUntil(clients.openWindow(url));
});
