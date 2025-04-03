"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto shadow-lg bg-gradient-to-r from-[#1a1a1a] to-[#333333] rounded-3xl p-6 mt-8 text-white"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">ABOUT ME</h2>
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
      </div>

      <p className="mt-4 text-white">
        I am a <strong>Full Stack Developer (MERN Stack)</strong> from{" "}
        <strong>Bangladesh</strong>, with a strong foundation in{" "}
        <strong>modern web technologies</strong> and a passion for building{" "}
        <strong>scalable, high-performance applications</strong>. With{" "}
        <strong>2 years of experience in Frontend Development</strong> and{" "}
        <strong>1.5 years in Full Stack Development</strong>, I specialize in
        creating <strong>dynamic, user-centric web solutions</strong> that
        deliver seamless user experiences.
      </p>
      <p className="mt-4 text-white">
        My technical expertise includes <strong>React, Next.js, Node.js, Express.js, MongoDB, Firebase, and Cloudinary</strong>, 
        along with a solid understanding of <strong>Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA)</strong>, 
        and multiple programming languages such as <strong>C, C++, and Java</strong>. Currently, I am a student in{" "}
        <strong>Computer Science and Engineering (CSE) at Begum Rokeya University, Rangpur (BRUR)</strong>.
      </p>
      <p className="mt-4 text-white">
        I am deeply passionate about{" "}
        <strong>
          exploring emerging technologies, solving complex problems, and
          transforming ideas into impactful digital solutions
        </strong>
        . My goal is to continuously enhance my skills, contribute to innovative
        projects, and make a meaningful impact in the tech industry.
      </p>
    </motion.div>
  );
};

export default About;
