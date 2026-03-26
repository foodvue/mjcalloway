/* Scroll-triggered assessment CTA bar — include on article pages */
(function() {
  var bar = document.createElement('div');
  bar.className = 'scroll-cta-bar';
  bar.innerHTML = '<p>Two free assessments. Find your pattern.</p><a href="/assessments" class="btn-gold">Take an Assessment</a><button class="scroll-cta-close" aria-label="Close">&times;</button>';
  document.body.appendChild(bar);

  var shown = false;
  var dismissed = false;

  function checkScroll() {
    if (dismissed) return;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollPct = (scrollTop / docHeight) * 100;
    if (scrollPct >= 60 && !shown) {
      bar.classList.add('visible');
      shown = true;
    }
  }

  bar.querySelector('.scroll-cta-close').addEventListener('click', function() {
    bar.classList.remove('visible');
    dismissed = true;
  });

  window.addEventListener('scroll', checkScroll, { passive: true });
})();
