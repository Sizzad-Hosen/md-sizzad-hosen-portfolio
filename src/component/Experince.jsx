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
      company: "Freelance projects",
    },
    {
      year: "2024",
      title: "Full Stack Developer (Part-Time)",
      company: "Third Rock Technology",
    },
  ];

  return (
    <div className="text-white py-12">
      <div className="max-w-4xl mx-auto border border-white/10 bg-zinc-900/70 p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-gray-600 pl-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 relative"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-5 top-[6px] w-3 h-3  bg-white rounded-full shadow-md"></div>

              {/* Experience Details */}
              <div className="space-y-1">
                <p className="text-gray-400 pt-2 text-sm">{exp.year}</p>
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <p className="text-gray-400">{exp.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
