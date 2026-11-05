function catName(categories, id) {
  return categories.find((c) => c.id === id)?.name || 'محصولات';
}
function productCard(p, categories, base = '') {
  const detailHref = `${base}pages/product.html?id=${p.id}`;
  const img = p.image
    ? `<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.name)}" width="280" height="150" loading="lazy">`
    : `<div class="ph">${p.emoji || '🌱'}<br>محل تصویر محصول</div>`;
  return `<article class="product">
    <div class="product-image"><span class="pill">${escapeHTML(p.tag || 'محصول')}</span>${img}</div>
    <div class="product-info">
      <span class="product-category">${escapeHTML(catName(categories, p.cat))}</span>
      <h3>${escapeHTML(p.name)}</h3>
      <p class="product-desc">${escapeHTML(p.desc)}</p>
      <div class="specs"><span>${escapeHTML(p.weight)}</span><span>${escapeHTML((p.suitable || '').split('،')[0] || 'مشخصات')}</span></div>
      <div class="price">${money(p.price)} <small>قیمت اعلامی</small></div>
      <div class="product-actions">
        <a class="btn soft small" href="${detailHref}">مشخصات کامل</a>
        <button class="btn small" data-add="${p.id}">افزودن</button>
      </div>
    </div>
  </article>`;
}
function renderCategories(categories, mount, base = '') {
  if (!mount) return;
  mount.innerHTML = categories.map((c) => `
    <a class="category" href="${base}pages/products.html?cat=${encodeURIComponent(c.id)}">
      <div class="cat-art">${c.image ? `<img src="${escapeHTML(c.image)}" alt="${escapeHTML(c.name)}">` : c.emoji}</div>
      <div class="cat-info"><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.desc)}</p></div>
    </a>`).join('');
}
function filterProducts(products, categories, q, cat) {
  q = (q || '').trim().toLocaleLowerCase('fa');
  return products.filter((p) => {
    const hay = (p.name + ' ' + p.desc + ' ' + catName(categories, p.cat) + ' ' + (p.suitable || '')).toLocaleLowerCase('fa');
    return (!q || hay.includes(q)) && (!cat || p.cat === cat);
  });
}
function renderProductGrid(products, categories, mount, base = '') {
  if (!mount) return;
  mount.innerHTML = products.length
    ? products.map((p) => productCard(p, categories, base)).join('')
    : '<div class="empty">محصولی با این مشخصات پیدا نشد.</div>';
}
