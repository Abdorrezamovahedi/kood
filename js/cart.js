const CART_KEY = 'kood_cart';
function readCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    return Array.isArray(raw) ? raw.filter((i) => i && i.id && i.qty > 0) : [];
  } catch { return []; }
}
function writeCart(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {}
}
let cart = readCart();
function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
function addToCart(id, products) {
  id = Number(id);
  if (!products.some((p) => p.id === id)) return;
  const item = cart.find((i) => i.id === id);
  if (item) {
    if (item.qty >= 99) { toast('حداکثر تعداد هر محصول ۹۹ عدد است.'); return; }
    item.qty += 1;
  } else cart.push({ id, qty: 1 });
  writeCart(cart);
  renderCart(products);
  toast('به سبد اضافه شد.');
}
function renderCart(products) {
  const countEl = $('#cartCount');
  if (countEl) countEl.textContent = cartCount();
  const box = $('#cartItems');
  const summary = $('#cartSummary');
  if (!box) return;
  if (!cart.length) {
    box.innerHTML = '<div class="empty">سبد خرید خالی است</div>';
    if (summary) summary.innerHTML = '';
    return;
  }
  let total = 0;
  box.innerHTML = cart.map((i) => {
    const p = products.find((x) => x.id === i.id);
    if (!p) return '';
    total += p.price * i.qty;
    return `<div class="spec-row" style="grid-template-columns:1fr auto"><div><strong>${escapeHTML(p.name)}</strong><div class="specs" style="margin-top:6px"><button class="btn soft small" data-qty="${p.id}" data-delta="-1">−</button><span>${i.qty}</span><button class="btn soft small" data-qty="${p.id}" data-delta="1">+</button><button class="close" data-remove="${p.id}">حذف</button></div></div><strong>${money(p.price * i.qty)}</strong></div>`;
  }).join('');
  if (summary) summary.innerHTML = `<div class="spec-row" style="grid-template-columns:1fr auto"><span>جمع</span><strong>${money(total)}</strong></div>`;
}
function bindCartUI(products) {
  const open = $('#cartOpen');
  const overlay = $('#cartOverlay');
  const close = $('#cartClose');
  if (open && overlay) open.addEventListener('click', () => overlay.classList.add('show'));
  if (close && overlay) close.addEventListener('click', () => overlay.classList.remove('show'));
  if (overlay) overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('show'); });
  document.addEventListener('click', (e) => {
    const add = e.target.closest('[data-add]');
    if (add) { addToCart(add.dataset.add, products); return; }
    const qty = e.target.closest('[data-qty]');
    if (qty) {
      const item = cart.find((i) => i.id === Number(qty.dataset.qty));
      if (!item) return;
      item.qty += Number(qty.dataset.delta);
      if (item.qty < 1) cart = cart.filter((i) => i !== item);
      if (item.qty > 99) item.qty = 99;
      writeCart(cart); renderCart(products); return;
    }
    const remove = e.target.closest('[data-remove]');
    if (remove) { cart = cart.filter((i) => i.id !== Number(remove.dataset.remove)); writeCart(cart); renderCart(products); }
  });
}
