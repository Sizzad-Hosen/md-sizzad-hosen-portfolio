"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto shadow-lg bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-3xl p-6 mt-8 text-white"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">ABOUT ME</h2>
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>

      <p className="mt-4">
        I am a <strong>Full Stack Developer (MERN Stack)</strong> from{" "}
        <strong>Bangladesh</strong> with hands-on experience in building{" "}
        <strong>scalable, production-ready web applications</strong>. I have{" "}
        <strong>2+ years of frontend</strong> and{" "}
        <strong>1.5+ years of full-stack development experience</strong>,
        focusing on performance, clean architecture, and user experience.
      </p>

      <p className="mt-4">
        My core expertise includes{" "}
        <strong>
          React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Firebase,
          Cloudinary
        </strong>{" "}
        and modern styling tools. I also work with{" "}
        <strong>REST APIs, GraphQL, JWT-based authentication</strong>, and
        follow best practices such as <strong>MVC, modular architecture</strong>,
        and clean code principles.
      </p>

      <p className="mt-4">
        Recently, I have expanded my skill set into{" "}
        <strong>
          backend testing (Jest, Supertest, Vitest, Playwright),
          AWS basics, MySQL, PHP, and Laravel
        </strong>, along with strengthening my fundamentals in{" "}
        <strong>OOP, Data Structures, and Algorithms</strong>. I actively build
        real-world projects including{" "}
        <strong>
          e-commerce platforms, restaurant management systems, and service-based
          applications
        </strong>.
      </p>

      <p className="mt-4">
        I am currently pursuing{" "}
        <strong>
          Computer Science and Engineering (CSE) at Begum Rokeya University,
          Rangpur (BRUR)
        </strong>
        . My goal is to grow as a high-impact software engineer, contribute to
        challenging projects, and continuously improve through real-world
        problem solving.
      </p>
    </motion.div>
  );
};

export default About;
