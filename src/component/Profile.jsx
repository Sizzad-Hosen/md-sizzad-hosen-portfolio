"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Facebook } from "lucide-react";
import { siteProfile } from "@/data/site";

const ProfileSection = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside className="pt-7 rounded-lg px-4">
      <motion.div
        className="border border-white/10 bg-zinc-900/70 p-6 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto mt-2 w-fit rounded-3xl border-2 border-gray-700 bg-zinc-950/40 p-2 shadow-md">
          <Image
            src={siteProfile.profileImage}
            alt="Md Sizzad Hosen portrait"
            width={260}
            height={320}
            className="h-80 w-64 rounded-2xl object-cover object-[center_18%]"
          />
        </div>

        <div
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative inline-block mt-4"
        >
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full mb-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] text-white px-2 py-1 text-sm rounded-md"
            >
              {siteProfile.role}
            </motion.div>
          )}
          <h2 className="text-xl font-semibold text-white cursor-pointer">
            {siteProfile.name}
          </h2>
        </div>

        <p className="text-gray-400">@{siteProfile.handle}</p>

        <div className="flex justify-center gap-4 mt-4">
          <Link aria-label="LinkedIn profile" href={siteProfile.socials.linkedin} target="_blank">
            <div className="p-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-full hover:bg-blue-600">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
          </Link>
          <Link aria-label="GitHub profile" href={siteProfile.socials.github} target="_blank">
            <div className="p-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-full hover:bg-gray-600">
              <Github className="w-6 h-6 text-white" />
            </div>
          </Link>
          <Link aria-label="Facebook profile" href={siteProfile.socials.facebook} target="_blank">
            <div className="p-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-full hover:bg-blue-500">
              <Facebook className="w-6 h-6 text-white" />
            </div>
          </Link>
        </div>

        <Link href={"/contact"}>
          <motion.button
            className="mt-6 w-full px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-400"
            whileHover={{ scale: 1.05 }}
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
