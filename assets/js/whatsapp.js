/**
 * ============================================================
 *   whatsapp.js — Botón Flotante
 *   Llantas Gifer | OSTP: Fernando Guzmán
 * ============================================================
 */

const WA_FLOAT = {
  init() {
    const btn = document.getElementById('wa-float-btn');
    const tooltip = document.getElementById('wa-tooltip');
    const badge = document.getElementById('wa-badge');
    
    if (!btn) return;
    
    if (!sessionStorage.getItem('waTooltipShown')) {
      setTimeout(() => {
        tooltip?.classList.add('visible');
        sessionStorage.setItem('waTooltipShown', 'true');
        
        setTimeout(() => {
          badge?.classList.add('hidden');
        }, 4000);
      }, 3000);
    }
    
    btn.addEventListener('mouseenter', () => {
      tooltip?.classList.remove('visible');
    });
    
    btn.addEventListener('click', () => {
      if (typeof gtag === 'function') {
        gtag('event', 'whatsapp_click', {
          event_category: 'conversion',
          event_label: 'WhatsApp Float',
          value: 1
        });
      }
      badge?.classList.add('hidden');
    });
    
    console.log('✅ WhatsApp.js inicializado');
  }
};

document.addEventListener('DOMContentLoaded', () => WA_FLOAT.init());