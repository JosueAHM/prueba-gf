# Proyecto Prueba GF (Monorepo)

Este es el repositorio principal para el proyecto **Prueba GF**. El proyecto está estructurado como un monorepo que contiene una aplicación backend y una aplicación frontend independientes.

---

## 📂 Estructura del Repositorio

El repositorio se divide en dos directorios principales:

*   **[`backend/`](file:///d:/Dev/Proyectos/test/prueba-gf/backend)**: API REST y lógica de negocio desarrollada con **Laravel 12** y **PHP 8.2+**. Utiliza **MySQL** como base de datos.
*   **[`frontend/`](file:///d:/Dev/Proyectos/test/prueba-gf/frontend)**: Aplicación de cliente SPA (Single Page Application) desarrollada con **React 19** y compilada usando **Vite**.

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno local:

*   **PHP 8.2** o superior
*   **Composer** (gestor de dependencias de PHP)
*   **Node.js** (v18.0.0 o superior) y **npm**
*   **Servidor MySQL** (en funcionamiento en el puerto `3307` o el configurado en el archivo `.env`) o un contenedor **Docker** para la base de datos.

---

## 🚀 Guía de Instalación y Configuración

Sigue estos pasos para configurar y levantar ambos proyectos de forma local.

### 1. Clonar el Proyecto

Si aún no lo has hecho, clona este repositorio en tu máquina local:
```bash
git clone <url-del-repositorio> prueba-gf
cd prueba-gf
```

---

### 2. Configuración del Backend (Laravel)

El backend de Laravel cuenta con comandos automatizados para facilitar la configuración inicial.

1.  Accede al directorio del backend:
    ```bash
    cd backend
    ```
2.  Crea tu archivo de entorno a partir de la plantilla (ya preconfigurado para usar la base de datos `PruebaGF` en el puerto `3307`):
    ```bash
    cp .env.example .env
    ```
    *Nota: Si tu base de datos MySQL corre en otro puerto o con distintas credenciales, edita las variables `DB_*` en tu nuevo archivo `.env`.*
3.  Ejecuta el script de instalación automatizado:
    ```bash
    composer run setup
    ```
    Este comando ejecutará internamente:
    *   `composer install` (instalación de dependencias de PHP)
    *   Generación de la clave de aplicación (`php artisan key:generate`)
    *   Ejecución de las migraciones de base de datos (`php artisan migrate --force`)
    *   `npm install` y `npm run build` para la configuración de assets en el backend.

---

### 3. Configuración del Frontend (React + Vite)

1.  Desde la raíz del proyecto, accede al directorio del frontend:
    ```bash
    cd frontend
    ```
2.  Instala las dependencias necesarias:
    ```bash
    npm install
    ```

---

## 💻 Ejecución en Desarrollo

Para trabajar en el proyecto localmente, debes iniciar ambos servidores de desarrollo:

### Ejecutar el Backend (Laravel)

Desde el directorio `backend/`, ejecuta:
```bash
composer run dev
```
Este comando utiliza `concurrently` para ejecutar en paralelo:
*   El servidor local de Laravel (`php artisan serve` en `http://localhost:8000`)
*   El escuchador de colas de trabajo (`php artisan queue:listen`)
*   El visor de logs interactivo (`php artisan pail`)
*   El compilador de assets de Vite para el backend

### Ejecutar el Frontend (React + Vite)

Desde el directorio `frontend/`, ejecuta:
```bash
npm run dev
```
La aplicación web estará disponible en la URL indicada por la consola (normalmente `http://localhost:5173`).

---

## 📝 Scripts Disponibles

### Backend (`/backend`)
*   `composer run setup`: Instalación y configuración inicial completa.
*   `composer run dev`: Servidor, cola de procesos, visor de logs y Vite corriendo en paralelo.
*   `composer run test`: Ejecuta los tests automatizados mediante PHPUnit.

### Frontend (`/frontend`)
*   `npm run dev`: Inicia el servidor de desarrollo de Vite con soporte para HMR (Hot Module Replacement).
*   `npm run build`: Compila la aplicación de React para producción en la carpeta `dist`.
*   `npm run lint`: Ejecuta el analizador de código ESLint para comprobar el estilo y errores en el código de React.
*   `npm run preview`: Previsualiza localmente la compilación de producción.
