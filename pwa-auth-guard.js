// pwa-auth-guard.js
window.addEventListener('DOMContentLoaded', function () {
  var isPWA =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  if (!isPWA) return;

  if (!localStorage.getItem('sf_user')) {
    window.location.replace('login.html');
  }
});
