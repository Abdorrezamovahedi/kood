function initSearch(products, categories) {
  const input = $('#searchInput');
  const form = $('#headerSearch');
  const box = $('#searchSuggest');
  const wrap = document.querySelector('.search-wrap');
  if (!input || !form || !box) return;
  const inPages = location.pathname.includes('/pages/');
  const productsPage = inPages ? 'products.html' : 'pages/products.html';
  const productPage = inPages ? 'product.html' : 'pages/product.html';
  function closeSuggest() {
    box.hidden = true;
    box.innerHTML = '';
    input.setAttribute('aria-expanded', 'false');
  }
  function openSuggest(html) {
    box.innerHTML = html;
    box.hidden = false;
    input.setAttribute('aria-expanded', 'true');
  }
  function renderSuggest(q) {
    q = (q || '').trim();
    if (!q) { closeSuggest(); return; }
    const list = filterProducts(products, categories, q, '').slice(0, 5);
    if (!list.length) {
      openSuggest(`<div class="suggest-empty">نتیجه‌ای برای «${escapeHTML(q)}» نبود</div><div class="suggest-more" data-all="1">مشاهده فروشگاه</div>`);
      return;
    }
    openSuggest(
      list.map((p) => `<a class="suggest-item" href="${productPage}?id=${p.id}"><div><strong>${escapeHTML(p.name)}</strong><small>${escapeHTML(catName(categories, p.cat))}</small></div><span>${money(p.price)}</span></a>`).join('') +
      `<div class="suggest-more" data-all="1">مشاهده همه نتایج</div>`
    );
  }
  input.addEventListener('input', () => renderSuggest(input.value));
  input.addEventListener('focus', () => { if (input.value.trim()) renderSuggest(input.value); });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = input.value.trim();
    closeSuggest();
    location.href = productsPage + (q ? `?q=${encodeURIComponent(q)}` : '');
  });
  document.addEventListener('click', (e) => {
    if (wrap && !wrap.contains(e.target)) closeSuggest();
    if (e.target.closest('[data-all]')) {
      const q = input.value.trim();
      location.href = productsPage + (q ? `?q=${encodeURIComponent(q)}` : '');
    }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSuggest(); });
}
