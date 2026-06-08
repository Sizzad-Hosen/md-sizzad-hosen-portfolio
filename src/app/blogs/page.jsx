"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Introduction to TypeScript: Supercharge Your JavaScript",
    category: "Technical",
    author: "Md Sizzad Hosen",
    link: "https://medium.com/@sizzadhosen/introduction-to-typescript-supercharge-your-javascript-43b23c110abd",
    date: "April 22, 2025",
    coverImage: "https://wk-partners.co.jp/homepage/wp-content/uploads/2019/12/01.typescript.png",
    excerpt:
      "A beginner-friendly overview of TypeScript fundamentals, why it helps JavaScript projects, and how to start using it.",
  },
];

export default function BlogPage() {
  return (
    <section className="space-y-10 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase text-blue-300">Writing</p>
        <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">Technical articles</h1>
        <p className="mt-4 text-zinc-300">
          Notes and guides from my learning and project work.
        </p>
      </div>

      {blogPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900/70"
            >
              <Image
                src={post.coverImage}
                alt={`${post.title} cover`}
                width={900}
                height={500}
                className="aspect-video w-full object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                  <span className="rounded-full bg-blue-500/15 px-3 py-1 font-semibold text-blue-200">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold">{post.title}</h2>
                <p className="mt-3 leading-7 text-zinc-300">{post.excerpt}</p>
                <Link
                  href={post.link}
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 font-semibold hover:bg-white/10"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-zinc-900/70 p-10 text-center">
          <BookOpen className="mx-auto h-10 w-10 text-blue-300" />
          <h2 className="mt-4 text-2xl font-semibold">Technical articles coming soon.</h2>
          <p className="mt-3 text-zinc-400">New writing will appear here when it is ready.</p>
        </div>
      )}
    </section>
  );
}
