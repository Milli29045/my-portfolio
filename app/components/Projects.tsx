
"use client";

import { useState } from "react";

type Project = {
  name: string;
  description: string;
  technology: string;
  link: string;
};

type ProjectsProps = {
  projects: Project[];
};

const categories = [
  "All",
  "Next.js",
  "React",
  "Laravel",
  "MERN Stack",
];

export default function Projects({ projects }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.technology
            .toLowerCase()
            .includes(activeFilter.toLowerCase())
        );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <p className="mb-3 font-semibold text-cyan-400">
        WEB DEVELOPMENT PORTFOLIO
      </p>

      <h2
        id="projects-heading"
        className="mb-4 text-4xl font-bold"
      >
        Website Development Projects
      </h2>

      <p className="mb-10 max-w-3xl leading-7 text-slate-400">
        Explore my recent web development projects, including
        business websites, school websites, and e-commerce
        solutions built using Next.js, React, Laravel, and
        modern web technologies.
      </p>

      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveFilter(category)}
            aria-pressed={activeFilter === category}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 ${
              activeFilter === category
                ? "border-cyan-400 bg-cyan-400 text-slate-950"
                : "border-slate-700 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
            }`}
          >
            {category === "All" ? "All Projects" : category}
          </button>
        ))}
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-cyan-400"
            >
              <div className="mb-5 flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="text-3xl text-cyan-400"
                >
                  ✧
                </span>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  Live Project
                </span>
              </div>

              <h3 className="text-2xl font-bold">
                {project.name}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-400">
                {project.description}
              </p>

              <p className="mt-5 text-sm font-medium text-cyan-400">
                {project.technology}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} live website`}
                className="mt-6 inline-block font-semibold transition hover:text-cyan-400"
              >
                View Live Project →
              </a>
            </article>
          ))
        ) : (
          <p className="col-span-full py-10 text-center text-slate-400">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
