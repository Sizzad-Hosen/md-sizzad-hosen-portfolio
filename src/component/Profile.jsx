"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Facebook } from "lucide-react";

const ProfileSection = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside className="lg:fixed lg:top-28  lg:left-30  lg:h-screen lg:overflow-y-auto z-50 pt-7 rounded-lg px-4">
      <motion.div
        className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-3xl shadow-lg text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={"https://i.postimg.cc/RCWkbwC6/20240206-103544.jpg"}
          alt="Profile"
          width={260}
          height={144}
          className="rounded-3xl border-2 border-gray-700 shadow-md mx-auto"
        />

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
              Full Stack Developer
            </motion.div>
          )}
          <h2 className="text-xl font-semibold text-white cursor-pointer">
            Md Sizzad Hosen
          </h2>
        </div>

        <p className="text-gray-400">@sizzadhosen</p>

        <div className="flex justify-center gap-4 mt-4">
          <Link href="https://www.linkedin.com/in/md-sizzad-hosen-5a2618301/">
            <div className="p-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-full hover:bg-blue-600">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
          </Link>
          <Link href="https://github.com/Sizzad-Hosen">
            <div className="p-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-full hover:bg-gray-600">
              <Github className="w-6 h-6 text-white" />
            </div>
          </Link>
          <Link href="https://www.facebook.com/sizzadhosenofficial">
            <div className="p-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-full hover:bg-blue-500">
              <Facebook className="w-6 h-6 text-white" />
            </div>
          </Link>
        </div>

        <Link href={"/contact"}>
          <motion.button
            className="mt-6 w-full px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-white-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT ME
          </motion.button>
        </Link>
      </motion.div>
    </aside>
  );
};

export default ProfileSection;
