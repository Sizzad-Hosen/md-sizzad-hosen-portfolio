import Link from "next/link";
import { ArrowRight } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Expert" },
      { name: "TypeScript", level: "Comfortable" },
      { name: "Redux Toolkit", level: "Comfortable" },
      { name: "React Router", level: "Comfortable" },
      { name: "Bootstrap", level: "Comfortable" },
      { name: "DaisyUI", level: "Comfortable" },
      { name: "Ant Design", level: "Familiar" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Comfortable" },
      { name: "Express.js", level: "Comfortable" },
      { name: "REST APIs", level: "Comfortable" },
      { name: "JWT Authentication", level: "Comfortable" },
      { name: "GraphQL", level: "Familiar" },
      { name: "Laravel", level: "Familiar" },
      { name: "Passport.js", level: "Familiar" },
    ],
  },
  {
    title: "Authentication & Security",
    skills: [
      { name: "JWT Authentication", level: "Comfortable" },
      { name: "Firebase Auth", level: "Comfortable" },
      { name: "Protected Routes", level: "Comfortable" },
      { name: "Role-based Access", level: "Familiar" },
      { name: "Input Validation", level: "Comfortable" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: "Comfortable" },
      { name: "PostgreSQL", level: "Familiar" },
      { name: "MySQL", level: "Familiar" },
      { name: "Firebase", level: "Comfortable" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: "Comfortable" },
      { name: "GitHub", level: "Comfortable" },
      { name: "Postman", level: "Comfortable" },
      { name: "Vercel", level: "Comfortable" },
      { name: "Netlify", level: "Comfortable" },
      { name: "VS Code", level: "Expert" },
      { name: "Figma", level: "Familiar" },
      { name: "AWS Basics", level: "Familiar" },
      { name: "Trello", level: "Familiar" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest", level: "Familiar" },
      { name: "Vitest", level: "Familiar" },
      { name: "Supertest", level: "Familiar" },
      { name: "Playwright", level: "Familiar" },
    ],
  },
  {
    title: "UI Libraries",
    skills: [
      { name: "DaisyUI", level: "Comfortable" },
      { name: "Bootstrap", level: "Comfortable" },
      { name: "Ant Design", level: "Familiar" },
      { name: "Framer Motion", level: "Familiar" },
      { name: "Lucide Icons", level: "Comfortable" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Comfortable" },
      { name: "C", level: "Comfortable" },
      { name: "C++", level: "Comfortable" },
      { name: "Java", level: "Familiar" },
      { name: "Python", level: "Familiar" },
      { name: "PHP", level: "Familiar" },
    ],
  },
];

const levelStyles = {
  Expert: "bg-emerald-500/15 text-emerald-200 border-emerald-400/20",
  Comfortable: "bg-blue-500/15 text-blue-200 border-blue-400/20",
  Familiar: "bg-amber-500/15 text-amber-100 border-amber-400/20",
};

export default function Skills() {
  return (
    <section className="space-y-12 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase text-blue-300">Technical skills</p>
        <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">A practical full-stack toolkit</h1>
        <p className="mt-4 text-zinc-300">
          Skills are grouped by how I use them in real projects, from frontend implementation to APIs, databases, testing, and deployment.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.title} className="rounded-lg border border-white/10 bg-zinc-900/70 p-6">
            <h2 className="text-2xl font-semibold">{group.title}</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <div key={`${group.title}-${skill.name}`} className="rounded-lg border border-white/10 bg-black/20 p-3">
                  <p className="font-medium">{skill.name}</p>
                  <span className={`mt-2 inline-block rounded-full border px-3 py-1 text-xs font-semibold ${levelStyles[skill.level]}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-2xl font-semibold">Problem Solving Profiles</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Codeforces", url: "https://codeforces.com/profile/Sizzad_Hosen" },
            { name: "CodeChef", url: "https://www.codechef.com/users/sizzad_hosen" },
            { name: "LeetCode", url: "https://leetcode.com/u/SizzadHosen/" },
            { name: "Coding Ninjas", url: "https://www.codingninjas.com/" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              className="inline-flex items-center justify-between rounded-lg border border-white/10 p-4 text-zinc-200 hover:bg-white/10"
            >
              {item.name} <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}
