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
      "This prestigious award is given to students who demonstrate exceptional dedication and performance throughout the course. To qualify, students must achieve a minimum of 50% on all assignments. Additionally, they undergo an exclusive SCIC training program designed to enhance their technical and interview skills. The final stage includes a mock interview, where those scoring 25+ out of 30 earn the coveted Black Belt Web Developer award.",
  },
  {
    title: "Completion with Excellence (Three Stars)",
    provider: "PROGRAMMING HERO",
    link:"https://drive.google.com/file/d/1Qfvxc9DLDM4M6f23-oFMm1IkkaNn566-/view",
    date: "February 18, 2024",
    description:
      "This award recognizes students who successfully complete the course on time with outstanding commitment. It is given to those who consistently submit high-quality assignments and meet all deadlines. The Three Stars distinction is reserved for students who not only excel academically but also demonstrate exceptional learning progress and perseverance.",
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
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">AWARDS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-[#2b2a2a] to-[#141212] p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold">{award.title}</h3>
              <p className="text-sm text-blue-400">BY {award.provider}</p>
              <p className="text-gray-400 text-sm mb-3">{award.date}</p>
              <p className="text-gray-300 text-sm">{award.description}</p>



           <Link href={award.link}>
               <button
                type="button"
                className="mt-4 border border-gray-500 hover:bg-white w-full py-3 bg-gradient-to-r from-[#7a7a7a] to-[#272525] text-white rounded-full hover:bg-gradient-to-r hover:from-[#fff6f6] hover:to-[#d1caca] hover:text-black transition-all"
              >
                SEE CREDENTIALS
              </button>

</Link>
            

            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AwardsSection;
