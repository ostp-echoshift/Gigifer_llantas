/**
 * ============================================================
 *   nav.js — Navegación
 *   Llantas Gifer | OSTP: Fernando Guzmán
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('nav-burger');
  const mobile = document.getElementById('nav-mobile');
  
  if (burger && mobile) {
    burger.addEventListener('click', function() {
      mobile.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  // Cerrar menú al hacer click en enlace
  document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      mobile.classList.remove('active');
      burger.classList.remove('active');
    });
  });

  console.log('✅ Nav.js inicializado');
});