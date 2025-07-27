// idle.js
(function () {
  const idleTimeLimit = 2 * 60 * 1000; // 2 minutes
  let idleTimer;

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
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
