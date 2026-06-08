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
      className="py-12 text-white"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-4xl rounded-lg border border-white/10 bg-zinc-900/70 p-6 shadow-lg sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            Learning path
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-normal">Education</h2>
          <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
            Formal study and focused technical training that support my full-stack development work.
          </p>
        </div>

        <div className="relative space-y-5 before:absolute before:left-5 before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-white/10">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.title}
              className="relative grid grid-cols-[2.75rem_1fr] gap-4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/15 text-blue-100 shadow-lg shadow-blue-950/20">
                {edu.icon}
              </div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-4 transition hover:border-blue-400/30 hover:bg-white/[0.04] sm:p-5">
                <p className="text-sm font-medium text-blue-200">{edu.year}</p>
                <h3 className="mt-2 text-xl font-semibold leading-snug text-white">
                  {edu.title}
                </h3>
                <p className="mt-2 leading-6 text-zinc-400">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;
