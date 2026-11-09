// menu.js
(function () {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        toggle.classList.toggle('is-active', isOpen);
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('is-open');
            toggle.classList.remove('is-active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('is-open');
            toggle.classList.remove('is-active');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
})();