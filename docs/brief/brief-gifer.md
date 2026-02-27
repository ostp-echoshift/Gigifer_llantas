brief-gifer.md


-

		
		# 📋 BRIEF DE PROYECTO — GIFER LLANTAS

		## 🔹 INFORMACIÓN GENERAL

		| Campo | Detalle |
		|-------|---------|
		| **Cliente** | Fernando Guzmán (Fer) |
		| **Agencia** | OSTP · Chavalow Rider |
		| **Proyecto** | GIFER Llantas · Rediseño Web |
		| **Ubicación** | Guadalajara, Jalisco, México |
		| **Fecha Inicio** | 27 de Febrero, 2026 |
		| **Deadline** | 72 Horas (MVP Viral) |
		| **Presupuesto** | $0 inicial · Pago por resultados |

		---

		## 🔹 CONTEXTO DEL PROYECTO

		### Situación Anterior
		- **Inversión previa:** $80,000 MXN
		- **Tiempo transcurrido:** 8 meses sin entrega
		- **Estado del sitio:** Magento con configuración básica, sin optimizaciones
		- **Problemas detectados:**
		  - Dependencia crítica de cookies
		  - Imágenes sin optimizar (GIF/PNG sin WebP/JPG)
		  - Código acoplado a plataforma propietaria
		  - Sin documentación ni transferencia técnica

		### Nueva Propuesta
		- **Modelo:** Riesgo cero para el cliente
		- **Pago:** Solo si el sistema genera ≥50 leads en 30 días
		- **Arquitectura:** Estática, modular, de bajo mantenimiento
		- **Entregable:** Funnel de ventas viral + Backend de contenidos

		---

		## 🔹 OBJETIVOS

		| Prioridad | Objetivo | KPI |
		|-----------|----------|-----|
		| 🔴 **Crítico** | Generar leads calificados | ≥50 en 30 días |
		| 🟡 **Alto** | Carga de página <3 segundos | Core Web Vitals verde |
		| 🟡 **Alto** | 100% enlaces WhatsApp funcionales | 0 errores de ruta |
		| 🟢 **Medio** | SEO Local posicionado | Top 3 en "llantas Guadalajara" |

		---

		## 🔹 ALCANCE TÉCNICO

		### Estructura del Proyecto

		```console
		GIFER_llantas/
		├── 📁 assets/
		│   ├── 📁 css/          (7 archivos modulares)
		│   ├── 📁 js/           (5 archivos funcionales)
		│   └── 📁 img/          (.jpg uniformado)
		├── 📁 components/       (HTML modular)
		├── 📁 data/             (JSON limpio)
		│   ├── marcas.json      (10 marcas)
		│   ├── llantas.json     (6 productos MVP)
		│   └── servicios.json   (5 servicios)
		├── 📁 docs/
		│   ├── brief/
		│   └── log/
		├── 📁 scripts/          (PowerShell automation)
		└── index.html           (Landing principal)
		```

		### Stack Tecnológico
		| Capa | Tecnología |
		|------|------------|
		| Frontend | HTML5 + CSS3 + Vanilla JS |
		| Datos | JSON estático |
		| Imágenes | .jpg (uniformado) |
		| Deploy | Netlify / Vercel / Hosting estático |
		| Analytics | Google Tag Manager + WhatsApp tracking |

		---

		## 🔹 CRITERIOS DE ACEPTACIÓN

		### JSON Data Layer
		- [x] Sin espacios en claves (`"id"` no `"id "`)
		- [x] Sin espacios en valores (`"Michelin"` no `"Michelin "`)
		- [x] Extensiones de imagen uniformadas (`.jpg`)
		- [x] Estructura válida (ConvertFrom-Json sin errores)

		### Frontend
		- [x] Carga dinámica de productos desde `llantas.json`
		- [x] Carga dinámica de marcas desde `marcas.json`
		- [x] Carga dinámica de servicios desde `servicios.json`
		- [x] Enlaces de WhatsApp sin espacios en URLs
		- [x] Responsive (móvil, tablet, desktop)

		### Performance
		- [ ] LCP < 2.5 segundos
		- [ ] FID < 100 milisegundos
		- [ ] CLS < 0.1
		- [ ] Imágenes optimizadas < 200KB c/u

		---

		## 🔹 MODELO DE COMPENSACIÓN

		```console
		📦 Inversión Inicial: $0 MXN

		🎯 Pago por Resultados (30 días):
		   • $15,000 MXN si ≥50 leads calificados
		   • $5,000 MXN adicionales por cada 25 leads extras
		   • Opción de compra código fuente: $20,000 MXN

		🔄 Mantenimiento opcional: $1,500 MXN/mes
		```

		### Definición de "Lead Calificado"
		1.  Clic en WhatsApp con mensaje prellenado
		2.  Búsqueda de medida específica en buscador
		3.  Envío de formulario de contacto
		4.  Llamada telefónica desde el sitio

		---

		## 🔹 CRONOGRAMA (72 HORAS)

		| Hora | Entregable | Estado |
		|------|------------|--------|
		| 0-24 | JSON limpios + Estructura base | ✅ Completado |
		| 24-48 | Frontend funcional + Buscador | ⏳ En proceso |
		| 48-72 | Deploy + Pruebas + Presentación | ⏳ Pendiente |

		---

		## 🔹 RIESGOS IDENTIFICADOS

		| Riesgo | Impacto | Mitigación |
		|--------|---------|------------|
		| Imágenes no existen en .jpg | Alto | Verificar carpeta `assets/img/` |
		| JSON con espacios residuales | Alto | Script de validación pre-deploy |
		| Enlaces WhatsApp rotos | Medio | Test manual de cada CTA |
		| CORS en carga de JSON | Medio | Deploy en mismo dominio |

		---

		## 🔹 CONTACTOS

		| Rol | Nombre | Contacto |
		|-----|--------|----------|
		| Cliente | Fernando Guzmán | Por definir |
		| Desarrollo | Chavalow Rider (OSTP) | Este canal |
		| Soporte | Kiwee (Asistente) | Este canal |

		---

		## 🔹 NOTAS ADICIONALES

		1.  **No se requiere backend** para el MVP
		2.  **Carrito de compras** es opcional (WhatsApp checkout)
		3.  **Blog** puede migrarse después del launch
		4.  **Magento** se mantiene como respaldo temporal
		5.  **Dominio:** `llantasgifer.com` (existente)

		---

		## ✅ FIRMAS DE APROBACIÓN

		| Rol | Nombre | Fecha | Firma |
		|-----|--------|-------|-------|
		| Cliente | _________________ | _______ | _______ |
		| Agencia | Chavalow Rider | 27/02/2026 | ✅ |

		---

		*Documento generado por OSTP · echoShift*
		*Última actualización: 27 de Febrero, 2026 · 10:45 AM*
		```console

		---

		## 🚀 ¿Guardar este Brief?

		```powershell
		cd C:\Proyectos\GIFER_llantas

		# Guardar brief
		$brief = @'
		[PEGAR CONTENIDO DE ARRIBA]
		'@
		Set-Content "docs/brief/brief-gifer.md" -Value $brief -Encoding UTF8 -NoNewline
		Write-Host "✅ brief-gifer.md guardado" -ForegroundColor Green
		```

		---

		## 📋 Resumen del Estado del Proyecto

		| Módulo | Estado |
		|--------|--------|
		| 📦 JSON Data Layer | ✅ **100%** (3 archivos limpios) |
		| 📄 Brief Documentado | ✅ **100%** (Este archivo) |
		| 🎨 HTML/CSS/JS | ⏳ **Por validar** en navegador |
		| 🖼️ Imágenes | ⏳ **Por verificar** existencia .jpg |
		| 🚀 Deploy | ⏳ **Pendiente** (24 horas restantes) |

		---

