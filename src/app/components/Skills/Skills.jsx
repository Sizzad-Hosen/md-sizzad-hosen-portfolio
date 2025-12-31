import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Skills() {
  const skills = {
    frontendTechnologies: [
      { name: "HTML 5", level: "Expert", color: "bg-green-500", icon: "https://i.postimg.cc/d1kdSx7S/html5.png" },
      { name: "CSS 3", level: "Expert", color: "bg-blue-500", icon: "https://i.postimg.cc/tTKP0NWR/css3.png" },
      { name: "Bootstrap", level: "Expert", color: "bg-green-500", icon: "https://i.postimg.cc/QMn1m3MT/bootstrap.png" },
      { name: "Tailwind CSS", level: "Expert", color: "bg-red-500", icon: "https://i.postimg.cc/XqFQCJ4L/Tailwind-CSS-Logo-svg.png" },
      { name: "JavaScript", level: "Intermediate", color: "bg-blue-500", icon: "https://i.postimg.cc/pLPqmR7Q/Java-Script-logo.png"},
      { name: "TypeScript", level: "Basic", color: "bg-red-500", icon: "https://i.postimg.cc/rFk9Hq86/Typescript-logo-2020-svg.png" },
      { name: "Redux", level: "Intermadiate", color: "bg-green-500", icon: "https://i.postimg.cc/PJgfS6Gh/image-removebg-preview.png" },
      { name: "React JS", level: "Expert", color: "bg-green-500", icon: "https://i.postimg.cc/QMHPMj94/react-removebg-preview.png" },
      { name: "React Router", level: "Intermediate", color: "bg-blue-500", icon: "https://i.postimg.cc/ZnBKPGMV/image-removebg-preview-1.png" },
      { name: "Firebase", level: "Expert", color: "bg-yellow-500", icon: "https://i.postimg.cc/xCm4KgPL/firebase-removebg-preview.png" },
      { name: "Next.js", level: "Expert", color: "bg-blue-500", icon: "https://i.postimg.cc/R0yY62wM/nextjs-removebg-preview.png" },
    ],
    backendTechnologies: [
      { name: "Node.js", level: "Intermediate", color: "bg-blue-600", icon: "https://i.postimg.cc/Yq0QZ0Js/Node-JS-removebg-preview.png" },
      { name: "Express.js", level: "Expert", color: "bg-red-500", icon: "https://i.postimg.cc/fbcdm99J/Express-JS-removebg-preview.png" },
      { name: "GraphQL", level: "Intermadiate", color: "bg-blue-500", icon: "https://i.postimg.cc/4dK3v94X/graphql-1732132118455.png" },
      { name: "Next.js", level: "Expert", color: "bg-yellow-500", icon: "https://i.postimg.cc/R0yY62wM/nextjs-removebg-preview.png" },
      { name: "Laravel", level: "Intermediate", color: "bg-blue-500", icon: "https://i.postimg.cc/Hk54zrxb/image-removebg-preview-(24).png" },
      { name: "Jwt", level: "Intermediate", color: "bg-red-600", icon: "https://i.postimg.cc/dtfGYvFt/JWT-removebg-preview.png" },
      { name: "Passport", level: "Intermediate", color: "bg-green-500", icon: "https://i.postimg.cc/3JNb1K9K/image-removebg-preview-6.png" }
    ],

       databasesAndCloud: [
      { name: "MongoDB", level: "Expert", color: "bg-blue-600", icon: "https://i.postimg.cc/pVqDsz1j/Mongo-DB-removebg-preview.png" },
      { name: "PostgreSQL", level: "Intermadiate", color: "bg-green-500", icon: "https://i.postimg.cc/R05fWRqk/postgresql-removebg-preview.png" },
      { name: "MySQL", level: "Intermadiate", color: "bg-green-500", icon: "https://i.postimg.cc/7ZyqCRTv/image-removebg-preview-(21).png" },
      { name: "AWS", level: "Intermadiate", color: "bg-blue-500", icon: "https://i.postimg.cc/GmszfMMh/image-removebg-preview-(23).png" }
    ],
      testingTools: [
      { name: "Vitest", level: "Intermediate", color: "bg-yellow-500", icon: "https://i.postimg.cc/L4wC2YJh/images.jpg" },
      { name: "Jest", level: "Intermediate", color: "bg-red-600", icon: "https://i.postimg.cc/FF8WNdYR/images-(4).png" },
      { name: "Playwrite", level: "Intermadiate", color: "bg-blue-500", icon: "https://i.postimg.cc/zXTVPKn6/image-removebg-preview-(22).png"},
    ],
    toolsIHaveUsed: [
      { name: "Git", level: "Intermediate", color: "bg-red-500", icon: "https://i.postimg.cc/Mp8KRrbm/image-removebg-preview-2.png" },
      { name: "GitHub", level: "Intermediate", color: "bg-blue-500", icon: "https://i.postimg.cc/MTXWqkqq/image-removebg-preview-3.png" },
      { name: "Firebase", level: "Expert", color: "bg-red-500", icon: "https://i.postimg.cc/xCm4KgPL/firebase-removebg-preview.png" },
      { name: "Postman", level: "Intermediate", color: "bg-blue-500", icon: "https://i.postimg.cc/8cPL1zss/Postman-removebg-preview.png" },
      { name: "VS Code", level: "Expert", color: "bg-yellow-500", icon: "https://i.postimg.cc/VvCm0jJh/image-removebg-preview-4.png"},


      { name: "Figma", level: "Intermediate", color: "bg-green-500", icon: "https://i.postimg.cc/bvMLJbkW/Figma.png" },
      { name: "AntDesign", level: "Intermediate", color: "bg-blue-500", icon: "https://i.postimg.cc/BnQZMPkj/ant-design-removebg-preview.png" },
      { name: "Trello",level: "Expert", color: "bg-red-500", icon: "https://i.postimg.cc/V6wjVR8q/Trello-removebg-preview.png" },
      { name: "Netlify" ,level: "Expert", color: "bg-green-500", icon: "https://i.postimg.cc/J06ZtCBx/Netlify-removebg-preview.png" },
      { name: "Vercel",level: "Expert", color: "bg-black", icon: "https://i.postimg.cc/zfLS9B6j/Vercel.png" },
      { name: "Heroku",level: "Basic", color: "bg-purple-500", icon: "https://i.postimg.cc/Y9x1KWrJ/Heroku-removebg-preview.png" }
    ],
     
    programmingLanguages: [
      { name: "C", level: "Intermediate", color: "bg-yellow-700", icon: "https://i.postimg.cc/hjVSZLrq/c.png" },
      { name: "C++", level: "Intermediate", color: "bg-blue-500", icon: "https://i.postimg.cc/J4CGW8bc/c-removebg-preview.png" },
      { name: "JavaScript", level: "Expert", color: "bg-red-700", icon: "https://i.postimg.cc/pLPqmR7Q/Java-Script-logo.png" },
      { name: "TypeScript", level: "Expert", color: "bg-red-500", icon: "https://i.postimg.cc/rFk9Hq86/Typescript-logo-2020-svg.png" },
      { name: "Java", level: "Intermediate", color: "bg-yellow-700", icon: "https://i.postimg.cc/PxLk0mQq/java-removebg-preview.png" },
      { name: "Python", level: "Intermadite", color: "bg-green-500", icon: "https://i.postimg.cc/bvVh66bM/python-removebg-preview.png"},
      { name: "Php", level: "Intermadite", color: "bg-green-500", icon: "https://i.postimg.cc/P5xn8kr2/images-3-removebg-preview.png"},
  
    ],


  };

  return (
<section className="py-16 container mx-auto text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          SKI<span className="text-blue-600">LL</span>S I{" "}
          <span className="text-orange-600">HAVE</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Technologies, tools, and platforms I’ve worked with professionally
        </p>
      </div>

      {/* Skills Sections */}
      {Object.entries(skills).map(([category, skillsList]) => (
        <div key={category} className="mb-20">
          <h3 className="text-3xl font-bold mb-8 border-l-4 border-blue-600 pl-4 capitalize">
            {category.replace(/([A-Z])/g, " $1")}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="
                  group relative
                  bg-gradient-to-r from-[#1a1a1a] to-[#333333]
                  rounded-2xl p-6
                  shadow-md hover:shadow-2xl
                  transition-all duration-300 hover:-translate-y-2
                "
              >
                {/* Window dots */}
                <div className="absolute top-4 left-4 flex gap-2 opacity-80">
                  <span className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                </div>

                {/* Icon */}
                <div className="flex justify-center mt-6">
                  <div className="
                    w-16 h-16 flex items-center justify-center
                    bg-black/30 rounded-xl
                    group-hover:scale-110 transition
                  ">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                      unoptimized
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="text-center mt-6">
                  <h4 className="text-lg font-semibold tracking-wide">
                    {skill.name}
                  </h4>

                  <span
                    className={`inline-block mt-4 px-4 py-1 text-xs font-bold tracking-wider rounded-full ${skill.color}`}
                  >
                    {skill.level.toUpperCase()}
                  </span>
                </div>

                {/* Hover glow */}
                <div className="
                  absolute inset-0 rounded-2xl
                  ring-1 ring-white/5
                  group-hover:ring-blue-500/40
                  transition
                " />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Problem Solving */}
      <div className="mt-24">
        <h3 className="text-3xl font-bold mb-10 border-l-4 border-orange-500 pl-4">
          Problem Solving Profiles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Codeforces",
              icon: "https://i.postimg.cc/ryvxNbWd/image-removebg-preview-13.png",
              url: "https://codeforces.com/profile/Sizzad_Hosen"
            },
            {
              name: "CodeChef",
              icon: "https://i.postimg.cc/sxDD0SRF/image-removebg-preview-14.png",
              url: "https://www.codechef.com/users/sizzad_hosen"
            },
            {
              name: "LeetCode",
              icon: "https://i.postimg.cc/jdPNgXQM/image-removebg-preview-15.png",
              url: "https://leetcode.com/u/SizzadHosen/"
            },
            {
              name: "Coding Ninjas",
              icon: "https://i.postimg.cc/Y9xC3RZf/image-removebg-preview-16.png",
              url: "https://www.codingninjas.com/"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="
                relative bg-gradient-to-r from-[#1a1a1a] to-[#333333]
                p-8 rounded-2xl
                hover:-translate-y-2 hover:shadow-2xl
                transition-all duration-300
              "
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={60}
                  height={60}
                  unoptimized
                />
              </div>

              <h4 className="text-xl font-semibold text-center mb-6">
                {item.name}
              </h4>

              <Link href={item.url} target="_blank">
                <button className="
                  mx-auto flex items-center gap-2
                  bg-gray-800 hover:bg-gray-700
                  px-5 py-2 rounded-full
                  text-sm font-semibold
                  transition
                ">
                  View Profile <FaArrowRight />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}