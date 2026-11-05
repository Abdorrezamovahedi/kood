const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = (n) => new Intl.NumberFormat('fa-IR').format(n) + ' تومان';
const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function toast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.remove('show');
  void t.offsetWidth;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2800);
}
function setMenuOpen(open) {
  const nav = $('#mainNav');
  const btn = $('#menuToggle');
  if (!nav || !btn) return;
  nav.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
}
function initMenu() {
  const btn = $('#menuToggle');
  const nav = $('#mainNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a') && window.matchMedia('(max-width:860px)').matches) setMenuOpen(false);
  });
}
function initYear() {
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
}
async function loadJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error('load failed: ' + path);
  return res.json();
}
function dataPath(file) {
  const base = location.pathname.includes('/pages/') ? '../js/data/' : 'js/data/';
  return base + file;
}
document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initYear();
});
