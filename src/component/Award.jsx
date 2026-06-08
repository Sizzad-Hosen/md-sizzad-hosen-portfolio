"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const awards = [
  {
    title: "Black Belt Web Developer",
    provider: "PROGRAMMING HERO",
    link:"https://drive.google.com/file/d/1TbuclzMOKmXNr1hC45g9gbrNrN4Jbd37/view",
    date: "February 10, 2024",
    description:
      "Awarded by Programming Hero for consistent assignment performance, SCIC training participation, and mock interview performance.",
  },
  {
    title: "Completion with Excellence (Three Stars)",
    provider: "PROGRAMMING HERO",
    link:"https://drive.google.com/file/d/1Qfvxc9DLDM4M6f23-oFMm1IkkaNn566-/view",
    date: "February 18, 2024",
    description:
      "Recognized for completing the course on time, submitting assignments consistently, and maintaining strong learning progress.",
  },
];

const AwardsSection = () => {
  return (
    <motion.div
      className="text-white pb-10 mb-12 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto border border-white/10 bg-zinc-900/70 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Awards</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="border border-white/10 bg-black/20 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold">{award.title}</h3>
              <p className="text-sm text-blue-400">By {award.provider}</p>
              <p className="text-gray-400 text-sm mb-3">{award.date}</p>
              <p className="text-gray-300 text-sm">{award.description}</p>



              <a href={award.link} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="mt-4 border border-white/15 w-full py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-all"
              >
                See Credentials
              </button>
            </a>  

            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AwardsSection;
