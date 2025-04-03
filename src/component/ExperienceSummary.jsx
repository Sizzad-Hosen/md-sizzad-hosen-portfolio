"use client";

import { motion } from "framer-motion";

const experienceData = [
  { value: "02", label: "YEARS EXPERIENCE" },
  { value: "+20", label: "CLIENTS WORLDWIDE" },
  { value: "+30", label: "TOTAL PROJECTS" },
];

const ExperienceSummary = () => {
  return (
    <motion.div
      className="text-white py-12"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">EXPERIENCE SUMMARY</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-2xl text-center shadow-lg"
            >
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSummary;
