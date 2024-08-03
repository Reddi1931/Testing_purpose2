//Navbar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import image from '../images/logo-raha.png'; // Replace with the correct image path if necessary

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-grey rounded bg-white">
      <div className="container mx-auto flex justify-between items-center text-md px-4">
        <a href="/">
          <img src={image} alt="logo" className="w-24 sm:w-20 md:w-28 lg:w-32 xl:w=36" />
        </a>

        <div className="hidden lg:flex ml-14 space-x-12 font-bold">
          <Link to="/" className="hover:text-purple-800">Home</Link>
          <Link to="/about" className="hover:text-purple-800">About Us</Link>
          <Link to="/services" className="hover:text-purple-800">Services</Link>
          <Link to="/contact" className="hover:text-purple-800">Contact Us</Link>
          <Link to="/careers" className="hover:text-purple-800">Careers</Link>
        </div>

        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar} className="text-black">
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileDrawerOpen && (
        <div className="lg:hidden bg-white text-black rounded-t-lg rounded-b-lg p-4 absolute top-16 right-4 left-4">
          <Link to="/" className="block mb-2">Home</Link>
          <Link to="/about" className="block mb-2">About Us</Link>
          <Link to="/services" className="block mb-2">Services</Link>
          <Link to="/contact" className="block mb-2">Contact Us</Link>
          <Link href="/careers" className="block mb-2">Careers</Link>
          {/* <Link to="" className="block mb-2">Careers</Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
