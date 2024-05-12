// components/Navbar.js
'use client';

import React, { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full   bg-white  z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative ">
          <div className="flex items-center">
            <Link href="/">
               
            <img
              src="https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/301978980_611565337337891_8024522888387377935_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGk17dDeueWSUpwEgBYDtpGD8gIzEoL6l8PyAjMSgvqXw_Ero6Kv2u8rp42M6kioOi9fiqWhEYphQOmO3B_oUXq&_nc_ohc=T3O7smDOQ8wQ7kNvgEF7d4g&_nc_ht=scontent-mba1-1.xx&oh=00_AYAO8k16oknkrALCBuPTeFK19znskw2-aIUWdUZ3s3oRDQ&oe=6645E0AA"
              alt=" Logo"
              className="  max-w-40 h-auto"
             
            />

            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-black hover:text-blue-500 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`${isOpen ? 'block z-30 absolute top-full w-full  bg-white ' : 'hidden'} md:flex md:items-center md:ml-6`}>
            <div className="flex flex-col   md:flex-row md:space-x-4">
              <Link href="/"
                 className="text-black hover:bg-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                
              </Link>
              <Link href="/cars"
                 className="text-black hover:bg-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                  Cars
                
              </Link>
              <Link href="/about"
                 className="text-black hover:bg-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                  About
                
              </Link>
              <Link href="/contact"
                 className="text-black hover:bg-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                
              </Link>
              <Link href="/blog"
                 className="text-black hover:bg-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                  blog
                
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;