const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

export const portfolioData = {
  profile: {
    name: "BENJAMIN",
    role: "DESARROLLADOR DE SOFTWARE",
    subtitle: "WEB • MOBILE • DESKTOP",
    year: "2026",
    location: "MÉXICO",
    status: "DISPONIBLE PARA PROYECTOS & PASANTÍAS",
    github: "https://github.com/benja75468ITS",
    githubUsername: "benja75468ITS",
    avatar: assetUrl("avatar.png"),
    bio: "Desarrollador en formación con un enfoque integral. A lo largo de este semestre he explorado desde el desarrollo web front-end (HTML, CSS, JavaScript) hasta el desarrollo de aplicaciones móviles y de escritorio (Flutter, Java). Me apasiona crear interfaces limpias, funcionales y resolver problemas complejos mediante el código, como la gestión de bases de datos o la simplificación de deudas."
  },

  pillars: [
    {
      code: "01",
      title: "DESARROLLO FRONT-END & WEB",
      subtitle: "INTERFACES LIMPIAS & RESPONSIVAS",
      description: "Diseño y maquetación de plataformas web con JavaScript moderno, React, arquitectura CSS pura y maquetación de alto contraste totalmente responsiva.",
      stack: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      code: "02",
      title: "APLICACIONES MÓVILES & ESCRITORIO",
      subtitle: "MULTIPLATAFORMA & CI/CD",
      description: "Creación de aplicaciones móviles fluidas con Flutter y software de escritorio con JavaFX, automatizando compilaciones APK con GitHub Actions.",
      stack: ["Flutter", "Dart", "Java", "JavaFX", "GitHub Actions"]
    },
    {
      code: "03",
      title: "GESTIÓN DE BASES DE DATOS & SSH",
      subtitle: "PERSISTENCIA & PROTOCOLOS SEGUROS",
      description: "Modelado relacional y ejecución CRUD en servidores remotos MariaDB a través de túneles SSH seguros, con sincronización y respaldos locales en SQLite.",
      stack: ["MariaDB", "SQLite", "SQL", "SSH", "Git"]
    }
  ],

  skills: {
    lenguajes: ["JavaScript", "Dart", "Java", "HTML5", "CSS3", "SQL"],
    frameworks: ["React (en aprendizaje)", "Flutter", "JavaFX"],
    basesDeDatos: ["MariaDB", "SQLite"],
    herramientas: ["Git", "GitHub", "GitHub Actions", "SSH"]
  },

  projects: [
    {
      id: "01",
      title: "InstantesEternos - Guía de Fotografía",
      shortTitle: "Guía de Fotografía",
      category: "DESARROLLO WEB FRONT-END",
      description: "Sitio web informativo y estático que sirve como guía de fotografía desde cero. Cuenta con un diseño editorial de alto contraste, modo oscuro y es totalmente responsivo. La interactividad se maneja con Vanilla JavaScript para la navegación y la carga dinámica de contenido.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github_url: "https://github.com/benja75468ITS/GuiaFotos",
      live_url: "https://benja75468its.github.io/GuiaFotos",
      image: assetUrl("projects/guia-fotos.png")
    },
    {
      id: "02",
      title: "LifeInvader - Red Social",
      shortTitle: "LifeInvader",
      category: "MAQUETACIÓN CSS PURO & BRUTALISMO",
      description: "Práctica integral de maquetación web responsiva que simula una interfaz de red social moderna. Incluye múltiples vistas como perfiles, secciones de chat y muros de publicaciones, replicando un diseño tipo 'brutalista' urbano con un fuerte énfasis en layouts complejos usando CSS puro.",
      technologies: ["HTML", "CSS"],
      github_url: "https://github.com/benja75468ITS/ejercio3Dise-oweb",
      live_url: null,
      image: assetUrl("projects/lifeinvader.png")
    },
    {
      id: "03",
      title: "Cuentas Claras",
      shortTitle: "Cuentas Claras",
      category: "APLICACIÓN MÓVIL & CI/CD",
      description: "Aplicación multiplataforma para dividir gastos grupales y consultar saldos de forma sencilla. Permite gestionar grupos de gastos compartidos y registrar deudas. Incluye flujos de integración y despliegue continuo (CI/CD) mediante GitHub Actions para generar paquetes APK.",
      technologies: ["Flutter", "Dart", "GitHub Actions"],
      github_url: "https://github.com/benja75468ITS/cuentas_claras",
      live_url: null,
      image: assetUrl("projects/cuentas-claras.png")
    },
    {
      id: "04",
      title: "Mini DBeaver",
      shortTitle: "Mini DBeaver",
      category: "SOFTWARE DE ESCRITORIO & SSH",
      description: "Herramienta de escritorio construida para la gestión visual de bases de datos MariaDB. Su característica principal es establecer un túnel SSH seguro para conectarse a servidores remotos, descargar copias locales en SQLite y ejecutar operaciones CRUD de manera fluida e intuitiva.",
      technologies: ["Java", "JavaFX", "MariaDB", "SQLite", "SSH"],
      github_url: "https://github.com/benja75468ITS/MiniDBeaverGG",
      live_url: null,
      image: assetUrl("projects/mini-dbeaver.png")
    }
  ]
};
