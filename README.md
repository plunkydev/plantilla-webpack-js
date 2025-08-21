# 🚀 Plantilla Webpack + JavaScript

> Plantilla moderna y lista para usar con Webpack, Babel, ESLint y deploy automático a GitHub Pages

## ✨ Características

- 📦 **Webpack 5** - Bundling moderno
- 🔄 **Babel** - Transpilación ES6+
- 🎨 **CSS Loader** - Importación de estilos
- 🔧 **ESLint + Prettier** - Code quality
- 🚀 **GitHub Actions** - Deploy automático
- ⚡ **Hot Reload** - Desarrollo rápido
- 📱 **Responsive** - Template HTML base

## 🛠️ Requisitos

- **Node.js** >= 16
- **npm** >= 8

## ⚡ Inicio Rápido

```bash
# 1. Clona/descarga esta plantilla
git clone https://github.com/plunkydev/plantilla-webpack-js.git mi-proyecto
cd mi-proyecto

# 2. Instala dependencias
npm install

# 3. Inicia desarrollo
npm run dev
```

¡Abre <http://localhost:8081> y comienza a desarrollar! ⚡

## 📜 Scripts Disponibles

### 🔧 Desarrollo
```bash
npm run dev          # Servidor desarrollo con hot reload
```

### 🏗️ Build
```bash
npm run build        # Genera dist/ optimizado
```

### 🧹 Code Quality  
```bash
npm run lint         # Analiza código con ESLint
npm run lint:fix     # Corrige errores automáticamente
npm run format       # Formatea código con Prettier
```

### 👀 Preview
```bash
npm run preview-build # Sirve dist/ localmente
```

## 📁 Estructura del Proyecto

```
plantilla-webpack-js/
├── 📁 .github/
│   └── 📁 workflows/
│       └── deploy.yml           # GitHub Actions workflow
├── 📁 src/
│   ├── index.js             # Punto de entrada principal
│   ├── styles.css           # Estilos CSS
│   └── template.html        # Template HTML base
├── ⚙️ webpack.common.js        # Configuración base de Webpack
├── ⚙️ webpack.dev.js           # Configuración de desarrollo
├── ⚙️ webpack.prod.js          # Configuración de producción
├── 📄 package.json             # Dependencias y scripts
├── .babelrc                 # Configuración de Babel
├── .eslintrc.cjs            # Configuración de ESLint
├── .prettierrc              # Configuración de Prettier
└── 📄 README.md               # Este archivo
```

## ⚙️ Configuración Técnica

### Webpack
- **webpack.common.js** → Configuración compartida (entry, output, plugins)
- **webpack.dev.js** → Desarrollo (`style-loader`, devServer, hot reload)
- **webpack.prod.js** → Producción (`MiniCssExtractPlugin`, optimización)

### Babel
- Transpilación ES6+ a ES5
- Preset: `@babel/preset-env`
- Compatible con navegadores modernos

### ESLint + Prettier
- Standard JavaScript style
- Formateo automático de código
- Detección de errores

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

## 🚀 Cómo Usar Esta Plantilla

### 1️⃣ **Crear tu proyecto**
```bash
# Opción A: Fork/clone desde GitHub
git clone https://github.com/plunkydev/plantilla-webpack-js.git mi-proyecto

# Opción B: Descargar ZIP y extraer
# Descarga desde: https://github.com/plunkydev/plantilla-webpack-js
```

### 2️⃣ **Inicializar tu proyecto**
```bash
cd mi-proyecto

# Instalar dependencias
npm install

# Personalizar package.json
nano package.json  # Cambiar name, description, author, etc.
```

### 3️⃣ **Desarrollar tu aplicación**
```bash
# Editar archivos en src/:
# - src/index.js    → Tu lógica JavaScript
# - src/styles.css  → Tus estilos
# - src/template.html → Tu HTML base

# Iniciar desarrollo
npm run dev
```

### 4️⃣ **Deploy automático**
```bash
# Solo haz push para deploy automático
git add .
git commit -m "Mi primera versión"
git push
```

## 📝 **Template Base**

Esta plantilla incluye:

**`src/index.js`** - Punto de entrada limpio:
```javascript
import './styles.css';

console.log('¡Plantilla Webpack funcionando!');

// Tu código aquí...
```

**`src/styles.css`** - Estilos base:
```css
body {
  font-family: sans-serif;
  background: #f5f5f5;
  padding: 2rem;
}
```

**`src/template.html`** - HTML responsive:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plantilla Webpack js</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

## 🔥 **¿Por qué usar esta plantilla?**

✅ **Setup completo en minutos**  
✅ **Deploy automático configurado**  
✅ **Best practices incluidas**  
✅ **Compatible con librerías modernas**  
✅ **Optimizada para producción**  
✅ **Mantenida y actualizada**  

---

**🚀 ¡Comienza tu próximo proyecto con esta plantilla!**

*Creado con ❤️ por [David Rosales](https://github.com/plunkydev)*
