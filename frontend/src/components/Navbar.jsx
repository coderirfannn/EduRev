// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Navbar



// import React, { useState } from 'react';
// import { Menu, X, BookOpen, User, Bell, Search } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-lg border-b-2 border-blue-500">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           {/* Logo and Brand */}
//           <div className="flex items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <BookOpen className="h-8 w-8 text-blue-500" />
//               <span className="ml-2 text-2xl font-bold text-gray-800">EduRev</span>
//             </div>
            
//             {/* Desktop Navigation */}
//             <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
//               <a href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300">
//                 Home
//               </a>
//               <a href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300">
//                 Dashboard
//               </a>
//               <a href="/courses" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300">
//                 Courses
//               </a>
//               <a href="/resources" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300">
//                 Resources
//               </a>
//             </div>
//           </div>

//           {/* Search and User Section */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Search Bar */}
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Search courses, resources..."
//               />
//             </div>

//             {/* Notifications */}
//             <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition duration-300">
//               <Bell className="h-6 w-6" />
//             </button>

//             {/* User Profile */}
//             <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
//               <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center">
//                 <User className="h-5 w-5 text-white" />
//               </div>
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
//             <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50">
//               Home
//             </a>
//             <a href="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50">
//               Dashboard
//             </a>
//             <a href="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50">
//               Courses
//             </a>
//             <a href="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50">
//               Resources
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, User, Bell, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b-2 border-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo + Desktop Menu */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-2xl font-bold text-gray-800">EduRev</span>
            </Link>

            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300">Home</Link>
              <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300">Dashboard</Link>
              <Link to="/courses" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300">Courses</Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition duration-300">Contact</Link>
            </div>
          </div>

          {/* Search + Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500"
                placeholder="Search..."
              />
            </div>

            <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition duration-300">
              <Bell className="h-6 w-6" />
            </button>

            <button className="flex items-center text-sm rounded-full focus:ring-2 focus:ring-blue-500">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-blue-50">Home</Link>
            <Link to="/dashboard" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-blue-50">Dashboard</Link>
            <Link to="/courses" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-blue-50">Courses</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-blue-50">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
