"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Radar,
  Sparkles,
  Terminal,
  UserRound,
  Zap,
} from "lucide-react";
import { projects } from "@/data/projects";
import { siteProfile } from "@/data/site";
import { useRecruiterMode } from "@/hooks/useRecruiterMode";

const roleTitles = [
  "Software Engineer at Shefra",
  "Full Stack Software Engineer",
  "MERN / Next.js Developer",
];

const highlights = [
  { value: "2+", label: "Years building web apps" },
  { value: "30+", label: "Practice and client projects" },
  { value: "MERN", label: "Primary development stack" },
];

const topSkills = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Tailwind CSS",
  "JWT",
];

const timeline = [
  {
    label: "Now",
    title: "Software Engineer at Shefra",
    detail: "Building practical product features with a focus on clean UI, APIs, and reliable delivery.",
  },
  {
    label: "2024",
    title: "Full-stack project focus",
    detail: "Built e-commerce, restaurant, marketplace, and service-booking applications using MERN and Next.js.",
  },
  {
    label: "CSE",
    title: "Begum Rokeya University",
    detail: "Studying Computer Science and Engineering while strengthening DSA, OOP, testing, and backend fundamentals.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const SectionReveal = ({ children, className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      transition={{ duration: 0.45 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

function RecruiterModePanel({ featuredProjects }) {
  return (
    <SectionReveal className="rounded-lg border border-blue-400/30 bg-blue-500/10 p-5 sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-400/15 px-3 py-1 text-sm font-semibold text-blue-100">
            <Radar className="h-4 w-4" />
            Recruiter scan mode
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-normal">60-second summary</h2>
          <p className="mt-3 leading-7 text-zinc-300">
            Full Stack / MERN / Next.js developer with hands-on project experience across
            e-commerce, marketplaces, dashboards, authentication, APIs, and responsive product UI.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[360px]">
          <a
            href={siteProfile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 font-semibold text-white hover:bg-blue-400"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Link>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-white/10 bg-black/20 p-4">
          <h3 className="font-semibold">Top skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {topSkills.slice(0, 7).map((skill) => (
              <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-200">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/20 p-4">
          <h3 className="font-semibold">Best project signals</h3>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="rounded-md border border-white/10 p-3 text-sm text-zinc-300 hover:bg-white/10"
              >
                <span className="block font-semibold text-white">{project.title}</span>
                <span className="mt-1 block text-xs text-zinc-400">{project.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const [activeRole, setActiveRole] = useState(0);
  const { isRecruiterMode } = useRecruiterMode();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const roleTimer = setInterval(() => {
      setActiveRole((current) => (current + 1) % roleTitles.length);
    }, 2400);

    return () => clearInterval(roleTimer);
  }, [shouldReduceMotion]);

  return (
    <div className="space-y-16 text-white">
      <section className="relative grid min-h-[calc(100vh-150px)] items-center gap-10 overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
        <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative space-y-8"
        >
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
            <Sparkles className="h-4 w-4 shrink-0 text-blue-300" />
            <span className="relative inline-flex min-w-[230px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleTitles[activeRole]}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  {roleTitles[activeRole]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Md Sizzad Hosen
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              I build fast, scalable, and user-focused web applications.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">
              I specialize in React, Next.js, Node.js, Express, MongoDB,
              PostgreSQL, Firebase, and clean full-stack architecture for real
              products.
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

          <div className="flex flex-wrap gap-3">
            <a
              href={siteProfile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={siteProfile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${siteProfile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>

          {!isRecruiterMode && (
            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                >
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-zinc-400">{item.label}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.aside
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-lg border border-white/10 bg-zinc-950/70 p-5 shadow-2xl"
        >
          <div className="absolute right-4 top-4 z-10 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
            Open to Remote Work
          </div>
          <div className="flex items-center justify-center pt-8">
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
          </div>
          <div className="mt-5 space-y-4">
            <div>
              <p className="text-sm uppercase text-zinc-400">Full Stack Software Engineer</p>
              <h2 className="mt-1 text-2xl font-semibold">{siteProfile.name}</h2>
              <p className="mt-2 text-zinc-300">
                Practical product developer focused on clean APIs, responsive UI,
                authentication, dashboards, and maintainable delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Link href="/skills" className="rounded-lg border border-white/10 p-4 hover:bg-white/10">
                <Code2 className="mb-3 h-5 w-5 text-blue-300" />
                Tech arsenal
              </Link>
              <Link href="/about" className="rounded-lg border border-white/10 p-4 hover:bg-white/10">
                <UserRound className="mb-3 h-5 w-5 text-blue-300" />
                Quick bio
              </Link>
              <Link href="/services" className="rounded-lg border border-white/10 p-4 hover:bg-white/10">
                <BriefcaseBusiness className="mb-3 h-5 w-5 text-blue-300" />
                Services
              </Link>
              <Link href="/projects" className="rounded-lg border border-white/10 p-4 hover:bg-white/10">
                <Terminal className="mb-3 h-5 w-5 text-blue-300" />
                Case studies
              </Link>
            </div>
          </div>
        </motion.aside>
      </section>

      <AnimatePresence>
        {isRecruiterMode && <RecruiterModePanel featuredProjects={featuredProjects} />}
      </AnimatePresence>

      {!isRecruiterMode && (
        <SectionReveal className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-blue-300">Core stack</p>
              <h2 className="mt-2 text-2xl font-bold">Tech I use to ship products</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      )}

      <SectionReveal className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-300">Selected work</p>
            <h2 className="mt-2 text-3xl font-bold">
              Projects with clear product impact
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
          >
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
                className="aspect-video w-full rounded-md object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-xs uppercase text-zinc-400">{project.category}</p>
                <span className="rounded-full bg-blue-500/15 px-2 py-1 text-xs text-blue-200">
                  {project.status}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-semibold group-hover:text-blue-200">{project.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-300">{project.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-300">
                Case Study <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </SectionReveal>

      {!isRecruiterMode && (
        <SectionReveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-3 py-1 text-sm font-semibold text-blue-200">
              <Zap className="h-4 w-4" />
              Build timeline
            </div>
            <h2 className="mt-4 text-3xl font-bold">A focused path into full-stack engineering</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              My portfolio is built around real project signals: usable products,
              case-study thinking, and a stack that maps to junior full-stack roles.
            </p>
          </div>

          <div className="space-y-3">
            {timeline.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-zinc-950/70 p-5">
                <div className="flex gap-4">
                  <span className="flex h-10 w-16 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-semibold text-blue-200">
                    {item.label}
                  </span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 leading-6 text-zinc-400">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      )}

      <SectionReveal className="rounded-lg border border-white/10 bg-gradient-to-br from-blue-500/15 to-white/[0.03] p-6">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              Ready for interviews, remote work or freelance
            </div>
            <h2 className="mt-4 text-3xl font-bold">Need a developer who can ship and communicate clearly?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-zinc-300">
              I can help with frontend builds, MERN/Next.js features, APIs,
              dashboards, authentication, bug fixing, and performance cleanup.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-400"
          >
            Let&apos;s Talk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionReveal>
    </div>
  );
}
