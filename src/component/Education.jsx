"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const educationData = [
  {
    year: "2024 - Present",
    title: "B.Sc. in Computer Science and Engineering",
    institution: "Begum Rokeya University, Rangpur",
    icon: <FaGraduationCap className="text-white" />,
  },
  {
    year: "2019 - 2021 (2 years)",
    title: "Higher Secondary Certificate",
    institution: "Birganj Government College, Dinajpur",
    icon: <FaGraduationCap className="text-white" />,
  },
  {
    year: "2024 - 2024 (3 months)",
    title: "Database Management Course",
    institution: "Udemy",
    icon: <FaGraduationCap className="text-white" />,
  },
  {
    year: "2024 - 2024 (3 months)",
    title: "Artificial Intelligence Course (Basic)",
    institution: "Udemy",
    icon: <FaGraduationCap className="text-white" />,
  },
  {
    year: "2023 - 2023 (6 months)",
    title: "HTML, CSS & Bootstrap Basics",
    institution: "Sikhbe Shobai",
    icon: <FaLaptopCode className="text-white" />,
  },
  {
    year: "2023 - 2023 (6 months)",
    title: "Web Development Course with Jhankar Mahbub (MERN)",
    institution: "Programming Hero",
    icon: <FaLaptopCode className="text-white" />,
  },
];

const EducationSection = () => {
  return (
    <motion.div
      className="text-white py-12"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto border border-white/10 bg-zinc-900/70 p-6 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-gray-600 pl-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="mb-8 relative"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="absolute mt-3  bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-1  rounded-full">
                {edu.icon}
              </div>
              {/* Education Details */}
              <p className="text-gray-400 text-sm">{edu.year}</p>
              <h3 className="text-lg font-semibold">{edu.title}</h3>
              <p className="text-gray-400">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;
