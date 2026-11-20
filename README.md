# Portafolio de Benjamin

Portafolio personal desarrollado con React, Vite y Tailwind CSS. Presenta el perfil, las tecnologías y proyectos de desarrollo web, móvil y de escritorio.

## Requisitos

- Node.js
- npm

## Empezar

```bash
npm install
npm run dev
```

Vite muestra la dirección local en la terminal, normalmente `http://localhost:5173`.

## Comandos

```bash
npm run build
npm run preview
npm run lint
```

## Publicar en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub en la rama `main`.
2. En el repositorio, abre **Settings > Pages**. Si GitHub muestra que Pages aún no está habilitado, selecciona **Build and deployment > Source > GitHub Actions**.
3. Cada push a `main` ejecutará el workflow de `.github/workflows/deploy.yml` y publicará el sitio. También puedes iniciarlo manualmente desde la pestaña **Actions**.

El workflow configura automáticamente la ruta base de Vite para el nombre del repositorio. La página publicada aparecerá en **Settings > Pages** cuando termine correctamente el primer despliegue.

Si `configure-pages` falla con un error `404` indicando que no encuentra el sitio de Pages, habilítalo primero en **Settings > Pages** como se indica arriba y vuelve a ejecutar el workflow. El aviso sobre Node.js 20 es una advertencia de las versiones de las acciones, no el error que detiene el despliegue.

## Estructura

```text
public/
  avatar.png
  favicon.svg
  projects/
    cuentas-claras.png
    guia-fotos.png
    lifeinvader.png
    mini-dbeaver.png
src/
  components/
  data/portfolioData.js
  App.jsx
  index.css
  main.jsx
index.html
package.json
```

Las dependencias instaladas (`node_modules`), el resultado de compilación (`dist`) y los archivos del sistema no se incluyen en Git, según `.gitignore`.
