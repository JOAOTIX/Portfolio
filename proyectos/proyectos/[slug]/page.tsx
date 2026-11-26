import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects, SITE_URL } from "@/lib/portfolio-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Proyecto no encontrado" };

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/proyectos/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Joao Urteaga Sanchez`,
      description: project.shortDescription,
      url: `${SITE_URL}/proyectos/${project.slug}`,
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    codeRepository: project.github,
    url: `${SITE_URL}/proyectos/${project.slug}`,
    programmingLanguage: project.technologies,
    author: {
      "@type": "Person",
      name: "Joao Urteaga Sanchez",
      url: SITE_URL,
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al portafolio
        </Link>

        <header className="space-y-4 border-b border-border pb-8">
          <h1 className="text-4xl font-bold text-balance">{project.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded font-medium hover:opacity-90 transition-opacity"
            >
              Ver Código en GitHub <ExternalLink className="w-4 h-4" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded font-medium hover:bg-primary/10 transition-colors"
              >
                Ver Demo en Producción <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">El Desafío</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.challenge}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">La Solución</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.solution}
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            Destacados Técnicos
          </h2>
          <div className="grid gap-4">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            Stack Tecnológico
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-secondary rounded text-sm font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}