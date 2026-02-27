/**
 * ============================================================
 *   buscador.js — Filtros por Medida
 *   Llantas Gifer | OSTP: Fernando Guzmán
 * ============================================================
 */

const BUSCADOR = {
  data: null,

  async init() {
    try {
      const res = await fetch('data/productos/llantas.json');
      this.data = await res.json();
      
      const btn = document.getElementById('btn-buscar');
      if (btn) btn.addEventListener('click', () => this.buscar());
      
      const reset = document.getElementById('btn-reset');
      if (reset) reset.addEventListener('click', () => this.reset());
      
      console.log('✅ Buscador.js inicializado');
    } catch (e) {
      console.error('❌ Error cargando datos para buscador:', e);
    }
  },

  buscar() {
    const ancho = document.getElementById('sel-ancho')?.value || '';
    const perfil = document.getElementById('sel-perfil')?.value || '';
    const rin = document.getElementById('sel-rin')?.value || '';

    if (!ancho && !perfil && !rin) {
      this.redirectWA('Hola GIFER! Busco información sobre llantas. ¿Me pueden ayudar?');
      return;
    }

    const resultados = this.filtrar(ancho, perfil, rin);

    if (resultados.length === 0) {
      this.redirectWA(`Hola GIFER! Busco llantas en medida ${ancho||'?'}${perfil||'?'} R${rin||'?'}. ¿Tienen disponibilidad?`);
      return;
    }

    if (resultados.length === 1) {
      const p = resultados[0];
      const msg = encodeURIComponent(`Hola GIFER! Me interesa la ${p.marca} ${p.modelo} ${p.medida} en $${p.precio}. ¿Hay disponibilidad?`);
      window.open(`https://wa.me/523329062078?text=${msg}`, '_blank');
      return;
    }

    this.mostrarResultados(resultados);
  },

  filtrar(ancho, perfil, rin) {
    return this.data.productos.filter(p => 
      (!ancho || p.ancho == ancho) &&
      (!perfil || p.perfil == perfil) &&
      (!rin || p.rin == rin)
    );
  },

  mostrarResultados(resultados) {
    const container = document.getElementById('resultados-grid');
    if (!container) return;
    
    container.innerHTML = resultados.map(p => GIFER.buildCard(p)).join('');
    container.style.display = 'grid';
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  },

  redirectWA(mensaje) {
    const msg = encodeURIComponent(mensaje);
    window.open(`https://wa.me/523329062078?text=${msg}`, '_blank');
  },

  reset() {
    document.getElementById('sel-ancho').value = '';
    document.getElementById('sel-perfil').value = '';
    document.getElementById('sel-rin').value = '';
    const container = document.getElementById('resultados-grid');
    if (container) {
      container.style.display = 'none';
      container.innerHTML = '';
    }
  }
};

document.addEventListener('DOMContentLoaded', () => BUSCADOR.init());