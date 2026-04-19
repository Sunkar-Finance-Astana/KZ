// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCGUhy57Z1CYsS6SEOWqkGkau4VWU8IyY8",
  authDomain: "sunkar-finance.firebaseapp.com",
  projectId: "sunkar-finance",
  storageBucket: "sunkar-finance.firebasestorage.app",
  messagingSenderId: "540222926047",
  appId: "1:540222926047:web:ac601ace539890ee880d6a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification.title || 'Sunkar Finance';
  const options = {
    body: payload.notification.body || '',
    icon: '/KZ/img/icon-192.png',
    badge: '/KZ/img/icon-192.png',
    data: payload.data
  };
  self.registration.showNotification(title, options);
});
