"use client";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experienceData = [
    {
      year: "2024 - Present",
      title: "Software Engineer",
      company: "Shefra",
    },
    {
      year: "2024 - Present",
      title: "Full Stack Developer (MERN Stack)",
      company: "Freelancing at Fiverr, Upwork",
    },
    {
      year: "2024",
      title: "Full Stack Developer (Part-Time)",
      company: "Third Rock Den",
    },
  ];

  return (
    <div className="text-white py-12">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-3xl shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">EXPERIENCE</h2>
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-gray-600 pl-6">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 relative"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-4 top-1 w-3 h-3 bg-white rounded-full"></div>
              {/* Experience Details */}
              <p className="text-gray-400 text-sm">{exp.year}</p>
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-gray-400">{exp.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
