/**
 * ════════════════════════════════════════
 *  GIFER Llantas · carrito.js
 *  Carrito ligero — sin backend
 *  Flujo: agregar → ver → confirmar por WA
 *  ChavalowRider OSTP · echoShift
 * ════════════════════════════════════════
 */

const Carrito = {

  wa: '523329062078',  // MX +52 · Guadalajara
  KEY: 'GIFER_carrito_v1',
  items: [],

  // ── init ─────────────────────────────
  init() {
    this.cargar();
    this.renderBadge();
    this.bindEvents();
    // si estamos en carrito.html, renderizar lista
    if (document.getElementById('carrito-lista')) {
      this.renderLista();
    }
  },

  // ── storage ───────────────────────────
  cargar() {
    try {
      this.items = JSON.parse(localStorage.getItem(this.KEY)) || [];
    } catch { this.items = []; }
  },

  guardar() {
    localStorage.setItem(this.KEY, JSON.stringify(this.items));
    this.renderBadge();
  },

  // ── agregar ───────────────────────────
  agregar(llanta) {
    // llanta: { id, marca, modelo, medida, precio, img }
    const existe = this.items.find(i => i.id === llanta.id);
    if (existe) {
      existe.qty = (existe.qty || 1) + 1;
    } else {
      this.items.push({ ...llanta, qty: 1 });
    }
    this.guardar();
    this.mostrarToast(`✅ ${llanta.marca} ${llanta.modelo} agregada`);
    this.renderBadge();
  },

  // ── quitar ────────────────────────────
  quitar(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.guardar();
    this.renderLista();
  },

  cambiarQty(id, qty) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    item.qty = Math.max(1, parseInt(qty) || 1);
    this.guardar();
    this.renderLista();
  },

  vaciar() {
    this.items = [];
    this.guardar();
    this.renderLista();
  },

  // ── totales ───────────────────────────
  total() {
    return this.items.reduce((s, i) => s + (i.precio * (i.qty||1)), 0);
  },

  totalItems() {
    return this.items.reduce((s, i) => s + (i.qty||1), 0);
  },

  // ── badge en navbar ───────────────────
  renderBadge() {
    const badges = document.querySelectorAll('.carrito-badge');
    const n = this.totalItems();
    badges.forEach(b => {
      b.textContent = n;
      b.style.display = n > 0 ? 'flex' : 'none';
    });
  },

  // ── render lista (carrito.html) ───────
  renderLista() {
    const lista = document.getElementById('carrito-lista');
    const totalEl = document.getElementById('carrito-total');
    const btnWa = document.getElementById('btn-confirmar-wa');
    if (!lista) return;

    if (this.items.length === 0) {
      lista.innerHTML = `
        <div class="carrito-vacio">
          <p>🛞 Tu carrito está vacío</p>
          <a href="/pages/llantas/" class="btn-buscar">Ver catálogo</a>
        </div>`;
      if (totalEl) totalEl.textContent = '$0';
      if (btnWa)   btnWa.style.display = 'none';
      return;
    }

    lista.innerHTML = this.items.map(i => `
      <div class="carrito-item" data-id="${i.id}">
        <img src="${i.img}" alt="${i.marca}" loading="lazy"
             onerror="this.src='/assets/img/placeholder.png'">
        <div class="ci-info">
          <div class="ci-marca">${i.marca}</div>
          <div class="ci-nombre">${i.modelo}</div>
          <div class="ci-medida">${i.medida}</div>
        </div>
        <div class="ci-qty">
          <button onclick="Carrito.cambiarQty('${i.id}', ${(i.qty||1)-1})">−</button>
          <span>${i.qty||1}</span>
          <button onclick="Carrito.cambiarQty('${i.id}', ${(i.qty||1)+1})">+</button>
        </div>
        <div class="ci-precio">$${(i.precio*(i.qty||1)).toLocaleString()}</div>
        <button class="ci-quitar" onclick="Carrito.quitar('${i.id}')" title="Quitar">✕</button>
      </div>
    `).join('');

    if (totalEl) totalEl.textContent = `$${this.total().toLocaleString()}`;
    if (btnWa)   btnWa.style.display = 'flex';
  },

  // ── confirmar por WhatsApp ────────────
  confirmarWA() {
    if (this.items.length === 0) return;

    const lineas = this.items.map(i =>
      `• ${i.marca} ${i.modelo} ${i.medida} x${i.qty||1} = $${(i.precio*(i.qty||1)).toLocaleString()}`
    ).join('\n');

    const msg =
      `Hola GIFER! Quiero confirmar el siguiente pedido:\n\n${lineas}\n\n` +
      `*TOTAL APROXIMADO: $${this.total().toLocaleString()}*\n\n` +
      `¿Confirman disponibilidad y forma de entrega?`;

    window.open(`https://wa.me/${this.wa}?text=${encodeURIComponent(msg)}`, '_blank');
  },

  // ── toast ─────────────────────────────
  mostrarToast(msg) {
    let toast = document.getElementById('gifer-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'gifer-toast';
      toast.style.cssText = `
        position:fixed; bottom:90px; right:28px; z-index:9999;
        background:#1A1A1A; border:1px solid #FFC600; border-left:3px solid #FFC600;
        color:#FFF; font-family:'Barlow Condensed',sans-serif; font-size:15px;
        font-weight:600; padding:12px 20px; border-radius:5px;
        box-shadow:0 4px 20px rgba(0,0,0,0.4);
        transform:translateX(120%); transition:transform 0.3s;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    requestAnimationFrame(() => { toast.style.transform = 'translateX(0)'; });
    setTimeout(() => { toast.style.transform = 'translateX(120%)'; }, 2800);
  },

  // ── bind global ───────────────────────
  bindEvents() {
    // delegación en cards dinámicas
    document.addEventListener('click', e => {
      // btn agregar al carrito
      if (e.target.closest('.btn-carrito')) {
        const card = e.target.closest('.pcard');
        if (!card) return;
        const id = card.dataset.id;
        if (!id || !window.GIFER?.data) return;
        const llanta = window.GIFER.data.llantas.find(l => l.id === id);
        if (llanta) this.agregar(llanta);
      }
      // btn confirmar en carrito.html
      if (e.target.closest('#btn-confirmar-wa')) {
        this.confirmarWA();
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => Carrito.init());