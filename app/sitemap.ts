import type { MetadataRoute } from "next";
import { projects, SITE_URL } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/proyectos/${project.slug}`,
    lastModified: new Date(project.lastModified),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-11-25"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}