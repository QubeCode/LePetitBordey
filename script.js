const CATEGORIES = [
  { id: 'boudins',  label: 'Boudins',  icon: '🌭', desc: 'Recettes familiales, textures parfaites et épices maison.' },
  { id: 'samoussa', label: 'Samoussas', icon: '🥟', desc: 'Feuilletés croustillants, farcis avec amour.' },
  { id: 'accras',   label: 'Accras',   icon: '🍤', desc: 'Beignets croustillants, parfaits pour l\'apéritif.' },
  { id: 'sauce',    label: 'Sauces',   icon: '🫙', desc: 'Condiments, confits et épices aux saveurs créoles.' }
];

const PRODUCTS = [
  { id: 'accras-crevette', title: 'Accras Crevette', price: 3.50, desc: 'Accras maison, croustillants et savoureux', img: 'alimentation/Accras crevette v3.png', category: 'accras' },
  { id: 'accras-thon', title: 'Accras Thon', price: 3.50, desc: 'Accras au thon, recette traditionnelle', img: 'alimentation/accras thon v3.png', category: 'accras' },
  { id: 'accras', title: 'Accras', price: 3.00, desc: 'Assortiment d\'accras maison', img: 'alimentation/Accras v3.png', category: 'accras' },
  { id: 'boudin-antillais', title: 'Boudin Artisanal', price: 8.50, desc: 'Recette familiale authentique', img: 'alimentation/Bouddin antillais.png', category: 'boudins' },
  { id: 'boudin-lambi', title: 'Boudin Lambi', price: 9.00, desc: 'Variation spéciale au lambi', img: 'alimentation/Boudin lambi.png', category: 'boudins' },
  { id: 'boudin-morue', title: 'Boudin Morue', price: 9.00, desc: 'Boudin à la morue, parfumé et fin', img: 'alimentation/Boudin morue.png', category: 'boudins' },
  { id: 'boudin-noir', title: 'Boudin Noir', price: 8.00, desc: 'Boudin noir traditionnel', img: 'alimentation/Boudin noir.png', category: 'boudins' },
  { id: 'samoussa-boeuf', title: 'Samoussa Bœuf', price: 2.50, desc: 'Samoussa maison, viande sélectionnée', img: 'alimentation/samoussa boeufs.png', category: 'samoussa' },
  { id: 'samoussa-legumes', title: 'Samoussa Légumes', price: 2.00, desc: 'Option végétarienne, légumes locaux', img: 'alimentation/Samoussa Legumes.png', category: 'samoussa' },
  { id: 'samoussa-poulet', title: 'Samoussa Poulet', price: 2.50, desc: 'Samoussa poulet aux épices maison', img: 'alimentation/Samoussa poulet.png', category: 'samoussa' },
  { id: 'cayenne', title: 'Piment Cayenne', price: 3.00, desc: 'Piment en poudre — piquant contrôlé', img: 'epices/cayenne.png', category: 'sauce' },
  { id: 'cumin', title: 'Cumin', price: 2.50, desc: 'Cumin moulu, arôme profond', img: 'epices/Cumin 2.png', category: 'sauce' },
  { id: 'curry', title: 'Curry', price: 2.50, desc: 'Mélange curry parfumé', img: 'epices/Curry 2.png', category: 'sauce' },
  { id: 'gingembre', title: 'Gingembre Moulu', price: 2.80, desc: 'Gingembre moulu, saveur fraîche', img: 'epices/Gimgembre Moulu.png', category: 'sauce' },
  { id: 'masali', title: 'Masali', price: 3.00, desc: 'Mélange d\'épices créoles', img: 'epices/masali.png', category: 'sauce' },
  { id: 'paprika', title: 'Paprika', price: 2.50, desc: 'Paprika doux, belle couleur', img: 'epices/Paprika.png', category: 'sauce' },
  { id: 'colombo', title: 'Poudre à Colombo', price: 2.80, desc: 'Épice typique antillaise', img: 'epices/Poudre a colombo.png', category: 'sauce' },
  { id: 'raz-el-hanout', title: 'Raz el Hanout', price: 3.20, desc: 'Mélange raffiné du Maghreb', img: 'epices/Raz el Hanout.png', category: 'sauce' },
  { id: 'tajin', title: 'Tajin', price: 2.90, desc: 'Assaisonnement acidulé', img: 'epices/Tajin.png', category: 'sauce' },
  { id: 'tandoori', title: 'Tandoori', price: 2.90, desc: 'Épice tandoori parfumée', img: 'epices/Tandoori.png', category: 'sauce' },
  { id: 'pot-1', title: 'Confit Maison 1', price: 4.50, desc: 'Confit artisanal, recette familiale', img: 'pot/image00001.png', category: 'sauce' },
  { id: 'pot-2', title: 'Confit Maison 2', price: 4.50, desc: 'Confit artisanal, saveurs équilibrées', img: 'pot/image00002.png', category: 'sauce' },
  { id: 'pot-3', title: 'Condiment Créole 1', price: 4.00, desc: 'Condiment traditionnel', img: 'pot/image00003.png', category: 'sauce' },
  { id: 'pot-4', title: 'Condiment Créole 2', price: 4.00, desc: 'Parfait pour accompagner vos plats', img: 'pot/image00004.png', category: 'sauce' }
];
window.PRODUCTS = PRODUCTS;
window.CATEGORIES = CATEGORIES;

