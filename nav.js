const toggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (toggle && navMenu) {
  toggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? '✕' : '☰';
  });
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navMenu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
