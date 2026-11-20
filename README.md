# Portafolio de Benjamin

Sitio personal para presentar mi perfil, las tecnologías que utilizo y algunos de mis proyectos de desarrollo web, móvil y de escritorio.

## Tecnologías

- React
- Vite
- Tailwind CSS

## Desarrollo local

Necesitas [Node.js](https://nodejs.org/) y npm instalados.

```bash
npm install
npm run dev
```

Abre en el navegador la dirección local que muestra Vite en la terminal, normalmente `http://localhost:5173`.

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la versión de producción. |
| `npm run lint` | Revisa el código con Oxlint. |

## Publicación en GitHub Pages

1. Sube el proyecto a un repositorio de GitHub en la rama `main`.
2. En el repositorio, ve a **Settings → Pages** y selecciona **GitHub Actions** como origen de publicación.
3. Cada cambio que subas a `main` iniciará la publicación automáticamente. También puedes iniciar el workflow desde la pestaña **Actions**.

Cuando termine la primera publicación, GitHub mostrará el enlace del sitio en **Settings → Pages**. La ruta base se configura automáticamente para el repositorio.
