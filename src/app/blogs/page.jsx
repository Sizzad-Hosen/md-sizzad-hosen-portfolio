"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPage() {

  const blogPosts = [
    {
      id: 1,
      title: "Basic of TypeScript",
      category: "TECHNICAL",
      author: {
        name: "Sizzad Hosen",
        link:"https://medium.com/@sizzadhosen/introduction-to-typescript-supercharge-your-javascript-43b23c110abd",
        image: "https://i.postimg.cc/mDBSDFwy/IMG-6118.jpg",
        date: "April 22",
      },
      coverImage: "https://wk-partners.co.jp/homepage/wp-content/uploads/2019/12/01.typescript.png",
      excerpt: "My first articale about TypeScript. A beginner-friendly guide to understanding TypeScript fundamentals...",
    },
    {
      id: 2,
      title: "THE MULTIVERSE IS THE COLLECTION OF ALTERNATE UNIVERSES",
      category: "TECHNICAL",
      author: {
        name: "Sizzad Hosen",
        link:"#",
        image: "https://i.postimg.cc/mDBSDFwy/IMG-6118.jpg",
        date: "March 15",
      },
      coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60",
      excerpt: "Explore the fascinating concept of the multiverse and alternate realities...",
    },
  ];



  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="bg- text-white min-h-screen "
    >
      <motion.h1 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-6"
      >
        BLOGS
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Blog Posts Section */}
         {/* Blog Posts Section */}
      <div className="md:col-span-2 space-y-6">
        {blogPosts.map((post, index) => (
          <motion.div 
            key={post.id} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-4 rounded-xl shadow-lg"
          >
            <Image
              src={post.coverImage}
              alt="Blog"
              width={800}
              height={400}
              className="rounded-xl w-full"
            />
            <span className="bg-gray-800 text-sm px-3 py-1 rounded-full mt-3 inline-block">{post.category}</span>
            <div className="flex items-center gap-3 mt-4">
              <Image src={post.author.image} alt="Profile" width={40} height={40} className="rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{post.author.name}</h3>
                <p className="text-gray-400 text-sm">{post.author.date}</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mt-4">{post.title}</h2>
            <p className="text-gray-400 mt-2">{post.excerpt}</p>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              className="mt-4 px-4 py-2 bg-gray-700 rounded-lg"
            >
              
             {post?.author?.link ? (
            <Link href={post?.author?.link}>
              LEARN MORE →
            </Link>
          ) : (
            <button disabled className="text-gray-500 cursor-not-allowed">LEARN MORE →</button>
          )}

            </motion.button>
          </motion.div>
        ))}
     </div>
        {/* Sidebar Section */}
        <div className="space-y-6">
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-4 rounded-xl shadow-lg flex items-center"
          >
            <input type="text" placeholder="Search" className="bg-transparent flex-grow text-white outline-none px-2" />
            <button className="bg-gray-700 px-4 py-2 rounded-lg">SEARCH</button>
          </motion.div>

          {/* Recent Blogs */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-4 rounded-xl shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-3">RECENT BLOGS</h3>
            <ul className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <motion.li 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="text-blue-400 cursor-pointer hover:underline"
                >
                  Lorem ipsum dolor sit amet consectetur sit
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
