import Link from 'next/link';
import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, siteProfile } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f0f0f] py-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">{siteProfile.name}</p>
            <p className="text-sm text-zinc-400">{siteProfile.role} | MERN and Next.js</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className="hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex gap-3">
            <Link aria-label="Email Md Sizzad Hosen" href={`mailto:${siteProfile.email}`} className="rounded-full border border-white/10 p-2 hover:bg-white/10">
              <Mail className="h-5 w-5" />
            </Link>
            <Link aria-label="GitHub profile" href={siteProfile.socials.github} target="_blank" className="rounded-full border border-white/10 p-2 hover:bg-white/10">
              <Github className="h-5 w-5" />
            </Link>
            <Link aria-label="LinkedIn profile" href={siteProfile.socials.linkedin} target="_blank" className="rounded-full border border-white/10 p-2 hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="my-6 border-t border-gray-700 w-full" />

        <p className="text-center text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} {siteProfile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
