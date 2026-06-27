# Proyecto Prueba GF (Monorepo)

Este es el repositorio principal para el proyecto **Prueba GF**. El proyecto está estructurado como un monorepo que contiene una aplicación backend y una aplicación frontend independientes.

---

## 📂 Estructura del Repositorio

El repositorio se divide en dos directorios principales:

*   **[`backend/`](backend/)**: API REST y lógica de negocio desarrollada con **Laravel 12** y **PHP 8.2+**. Utiliza **MySQL** como base de datos.
*   **[`frontend/`](frontend/)**: Aplicación de cliente SPA (Single Page Application) desarrollada con **React 19** y compilada usando **Vite**.

Adicionalmente, se incluye un archivo de configuración **[`docker-compose.yml`](docker-compose.yml)** en la raíz para la contenedorización de servicios, el progreso/contexto UI en **[`CONTEXT.md`](CONTEXT.md)**, y un archivo de contexto de agentes de IA en **[`Agents.md`](Agents.md)**.

---

## 🛠️ Tecnologías Utilizadas

### Backend
- **Laravel 12** (PHP 8.2+)
- **Base de Datos**: MySQL (Puerto configurado en 3307)
- **Soporte asíncrono**: Cola de procesos configurada (`queue:listen`)
- **Herramientas de dev**: Laravel Pail (logs), Pint, Vite

### Frontend
- **React 19** con Vite
- **Material UI (MUI)**: Sistema de diseño y componentes (`Grid`, `Dialog`, `TextField`, etc.)
- **Tema personalizado**: Fuente 'Outfit', bordes redondeados (16px) y colores primarios azul/púrpura.
- **Gestión de peticiones**: Axios para conectar con la API REST.

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

## 🐳 Ejecución con Docker (Alternativa Recomendada)

Si prefieres no instalar dependencias localmente (PHP, Node.js, MySQL), el proyecto incluye una configuración completa y lista para usar con **Docker** y **Docker Compose**.

1.  Asegúrate de tener Docker instalado y ejecutándose en tu sistema.
2.  (Recomendado) Crea el archivo `.env` del backend para tener las claves de aplicación listas:
    ```bash
    cp backend/.env.example backend/.env
    ```
3.  Desde la raíz del proyecto, construye y levanta todos los contenedores en segundo plano:
    ```bash
    docker-compose up -d --build
    ```
4.  Genera la clave de aplicación y ejecuta las migraciones de la base de datos dentro del contenedor:
    ```bash
    docker-compose exec backend php artisan key:generate
    docker-compose exec backend php artisan migrate --force
    ```

**Servicios disponibles:**
*   **Frontend (React)**: `http://localhost:5173`
*   **Backend (Laravel API)**: `http://localhost:8000`
*   **Base de Datos (MariaDB)**: Mapeada al puerto local `3307`
*   **Queue Worker**: Procesando colas en segundo plano de forma automática.

Para detener los contenedores en cualquier momento, ejecuta:
```bash
docker-compose down
```

---

## 💻 Ejecución Local (Sin Docker)

Si no usas Docker y prefieres trabajar en el proyecto directamente en tu entorno local, debes iniciar ambos servidores de desarrollo:

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

## 📝 Scripts Disponibles y Comandos Útiles

### Backend (`/backend`)
*   `composer run setup`: Instalación y configuración inicial completa.
*   `composer run dev`: Servidor, cola de procesos, visor de logs y Vite corriendo en paralelo.
*   `composer run test`: Ejecuta los tests automatizados mediante PHPUnit.

### Frontend (`/frontend`)
*   `npm run dev`: Inicia el servidor de desarrollo de Vite con soporte para HMR (Hot Module Replacement).
*   `npm run build`: Compila la aplicación de React para producción en la carpeta `dist`.
*   `npm run lint`: Ejecuta el analizador de código ESLint para comprobar el estilo y errores en el código de React.
*   `npm run preview`: Previsualiza localmente la compilación de producción.

---

## 🔄 Estado Actual del Proyecto (Últimas Actualizaciones)
- Se ha refactorizado visualmente el frontend adoptando por completo **Material UI (MUI)**.
- El formulario de usuarios (`UserFormDialog.jsx`) ha sido actualizado a un sistema de rejilla (Grid) que permite mostrar dos columnas en escritorio y se adapta correctamente a dispositivos móviles.
- Se configuró la visualización de notificaciones de éxito y error mediante Toast (`Snackbar` de MUI) para un mejor feedback al usuario en las operaciones del CRUD.
- Implementación de un diálogo de confirmación de eliminación (`DeleteConfirmDialog.jsx`) y tabla con diseño moderno y funcional.
