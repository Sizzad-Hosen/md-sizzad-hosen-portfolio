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
    <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col gap-8 text-white lg:grid lg:grid-cols-[360px_1fr]">
      {/* Left Sidebar */}
      <div className="w-full lg:sticky lg:top-24 lg:h-fit">
        <ProfileSection />
      </div>

      {/* Right Content */}
      <main className="w-full space-y-12 px-0 py-2 sm:space-y-16 lg:py-6">
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
