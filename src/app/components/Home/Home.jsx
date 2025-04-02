import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <div className="text-white  mx-auto container min-h-screen">
      
    <section className="flex flex-col lg:flex-row gap-5">
      
      {/* Profile Card Section */}
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex items-center gap-6 w-full max-w-lg mx-auto">
        {/* Profile Image */}
        <div className="rounded-xl overflow-hidden w-32 h-32 sm:w-40 sm:h-40">
          <Image
            src="https://i.postimg.cc/mDBSDFwy/IMG-6118.jpg"
            alt="Profile"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Profile Details */}
        <div className="text-white">
          <p className="text-gray-400 text-sm uppercase">A Web Designer & Developer</p>
          <h2 className="text-3xl font-semibold leading-tight">
            Md Sizzad <span className="block font-bold">Hosen</span>
          </h2>
          <p className="text-gray-400 mt-1 text-sm">A software engineer based in Dhaka, Bangladesh</p>
        </div>

        {/* Arrow Button */}
        <div className="ml-auto text-gray-400 hover:text-white cursor-pointer">
          <Link href={"/about"}>
          <FaArrowRight size={20} />
          
          </Link>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-full">
        
{/* Marquee Section */}
<div className="w-full flex justify-center overflow-hidden">
  <div className="w-full flex items-center bg-gray-800 text-white py-4 rounded-full">
    <div className="animate-marquee whitespace-nowrap font-bold text-sm sm:text-base flex gap-8">
      <span>Connect with me via Gmail: <span className="text-yellow-400">sizzadhosen@gmail.com</span></span>
      <span>|</span>
      <span>  Call me at: <span className="text-yellow-400">+8801708694445</span></span>
    </div>
  </div>
</div>
        {/* Skills & Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-6">
          
          {/* Skills Card */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center relative text-center">
           <Link href={"/skills"}>
           <button className="absolute hover:bg-blue-500 top-4 right-4 bg-gray-700 p-2 rounded-full text-white">
              <FaArrowRight />
            </button>
           </Link>
            <h3 className="text-gray-400 text-2xl font-semibold">SKILLS</h3>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <Image className="rounded-full" src="https://i.postimg.cc/R0yY62wM/nextjs-removebg-preview.png" alt="Next.js" width={60} height={60} />
              <Image className="rounded-full" src="https://i.postimg.cc/bvMLJbkW/Figma.png" alt="Figma" width={60} height={60} />
              <Image className="rounded-full" src="https://i.postimg.cc/Yq0QZ0Js/Node-JS-removebg-preview.png" alt="Node.js" width={60} height={60} />
              <Image className="rounded-full" src="https://i.postimg.cc/QMHPMj94/react-removebg-preview.png" alt="React" width={60} height={60} />
            </div>
          </div>

          {/* Projects Card */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center relative text-center">
          <Link href={"/projects"}>
           <button className="absolute hover:bg-blue-500 top-4 right-4 bg-gray-700 p-2 rounded-full text-white">
              <FaArrowRight />
            </button>
           </Link>
            <h3 className="text-gray-400 text-2xl font-semibold">MY WORKS</h3>
            <Image className="mt-6 rounded-lg" src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt="" width={250} height={200} />
          </div>

        </div>

      </div>
      
    </section>

{/* Blogs, Services, Contact */}
<div className="grid grid-cols-1  md:grid-cols-3 gap-6 mt-6">
  {/* Blogs Card */}
  <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center relative">
  <Link href={"/blogs"}>
           <button className="absolute hover:bg-blue-500 top-4 right-4 bg-gray-700 p-2 rounded-full text-white">
              <FaArrowRight />
            </button>
           </Link>
    <Image src="https://i.postimg.cc/fRN2dWYH/image-removebg-preview-7.png" alt="Blogs" width={260} height={120} className="rounded-lg" />
    <h3 className="text-xl font-semibold mt-4">Blogs</h3>
    <p className="text-gray-400">Read my latest articles.</p>
  </div>

  {/* Services Card */}
  <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center relative">
  <Link href={"/services"}>
           <button className="absolute hover:bg-blue-500 top-4 right-4 bg-gray-700 p-2 rounded-full text-white">
              <FaArrowRight />
            </button>
           </Link>
    <div className="flex gap-4 pt-4 mt-4">
      <Image className='bg-white text-4xl' src="https://i.postimg.cc/2ypSQjn5/image-removebg-preview-9.png" alt="UX/UI" width={100} height={100}/>
      <Image className='bg-white text-4xl' src="https://i.postimg.cc/ZnJ1t1Sc/image-removebg-preview-11.png" alt="System Design" width={100} height={100}/>
      <Image className='bg-white text-4xl' src="https://i.postimg.cc/50QtQQYG/image-removebg-preview-10.png" alt="Development" width={100} height={100}/>
    </div>
    <h3 className="text-xl font-semibold mt-4">Specialization</h3>
    <p className="text-gray-400">Service Offering</p>
  </div>

  {/* Contact Card */}
  <div className="bg-gray-900 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center relative">
  <Link href={"/contact"}>
           <button className="absolute hover:bg-blue-500 top-4 right-4 bg-gray-700 p-2 rounded-full text-white">
              <FaArrowRight />
            </button>
           </Link>
    <Image src="https://i.postimg.cc/RFyGZvML/image-removebg-preview-8.png" alt="Contact" width={200} height={120} className="rounded-lg" />
    <h3 className="text-xl font-semibold mt-4">Contact Me</h3>
    <p className="text-gray-400">Stay connected with me.</p>
  </div>
</div>

      </div>

  );
};

export default Home;