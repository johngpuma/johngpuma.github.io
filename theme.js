// Light/dark toggle. The initial theme is set inline in <head> before first
// paint (no flash); this wires the button and remembers the choice.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!btn) return;
  function apply(t) {
    root.setAttribute('data-theme', t);
    btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#111418' : '#faf9f6');
  }
  apply(root.getAttribute('data-theme') || 'light');
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
