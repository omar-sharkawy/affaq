(function () {
  var html = document.documentElement;
  var toggle = document.getElementById('langToggle');
  var elements = document.querySelectorAll('[data-ar][data-en]');

  function applyLang(lang) {
    html.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    html.setAttribute('data-lang', lang);
    elements.forEach(function (el) {
      el.textContent = el.getAttribute('data-' + lang);
    });
    try { localStorage.setItem('el-mordjene-lang', lang); } catch (e) {}
  }

  toggle.addEventListener('click', function () {
    var current = html.getAttribute('data-lang') || 'ar';
    applyLang(current === 'ar' ? 'en' : 'ar');
  });

  var saved = null;
  try { saved = localStorage.getItem('el-mordjene-lang'); } catch (e) {}
  if (saved) applyLang(saved);
})();
