# MemeOS

MemeOS es una aplicación web interactiva y divertida que permite a los usuarios explorar e interactuar con memes. Está construida utilizando tecnologías web modernas, ofreciendo una experiencia fluida con animaciones y validación de formularios.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Cómo Empezar](#cómo-empezar)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Ejecutar la Aplicación](#ejecutar-la-aplicación)
- [Uso](#uso)
- [Pruebas](#pruebas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- Navegar e interactuar con memes.
- Animación de "flip card" para interactuar con los memes usando `react-flip-card`.
- Diseño dinámico y responsivo con `Tailwind CSS`.
- Validación de formularios utilizando `React Hook Form`.
- Animaciones de escritura dinámica con `React Typed`.
- Obtención de datos con `Axios`.
- Configuración de un servidor falso para desarrollo local con `JSON Server`.
- Pruebas unitarias con `Vitest`.

## Tecnologías Utilizadas

- [React JS](https://reactjs.org/) - Para construir la interfaz de usuario.
- [React Router DOM](https://reactrouter.com/) - Para el enrutamiento del lado del cliente.
- [Tailwind CSS](https://tailwindcss.com/) - Para el estilo de la aplicación.
- [React Flip Card](https://github.com/mzabriskie/react-flip-card) - Para la animación de "flip card".
- [Vitest](https://vitest.dev/) - Para pruebas unitarias.
- [JSON Server](https://github.com/typicode/json-server) - Para crear una API REST falsa.
- [Axios](https://axios-http.com/) - Para realizar solicitudes HTTP.
- [React Typed](https://www.npmjs.com/package/react-typed) - Para el efecto de escritura animada.
- [React Hook Form](https://react-hook-form.com/) - Para la gestión y validación de formularios.

## Cómo Empezar

Para obtener una copia local de este proyecto y ponerla en marcha, sigue estos pasos:

### Requisitos Previos

Asegúrate de tener las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)

### Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/DarthVada36/memeos.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd MemeOS
    ```

3. Instala las dependencias necesarias:

    ```bash
    npm install
    ```

### Ejecutar la Aplicación

1. Inicia el servidor JSON (API falsa):

    ```bash
    npm run api
    ```

2. Inicia la aplicación:

    ```bash
    npm run dev
    ```

La aplicación estará corriendo en `http://localhost:3000`.

## Uso

- Explora los memes y utiliza la animación de flip para interactuar con ellos.
- Puedes enviar memes a través del formulario, con validación en vivo proporcionada por `React Hook Form`.
- Usa la entrada de texto animada para buscar memes, impulsada por `React Typed`.

## Pruebas

El proyecto incluye pruebas unitarias usando Vitest.

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm run test
```
