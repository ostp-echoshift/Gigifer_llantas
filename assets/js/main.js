/**
 * ============================================================
 *   main.js — Carga de Datos + UI
 *   Llantas Gifer | OSTP: Fernando Guzmán
 *   Chavalow Rider · echoShift
 * ============================================================
 */

const GIFER = {
  wa: '523329062078',
  data: null,

  async init() {
    try {
      const resProductos = await fetch('data/productos/llantas.json');
      const dataProductos = await resProductos.json();
      
      const resMarcas = await fetch('data/marcas/marcas.json');
      const dataMarcas = await resMarcas.json();

      if (!dataProductos?.productos?.length) {
        console.warn('⚠️ No hay productos en llantas.json');
        return;
      }

      this.data = dataProductos;
      
      const destacados = dataProductos.productos.filter(p => p.badge === 'top' || p.badge === 'oferta' || p.badge === 'nuevo');
      this.renderProductos('productos-grid', destacados);
      this.renderMarcas('marcas-grid', dataMarcas.marcas);
      
      console.log(`✅ GIFER · ${dataProductos.productos.length} productos cargados`);
    } catch(e) {
      console.error('❌ Error cargando datos:', e);
    }
  },

  renderProductos(containerId, productos) {
    const container = document.getElementById(containerId);
    if (!container || !productos.length) return;
    
    container.innerHTML = productos.map(p => this.buildCard(p)).join('');
  },

  buildCard(p) {
    const badgeMap = {
      top: { cls: 'top', txt: '⭐ Top' },
      oferta: { cls: 'oferta', txt: '🔥 Oferta' },
      nuevo: { cls: 'nuevo', txt: '🆕 Nuevo' }
    };
    const b = badgeMap[p.badge] || null;
    const badge = b ? `<span class="producto-etiqueta">${b.txt}</span>` : '';

    const msg = encodeURIComponent(
      `Hola GIFER! Me interesa la ${p.marca} ${p.modelo} ${p.medida} en $${p.precio.toLocaleString('es-MX')}. ¿Hay disponibilidad?`
    );

    return `
    <article class="producto-card" data-id="${p.id}">
      ${badge}
      <div class="producto-imagen">
        <img src="${p.img}" alt="${p.marca} ${p.modelo}" loading="lazy"
             onerror="this.src='assets/img/icons/logo-gifer.png'">
      </div>
      <div class="producto-info">
        <span class="producto-marca">${p.marca}</span>
        <h3 class="producto-modelo">${p.modelo}</h3>
        <p class="producto-medida">${p.medida}</p>
        <p class="producto-precio">$${p.precio.toLocaleString('es-MX')}</p>
        <p class="producto-stock ${p.stock ? 'disponible' : 'agotado'}">
          ${p.stock ? '✅ En stock' : '❌ Agotado'}
        </p>
        <a href="https://wa.me/${this.wa}?text=${msg}" 
           class="btn btn--wa" 
           target="_blank" 
           rel="noopener noreferrer">
           📱 Pedir por WhatsApp
        </a>
      </div>
    </article>`;
  },

  renderMarcas(containerId, marcas) {
    const container = document.getElementById(containerId);
    if (!container || !marcas.length) return;

    container.innerHTML = marcas.map(m => `
      <div class="marca-card">
        <div class="marca-card-img">
          <img src="${m.img}" alt="${m.nombre}" loading="lazy"
               onerror="this.style.display='none'">
        </div>
        <div class="marca-card-body">
          <h3 class="marca-card-nombre">${m.nombre}</h3>
          <div class="marca-card-actions">
            <a href="pages/llantas/index.html?marca=${m.id}" class="btn btn--ghost btn-sm">
              Ver llantas <span class="arrow">→</span>
            </a>
            <a href="https://wa.me/${this.wa}?text=Hola%20GIFER!%20Me%20interesa%20la%20marca%20${m.nombre}" 
               class="btn btn--wa btn-sm" 
               target="_blank" 
               rel="noopener">💬</a>
          </div>
        </div>
      </div>
    `).join('');
  }
};

function loadComponent(id, path) {
  fetch(path)
    .then(r => r.text())
    .then(html => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    })
    .catch(e => console.error(`Error cargando ${path}:`, e));
}

document.addEventListener('DOMContentLoaded', () => GIFER.init());