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

Esta plantilla está configurada para desplegar automáticamente en GitHub Pages:

1. **Rama `main`**: Contiene el código fuente (sin `dist/`)
2. **Rama `gh-pages`**: Contiene solo los archivos compilados de `dist/`

### Configuración inicial:

1. Ve a tu repositorio en GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch"
4. Elige la rama `gh-pages` y folder `/ (root)`

### Workflow:

```bash
# Desarrollo
npm run dev

# Cuando esté listo para desplegar
npm run deploy
```

El comando `deploy` automáticamente:
- Hace build del proyecto
- Toma solo el contenido de `dist/`
- Lo sube a la rama `gh-pages`
- GitHub Pages lo sirve automáticamente

## Uso como plantilla

1. Clona o descarga este repositorio.
2. Borra el contenido de `src/` y añade tus propios archivos.
3. Ejecuta `npm run dev` para desarrollo o `npm run build` para producción.
