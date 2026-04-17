// pwa-auth-guard.js
// Добавь в index.html первой строкой внутри <head>:
// <script src="pwa-auth-guard.js"></script>

(function () {
  var isPWA =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  if (!isPWA) return; // Браузер — ничего не делаем

  // PWA — проверяем данные
  if (!localStorage.getItem('sf_user')) {
    window.location.replace('login.html');
  }
})();
