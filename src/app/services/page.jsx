"use client";

import { motion } from "framer-motion";
import { Bug, Code2, Gauge, KeyRound, Layers3, LayoutDashboard, MonitorSmartphone, Server } from "lucide-react";

const services = [
  {
    title: "Full Stack Web Development",
    icon: Layers3,
    desc: "End-to-end web applications with responsive UI, secure APIs, authentication, and database integration.",
    deliverables: "React, Next.js, Node.js, MongoDB",
  },
  {
    title: "Frontend Development",
    icon: MonitorSmartphone,
    desc: "Modern React and Next.js interfaces that are accessible, responsive, and easy to maintain.",
    deliverables: "Responsive UI, dashboards, forms",
  },
  {
    title: "Backend API Development",
    icon: Server,
    desc: "REST APIs with Node.js, Express.js, MongoDB, JWT authentication, and clean route structure.",
    deliverables: "REST APIs, auth, database models",
  },
  {
    title: "MERN / Next.js Application Development",
    icon: Code2,
    desc: "Production-focused applications using MongoDB, Express.js, React, Node.js, and Next.js.",
    deliverables: "MERN apps, SSR pages, integrations",
  },
  {
    title: "Next.js Website Development",
    icon: MonitorSmartphone,
    desc: "SEO-friendly websites with strong page structure, optimized images, clean routing, and polished UI.",
    deliverables: "SEO, metadata, app router, performance",
  },
  {
    title: "Bug Fixing",
    icon: Bug,
    desc: "Troubleshooting UI issues, broken flows, API bugs, validation problems, and deployment errors.",
    deliverables: "Debugging, refactors, release fixes",
  },
  {
    title: "Performance Optimization",
    icon: Gauge,
    desc: "Improving page speed, reducing unnecessary client work, optimizing images, and tightening UX details.",
    deliverables: "Image optimization, UX cleanup",
  },
  {
    title: "Firebase / Authentication Integration",
    icon: KeyRound,
    desc: "Authentication flows, protected routes, user state handling, and secure access patterns.",
    deliverables: "Firebase, JWT, protected pages",
  },
  {
    title: "Dashboard / Admin Panel Development",
    icon: LayoutDashboard,
    desc: "Operational dashboards for managing products, orders, users, content, and service workflows.",
    deliverables: "Tables, forms, filters, role flows",
  },
];

export default function ServiceOffering() {
  return (
    <section className="space-y-10 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase text-blue-300">Services</p>
        <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">How I can help</h1>
        <p className="mt-4 text-zinc-300">
          Practical development services for job-ready products, MVPs, portfolio-grade applications, and client websites.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="rounded-lg border border-white/10 bg-zinc-900/70 p-6 transition hover:-translate-y-1 hover:border-blue-400/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/15 text-blue-200">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{service.desc}</p>
              <p className="mt-4 rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-blue-100">
                {service.deliverables}
              </p>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
}
