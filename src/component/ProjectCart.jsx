"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Globe } from "lucide-react";

const ProjectCard = ({ project }) => {
  const hasGithub = project.githubClient || project.githubServer;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-zinc-900/80 transition hover:-translate-y-1 hover:border-blue-400/40">
      <Link href={`/projects/${project.id}`} className="block overflow-hidden">
        <Image
          src={project.imgCover}
          alt={`${project.title} project preview`}
          width={800}
          height={500}
          className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-200">
            {project.category}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">
            {project.status}
          </span>
        </div>

        <h2 className="mt-4 text-2xl font-semibold text-white">{project.title}</h2>
        <p className="mt-3 text-sm font-medium leading-6 text-blue-100">{project.impact}</p>
        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-300">{project.description}</p>

        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="rounded-md border border-white/10 px-2 py-1 text-xs text-zinc-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-400"
            >
              <Globe className="h-4 w-4" /> Live
            </a>
          ) : (
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-500">
              No demo
            </span>
          )}
          {hasGithub ? (
            <a
              href={project.githubClient || project.githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          ) : (
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-500">
              Private repo
            </span>
          )}
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/10"
          >
            Case Study <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
