export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  highlights: ProjectHighlight[];
  technologies: string[];
  github: string;
  demo: string;
  lastModified: string;
}

export const SITE_URL = "https://joao-urteaga-dev.vercel.app";

export const projects: Project[] = [
  {
    id: 1,
    slug: "clinica-odontologica-full-stack",
    title: "Clínica Odontológica Full-Stack",
    shortDescription:
      "Plataforma clínica full-stack con Java 17, Spring Boot, React, TypeScript y Docker para gestión de citas y control de acceso RBAC.",
    description:
      "Plataforma web integral para la digitalización de procesos clínicos, centralizando la gestión de citas, roles del personal y administración de datos médicos en tiempo real.",
    challenge:
      "Reemplazar flujos de trabajo manuales con un ecosistema digital seguro que coordine de forma eficiente a administradores, recepcionistas y doctores, garantizando la inmutabilidad y privacidad de los datos sensibles.",
    solution:
      "Arquitectura full-stack desarrollando una API REST en Spring Boot (Java 17) acoplada a un dashboard interactivo en React (TypeScript/Vite). El sistema completo fue containerizado y expuesto a producción de forma segura utilizando Cloudflare Tunnels.",
    highlights: [
      {
        title: "Seguridad y RBAC Dinámico",
        description:
          "Implementación de Spring Security y JWT con encriptación BCrypt para un control de acceso granular. Incluye mutación segura de roles y estados desde un panel administrativo interactivo.",
      },
      {
        title: "Integridad y Reglas de Negocio",
        description:
          "Desarrollo de algoritmos para la validación de disponibilidad de turnos y aplicación de estrategias de 'Soft Delete' (Borrado Lógico) para mantener la trazabilidad histórica del sistema.",
      },
      {
        title: "Infraestructura & Despliegue Zero-Config",
        description:
          "Entorno 100% aislado con Docker Compose (Frontend, Backend, MySQL) expuesto a internet mediante túneles seguros, acompañado de documentación interactiva expuesta en Swagger UI.",
      },
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "React",
      "TypeScript",
      "Vite",
      "Docker",
      "Cloudflare Tunnels",
      "Swagger",
    ],
    github: "https://github.com/Clinica-Odontologica/Clinica-odotologica-backend",
    demo: "",
    lastModified: "2026-11-25",
  },
  {
    id: 2,
    slug: "tuberias-peruanito",
    title: "Tuberías Peruanito",
    shortDescription:
      "E-commerce y dashboard administrativo en Java Spring Boot, React y MySQL containerizado con Docker para gestión de inventarios y cotizaciones.",
    description:
      "Plataforma administrativa para la gestión de inventarios y generación de cotizaciones de tuberías mediante una tienda online.",
    challenge:
      "Centralizar la gestión de productos, categorías y usuarios, permitiendo generar cotizaciones precisas de forma escalable y agnóstica al entorno.",
    solution:
      "Desarrollo de una aplicación web en Java con Spring Boot para el backend y el frontend con React (TS) + Vite, totalmente containerizada para garantizar consistencia entre desarrollo y producción.",
    highlights: [
      {
        title: "Arquitectura Containerizada",
        description:
          'Orquestación completa con Docker Compose, separando la aplicación y la base de datos MySQL en contenedores aislados para un despliegue "zero-config".',
      },
      {
        title: "Gestión de Cotizaciones",
        description:
          "Lógica de negocio robusta para la administración de catálogos y cálculo de cotizaciones, con persistencia transaccional en MySQL.",
      },
      {
        title: "Documentación Interactiva",
        description:
          "Integración de Swagger UI para exponer, documentar y probar los endpoints de la API en tiempo real.",
      },
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Docker",
      "Swagger",
      "React",
      "TypeScript",
      "Vite",
    ],
    github: "https://github.com/Project-Peruvian-Shop/tp-backend",
    demo: "https://tuberiasperuanito.com/",
    lastModified: "2026-11-25",
  },
  {
    id: 3,
    slug: "recordatorio-app",
    title: "Recordatorio App",
    shortDescription:
      "Aplicación MERN (Node.js, Express, MongoDB, Next.js) con alertas automatizadas vía WhatsApp Cloud API y Firebase Push.",
    description:
      "Aplicación para gestión de tareas con sistema automatizado de notificaciones vía WhatsApp y Push.",
    challenge:
      "Los usuarios necesitaban un sistema proactivo que garantizara el cumplimiento de plazos mediante alertas multicanal automatizadas.",
    solution:
      "Backend en Node.js/Express con workers programados para calcular vencimientos e integración con APIs de mensajería y notificaciones push, todo documentado con Swagger y desplegado en un entorno Dockerizado. Todo el stack MERN (MongoDB, Express, React/Next, Node) para una solución full-stack moderna y escalable.",
    highlights: [
      {
        title: "Notificaciones Multicanal",
        description:
          "Integración compleja con WhatsApp Cloud API (Meta) y Firebase Cloud Messaging para alertas push y mensajes programados (3 días antes).",
      },
      {
        title: "Arquitectura Escalable",
        description:
          "API documentada con Swagger/OpenAPI 3.0, autenticación JWT segura y base de datos MongoDB optimizada para documentos flexibles.",
      },
      {
        title: "Infraestructura como Código",
        description:
          "Entorno de desarrollo y producción estandarizado mediante Docker y Docker Compose para el stack MERN (MongoDB, Express, React/Next, Node).",
      },
    ],
    technologies: [
      "Node.js 20",
      "Express",
      "MongoDB",
      "WhatsApp API",
      "Firebase FCM",
      "Docker",
      "Swagger",
      "Next.js",
      "React",
      "TypeScript",
    ],
    github: "https://github.com/Recordatorio-app/Recordatorio-app-backend",
    demo: "https://recordatorio-app.vercel.app/",
    lastModified: "2026-11-25",
  },
];

