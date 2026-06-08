"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Mail,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projects";
import { siteProfile } from "@/data/site";

const highlights = [
  { value: "2+", label: "Years building web apps" },
  { value: "30+", label: "Practice and client projects" },
  { value: "MERN", label: "Primary development stack" },
];

const roleTitles = ["Software Engineer at Shefra", "Full Stack Developer"];

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setActiveRole((current) => (current + 1) % roleTitles.length);
    }, 2400);

    return () => clearInterval(roleTimer);
  }, []);

  return (
    <div className="space-y-16 text-white">
      <section className="grid min-h-[calc(100vh-150px)] items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <Sparkles className="h-4 w-4 text-blue-300" />
            <span className="relative inline-flex min-w-[210px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleTitles[activeRole]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  {roleTitles[activeRole]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              {siteProfile.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">
              {siteProfile.value}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={siteProfile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Download Resume <Download className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Me <Mail className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-zinc-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg border border-white/10 bg-zinc-900/70 p-5 shadow-2xl"
        >
        <div className="flex items-center justify-center">
  <div className="relative overflow-hidden rounded-lg w-[clamp(180px,28vw,340px)] h-[clamp(180px,28vw,340px)]">
    <Image
      src={siteProfile.profileImage}
      alt="Md Sizzad Hosen portrait"
      width={720}
      height={720}
      className="w-full h-full object-cover"
      priority
    />
  </div>
</div>
          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm uppercase text-zinc-400">Full Stack Developer</p>
              <h2 className="mt-1 text-2xl font-semibold">{siteProfile.name}</h2>
              <p className="mt-2 text-zinc-300">
                Focused on practical product development, clean APIs, responsive UI, and dependable delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link href="/skills" className="rounded-lg border border-white/10 p-4 hover:bg-white/10">
                <Code2 className="mb-3 h-5 w-5 text-blue-300" />
                Skills and stack
              </Link>
              <Link href="/services" className="rounded-lg border border-white/10 p-4 hover:bg-white/10">
                <BriefcaseBusiness className="mb-3 h-5 w-5 text-blue-300" />
                Services
              </Link>
            </div>
          </div>
        </motion.aside>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-300">Selected work</p>
            <h2 className="mt-2 text-3xl font-bold">Projects recruiters can scan quickly</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <Image
                src={project.imgCover}
                alt={`${project.title} project preview`}
                width={500}
                height={300}
                className="aspect-video w-full rounded-md object-cover"
              />
              <p className="mt-4 text-xs uppercase text-zinc-400">{project.category}</p>
              <h3 className="mt-1 text-xl font-semibold group-hover:text-blue-200">{project.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-300">{project.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
