# README — Plantilla Webpack

## Requisitos previos

- Node.js >= 16
- npm >= 8

## Instalación

```bash
npm install
```

## Scripts disponibles

- **Desarrollo**:

```bash
npm run dev
```

Levanta un servidor en <http://localhost:8081> con recarga en caliente.

- **Producción**:

```bash
npm run build
```

Genera la carpeta `dist/` optimizada para despliegue.

- **Lint**:

```bash
npm run lint
```

Analiza el código fuente con ESLint para detectar problemas.

- **Lint (auto-fix)**:

```bash
npm run lint:fix
```

Intenta corregir automáticamente los errores detectados por ESLint.

- **Formato**:

```bash
npm run format
```

Aplica Prettier para dar un formato consistente al código.

- **Despliegue**:

```bash
npm run deploy
```

Hace build automáticamente y publica el contenido de `dist/` en la rama `gh-pages` del repositorio usando `git subtree`.

- **Despliegue forzado** (si hay conflictos):

```bash
npm run deploy:force
```

Forza el despliegue incluso si hay conflictos en la rama `gh-pages`.

## Estructura de archivos

```
/plantilla-webpack-js
├── package.json
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── /src
│   ├── index.js
│   └── index.html
└── /dist
```

## Configuración Webpack

- **webpack.common.js** → Configuración base (entry, output, HtmlWebpackPlugin, assets).
- **webpack.dev.js** → Configuración de desarrollo (`style-loader`, devServer).
- **webpack.prod.js** → Configuración de producción (`MiniCssExtractPlugin`, hashes, optimización).

## GitHub Pages

Esta plantilla está configurada para desplegar **automáticamente** en GitHub Pages usando **GitHub Actions**:

### ✨ **Deploy Automático**:
- ✅ **Rama `main`**: Solo código fuente (sin `dist/`)
- ✅ **GitHub Actions**: Build y deploy automático
- ✅ **Rama `gh-pages`**: Se crea/actualiza automáticamente

### 🚀 **Configuración inicial**:

1. **Configura GitHub Pages**:
   - Ve a tu repositorio → Settings → Pages
   - Selecciona "GitHub Actions" como fuente

2. **¡Eso es todo!** El primer push activará el workflow.

### 📋 **Workflow simplificado**:

```bash
# Desarrollo
npm run dev

# Cuando hagas cambios, simplemente:
git add .
git commit -m "Mi cambio"
git push
```

**¡GitHub Actions automáticamente**:
- 🔨 Hace build del proyecto
- 📤 Sube solo `dist/` a `gh-pages`
- 🌐 Actualiza tu sitio web

### 🔄 **Sin comandos de deploy manual**:
- ❌ No necesitas `npm run deploy`
- ❌ No necesitas manejar `dist/` manualmente
- ✅ Solo haz push y GitHub hace el resto

## Uso como plantilla

1. Clona o descarga este repositorio.
2. Borra el contenido de `src/` y añade tus propios archivos.
3. Ejecuta `npm run dev` para desarrollo o `npm run build` para producción.
