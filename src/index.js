import './styles.css';
import testImage from './assets/test-image.svg';

console.log('🚀 Plantilla Webpack funcionando correctamente!');

// Función para crear y agregar elementos dinámicamente
function initializeApp() {
  // Crear encabezado principal
  const header = document.createElement('h1');
  header.textContent = '🎯 Prueba de Deploy - Plantilla Webpack';
  header.style.cssText = `
    color: #2c3e50;
    text-align: center;
    margin: 2rem 0;
    font-family: 'Arial', sans-serif;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  `;

  // Crear contenedor para la imagen
  const imageContainer = document.createElement('div');
  imageContainer.style.cssText = `
    text-align: center;
    margin: 2rem 0;
  `;

  // Crear elemento imagen
  const img = document.createElement('img');
  img.src = testImage;
  img.alt = 'Test Image - Plantilla Webpack';
  img.style.cssText = `
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
  `;
  
  // Efecto hover para la imagen
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
  });
  
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });

  // Crear párrafo informativo
  const info = document.createElement('p');
  info.innerHTML = `
    <strong>✅ Deploy Test Exitoso!</strong><br>
    📅 ${new Date().toLocaleString('es-ES')}<br>
    🔗 Imagen cargada dinámicamente con Webpack
  `;
  info.style.cssText = `
    text-align: center;
    color: #27ae60;
    font-size: 1.1em;
    line-height: 1.6;
    margin: 2rem 0;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #27ae60;
  `;

  // Obtener el contenedor principal o el body
  const app = document.getElementById('app') || document.body;
  
  // Agregar todos los elementos
  imageContainer.appendChild(img);
  app.appendChild(header);
  app.appendChild(imageContainer);
  app.appendChild(info);
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
