"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Facebook } from "lucide-react";

const ProfileSection = ({ img }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
<section className="w-96 lg:w-1/4 absolute lg:fixed lg:left-56 ms-12 pt-6 lg:pl-8 lg:pr-4">
  <motion.div
    className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 ps-10 ms-10 rounded-3xl shadow-lg text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Image
      src={"https://i.postimg.cc/sx3hHLwT/IMG-6118.jpg"}
      alt="Profile"
      width={260}
      height={144}
      className="rounded-3xl border-2 border-gray-700 shadow-md mx-auto"
    />

    {/* Name Hover Tooltip */}
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

    {/* Social Icons */}
    <div className="flex justify-center gap-4 mt-4">
      <Link
        href="https://www.linkedin.com/in/md-sizzad-hosen-5a2618301/"
        className="p-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-full hover:bg-blue-600"
      >
        <Linkedin className="w-6 h-6 text-white" />
      </Link>
      <Link
        href="https://github.com/Sizzad-Hosen"
        className="p-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-full hover:bg-gray-600"
      >
        <Github className="w-6 h-6 text-white" />
      </Link>
      <Link
        href="https://www.facebook.com/sizzadhosenofficial"
        className="p-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-full hover:bg-blue-500"
      >
        <Facebook className="w-6 h-6 text-white" />
      </Link>
    </div>

    {/* Contact Button */}
    <Link href={"/contact"}>
      <motion.button
        className="mt-6 w-full px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        CONTACT ME
      </motion.button>
    </Link>
  </motion.div>
</section>

  );
};

export default ProfileSection;
