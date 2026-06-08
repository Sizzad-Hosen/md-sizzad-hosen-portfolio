"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { siteProfile } from "@/data/site";

const ProfileSection = () => {
  return (
    <aside className="rounded-lg">
      <motion.div
        className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900/70 p-5 text-center shadow-lg sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto w-full max-w-[260px] rounded-3xl border border-white/10 bg-zinc-950/60 p-2 shadow-md">
          <Image
            src={siteProfile.profileImage}
            alt="Md Sizzad Hosen portrait"
            width={260}
            height={320}
            className="aspect-[4/5] w-full rounded-2xl object-cover object-[center_18%]"
            priority
          />
        </div>

        <div className="mt-5 space-y-2">
          <h2 className="text-balance text-2xl font-semibold leading-tight text-white">
            {siteProfile.name}
          </h2>
          <p className="mx-auto inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-100">
            {siteProfile.role}
          </p>
          <p className="text-sm text-zinc-500">@{siteProfile.handle}</p>
        </div>

        <div className="mt-5 space-y-3 rounded-lg border border-white/10 bg-black/20 p-4 text-left text-sm text-zinc-300">
          <a href={`mailto:${siteProfile.email}`} className="flex items-center gap-3 hover:text-white">
            <Mail className="h-4 w-4 text-blue-300" />
            <span className="break-all">{siteProfile.email}</span>
          </a>
          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-blue-300" />
            <span>{siteProfile.location}</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Link aria-label="LinkedIn profile" href={siteProfile.socials.linkedin} target="_blank">
            <span className="flex rounded-full border border-white/10 p-3 text-white hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </span>
          </Link>
          <Link aria-label="GitHub profile" href={siteProfile.socials.github} target="_blank">
            <span className="flex rounded-full border border-white/10 p-3 text-white hover:bg-white/10">
              <Github className="h-5 w-5" />
            </span>
          </Link>
        </div>

        <Link href={"/contact"}>
          <motion.button
            className="mt-6 w-full rounded-full bg-blue-500 px-4 py-3 font-semibold text-white hover:bg-blue-400"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </Link>
      </motion.div>
    </aside>
  );
};

export default ProfileSection;
