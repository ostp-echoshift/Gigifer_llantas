# 🛞 GIFER Llantas

> Sitio web de ventas para **Llantas GIFER** — Guadalajara, Jalisco, México.  
> Construido sobre arquitectura OSTP · echoShift por **ChavalowRider**.

---

## 🚀 Demo

🌐 **Producción:** [llantasgifer.com](https://llantasgifer.com)  
🧪 **Staging:** [ostp-echoshift.github.io/GIFER_llantas](https://ostp-echoshift.github.io/GIFER_llantas)

---

## 📋 Descripción

Catálogo de llantas multimarca con funnel de conversión directo a WhatsApp.  
Sin backend, sin base de datos, sin frameworks. HTML + CSS + JS puro.  
Carga en menos de 2 segundos. Funciona desde GitHub Pages.

Sitio diseñado para convertir visitas en conversaciones de WhatsApp,  
con catálogo dinámico, buscador por medida y carga optimizada.

---

## ⚡ Stack

| Capa | Tecnología |
|------|-----------|
| Markup | HTML5 semántico |
| Estilos | CSS3 modular (7 archivos) |
| Lógica | Vanilla JS ES6+ (6 módulos) |
| Datos | JSON estático |
| Imágenes | WebP + PNG fallback |
| Hosting | GitHub Pages |
| Contacto | WhatsApp API (wa.me) |
| Fuentes | Google Fonts — Barlow Condensed + Barlow |

---

## 🗂️ Estructura

```console
GIFER_llantas/
├── index.html                  ← Home / funnel principal
├── preview.html                ← Tarjeta compartible por producto
│
├── assets/
│   ├── css/
│   │   ├── variables.css       ← Paleta de colores GIFER + tokens
│   │   ├── reset.css           ← Normalize base
│   │   ├── main.css            ← Layout global
│   │   ├── components.css      ← Cards, carrusel, buscador, badges
│   │   ├── animations.css      ← Reveal, transiciones, micro-interacciones
│   │   ├── pages.css           ← Estilos específicos por página
│   │   └── responsive.css      ← Breakpoints 1100 / 768 / 480px
│   │
│   ├── js/
│   │   ├── main.js             ← Init, fetch JSON, buildCard(), carrusel engine
│   │   ├── buscador.js         ← Búsqueda por medida + filtros categoría
│   │   ├── carrito.js          ← Carrito ligero con localStorage
│   │   ├── nav.js              ← Sticky, burger móvil, active link
│   │   ├── whatsapp.js         ← Generador centralizado de mensajes WA
│   │   └── animations.js       ← IntersectionObserver + contadores + tilt
│   │
│   └── img/
│       ├── marcas/             ← Logos marcas (.jpg + .webp)
│       ├── taller/             ← Fotos taller (.png + .webp)
│       └── compras/            ← Pasos de compra (.png + .webp)
│
├── assets/logo/
│   └── logo-gifer.png          ← Logo oficial GIFER
│
├── components/
│   ├── nav/nav.html            ← Navbar reutilizable
│   ├── hero/hero.html          ← Hero + buscador
│   ├── buscador/buscador.html  ← Buscador standalone (páginas internas)
│   ├── footer/footer.html      ← Footer completo
│   └── whatsapp/wa-float.html  ← Botón flotante WA
│
├── data/
│   ├── productos/llantas.json  ← 30 productos reales con medidas y precios
│   ├── marcas/marcas.json      ← 10 marcas con tier (premium/mid/valor)
│   └── servicios/servicios.json
│
├── pages/
│   ├── llantas/index.html      ← Catálogo completo + filtros
│   ├── marcas/index.html       ← Grid de marcas por tier
│   ├── servicios/index.html    ← Servicios + pasos de compra
│   ├── nosotros/index.html     ← Historia + galería taller
│   ├── contacto/index.html     ← Contacto + mapa + WA rápido
│   └── blog/index.html         ← Blog SEO con CTAs WA
│
└── docs/
    ├── brief/brief-gifer.md
    └── log/
        ├── transition-estructure.log
        └── webp-conversion.log
```

---

## 🎨 Paleta de Colores

| Variable | Hex | Uso |
|----------|-----|-----|
| `--dorado` | `#FFC600` | Identidad principal, precios, CTAs |
| `--rojo` | `#E84118` | Urgencia, badges oferta, acento fuego |
| `--azul` | `#36476B` | Profundidad, ticker marcas |
| `--dorado-dark` | `#9A7C00` | Hover states, sombras |
| `--negro` | `#0A0A0A` | Fondo dominante |
| `--carbon` | `#111111` | Navbar, footer |
| `--grafito` | `#1A1A1A` | Cards, fondos secundarios |
| `--verde-wa` | `#25D366` | Botones WhatsApp |

---

## 🔄 Flujo de Conversión

```
Usuario llega al sitio
        ↓
Buscador por medida  ←→  Carrusel productos
        ↓
  [Encuentra su llanta]
        ↓
  Botón WhatsApp → mensaje precargado con producto
        ↓
  Conversación directa con Fernando (GIFER)
        ↓
              VENTA
```

---

## 📦 Datos — llantas.json

Cada producto tiene:

```json
{
  "id": "LT-001",
  "marca": "Marshal",
  "modelo": "MH15",
  "medida": "185/60 R14",
  "ancho": 185,
  "perfil": 60,
  "rin": 14,
  "indice": "82H",
  "precio": 1209,
  "categoria": "turismo",
  "badge": "top",
  "stock": true,
  "img": "assets/img/marcas/marshall.webp",
  "incluye": ["instalacion", "balanceo", "valvula"]
}
```

Para agregar productos: editar `data/productos/llantas.json` y el sitio se actualiza solo.

---

## 🛠️ Scripts PowerShell

| Script | Función |
|--------|---------|
| `DirMainRoot.ps1` | Genera estructura completa del proyecto |
| `ConvertToWebP.ps1` | Convierte imágenes PNG/JPG a WebP |
| `ConvertToWebP-NET.ps1` | Conversión alternativa vía .NET |
| `InstallWebP.ps1` | Instala libwebp localmente |
| `SaveLog.ps1` | Guarda logs de sesión de trabajo |

---

## 🚀 Deploy — GitHub Pages

```bash
# 1. Clonar o inicializar repo
git init
git remote add origin https://github.com/ostp-echoshift/GIFER_llantas.git

# 2. Primer commit
git add .
git commit -m "feat: GIFER Llantas v1.0 — funnel completo"
git push -u origin main

# 3. Activar GitHub Pages
# Settings → Pages → Branch: main → / (root)
```

> ⚠️ Los componentes se cargan via `fetch()`.  
> GitHub Pages sirve archivos estáticos correctamente.  
> Para desarrollo local usar Live Server (VSCode) o `npx serve .`

---

## 📱 WhatsApp — Número de contacto

```
Número: 52 33 2906 2078
WA URL: https://wa.me/523329062078
```

Para cambiar el número: buscar y reemplazar `523329062078` en todos los archivos.  
O centralizar en `assets/js/whatsapp.js` → variable `WA.num`.

---

## 📐 Responsive Breakpoints

| Breakpoint | Cards visibles | Target |
|-----------|---------------|--------|
| `> 1100px` | 4 por fila | Desktop |
| `768–1100px` | 3 por fila | Tablet |
| `480–768px` | 2 por fila | Mobile landscape |
| `< 480px` | 1 por fila | Mobile portrait |

---

## 👤 Créditos

**Cliente:** Fernando · GIFER Llantas · Guadalajara, Jal.  
**Desarrollo:** ChavalowRider OSTP · [ostp-echoshift.github.io](https://ostp-echoshift.github.io)  
**Metodología:** LLM-OSTP · MainDominion · echoShift  
**Año:** 2026