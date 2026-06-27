# Frontend - Prueba GF (React + Vite)

Este directorio contiene el frontend de la aplicación **Prueba GF**, desarrollado como una Single Page Application (SPA) utilizando **React 19** y **Vite**.

---

## 🛠️ Tecnologías y Características principales

*   **React 19**: Biblioteca UI para desarrollo de interfaces ágiles y declarativas.
*   **Vite**: Entorno de desarrollo ultrarrápido y empaquetador para JavaScript/TypeScript.
*   **ESLint**: Configurado para asegurar la calidad y consistencia del código JavaScript/React.

---

## 🚀 Configuración y Configuración Inicial

Para configurar este frontend localmente:

1.  Asegúrate de estar en el directorio `frontend/`:
    ```bash
    cd frontend
    ```
2.  Instala las dependencias necesarias:
    ```bash
    npm install
    ```

---

## 💻 Comandos de Desarrollo

Dentro del directorio `frontend/` tienes los siguientes scripts npm disponibles:

### Iniciar Servidor de Desarrollo
Para levantar el servidor de desarrollo local con soporte HMR (Hot Module Replacement):
```bash
npm run dev
```
La terminal te proporcionará la dirección local en la que se está ejecutando la aplicación (por defecto `http://localhost:5173`).

### Compilar para Producción
Para compilar y optimizar la aplicación para su distribución en entornos de producción:
```bash
npm run build
```
Los archivos optimizados resultantes se generarán en la carpeta `dist/`.

### Comprobar Errores de Código (Linting)
Para ejecutar el linter ESLint y verificar si el código se apega a las buenas prácticas y formato establecido:
```bash
npm run lint
```

### Previsualizar la Versión de Producción
Para servir y previsualizar de forma local la carpeta `dist/` compilada en el paso de producción:
```bash
npm run preview
```

---

## 📁 Directorios Clave

*   **`src/`**: Carpeta principal del código fuente.
    *   **[`main.jsx`](file:///d:/Dev/Proyectos/test/prueba-gf/frontend/src/main.jsx)**: Punto de entrada de la aplicación React.
    *   **[`App.jsx`](file:///d:/Dev/Proyectos/test/prueba-gf/frontend/src/App.jsx)**: Componente raíz que orquesta las vistas y componentes.
    *   **`App.css`** / **`index.css`**: Hojas de estilo globales y del componente principal.
*   **`public/`**: Contiene recursos estáticos que no son procesados por el build de Vite (como logos, iconos, etc.).
