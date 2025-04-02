"use client";
import React from "react";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { Linkedin, Github, Facebook } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import img from "../about/IMG_6118.jpg";
import Image from "next/image";

const Resume = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="min-h-screen max-w-5xl  relative mx-auto flex flex-col lg:flex-row justify-around text-white  gap-3 lg:ps-8">
      {/* Profile Section */}
      <section className="w-96 lg:w-1/4 absolute lg:fixed lg:left-56 ms-12 pt-6 lg:pl-8 lg:pr-4">
        <div className="bg-[#1a1a1a] p-6 ps-10 ms-10 rounded-3xl shadow-lg text-center">
          <Image
            src={img}
            alt="Profile"
            width={260}
            height={144}
            className="rounded-3xl border-2 border-gray-700 shadow-md mx-auto"
          />

          {/* Name Hover Tooltip */}
          <div
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative inline-block mt-4"
          >
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full mb-2 bg-gray-800 text-white px-2 py-1 text-sm rounded-md"
              >
                Full Stack Developer
              </motion.div>
            )}
            <h2 className="text-xl font-semibold text-white cursor-pointer">
              Md Sizzad Hosen
            </h2>
          </div>

          <p className="text-gray-400">@sizzadhosen</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="https://www.linkedin.com/in/md-sizzad-hosen-5a2618301/"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </Link>
            <Link
              href="https://github.com/Sizzad-Hosen"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
            >
              <Github className="w-6 h-6 text-white" />
            </Link>
            <Link
              href="https://www.facebook.com/sizzadhosenofficial"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-500"
            >
              <Facebook className="w-6 h-6 text-white" />
            </Link>
          </div>

          {/* Contact Button */}
         <Link href={"/contact"}>
         <button className="mt-6 w-full px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-600">
            CONTACT ME
          </button>
         </Link>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="w-full lg:w-3/4 lg:ml-[25%] overflow-y-auto ps-12  space-y-12">
        {/* About Section */}
        <div className="max-w-4xl mx-auto shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-6 mt-8 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">ABOUT ME</h2>
            <div className="flex space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
          </div>

          <p className="mt-4 text-white">
            I am a **Full Stack Developer (MERN Stack)** from **Bangladesh**, with a strong foundation in **modern web technologies** and a passion for building **scalable, high-performance applications**. With **2 years of experience in Frontend Development** and **1.5 years in Full Stack Development**, I specialize in creating **dynamic, user-centric web solutions** that deliver seamless user experiences.
          </p>
          <p className="mt-4 text-white">
            My technical expertise includes **React, Next.js, Node.js, Express.js, MongoDB, Firebase, and Cloudinary**, along with a solid understanding of **Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA)**, and multiple programming languages such as **C, C++, and Java**. Currently, I am student in **Computer Science and Engineering (CSE) at Begum Rokeya University, Rangpur (BRUR)**.
          </p>
          <p className="mt-4 text-white">
            I am deeply passionate about **exploring emerging technologies, solving complex problems, and transforming ideas into impactful digital solutions**. My goal is to continuously enhance my skills, contribute to innovative projects, and make a meaningful impact in the tech industry.
          </p>
        </div>

        {/* Experience Summary */}
        <div className="text-white py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-6">EXPERIENCE SUMMARY</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl text-center shadow-lg">
                <h3 className="text-3xl font-bold">02</h3>
                <p className="text-gray-400">YEARS EXPERIENCE</p>
              </div>
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl text-center shadow-lg">
                <h3 className="text-3xl font-bold">+20</h3>
                <p className="text-gray-400">CLIENTS WORLDWIDE</p>
              </div>
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl text-center shadow-lg">
                <h3 className="text-3xl font-bold">+30</h3>
                <p className="text-gray-400">TOTAL PROJECTS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="text-white py-12">
          <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-3xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">EDUCATION</h2>
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
            </div>

            <div className="relative border-l-2 border-gray-600 pl-6">
              {/* Education Item 1 */}
              <div className="mb-8 relative">
                <div className="absolute -left-9 top-1 bg-gray-800 p-2 mr-3 rounded-full">
                  <FaGraduationCap className="text-white" />
                </div>
                <p className="text-gray-400 text-sm">2024 - Present Student</p>
                <h3 className="text-lg font-semibold">Computer Science And Engineering</h3>
                <p className="text-gray-400">Begum Rokeya University | Rangpur</p>
              </div>

              {/* Education Item 2 */}
              <div className="mb-8 relative">
                <div className="absolute -left-9 top-1 bg-gray-800 p-2 rounded-full">
                  <FaGraduationCap className="text-white" />
                </div>
                <p className="text-gray-400 text-sm">2019 - 2021 (2 years)</p>
                <h3 className="text-lg font-semibold">Higher Secondary Certificate</h3>
                <p className="text-gray-400">Birgonj Govt Colllage | Dinajpur</p>
              </div>

              {/* Education Item 3 */}
              <div className="mb-8 relative">
                <div className="absolute -left-9 top-1 bg-gray-800 p-2 rounded-full">
                  <FaGraduationCap className="text-white" />
                </div>
                <p className="text-gray-400 text-sm">2024 - 2024 (3 month)</p>
                <h3 className="text-lg font-semibold">Database Management Course</h3>
                <p className="text-gray-400">Udemy</p>
              </div>

              {/* Education Item 4 */}
              <div className="mb-8 relative">
                <div className="absolute -left-9 top-1 bg-gray-800 p-2 rounded-full">
                  <FaGraduationCap className="text-white" />
                </div>
                <p className="text-gray-400 text-sm">2024 - 2024 (3 month)</p>
                <h3 className="text-lg font-semibold">Artificial Intellegence Course (Basic)</h3>
                <p className="text-gray-400">Udemy</p>
              </div>

              {/* Education Item 5 */}
              <div className="mb-8 relative">
                <div className="absolute -left-9 top-1 bg-gray-800 p-2 rounded-full">
                  <FaLaptopCode className="text-white" />
                </div>
                <p className="text-gray-400 text-sm">2023 - 2023 (6 months)</p>
                <h3 className="text-lg font-semibold">HTML, CSS & Bootstrap Basics</h3>
                <p className="text-gray-400">Sikhbe Shobai</p>
              </div>

              {/* Education Item 6 */}
              <div className="relative">
                <div className="absolute -left-9 top-1 bg-gray-800 p-2 rounded-full">
                  <FaLaptopCode className="text-white" />
                </div>
                <p className="text-gray-400 text-sm">2023 - 2023 (6 months)</p>
                <h3 className="text-lg font-semibold">
                  Web Development Course With Jhankar Mahbub (MERN Base)
                </h3>
                <p className="text-gray-400">Programming Hero</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="text-white py-12">
          <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-3xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">EXPERIENCE</h2>
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
            </div>

            <div className="relative border-l-2 border-gray-600 pl-6">
              {/* Experience Item 1 */}
              <div className="mb-8 relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-white rounded-full"></div>
                <p className="text-gray-400 text-sm">2024 - Present</p>
                <h3 className="text-lg font-semibold">Software Engineer</h3>
                <p className="text-gray-400">Shefra</p>
              </div>

              {/* Experience Item 2 */}
              <div className="mb-8 relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-white rounded-full"></div>
                <p className="text-gray-400 text-sm">2024 - Present</p>
                <h3 className="text-lg font-semibold">Full Stack Developer (MERN Stack)</h3>
                <p className="text-gray-400">Freelancing at Fiverr, Upwork</p>
              </div>

              {/* Experience Item 3 */}
              <div className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-white rounded-full"></div>
                <p className="text-gray-400 text-sm">2023</p>
                <h3 className="text-lg font-semibold">Full Stack Developer (Part-Time)</h3>
                <p className="text-gray-400">Third Rock Den</p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="text-white pb-10 mb-12 py-12">
          <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">AWARDS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Award Card 1 */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Black Belt Web Developer</h3>
                <p className="text-sm text-blue-400">BY PROGRAMMING HERO</p>
                <p className="text-gray-400 text-sm mb-3">February 10, 2024</p>
                <p className="text-gray-300 text-sm">
                  This prestigious award is given to students who demonstrate exceptional dedication 
                  and performance throughout the course. To qualify, students must achieve a minimum 
                  of 50% on all assignments. Additionally, they undergo an exclusive SCIC training 
                  program designed to enhance their technical and interview skills.  
                  The final stage includes a mock interview, where those scoring 25+ out of 30 
                  earn the coveted Black Belt Web Developer award.
                </p>
                <button className="mt-4 w-full py-2 border border-gray-500 rounded-lg text-gray-500 hover:bg-white transition">
                  SEE CREDENTIALS
                </button>
              </div>

              {/* Award Card 2 */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold">Completion with Excellence (Three Stars)</h3>
                <p className="text-sm text-blue-400">BY PROGRAMMING HERO</p>
                <p className="text-gray-400 text-sm mb-3">February 18, 2024</p>
                <p className="text-gray-300 text-sm">
                  This award recognizes students who successfully complete the course on time with 
                  outstanding commitment. It is given to those who consistently submit high-quality 
                  assignments and meet all deadlines.  
                  The Three Stars distinction is reserved for students who not only excel academically 
                  but also demonstrate exceptional learning progress and perseverance. 
                </p>
                <button className="mt-4 w-full py-2 border border-gray-500 rounded-lg text-gray-500 hover:bg-white transition">
                  SEE CREDENTIALS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;