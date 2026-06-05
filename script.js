const PRODUCTS = [
  // Alimentation
  {id: 'accras-crevette', title: 'Accras Crevette', price: 3.50, desc: 'Accras maison, croustillants et savoureux', img: 'alimentation/Accras crevette v3.png'},
  {id: 'accras-thon', title: 'Accras Thon', price: 3.50, desc: 'Accras au thon, recette traditionnelle', img: 'alimentation/accras thon v3.png'},
  {id: 'accras', title: 'Accras', price: 3.00, desc: 'Assortiment d\'accras maison', img: 'alimentation/Accras v3.png'},
  {id: 'boudin-antillais', title: 'Boudin Artisanal', price: 8.50, desc: 'Recette familiale authentique', img: 'alimentation/Bouddin antillais.png'},
  {id: 'boudin-lambi', title: 'Boudin Lambi', price: 9.00, desc: 'Variation spéciale au lambi', img: 'alimentation/Boudin lambi.png'},
  {id: 'boudin-morue', title: 'Boudin Morue', price: 9.00, desc: 'Boudin à la morue, parfumé et fin', img: 'alimentation/Boudin morue.png'},
  {id: 'boudin-noir', title: 'Boudin Noir', price: 8.00, desc: 'Boudin noir traditionnel', img: 'alimentation/Boudin noir.png'},
  {id: 'samoussa-boeuf', title: 'Samoussa Bœuf', price: 2.50, desc: 'Samoussa maison, viande sélectionnée', img: 'alimentation/samoussa boeufs.png'},
  {id: 'samoussa-legumes', title: 'Samoussa Légumes', price: 2.00, desc: 'Option végétarienne, légumes locaux', img: 'alimentation/Samoussa Legumes.png'},
  {id: 'samoussa-poulet', title: 'Samoussa Poulet', price: 2.50, desc: 'Samoussa poulet aux épices maison', img: 'alimentation/Samoussa poulet.png'},
  // Épices
  {id: 'cayenne', title: 'Piment Cayenne', price: 3.00, desc: 'Piment en poudre — piquant contrôlé', img: 'epices/cayenne.png'},
  {id: 'cumin', title: 'Cumin', price: 2.50, desc: 'Cumin moulu, arôme profond', img: 'epices/Cumin 2.png'},
  {id: 'curry', title: 'Curry', price: 2.50, desc: 'Mélange curry parfumé', img: 'epices/Curry 2.png'},
  {id: 'gingembre', title: 'Gingembre Moulu', price: 2.80, desc: 'Gingembre moulu, saveur fraîche', img: 'epices/Gimgembre Moulu.png'},
  {id: 'masali', title: 'Masali', price: 3.00, desc: 'Mélange d\'épices créoles', img: 'epices/masali.png'},
  {id: 'paprika', title: 'Paprika', price: 2.50, desc: 'Paprika doux, belle couleur', img: 'epices/Paprika.png'},
  {id: 'colombo', title: 'Poudre à Colombo', price: 2.80, desc: 'Épice typique antillaise', img: 'epices/Poudre a colombo.png'},
  {id: 'raz-el-hanout', title: 'Raz el Hanout', price: 3.20, desc: 'Mélange raffiné du Maghreb', img: 'epices/Raz el Hanout.png'},
  {id: 'tajin', title: 'Tajin', price: 2.90, desc: 'Assaisonnement acidulé', img: 'epices/Tajin.png'},
  {id: 'tandoori', title: 'Tandoori', price: 2.90, desc: 'Épice tandoori parfumée', img: 'epices/Tandoori.png'},
  // Pots / condiments
  {id: 'pot-1', title: 'Confit Maison 1', price: 4.50, desc: 'Confit artisanal, recette familiale', img: 'pot/image00001.png'},
  {id: 'pot-2', title: 'Confit Maison 2', price: 4.50, desc: 'Confit artisanal, saveurs équilibrées', img: 'pot/image00002.png'},
  {id: 'pot-3', title: 'Condiment Créole 1', price: 4.00, desc: 'Condiment traditionnel', img: 'pot/image00003.png'},
  {id: 'pot-4', title: 'Condiment Créole 2', price: 4.00, desc: 'Parfait pour accompagner vos plats', img: 'pot/image00004.png'}
];
window.PRODUCTS = PRODUCTS;

function formatPrice(n){return n.toFixed(2) + '€'}

function renderProducts(target, list){
  if(!target) return;
  target.innerHTML = '';
  list.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card fade-in';
    card.innerHTML = `
      <div class="product-photo"><img src="${p.img}" alt="${p.title}"/></div>
      <div class="product-title">${p.title}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="price">${formatPrice(p.price)}</div>
      <button class="add-btn" data-id="${p.id}">Ajouter au panier</button>
    `;
    target.appendChild(card);
    // stagger reveal
    setTimeout(()=>card.classList.add('visible'), 80);
  });
}

