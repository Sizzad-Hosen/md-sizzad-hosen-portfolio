import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg- pb-12 text-white py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="w-1/3"></div> 
      
          <div className="w-1/3 flex justify-center">
            <ul className="space-x-4 flex">
              <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-600">About</Link></li>
              <li><Link href="/skills" className="hover:text-orange-600">Skills</Link></li>
              <li><Link href="/projects" className="hover:text-orange-600">Projects</Link></li>
              <li><Link href="/blogs" className="hover:text-orange-600">Blogs</Link></li>
              <li><Link href="/services" className="hover:text-orange-600">Services</Link></li>
              <li><Link href="/contact" className="hover:text-orange-600">Contact</Link></li>
            </ul>
          </div>
          
          <div className="w-1/3"></div> 
        </div>

        {/* Copyright Section */}
        <div className="mt-4 text-center">
          <p className="text-sm">&copy; All rights reserved by <span className='text-xl text-orange-600'>Md Sizzad Hosen</span></p>
        </div>
      </div>
    </footer>
  );
}
