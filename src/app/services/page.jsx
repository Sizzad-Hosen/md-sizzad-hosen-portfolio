"use client";
import { FaCode, FaLaptopCode, FaPaintBrush, FaServer, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { title: "Web Development", icon: <FaCode />, desc: "I specialize in crafting visually appealing and functional websites that make a lasting impression." },
  { title: "Modern Website", icon: <FaLaptopCode />, desc: "Need a powerful and dynamic web application? I can create modern web apps using React.js or Next.js." },
  { title: "Frontend Development", icon: <FaPaintBrush />, desc: "I excel in frontend development, crafting intuitive and engaging user interfaces with expertise in HTML and CSS." },
  { title: "Full Stack Website (MERN)", icon: <FaServer />, desc: "I'm confident in my full-stack (MERN) skills and can create creative and functional websites using this stack." },
  { title: "Website Maintenance", icon: <FaTools />, desc: "Already have a website or web application but need ongoing maintenance? I provide reliable and efficient services." },
];

export default function ServiceOffering() {
  return (
    <div className="min-h-screen mx-auto text-white flex flex-col">
      <h2 className="text-4xl font-bold text-center uppercase mb-10">
        Service <span className="text-cyan-400">Offering</span>
      </h2>

      <div className="flex flex-col lg:flex-row w-full max-w-8xl gap-8">
        {/* Sidebar with Left to Center Animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-xl w-full lg:w-1/3 shadow-lg"
        >
          <ul className="space-y-6">
            {services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="flex items-center gap-4 p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-cyan-500 transition"
              >
                <span className="text-2xl text-cyan-400">{service.icon}</span>
                <span className="text-lg font-semibold">{service.title}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Service Details with Right to Center Animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-2/3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