function formatPrice(n) { return n.toFixed(2) + '€'; }

function productCardHTML(p, index) {
  return `
    <article class="product-card reveal" style="--delay:${index * 0.07}s" data-id="${p.id}">
      <div class="product-visual">
        <img src="${p.img}" alt="${p.title}" loading="lazy"/>
        <div class="product-visual-shine"></div>
        <span class="product-badge">Artisanal</span>
      </div>
      <div class="product-body">
        <h3 class="product-title">${p.title}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="price">${formatPrice(p.price)}</span>
          <button class="add-btn" data-id="${p.id}" aria-label="Ajouter ${p.title} au panier">
            <span class="add-btn-icon">+</span> Ajouter
          </button>
        </div>
      </div>
    </article>`;
}

function renderProductCard(container, p, index) {
  const wrap = document.createElement('div');
  wrap.innerHTML = productCardHTML(p, index);
  const card = wrap.firstElementChild;
  container.appendChild(card);
  observeReveal(card);
}

function renderProducts(target, list) {
  if (!target) return;
  target.innerHTML = '';
  list.forEach((p, i) => renderProductCard(target, p, i));
}

function renderProductsByCategory(container, list) {
  if (!container) return;
  container.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const items = list.filter(p => p.category === cat.id);
    if (!items.length) return;

    const section = document.createElement('section');
    section.className = 'category-section reveal';
    section.id = 'cat-' + cat.id;
    section.dataset.category = cat.id;

    section.innerHTML = `
      <header class="category-header">
        <span class="category-icon" aria-hidden="true">${cat.icon}</span>
        <div class="category-header-text">
          <h2>${cat.label}</h2>
          <p class="muted">${cat.desc}</p>
        </div>
        <span class="category-count">${items.length} produit${items.length > 1 ? 's' : ''}</span>
      </header>
      <div class="product-row"></div>`;

    const row = section.querySelector('.product-row');
    items.forEach((p, i) => renderProductCard(row, p, i));
    container.appendChild(section);
    observeReveal(section);
  });

  initCategoryNav();
}

function filterProducts(query) {
  const q = query.trim().toLowerCase();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    (CATEGORIES.find(c => c.id === p.category)?.label || '').toLowerCase().includes(q)
  );
}

function initScrollReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  els.forEach(el => observeReveal(el));
}

function observeReveal(el) {
  if (!el || el._observed) return;
  el._observed = true;
  if (!window._revealObserver) {
    window._revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          window._revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }
  window._revealObserver.observe(el);
}

function initCategoryNav() {
  const nav = document.getElementById('category-nav');
  if (!nav) return;

  if (!nav._wired) {
    nav._wired = true;
    nav.addEventListener('click', e => {
      const link = e.target.closest('a');
      if (!link) return;
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        const offset = 120;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      nav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    });
  }

  if (nav._spy) nav._spy.disconnect();
  const sections = document.querySelectorAll('.category-section');
  if (!sections.length) return;

  nav._spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        nav.querySelectorAll('a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => nav._spy.observe(s));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form) return;

  if (new URLSearchParams(location.search).get('sent') === '1') {
    if (feedback) {
      feedback.textContent = 'Votre message a bien été envoyé. Nous vous répondrons rapidement !';
      feedback.className = 'form-feedback success';
    }
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Envoi en cours…';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        form.reset();
        if (feedback) {
          feedback.textContent = 'Message envoyé avec succès ! Nous vous répondrons sous 48h.';
          feedback.className = 'form-feedback success';
        }
      } else {
        throw new Error('Erreur serveur');
      }
    } catch {
      if (feedback) {
        feedback.textContent = 'Une erreur est survenue. Réessayez ou écrivez-nous directement à lepetitbordey@gmail.com';
        feedback.className = 'form-feedback error';
      }
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
}

function pulseCart() {
  const countEl = cartCount();
  if (countEl) {
    countEl.classList.add('pulse');
    setTimeout(() => countEl.classList.remove('pulse'), 600);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const shopSections = document.getElementById('shop-sections');
  const shopGrid = document.getElementById('shop-grid');
  const searchInput = document.getElementById('search');

  if (shopSections) renderProductsByCategory(shopSections, PRODUCTS);
  else if (shopGrid) renderProducts(shopGrid, PRODUCTS);

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const filtered = filterProducts(e.target.value);
      if (shopSections) renderProductsByCategory(shopSections, filtered);
      else if (shopGrid) renderProducts(shopGrid, filtered);
    });
  }

  initCategoryNav();
  initScrollReveal();
  initContactForm();

  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
      document.body.classList.toggle('nav-open', open);
    });
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      });
    });
  }

  window._cartEls = {
    cartToggle: document.getElementById('cart-toggle'),
    cartEl: document.getElementById('cart'),
    cartClose: document.getElementById('cart-close'),
    cartItemsEl: document.getElementById('cart-items'),
    cartCount: document.getElementById('cart-count'),
    cartTotal: document.getElementById('cart-total')
  };

  const isDark = localStorage.getItem('lpb_dark') === 'true';
  if (isDark) document.body.classList.add('dark-mode');

  document.querySelectorAll('.hero-content > *').forEach((el, i) => {
    el.classList.add('hero-animate');
    el.style.animationDelay = (0.15 + i * 0.12) + 's';
  });
});

