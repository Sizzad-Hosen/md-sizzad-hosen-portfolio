'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ProjectCard = ({ title, category, image, href }) => {
  return (
    <motion.div
      className="bg-zinc-900 p-4 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden relative group"
      whileHover={{ scale: 1.03 }}
    >
      <Link href={href || '/'}>
        <div className="cursor-pointer">
          <motion.img
            src={image}
            alt={title}
            className="rounded-lg object-cover w-full h-[250px] mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <p className="text-xs text-zinc-400 uppercase">{category}</p>
          <h2 className="text-xl font-semibold text-white">{title}</h2>

          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-xl">&rarr;</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