export const skills: Record<string, string[]> = {
  Lenguajes: [
    "Java (17, 21)",
    "SQL",
    "JavaScript",
    "TypeScript",
    "HTML & CSS",
    "Python",
    "PHP",
  ],
  "Frameworks & Librerías": [
    "Spring Boot",
    "Spring Security",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Bootstrap",
    "Tailwind CSS",
    "WordPress",
  ],
  "Bases de Datos": ["PostgreSQL", "MySQL", "MongoDB"],
  Seguridad: ["JWT", "Encryption (AES, RSA)", "CORS & CSRF"],
  "DevOps & Cloud": ["Docker", "AWS (EC2)", "Linux"],
  "Patrones & Arquitectura": ["MVC", "SOLID", "Monolitos"],
  Herramientas: [
    "Git & GitHub",
    "Visual Studio Code",
    "IntelliJ IDEA",
    "Postman",
    "Docker Compose",
    "Figma",
    "Jira",
    "MySQL Workbench",
  ],
};

export const experience = [
  {
    period: "2024 - 2025",
    title: "Junior Full Stack Developer",
    company: "Tuberias Peruanito S.A.C.",
    description:
      "Desarrollé e implementé un E-commerce con dashboard administrativo completo utilizando Java (Spring Boot) para el backend y React (TypeScript) + Vite para el frontend. Implementé funcionalidades clave como gestión de productos, usuarios, categorías y cotizaciones.",
  },
  {
    period: "2026 - actualidad",
    title: "Asistente de Sistemas",
    company: "Movil Bus S.A.C.",
    description:
      "Asistente de sistemas en entornos empresariales, brindando asistencia a usuarios finales, resolviendo incidencias mediante consultas SQL y reportando incidencias con los sistemas desarrollados.",
  },
];

export const certificates = [
  {
    period: "2025",
    title: "Programación con Java Standard",
    company: "Fundación Telefónica del Perú",
    description:
      "Completé un curso de Java Standard, adquiriendo conocimientos fundamentales en programación orientada a objetos, estructuras de datos y manejo de excepciones.",
    link: "https://drive.google.com/file/d/169nmWFgtKHefbiU97iBzNt_3RNFdlRRS/view?usp=drive_link",
  },
  {
    period: "2024",
    title: "Java Foundations",
    company: "Oracle Academy",
    description:
      "Completé un curso de Java Foundations, adquiriendo conocimientos básicos en programación orientada a objetos y fundamentos de Java.",
    link: "https://drive.google.com/file/d/1oBNs1P_xAsa97PjMhYGzEorhAEIfDDh_/view?usp=drive_link",
  },
  {
    period: "2026",
    title: "Desarrollo Back-end (nivel básico)",
    company: "Ministerio de Trabajo y Promoción del Empleo",
    description:
      "Completé un curso intensivo sobre desarrollo backend con Node.js y Express.js, adquiriendo habilidades prácticas en la creación de APIs RESTful, seguridad con JWT y manejo de bases de datos relacionales.",
    link: "https://drive.google.com/file/d/1Yw_NpaLRtN3NXhOD3Q3tDS4PhEdPjJSj/view?usp=drive_link",
  },
  {
    period: "2024",
    title: "Database Programming with SQL",
    company: "Oracle Academy",
    description:
      "Completé un curso de Database Programming with SQL, adquiriendo habilidades en la creación y gestión de bases de datos relacionales utilizando SQL.",
    link: "https://drive.google.com/file/d/1WDSzZ3gBG9va7IvMys33nA1gcawBidDH/view?usp=drive_link",
  },
  {
    period: "2025",
    title: "Práctico de Frontend Developer",
    company: "Platzi",
    description:
      "Completé un curso sobre desarrollo frontend con HTML5, CSS3 y JavaScript, adquiriendo habilidades prácticas en la creación de interfaces de usuario dinámicas y responsivas.",
    link: "https://drive.google.com/file/d/1cnOi51bNP9YnMzvJRt9SmPoPUzg1GFea/view?usp=drive_link",
  },
  {
    period: "2025",
    title: "Frontend Developer",
    company: "Platzi",
    description:
      "Completé un curso completo sobre desarrollo frontend con HTML5, CSS3 y JavaScript, adquiriendo conocimientos fundamentales en la creación de interfaces de usuario, el UX & UI, el diseño responsivo y la accesibilidad.",
    link: "https://drive.google.com/file/d/1k_096wBkDt7NLhVBWnepk42xWpl2Ts1A/view?usp=drive_link",
  },
  {
    period: "2025",
    title: "Diseño web con HTML5 + CSS",
    company: "Fundación Telefónica del Perú",
    description:
      "Completé un curso de Diseño web con HTML5 y CSS, adquiriendo conocimientos fundamentales en la creación de páginas web estáticas y estilos visuales.",
    link: "https://drive.google.com/file/d/1WN2fvn0HjHC_2JBsVK0PG-kqilZkgOIj/view?usp=drive_link",
  },
];