(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var icon = btn.querySelector('i');

  function apply(theme) {
    root.setAttribute('data-bs-theme', theme);
    icon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon';
  }

  apply(root.getAttribute('data-bs-theme') || 'light');

  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  document.querySelectorAll('#nav .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      var nav = document.getElementById('nav');
      if (nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  });
})();
