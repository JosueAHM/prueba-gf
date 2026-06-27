# Backend - Prueba GF (Laravel 12)

Este directorio contiene el backend y la API de la aplicación **Prueba GF**, desarrollada con el framework **Laravel 12** y **PHP 8.2+**.

---

## 🛠️ Tecnologías y Características principales

*   **Laravel 12**: Framework PHP de última generación.
*   **Base de datos**: Soporte listo para MySQL (configurada para el puerto `3307` por defecto).
*   **Vite & TailwindCSS v4**: Integrado para el manejo y compilación de recursos internos del backend si fuesen necesarios.
*   **Soporte de Colas (Queue)**: Configurado mediante base de datos para procesamiento asíncrono.
*   **Laravel Pail**: Herramienta de visualización interactiva de logs integrada en la consola de desarrollo.

---

## ⚙️ Configuración y Configuración Inicial

Para configurar este backend de manera local:

1.  Asegúrate de estar en el directorio `backend/`:
    ```bash
    cd backend
    ```
2.  Crea un archivo de configuración `.env` copiando el ejemplo:
    ```bash
    cp .env.example .env
    ```
3.  Revisa y edita las credenciales de la base de datos en tu `.env` si es necesario:
    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3307
    DB_DATABASE=PruebaGF
    DB_USERNAME=root
    DB_PASSWORD=tu_contraseña
    ```
4.  Ejecuta el comando automatizado de instalación y migración de base de datos:
    ```bash
    composer run setup
    ```

---

## 💻 Comandos de Desarrollo

En esta aplicación se han definido varios scripts rápidos en `composer.json` para facilitar el flujo de desarrollo:

### 1. Iniciar Entorno Completo en Paralelo
Para no tener que abrir múltiples terminales, ejecuta:
```bash
composer run dev
```
Este comando utiliza `concurrently` para lanzar los siguientes procesos a la vez:
*   **Laravel Development Server**: Servidor HTTP en `http://localhost:8000`.
*   **Queue Listener**: Escucha y procesamiento de trabajos en segundo plano (`database` driver).
*   **Laravel Pail**: Visualización instantánea de registros y errores en la consola.
*   **Vite Dev Server**: Compilación rápida y HMR para recursos frontend del backend.

### 2. Ejecutar Pruebas Unitarias / Funcionales
Para ejecutar la suite de pruebas mediante PHPUnit:
```bash
composer run test
```

---

## 📁 Directorios Clave

*   **`app/Models/`**: Modelos Eloquent de la base de datos (por ejemplo, [User.php](file:///d:/Dev/Proyectos/test/prueba-gf/backend/app/Models/User.php)).
*   **`app/Http/Controllers/`**: Controladores HTTP para manejar las peticiones.
*   **`routes/`**: Rutas de la aplicación web y consola (ej. [web.php](file:///d:/Dev/Proyectos/test/prueba-gf/backend/routes/web.php)).
*   **`database/migrations/`**: Esquema e historial de base de datos en archivos PHP.
*   **`config/`**: Todos los archivos de configuración del framework.
