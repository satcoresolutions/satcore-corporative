💎 ESTÁNDARES DE CALIDAD Y RENDIMIENTO (Quality Assurance)
Sección: QA_STANDARDS.md

Para asegurar que SatCore Solutions se posicione como un líder tecnológico, cada página y componente debe cumplir estrictamente con los siguientes KPI (Indicadores Clave de Desempeño):

1. 🚀 PERFORMANCE (Velocidad de Élite)
Tiempo de carga: El Largest Contentful Paint (LCP) debe ser inferior a 2.5 segundos.

Optimización de Imágenes: Uso obligatorio de formatos de próxima generación (WebP/AVIF) y el componente next/image para lazy loading.

Código Limpio: Eliminación de CSS no utilizado y minificación automática vía Next.js.

Puntaje Lighthouse: Meta mínima de 90/100 en la categoría de Performance.

2. 📱 RESPONSIVE DESIGN (Adaptabilidad Total)
Mobile-First: El diseño se desarrolla pensando primero en dispositivos móviles.

Breakpoints: Cumplimiento estricto del sistema de grid definido (4 col móvil, 8 col tablet, 12 col desktop).

Touch Friendly: Elementos interactivos con un tamaño mínimo de 44x44px para facilitar la navegación táctil.

3. 🔍 SEO & E-E-A-T (Visibilidad Estratégica)
Metadata Dinámica: Cada página debe incluir Title, Description y Open Graph (para redes sociales) personalizados.

Semántica HTML5: Uso correcto de etiquetas (main, section, article, nav) y jerarquía de títulos (H1 único por página).

Sitemap & Robots: Generación automática de sitemap.xml para indexación en Google.

4. 🔒 SEGURIDAD (The Core Fortress)
Protocolos: Implementación obligatoria de HTTPS/SSL de 256 bits.

Protección: Configuración de cabeceras de seguridad (CSP, HSTS, X-Frame-Options) para mitigar ataques XSS y Clickjacking.

Validación: Sanitización de todos los inputs en el formulario de contacto para evitar inyecciones de código.

5. ♿ ACCESIBILIDAD (Web para Todos - WCAG 2.1)
Contraste: Ratio de contraste mínimo de 4.5:1 (especialmente importante con el Verde Neón sobre fondos oscuros).

Navegación: Operabilidad total mediante teclado.

Lectores de Pantalla: Atributos aria-label en iconos y etiquetas alt descriptivas en todas las imágenes.

6. 🧠 ESCALABILIDAD (Future-Proof)
Modularidad: Arquitectura basada en componentes atómicos reutilizables.

Documentación: Código auto-documentado y uso de TypeScript para evitar deuda técnica.

API Ready: Estructura preparada para integrar Agentes de IA y servicios de terceros mediante webhooks y REST APIs.