let cart = JSON.parse(localStorage.getItem('lpb_cart') || '{}');
const cartToggle = () => window._cartEls?.cartToggle ?? null;
const cartEl = () => window._cartEls?.cartEl ?? null;
const cartClose = () => window._cartEls?.cartClose ?? null;
const cartItemsEl = () => window._cartEls?.cartItemsEl ?? null;
const cartCount = () => window._cartEls?.cartCount ?? null;
const cartTotal = () => window._cartEls?.cartTotal ?? null;

function saveCart() { localStorage.setItem('lpb_cart', JSON.stringify(cart)); renderCart(); }

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  pulseCart();
}

document.body.addEventListener('click', e => {
  if (e.target.matches('.add-btn') || e.target.closest('.add-btn')) {
    const btn = e.target.matches('.add-btn') ? e.target : e.target.closest('.add-btn');
    addToCart(btn.dataset.id);
    btn.classList.add('added');
    setTimeout(() => btn.classList.remove('added'), 800);
  }
});

function renderCart() {
  const itemsEl = cartItemsEl();
  if (!itemsEl) return;
  itemsEl.innerHTML = '';
  const ids = Object.keys(cart);
  let total = 0;
  ids.forEach(id => {
    const qty = cart[id];
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;
    total += product.price * qty;
    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `<div style="flex:1"><strong>${product.title}</strong><div class="cart-item-price">${formatPrice(product.price)} × ${qty}</div></div><div class="cart-qty-btns"><button data-id="${id}" class="qty-minus" aria-label="Diminuer">−</button><button data-id="${id}" class="qty-plus" aria-label="Augmenter">＋</button></div>`;
    itemsEl.appendChild(item);
  });
  const countEl = cartCount();
  const totalEl = cartTotal();
  if (countEl) countEl.textContent = ids.reduce((s, k) => s + cart[k], 0) || 0;
  if (totalEl) totalEl.textContent = formatPrice(total);
}

function openCart() {
  const ce = cartEl();
  const backdrop = document.getElementById('cart-backdrop');
  if (ce) { ce.classList.add('open'); ce.setAttribute('aria-hidden', 'false'); }
  if (backdrop) { backdrop.classList.add('visible'); backdrop.setAttribute('aria-hidden', 'false'); }
  document.body.classList.add('nav-open');
}

function closeCart() {
  const ce = cartEl();
  const backdrop = document.getElementById('cart-backdrop');
  if (ce) { ce.classList.remove('open'); ce.setAttribute('aria-hidden', 'true'); }
  if (backdrop) { backdrop.classList.remove('visible'); backdrop.setAttribute('aria-hidden', 'true'); }
  document.body.classList.remove('nav-open');
}

document.addEventListener('click', e => {
  const t = e.target;
  const cc = cartClose();
  const backdrop = document.getElementById('cart-backdrop');

  if (t === cartToggle() || t.closest?.('#cart-toggle')) {
    if (cartEl()?.classList.contains('open')) closeCart();
    else openCart();
  }
  if (t === cc || t === backdrop) closeCart();

  if (t.classList?.contains('qty-plus') || t.classList?.contains('qty-minus')) {
    const id = t.dataset.id;
    if (!id) return;
    if (t.classList.contains('qty-plus')) { cart[id] = (cart[id] || 0) + 1; saveCart(); }
    if (t.classList.contains('qty-minus')) { cart[id] = Math.max(0, (cart[id] || 0) - 1); if (cart[id] === 0) delete cart[id]; saveCart(); }
  }

  if (t?.id === 'checkout') {
    if (Object.keys(cart).length === 0) { alert('Votre panier est vide.'); return; }
    window.location.href = 'checkout.html';
  }
});

const darkToggle = document.getElementById('dark-toggle');
if (darkToggle) {
  if (localStorage.getItem('lpb_dark') === 'true') document.body.classList.add('dark-mode');
  darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('lpb_dark', document.body.classList.contains('dark-mode'));
    darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
}

renderCart();
