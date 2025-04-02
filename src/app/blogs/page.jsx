import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="bg- text-white min-h-screen ">
      <h1 className="text-center text-4xl font-bold mb-6">BLOGS</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Blog Posts Section */}
        <div className="md:col-span-2 space-y-6">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-xl shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60"
                alt="Blog"
                width={800}
                height={400}
                className="rounded-xl w-full"
              />
              <span className="bg-gray-800 text-sm px-3 py-1 rounded-full mt-3 inline-block">TECHNICAL</span>
              <div className="flex items-center gap-3 mt-4">
                <Image src="https://i.postimg.cc/mDBSDFwy/IMG-6118.jpg" alt="Profile" width={40} height={40} className="rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">Sizzad Hosen</h3>
                  <p className="text-gray-400 text-sm">March 15</p>
                </div>
              </div>
              <h2 className="text-2xl font-semibold mt-4">THE MULTIVERSE IS THE COLLECTION OF ALTERNATE UNIVERSES</h2>
              <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque labor...</p>
              <button className="mt-4 px-4 py-2 bg-gray-700 rounded-lg">LEARN MORE →</button>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg flex items-center">
            <input type="text" placeholder="Search" className="bg-transparent flex-grow text-white outline-none px-2" />
            <button className="bg-gray-700 px-4 py-2 rounded-lg">SEARCH</button>
          </div>

          {/* Recent Blogs */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold mb-3">RECENT BLOGS</h3>
            <div className="flex gap-1">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            </div>

            <ul className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <li key={i} className="text-blue-400 cursor-pointer hover:underline">Lorem ipsum dolor sit amet consectetur sit</li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold mb-3">CATEGORIES</h3>
            <div className="flex gap-1">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            </div>

            <ul className="space-y-2">
              {["TECHNICAL", "VS CODE PROBLEMS", "GITHUB PROBLEMS", "CODING BUG SOLUTIONS", "SECURITY", "TECHNOLOGY"].map((cat, i) => (
                <li key={i} className="cursor-pointer hover:bg-blue-600 p-2 rounded">{i + 1}. {cat}</li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="bg-gray-900 p-4 rounded-xl shadow-lg">
          <div className="flex justify-between items-center">
  <h3 className="text-lg font-semibold mb-3">TAGS</h3>
  <div className="flex gap-1">
    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
  </div>
</div>

            <div className="flex flex-wrap gap-2">
              {["FIGMA", "HTML 5", "CSS 3", "TAILWIND CSS", "REACT JS", "NEXT JS", "NODE JS", "EXPRESS JS", "WEB DEVELOPMENT"].map((tag, i) => (
                <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-600">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}