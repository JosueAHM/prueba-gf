# Proyecto Prueba GF

Este es el repositorio principal para el proyecto **Prueba GF**. El proyecto está estructurado como un monorepo que contiene una aplicación backend y una aplicación frontend independientes.

---

## Estructura del Repositorio

El repositorio se divide en dos directorios principales:

- **[`backend/`](backend/)**: API REST y lógica de negocio desarrollada con **Laravel 12** y **PHP 8.2+**. Utiliza **MySQL** como base de datos.
- **[`frontend/`](frontend/)**: Aplicación de cliente SPA (Single Page Application) desarrollada con **React 19** y compilada usando **Vite**.

Adicionalmente, se incluye un archivo de configuración **[`docker-compose.yml`](docker-compose.yml)** en la raíz para la contenedorización de servicios, el progreso/contexto UI en **[`CONTEXT.md`](CONTEXT.md)**, y un archivo de contexto de agentes de IA en **[`Agents.md`](Agents.md)**.

---

## Tecnologías Utilizadas

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

## Guía de Instalación y Configuración

Sigue estos pasos para configurar y levantar ambos proyectos de forma local.

### 1. Clonar el Proyecto

Si aún no lo has hecho, clona este repositorio en tu máquina local:

```bash
git clone <url-del-repositorio> prueba-gf
cd prueba-gf
```

---

## Ejecución con Docker (Alternativa Recomendada)

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
    docker compose exec backend php artisan migrate:fresh --seed
    ```

**Servicios disponibles:**

- **Frontend (React)**: `http://localhost:5173`
- **Backend (Laravel API)**: `http://localhost:8000`
- **Base de Datos (MariaDB)**: Mapeada al puerto local `3307`
- **Queue Worker**: Procesando colas en segundo plano de forma automática.

Para detener los contenedores en cualquier momento, ejecuta:

```bash
docker-compose down
```

---

## Ejecución Local (Sin Docker)

Si no usas Docker y prefieres trabajar en el proyecto directamente en tu entorno local, debes iniciar ambos servidores de desarrollo:

### Ejecutar el Backend (Laravel)

Desde el directorio `backend/`, ejecuta:

```bash
composer run dev
```

Este comando utiliza `concurrently` para ejecutar en paralelo:

- El servidor local de Laravel (`php artisan serve` en `http://localhost:8000`)
- El escuchador de colas de trabajo (`php artisan queue:listen`)
- El visor de logs interactivo (`php artisan pail`)
- El compilador de assets de Vite para el backend

### Ejecutar el Frontend (React + Vite)

Desde el directorio `frontend/`, ejecuta:

```bash
npm run dev
```

La aplicación web estará disponible en la URL indicada por la consola (normalmente `http://localhost:5173`).

---

## Scripts Disponibles y Comandos Útiles

### Backend (`/backend`)

- `composer run setup`: Instalación y configuración inicial completa.
- `composer run dev`: Servidor, cola de procesos, visor de logs y Vite corriendo en paralelo.
- `composer run test`: Ejecuta los tests automatizados mediante PHPUnit.

### Frontend (`/frontend`)

- `npm run dev`: Inicia el servidor de desarrollo de Vite con soporte para HMR (Hot Module Replacement).
- `npm run build`: Compila la aplicación de React para producción en la carpeta `dist`.
- `npm run lint`: Ejecuta el analizador de código ESLint para comprobar el estilo y errores en el código de React.
- `npm run preview`: Previsualiza localmente la compilación de producción.
