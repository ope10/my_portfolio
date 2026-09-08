(function () {
  const fallbackComponents = {
    navbar: `<header class="sticky top-0 z-50 backdrop-blur-md bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
  <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
    <a href="#" class="brand-mark"><span>OF</span> Opeyemi Falana</a>
    <nav class="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
      <a href="#projects" class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Projects</a>
      <a href="#skills" class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Skills</a>
      <a href="#about" class="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">About</a>
      <button id="themeToggle" class="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors" aria-label="Toggle Theme">
        <span id="themeIcon"></span>
      </button>
    </nav>
  </div>
</header>`,
    footer: `<footer class="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
  <p><span id="year"></span> Opeyemi Falana <span class="footer-dot">•</span> Built with care.</p>
</footer>`
  };

  const loadComponent = async (selector, path) => {
    const container = document.querySelector(selector);

    if (!container) {
      return;
    }

    try {
      const response = await fetch(path);

      if (!response.ok) {
        throw new Error(`Unable to load ${path}`);
      }

      container.innerHTML = await response.text();
    } catch (error) {
      const fallbackKey = selector.replace('#', '');
      container.innerHTML = fallbackComponents[fallbackKey];
      console.warn(`${path} could not be loaded. Using the inline fallback.`, error);
    }
  };

  const initializePage = async () => {
    try {
      await Promise.all([
        loadComponent('#navbar', './components/navbar.html'),
        loadComponent('#footer', './components/footer.html')
      ]);

      const yearEl = document.getElementById('year');
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }

      document.dispatchEvent(new CustomEvent('portfolio:components-loaded'));
    } catch (error) {
      console.error('Unable to initialize portfolio components.', error);
    }
  };

  initializePage();
})();
