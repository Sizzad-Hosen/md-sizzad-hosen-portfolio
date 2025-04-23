"use client";

import { motion } from "framer-motion";
import React from "react";
import ExperienceSection from "@/component/Experince";
import EducationSection from "@/component/Education";
import About from "@/component/About";
import ExperienceSummary from "@/component/ExperienceSummary";
import AwardsSection from "@/component/Award";
import ProfileSection from "@/component/Profile";


const Resume = () => {
  return (
    <div className="flex flex-col lg:flex-row text-white max-w-screen-xl mx-auto min-h-screen">
      {/* Left Sidebar */}
      <div className="w-full lg:w-[30%] lg:h-screen lg:sticky lg:top-0  z-10 p-4 sm:p-6">
        <ProfileSection />
      </div>

      {/* Right Content */}
      <main className="w-full lg:w-[70%] px-4 sm:px-6 mt-6 md:px-8 py-6 space-y-20">
        {[
          About,
          ExperienceSummary,
          EducationSection,
          ExperienceSection,
          AwardsSection,
        ].map((Component, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Component />
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default Resume;
