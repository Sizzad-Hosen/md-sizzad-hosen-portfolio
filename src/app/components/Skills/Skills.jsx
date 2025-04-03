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
      { name: "MongoDB", level: "Expert", color: "bg-blue-600", icon: "https://i.postimg.cc/pVqDsz1j/Mongo-DB-removebg-preview.png" },
      { name: "PostgreSQL", level: "Intermadiate", color: "bg-green-500", icon: "https://i.postimg.cc/R05fWRqk/postgresql-removebg-preview.png" },
      { name: "Next.js", level: "Expert", color: "bg-yellow-500", icon: "https://i.postimg.cc/R0yY62wM/nextjs-removebg-preview.png" },
      { name: "Jwt", level: "Intermediate", color: "bg-red-600", icon: "https://i.postimg.cc/dtfGYvFt/JWT-removebg-preview.png" },
      { name: "Passport", level: "Intermediate", color: "bg-green-500", icon: "https://i.postimg.cc/3JNb1K9K/image-removebg-preview-6.png" }
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
      { name: "JavaScript", level: "Intermediate", color: "bg-red-700", icon: "https://i.postimg.cc/pLPqmR7Q/Java-Script-logo.png" },
      { name: "TypeScript", level: "Basic", color: "bg-red-500", icon: "https://i.postimg.cc/rFk9Hq86/Typescript-logo-2020-svg.png" },
      { name: "Java", level: "Intermediate", color: "bg-yellow-700", icon: "https://i.postimg.cc/PxLk0mQq/java-removebg-preview.png" },
      { name: "Python", level: "Basic", color: "bg-green-500", icon: "https://i.postimg.cc/bvVh66bM/python-removebg-preview.png"},
      { name: "OOP", level: "Basic", color: "bg-blue-500", icon: "https://i.postimg.cc/Bvzv8ZhX/image-removebg-preview-5.png"},
      { name: "DSA", level: "Basic", color: "bg-red-700", icon: "https://i.postimg.cc/rFGzhkpP/dsa-removebg-preview.png"}
    ],


  };

  return (
    <section className="py-10 max-w-9xl container mx-auto text-white">
      <div className="">
        <h2 className="text-6xl font-bold text-center mb-8">SKI<span className="text-blue-600">LL</span>S I <span className="text-orange-600">HAVE</span></h2>

        {/* Loop through each category */}
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-4 capitalize">{category.replace(/([A-Z])/g, " $1")}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skillsList.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-xl shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Window Dots */}
                  <div className="absolute top-3 left-4 flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>

                  {/* Skill Icon */}
                  <div className="flex flex-col items-center mt-4">
                    <Image 
                      width={100} 
                      height={100} 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-14 h-14 mb-4" 
                      unoptimized={true} 
                    />
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    {/* Proficiency Badge */}
                    <span className={`mt-3 px-4 py-1 text-sm font-semibold rounded-full ${skill.color}`}>
                      {skill.level.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* problem solving skills */}

 <h3 className="text-3xl p-2 font-bold">Problem Solving Skills</h3>

 <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">

                       <div 
                 
                  className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-xl shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Window Dots */}
                  <div className="absolute top-3 left-4 flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>

                  {/* Skill Icon */}
                  <div className="flex flex-col items-center mt-4">
                    <Image 
                      width={100} 
                      height={100} 
                      src={"https://i.postimg.cc/ryvxNbWd/image-removebg-preview-13.png"} 
                      alt={""} 
                      className="w-14 h-14 mb-4" 
                      unoptimized={true} 
                    />
                    <h3 className="text-lg font-semibold">Codeforeces</h3>

                    <Link href="https://codeforces.com/profile/Sizzad_Hosen">
                 <button className="absolute  top-4 right-4 bg-gray-800 p-2 rounded-full text-white">
                  Profile<FaArrowRight />
          
                    
                  </button>
                    </Link>
                
    
                  </div>
                </div>
                       <div 
                 
                  className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-xl shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Window Dots */}
                  <div className="absolute top-3 left-4 flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>

                  {/* Skill Icon */}
                  <div className="flex flex-col items-center mt-4">
                    <Image 
                      width={100} 
                      height={100} 
                      src={"https://i.postimg.cc/sxDD0SRF/image-removebg-preview-14.png"} 
                      alt={""} 
                      className="w-14 h-14 mb-4" 
                      unoptimized={true} 
                    />
                    <h3 className="text-lg font-semibold">CodeChef</h3>

                    <Link href="https://www.codechef.com/users/sizzad_hosen">
                 <button className="absolute  top-4 right-4 bg-gray-800 p-2 rounded-full text-white">
                  Profile<FaArrowRight />
          
                    
                  </button>
                    </Link>
                
    
                  </div>
                </div>
                       <div 
                 
                  className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-xl shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Window Dots */}
                  <div className="absolute top-3 left-4 flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>

                  {/* Skill Icon */}
                  <div className="flex flex-col items-center mt-4">
                    <Image 
                      width={100} 
                      height={100} 
                      src={"https://i.postimg.cc/jdPNgXQM/image-removebg-preview-15.png"} 
                      alt={""} 
                      className="w-14 h-14 mb-4" 
                      unoptimized={true} 
                    />
                    <h3 className="text-lg font-semibold">Leetcode</h3>

                    <Link href="https://leetcode.com/u/SizzadHosen/">
                 <button className="absolute  top-4 right-4 bg-gray-800 p-2 rounded-full text-white">
                  Profile<FaArrowRight />
          
                    
                  </button>
                    </Link>
                
    
                  </div>
                </div>
                       <div 
                 
                  className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] p-6 rounded-xl shadow-lg relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Window Dots */}
                  <div className="absolute top-3 left-4 flex space-x-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  </div>

                  {/* Skill Icon */}
                  <div className="flex flex-col items-center mt-4">
                    <Image 
                      width={100} 
                      height={100} 
                      src={"https://i.postimg.cc/Y9xC3RZf/image-removebg-preview-16.png"} 
                      alt={""} 
                      className="w-14 h-14 mb-4" 
                      unoptimized={true} 
                    />
                    <h3 className="text-lg font-semibold">Coding Ninjas</h3>

                    <Link href="https://www.codingninjas.com/">
                 <button className="absolute  top-4 right-4 bg-gray-800 p-2 rounded-full text-white">
                  Profile<FaArrowRight />
          
                    
                  </button>
                    </Link>
                
    
                  </div>
                </div>
 </div>


    </section>
  );
}