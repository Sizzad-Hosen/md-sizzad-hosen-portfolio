"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import ExperienceSection from "@/component/Experince";
import EducationSection from "@/component/Education";
import About from "@/component/About";
import ExperienceSummary from "@/component/ExperienceSummary";
import AwardsSection from "@/component/Award";
import ProfileSection from "@/component/Profile";

const Resume = () => {
  const { scrollYProgress } = useScroll();
  
  // Create motion values based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.9, 0.9, 1]);

  return (
    <motion.div 
      className="min-h-screen max-w-5xl relative mx-auto flex flex-col lg:flex-row justify-around text-white gap-3 lg:ps-8 overflow-x-hidden" // Prevent horizontal scrolling here
    >
      {/* Profile Section (Fixed) */}
      <ProfileSection />

      {/* Main Content Section */}
      <motion.section 
        className="w-full lg:w-3/4 lg:ml-[25%] overflow ps-12 space-y-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ExperienceSummary />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <EducationSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ExperienceSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotateX: 10 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <AwardsSection />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Resume;
