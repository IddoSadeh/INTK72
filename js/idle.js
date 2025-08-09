(function () {
  const idleTimeLimit = 2 * 60 * 1000; // 2 minutes
  let idleTimer;

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      sessionStorage.removeItem('intk72UserData');
      if (!location.pathname.endsWith("index.html")) {
        location.href = "index.html";
      }
    }, idleTimeLimit);
  }

  ['mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event =>
    window.addEventListener(event, resetIdleTimer)
  );

  resetIdleTimer();
})();

(function () {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap';
  document.head.appendChild(link);
})();