"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  const projects = [
    {
      id: 1,
      title: "Clínica Odontológica – Backend",
      description:
        "API REST robusta para la digitalización integral de procesos clínicos: gestión de turnos, historias clínicas y administración.",
      challenge:
        "Digitalizar el flujo operativo de un centro de salud, coordinando eficientemente a recepcionistas y doctores, garantizando la seguridad de datos médicos sensibles.",
      solution:
        "Backend desarrollado con Java 17 y Spring Boot  bajo una arquitectura en capas, priorizando la seguridad (Stateless) y la integridad de datos.",
      highlights: [
        {
          title: "Seguridad RBAC Avanzada",
          description:
            "Implementación de Spring Security con JWT para control de acceso granular por roles (Admin, Recepcionista, Doctor) y protección de historias clínicas.",
        },
        {
          title: "Lógica de Negocio & Integridad",
          description:
            'Algoritmos de validación de disponibilidad de turnos y estrategia de "Soft Delete" (Borrado Lógico) para preservar la trazabilidad de datos históricos.',
        },
        {
          title: "Infraestructura & Documentación",
          description:
            "Entorno totalmente containerizado con Docker Compose (App + MySQL) y documentación viva interactiva expuesta mediante Swagger UI.",
        },
      ],
      technologies: [
        "Java 17",
        "Spring Boot ",
        "Spring Security",
        "JWT",
        "MySQL ",
        "Docker",
        "Swagger",
      ],
      github:
        "https://github.com/Clinica-Odontologica/Clinica-odotologica-backend",
      demo: "#",
    },
    {
      id: 2,
      title: "Tuberías Peruanito",
      description:
        "Plataforma administrativa para la gestión de inventarios y generación de cotizaciones de tuberías mediante una tienda online.",
      challenge:
        "Centralizar la gestión de productos, categorías y usuarios, permitiendo generar cotizaciones precisas de forma escalable y agnóstica al entorno.",
      solution:
        "Desarrollo de una aplicación web en Java con Spring Boot para el backend y el frontend con React(TS) + Vite, totalmente containerizada para garantizar consistencia entre desarrollo y producción.",
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
      ],
      github: "https://github.com/Project-Peruvian-Shop/tp-backend",
      demo: "https://tuberiasperuanito.com/",
    },
    {
      id: 3,
      title: "Recordatorio App ",
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
    },
  ];

  const skills = {
    Lenguajes: [
      "Java (17, 21)",
      "SQL",
      "JavaScript",
      "TypeScript",
      "HTML & CSS",
      "Python",
      "Php",
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
    "Devops & Cloud": ["Docker", "AWS (EC2)", "Linux"],
    "Patrones & Arquitectura": ["MVC", "SOLID", "Monolitos"],
    Herramientas: [
      "Git & Github",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "Postman",
      "Docker Compose",
      "Figma",
      "Jira",
      "MySQL Workbench",
    ],
  };

  const experience = [
    {
      period: "2024 - 2025 ",
      title: "Junior full Stack Developer",
      company: "Tuberias Peruanito S.A.C.",
      description:
        "Desarrollé e implementé un E-commerce con dashboard administrativo completo utilizando Java (Spring Boot) para el backend y React(TypeScript) + Vite para el frontend. Implementé funcionalidades clave como gestión de productos, usuarios, categorias y de cotizaciones.",
    },
    {
      period: "2026 - actualidad",
      title: "Asistente de Sistemas",
      company: "Movil Bus S.A.C.",
      description:
        "Soporte técnico funcional en entornos empresariales, brindando asistencia a usuarios finales, resolviendo incidencias realizando cambios mediante consultas SQL y reportando incidencias con los sistemas desarrollados.",
    },
  ];
  const certificate = [
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
        "Completé un curso intensivo sobre desarrollo backend con node.js y express.js, adquiriendo habilidades prácticas en la creación de APIs RESTful, seguridad con JWT y manejo de bases de datos relacionales.",
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
      title: "Prático de Frontend developer",
      company: "Platzi",
      description:
        "Completé un curso sobre desarrollo frontend con HTML5 , CSS3 y JavaScript, adquiriendo habilidades prácticas en la creación de interfaces de usuario dinámicas y responsivas.",
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-balance">
                Joao Urteaga Sanchez
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Junior Full Stack Developer
              </p>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                Especializado en crear arquitecturas robustas, escalables y
                seguras. 1 año desarrollando soluciones empresariales con Java
                y Spring Boot para el back y React(TypeScript) para el front.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://github.com/JOAOTIX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/joao-urteaga-sanchez-724740369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:joao.software.dev@gmail.com"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 border-b border-border bg-background/80 backdrop-blur-sm z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto">
            {["about", "skills", "experience", "projects","certificate"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`py-4 px-1 border-b-2 transition-colors capitalize whitespace-nowrap hover:cursor-pointer ${
                  activeSection === section
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* About Section */}
        {activeSection === "about" && (
          <section className="space-y-12 animate-in fade-in duration-500">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Soy un desarrollador Full stack apasionado por construir sistemas
                  escalables, seguros y eficientes. Con 1 año de experiencia en
                  Java (SpringBoot) para el back y React(TypeScript) para el
                  front, he participado en proyectos de diversa índole, desde
                  aplicaciones empresariales hasta plataformas de e-commerce.
                </p>
                <p>
                  Mi especialidad es la arquitectura de software: diseño
                  patrones robustos, implemento seguridad enterprise, y optimizo
                  performance en sistemas de alta concurrencia. Creo que el buen
                  código es aquel que es mantenible, testeable y escalable.
                </p>
                <p>
                  Aunque mi fortaleza reside en el ecosistema Java, soy
                  pragmático a la hora de elegir herramientas. Tengo la
                  versatilidad para desarrollar integraciones con Node.js o
                  colaborar en el frontend con React cuando el proyecto lo
                  requiere, manteniendo siempre una visión integral del
                  producto.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  Filosofía de Desarrollo
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>SOLID Principles:</strong> Código desacoplado y
                      fácil de mantener
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Clean Code:</strong> Legibilidad y mantenibilidad
                      como prioridad
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Security First:</strong> Seguridad integrada desde
                      el diseño
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Metodologías</h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Agile/Scrum:</strong> Sprints de 2 semanas con
                      retrospectivas
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>Code Review:</strong> Mejora continua del código
                      en equipo
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">•</span>
                    <span>
                      <strong>DevOps:</strong> Infraestructura como código y
                      automatización
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <section className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold">Habilidades Técnicas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <h3 className="text-lg font-bold mb-4 text-primary">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-foreground rounded text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <section className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold">Experiencia Profesional</h2>
            <div className="space-y-6">
              {experience.map((job, idx) => (
                <div key={idx} className="border-l-2 border-primary pl-6 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
            <div className="space-y-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-6 mb-6">
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          El Desafío
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-2">
                          La Solución
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <h4 className="font-bold text-primary">
                        Destacados Técnicos
                      </h4>
                      <div className="grid gap-4">
                        {project.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="bg-secondary/30 rounded p-4 border border-border/50"
                          >
                            <h5 className="font-bold mb-1">
                              {highlight.title}
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              {highlight.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-primary mb-3">
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary/50 rounded text-sm text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity"
                      >
                        Ver Código <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded font-medium hover:bg-primary/10 transition-colors"
                      >
                        Ver Demo <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {/* Certificate Section */}
        {activeSection === "certificate" && (
          <section className="space-y-8 animate-in fade-in duration-500">
            <h2 className="text-3xl font-bold">Certificados</h2>
            <div className="space-y-6">
              {certificate.map((cert, idx) => (
                <div key={idx} className="border-l-2 border-primary pl-6 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <p className="text-primary font-medium">{cert.company}</p>
                    </div>
                    <span className="text-muted-foreground text-sm whitespace-nowrap">
                      {cert.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 mt-5 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity"
                  >
                    Ver Certificado <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-muted-foreground">
                © 2024 Joao Urteaga Sanchez. Junior Full Stack Developer.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/JOAOTIX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/joao-urteaga-sanchez-724740369?trk=contact-info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:joao.software.dev@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
