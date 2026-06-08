"use client";

import { motion } from "framer-motion";

const experienceData = [
  { value: "2+", label: "Years building web apps" },
  { value: "MERN", label: "Primary stack" },
  { value: "30+", label: "Practice and client projects" },
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
        <h2 className="text-2xl font-semibold mb-6">Experience Summary</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 bg-zinc-900/70 p-6 rounded-lg text-center shadow-lg"
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
