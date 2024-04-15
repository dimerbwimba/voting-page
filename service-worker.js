// service-worker.js

self.addEventListener('push', function(event) {
    if (!(self.Notification && self.Notification.permission === 'granted')) {
      return;
    }
  
    var data = {};
    if (event.data) {
      data = event.data.json();
    }
  
    var title = data.title || 'Default Title';
    var message = data.message || 'Default Message';
  
    event.waitUntil(
      self.registration.showNotification(title, {
        body: message,
      })
    );
  });
  