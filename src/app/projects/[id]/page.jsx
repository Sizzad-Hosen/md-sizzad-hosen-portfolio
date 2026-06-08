"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const Section = ({ title, children }) => (
  <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <div className="mt-4 text-zinc-300">{children}</div>
  </section>
);

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return (
      <div className="mx-auto max-w-2xl py-24 text-center text-white">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-blue-300 hover:text-blue-200">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </div>
    );
  }

  const links = [
    { label: "Live Demo", href: project.liveLink, icon: ExternalLink },
    { label: "GitHub Client", href: project.githubClient, icon: Github },
    { label: "GitHub Server", href: project.githubServer, icon: Github },
  ];

  return (
    <article className="space-y-8 text-white">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white">
        <ArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <header className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-300">{project.category}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">{project.title}</h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map(({ label, href, icon: Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 font-semibold hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ) : null
            )}
          </div>
        </div>
        <Image
          src={project.imgCover}
          alt={`${project.title} project preview`}
          width={900}
          height={600}
          className="aspect-video w-full rounded-lg object-cover"
          priority
        />
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm text-zinc-400">Status</p>
          <p className="mt-1 font-semibold">{project.status}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm text-zinc-400">Timeline</p>
          <p className="mt-1 font-semibold">{project.timeTaken}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm text-zinc-400">Role</p>
          <p className="mt-1 font-semibold">Full-stack developer</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Section title="Problem">
          <p className="leading-7">{project.problem}</p>
        </Section>
        <Section title="Solution">
          <p className="leading-7">{project.solution}</p>
        </Section>
      </div>

      <Section title="Key Features">
        <ul className="grid gap-3 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="rounded-md border border-white/10 bg-black/20 p-3">
              {feature}
            </li>
          ))}
        </ul>
      </Section>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Section title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-md bg-blue-500/15 px-3 py-2 text-sm text-blue-100">
                {tech}
              </span>
            ))}
          </div>
        </Section>
        <Section title="My Role">
          <p className="leading-7">{project.role}</p>
        </Section>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Section title="Challenges">
          <p className="leading-7">{project.challenges}</p>
        </Section>
        <Section title="Future Improvements">
          <ul className="list-disc space-y-2 pl-5">
            {project.futureImprovements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      </div>

      <Section title="Screenshots">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.images.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`${project.title} screenshot ${idx + 1}`}
              width={700}
              height={420}
              className="aspect-video rounded-md object-cover"
            />
          ))}
        </div>
      </Section>

      <Section title="Links">
        <div className="flex flex-wrap gap-3">
          {links.some((link) => link.href) ? (
            links.map(({ label, href, icon: Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 font-semibold hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ) : null
            )
          ) : (
            <p className="text-zinc-400">Repository and demo links can be added when they are public.</p>
          )}
        </div>
      </Section>
    </article>
  );
}