// DOM ready: render where applicable and wire up search
document.addEventListener('DOMContentLoaded', ()=>{
  const shopGrid = document.getElementById('shop-grid');
  const searchInput = document.getElementById('search');

renderProducts(shopGrid, PRODUCTS);
  // search
  if(searchInput){
    searchInput.addEventListener('input', (e)=>{
      const q = e.target.value.trim().toLowerCase();
      const filtered = PRODUCTS.filter(p=>p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
      renderProducts(shopGrid, filtered);
    });
  }

  // Cart elements
  window._cartEls = {
    cartToggle: document.getElementById('cart-toggle'),
    cartEl: document.getElementById('cart'),
    cartClose: document.getElementById('cart-close'),
    cartItemsEl: document.getElementById('cart-items'),
    cartCount: document.getElementById('cart-count'),
    cartTotal: document.getElementById('cart-total')
  };

  // Dark mode init
  const isDark = localStorage.getItem('lpb_dark') === 'true';
  if(isDark) document.body.classList.add('dark-mode');
});

// Cart
let cart = JSON.parse(localStorage.getItem('lpb_cart')||'{}');
const cartToggle = () => window._cartEls && window._cartEls.cartToggle ? window._cartEls.cartToggle : null;
const cartEl = () => window._cartEls && window._cartEls.cartEl ? window._cartEls.cartEl : null;
const cartClose = () => window._cartEls && window._cartEls.cartClose ? window._cartEls.cartClose : null;
const cartItemsEl = () => window._cartEls && window._cartEls.cartItemsEl ? window._cartEls.cartItemsEl : null;
const cartCount = () => window._cartEls && window._cartEls.cartCount ? window._cartEls.cartCount : null;
const cartTotal = () => window._cartEls && window._cartEls.cartTotal ? window._cartEls.cartTotal : null;

function saveCart(){localStorage.setItem('lpb_cart', JSON.stringify(cart));renderCart();}

function addToCart(id){cart[id] = (cart[id]||0)+1;saveCart();}

// delegated add to cart
document.body.addEventListener('click', (e)=>{
  if(e.target.matches('.add-btn')){
    addToCart(e.target.dataset.id);
  }
});

function renderCart(){
  const itemsEl = cartItemsEl();
  if(!itemsEl) return;
  itemsEl.innerHTML = '';
  const ids = Object.keys(cart);
  let total = 0;
  ids.forEach(id=>{
    const qty = cart[id];
    const product = PRODUCTS.find(p=>p.id===id);
    if(!product) return;
    total += product.price * qty;
    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `<div style="flex:1"><strong>${product.title}</strong><div style="color:#666">${formatPrice(product.price)} x ${qty}</div></div><div><button data-id="${id}" class="qty-plus">＋</button><button data-id="${id}" class="qty-minus">−</button></div>`;
    itemsEl.appendChild(item);
  });
  const countEl = cartCount();
  const totalEl = cartTotal();
  if(countEl) countEl.textContent = ids.reduce((s,k)=>s+cart[k],0)||0;
  if(totalEl) totalEl.textContent = formatPrice(total);
}

// safe event wiring for cart toggle
if(typeof window !== 'undefined'){
  document.addEventListener('click', (e)=>{
    const t = e.target;
    const ct = cartToggle();
    const ce = cartEl();
    const cc = cartClose();
    if(t === ct){
      if(ce){ ce.classList.toggle('open'); ce.setAttribute('aria-hidden', !ce.classList.contains('open')); }
    }
    if(t === cc){ if(ce){ ce.classList.remove('open'); ce.setAttribute('aria-hidden','true'); } }

    // cart qty buttons
    if(t.classList && (t.classList.contains('qty-plus') || t.classList.contains('qty-minus'))){
      const id = t.dataset.id;
      if(!id) return;
      if(t.classList.contains('qty-plus')){ cart[id] = (cart[id]||0)+1; saveCart(); }
      if(t.classList.contains('qty-minus')){ cart[id] = Math.max(0,(cart[id]||0)-1); if(cart[id]===0) delete cart[id]; saveCart(); }
    }

    // checkout
    if(t && t.id === 'checkout'){
      if(Object.keys(cart).length===0){ alert('Votre panier est vide.'); return; }
      // Redirect to checkout page with Stripe
      window.location.href = 'checkout.html';
    }
  });
}

// Dark mode toggle
const darkToggle = document.getElementById('dark-toggle');
if(darkToggle){
  const isDark = localStorage.getItem('lpb_dark') === 'true';
  if(isDark) document.body.classList.add('dark-mode');
  
  darkToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('lpb_dark', document.body.classList.contains('dark-mode'));
    darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
}

// Init
renderCart();
