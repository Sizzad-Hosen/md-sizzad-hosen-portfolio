// app/projects/[id]/page.jsx
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    { 
      id: 1,
      title: 'Car Service',
      liveLink: 'https://car-doctor-website-346e1.web.app/',
      category: 'Car Service Web App',
      imgCover: 'https://i.postimg.cc/Vvvgvw3j/car-service-technologycustomer-satisfaction-guarantee-600nw-2271159941.webp',
      image : {
        img1: "https://i.postimg.cc/fTfwvhFc/Screenshot-2025-04-23-014230.png",
        img2: "https://i.postimg.cc/g0Qd0cXW/Screenshot-2025-04-23-014242.png",
        img3: "https://i.postimg.cc/tT6bn0WV/Screenshot-2025-04-23-014253.png",
        img4: "https://i.postimg.cc/JzTM95Rt/Screenshot-2025-04-23-014310.png",
        img5: "https://i.postimg.cc/L84mCbKr/Screenshot-2025-04-23-014338.png",
        img6: "https://i.postimg.cc/25VrmL5G/Screenshot-2025-04-23-014401.png",
      },
      description: 'A web application for booking and managing car services online, offering easy access to repair and maintenance services.',
      features: [
        'Easy appointment booking for car repairs and maintenance.',
        'Real-time tracking of service status.',
        'Integrated payment system for easy transactions.',
        'User profile for managing car service history and appointments.',
        'Notification system to alert users about their appointment status.'
      ],
      technologies: ['NextJS','Tailwind CSS', 'DaisyUI', 'MongoDB'],
      timeTaken: '2 weeks',
    },
    
    { 
      id: 2,
      title: 'Restra',
      liveLink: 'https://resturent-website-8f90d.web.app/',
      category: 'Online Food Order System',
      imgCover: 'https://i.postimg.cc/v82Xj1VX/choy-2000x1125.jpg',
      image:{
        img1: "https://i.postimg.cc/HkrhkwQr/Screenshot-2025-04-23-014552.png",
        img2: "https://i.postimg.cc/y82rgDPv/Screenshot-2025-04-23-014606.png",
        img3: "https://i.postimg.cc/JnL6xSSX/Screenshot-2025-04-23-014627.png",
        img4: "https://i.postimg.cc/267HK2fK/Screenshot-2025-04-23-014637.png",
        img5: "https://i.postimg.cc/rpWZSqZc/Screenshot-2025-04-23-014649.png",
        img6: "https://i.postimg.cc/brY6ckyN/Screenshot-2025-04-23-014746.png",
        img7: "https://i.postimg.cc/1XWv9XX0/Screenshot-2025-04-23-014756.png",
      },
      description: 'A platform that allows customers to order food online, integrated with real-time tracking, payment gateways, and customer feedback.',
      features: [
        'Browse and order food from local restaurants.',
        'Real-time order tracking with status updates.',
        'Multiple payment options (Credit Card, Stripe).',
        'Customer feedback system to rate restaurants and food.',
        'Order history for easy reordering of favorite meals.'
      ],
      technologies: ['React', 'React-dom','Tailwind CSS', 'DaisyUI', 'Node.js', 'Express', 'JWT', 'MongoDB', 'Stripe API'],
      timeTaken: '3 weeks',
    },
    
    {
      id: 3,
      title: 'BDSHOP',
      liveLink: 'https://bdshopping.vercel.app/',
      category: 'E-commerce Web Application',
      imgCover: 'https://i.postimg.cc/Bv3CDHrZ/depositphotos-38143799-stock-photo-e-commerce-shopping-cart-with.webp',
      image:{
        img1:"https://i.postimg.cc/8PMFQ3Yc/Screenshot-2025-04-22-213719.png",
        img2:"https://i.postimg.cc/3wSNFHkS/Screenshot-2025-04-22-213727.png",
        img3:"https://i.postimg.cc/BnCXtF4G/Screenshot-2025-04-22-213745.png",
        img4:"https://i.postimg.cc/d0tDC0VZ/Screenshot-2025-04-22-213806.png",
        img5:"https://i.postimg.cc/T3xKR089/Screenshot-2025-04-22-213820.png",
        img6:"https://i.postimg.cc/bJZJ6Fbz/Screenshot-2025-04-22-213834.png",
        img7:"https://i.postimg.cc/63FQFLLC/Screenshot-2025-04-22-213847.png",
      },
      description: 'An e-commerce platform that enables users to shop for products online, manage shopping carts, and make secure payments.',
      features: [
        'Product browsing and filtering by category.',
        'Add products to shopping cart and secure checkout process.',
        'Order history and tracking for customers.',
        'Admin panel to manage product listings and inventory.',
        'Integrated payment gateway (Stripe) for secure transactions.'
      ],
      technologies: ['NextJS', 'Redux Toolkit', 'Tailwind CSS','DaisyUI', 'Node.js', 'Express', 'JWT', 'MongoDB', 'Stripe API'],
      timeTaken: '4 weeks',
    },
  ];
  
export default function ProjectDetails() {

  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) return <p className="text-white text-center mt-10">Project not found</p>;

  return (
    <section className="p-6 text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        {Object.values(project.image).map((img, idx) => (
          <img key={idx} src={img} alt={`Screenshot ${idx + 1}`} className="rounded" />
        ))}
      </div>


      <h2 className="text-3xl font-bold mt-4">{project.title}</h2>
      <p className="italic text-sm mb-2">{project.category}</p>
      <p className="mb-4">{project.description}</p>

      <h3 className="text-xl font-semibold mt-6">Features:</h3>
      <ul className="list-disc ml-6 mb-4">
        {project.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6">Technologies:</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="bg-purple-700 px-2 py-1 rounded text-sm">{tech}</span>
        ))}
      </div>

      <h3 className="text-xl font-semibold">Project Duration:</h3>
      <p>{project.timeTaken}</p>
      <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
    >
  <button
    className="inline-block mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
  >
    🔗 Live Site
  </button>
</a>


    

    </section>
  );
}
