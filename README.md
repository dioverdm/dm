# DioverDM · Portfolio

Portfolio personal de **Diover Rivero | DioverDM** — Desarrollador Full Stack.

## Stack

- **React 18** + **Vite 5**
- **JavaScript** (sin TypeScript en el proyecto base)
- **CSS Variables** (design tokens)
- **Google Fonts**: Syne (display) + Space Mono + Inter

## Instalación y desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## Estructura

```
src/
├── App.jsx        ← Componentes y datos del portfolio
├── App.css        ← Todos los estilos de componentes
├── index.css      ← Tokens, reset, animaciones globales
└── main.jsx       ← Punto de entrada
```

## Personalización

### Datos personales
Edita las constantes en `App.jsx`:
- `INTERESTS` — Intereses mostrados en la fila superior
- `EXPERIENCE` — Tarjetas de experiencia laboral
- `SKILL_GROUPS` — Stack tecnológico agrupado
- `EDUCATION` — Formación académica
- `PORTFOLIO_LINKS` — Links a redes y portafolio
- `DETAILS` — Datos de contacto

### Colores
Edita las variables CSS en `index.css`:
```css
:root {
  --accent:  #00c8ff;   /* Cian principal */
  --accent2: #4d7fff;   /* Azul secundario */
  --accent3: #00ffa3;   /* Verde/mint */
}
```

### Tipografía
Cambia las fuentes en `index.html` (Google Fonts) y en `index.css` (variables `--font-*`).

## Deploy en Netlify

```bash
npm run build
# Sube la carpeta `dist/` a Netlify
# O conecta el repo en netlify.com → Build command: npm run build → Publish: dist
```
