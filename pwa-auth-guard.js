// pwa-auth-guard.js
(function () {
  // Сбрасываем все Service Worker кэши
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      registrations.forEach(function(reg) { reg.unregister(); });
    });
    caches.keys().then(function(keys) {
      keys.forEach(function(key) { caches.delete(key); });
    });
  }

  // Определяем PWA или браузер
  var isPWA =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  if (!isPWA) return; // Браузер — ничего не делаем

  // PWA — проверяем данные пользователя
  if (!localStorage.getItem('sf_user')) {
    window.location.replace('login.html');
  }
})();
