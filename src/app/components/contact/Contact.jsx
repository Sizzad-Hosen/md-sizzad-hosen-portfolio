"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill in all the fields.",
      });
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Thanks for reaching out! I will get back to you soon.",
          confirmButtonColor: "#3085d6",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.error || "Something went wrong!",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Failed to send message",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen text-white flex mx-auto pt-6 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-8xl pt-7 h-1/2">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">CONTACT INFO</h2>
          <div className="mb-4 flex items-center gap-4">
            <FaEnvelope className="text-2xl" />
            <div>
              <p>sizzadhosen@gmail.com</p>
              <p>sizzadhosen079@gmail.com</p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <FaPhone className="text-2xl" />
            <div>
              <p>+880 1793942267</p>
              <p>+8801708694445</p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl" />
            <p>Dinajpur, Sadar, Bangladesh</p>
          </div>
          {/* Social Icons */}
          <h3 className="text-lg font-semibold mt-6">SOCIAL INFO</h3>
          <div className="flex gap-4 mt-2 pt-3">
            <Link href="https://www.linkedin.com/in/md-sizzad-hosen-5a2618301/">
              <FaLinkedin className="text-6xl cursor-pointer hover:text-blue-500" />
            </Link>
            <Link href="https://github.com/Sizzad-Hosen">
              <FaGithub className="text-6xl cursor-pointer hover:text-gray-400" />
            </Link>
            <Link href="https://www.facebook.com/sizzadhosenofficial">
              <FaFacebook className="text-6xl cursor-pointer hover:text-blue-600" />
            </Link>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-2 bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-5xl font-bold mb-6">
            Let's Work <span className="text-blue-400">Together</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#7a7a7a] to-[#272525] text-white rounded-full hover:bg-gradient-to-r hover:from-[#fff6f6] hover:to-[#d1caca] hover:text-black transition-all"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
