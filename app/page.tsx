import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { PortfolioNav } from "@/components/PortafolioNav";
import {
  projects,
  skills,
  experience,
  certificates,
} from "@/lib/portfolio-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function PortfolioPage() {
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
                Full Stack Developer
              </p>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                Especializado en crear arquitecturas robustas, escalables y
                seguras. Desarrollando soluciones empresariales con Java y
                Spring Boot para el backend y React (TypeScript) para el
                frontend.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/JOAOTIX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/joao-urteaga-sanchez-724740369"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:joao.software.dev@gmail.com"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <PortfolioNav />

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* About Section */}
        <section id="about" className="space-y-12 scroll-mt-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy un desarrollador Full Stack apasionado por construir
                sistemas escalables, seguros y eficientes. Con experiencia en
                Java (Spring Boot) para el backend y React (TypeScript) para el
                frontend, he participado en proyectos de diversa índole, desde
                aplicaciones empresariales hasta plataformas de e-commerce.
              </p>
              <p>
                Mi especialidad es la arquitectura de software: diseño patrones
                robustos, implemento seguridad enterprise y optimizo performance
                en sistemas de alta concurrencia. Creo que el buen código es
                aquel que es mantenible, testeable y escalable.
              </p>
              <p>
                Aunque mi fortaleza reside en el ecosistema Java, soy pragmático
                a la hora de elegir herramientas. Tengo la versatilidad para
                desarrollar integraciones con Node.js o colaborar en el frontend
                con React y Next.js cuando el proyecto lo requiere, manteniendo
                siempre una visión integral del producto.
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
                    <strong>Code Review:</strong> Mejora continua del código en
                    equipo
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

        {/* Skills Section */}
        <section id="skills" className="space-y-8 scroll-mt-24">
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

        {/* Experience Section */}
        <section id="experience" className="space-y-8 scroll-mt-24">
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

        {/* Projects Section */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <article
                key={project.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">
                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>
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
                          <h5 className="font-bold mb-1">{highlight.title}</h5>
                          <p className="text-sm text-muted-foreground">
                            {highlight.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-3">Tecnologías</h4>
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

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity"
                    >
                      Ver Caso de Estudio <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded font-medium hover:border-primary transition-colors"
                    >
                      Ver Código <ExternalLink className="w-4 h-4" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded font-medium hover:bg-primary/10 transition-colors"
                      >
                        Ver Demo <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certificate Section */}
        <section id="certificate" className="space-y-8 scroll-mt-24">
          <h2 className="text-3xl font-bold">Certificados</h2>
          <div className="space-y-6">
            {certificates.map((cert, idx) => (
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
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-muted-foreground">
                © {new Date().getFullYear()} Joao Urteaga Sanchez. Full Stack
                Developer.
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
                href="https://www.linkedin.com/in/joao-urteaga-sanchez-724740369"
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