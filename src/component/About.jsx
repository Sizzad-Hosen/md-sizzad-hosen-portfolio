"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto border border-white/10 bg-zinc-900/70 rounded-lg p-6 mt-8 text-white"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
      </div>

      <p className="mt-4 leading-7 text-zinc-300">
        I am a <strong className="text-white">Full Stack Developer</strong> from{" "}
        <strong className="text-white">Bangladesh</strong>, focused on MERN and
        Next.js applications. I enjoy building responsive user interfaces,
        reliable APIs, and practical product features that are easy to use and
        maintain.
      </p>

      <p className="mt-4 leading-7 text-zinc-300">
        My current stack includes{" "}
        <strong className="text-white">
          React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Firebase,
          Tailwind CSS, REST APIs, and JWT authentication
        </strong>
        . I care about clean component structure, readable code, accessibility,
        and performance-minded implementation.
      </p>

      <p className="mt-4 leading-7 text-zinc-300">
        I am also improving my backend testing, AWS basics, MySQL, PHP, Laravel,
        OOP, data structures, and algorithms. My recent projects include
        e-commerce platforms, restaurant management systems, and service booking
        applications.
      </p>

      <p className="mt-4 leading-7 text-zinc-300">
        I am currently pursuing{" "}
        <strong className="text-white">
          Computer Science and Engineering (CSE) at Begum Rokeya University,
          Rangpur (BRUR)
        </strong>
        . My goal is to keep growing through real product work, strong
        fundamentals, and thoughtful collaboration.
      </p>
    </motion.div>
  );
};

export default About;
