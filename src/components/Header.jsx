// Header.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Header.css";

const MobileHeader = ({ isOpen, toggleMenu }) => {
  return (
    <div id="mobile-menu" className={`fixed top-0 inset-x-0 bg-gray-800 text-white z-[150] w-full transition-transform ease-in-out duration-300 transform ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="flex justify-between items-center p-4">
        <Link to="/" className="flex items-center">
          <img className="h-8 w-8" src="/logo.png" alt="Logo" />
          <p className="ml-2 text-lg font-bold">ARYAN KASHEM</p>
        </Link>
        <div className="cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <Link to="/" className="text-xl font-bold mb-4" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/About" className="text-xl font-bold mb-4" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/Resume" className="text-xl font-bold mb-4" onClick={toggleMenu}>
          Resume & Portfolio
        </Link>
        <Link to="/Blog" className="text-xl font-bold mb-4" onClick={toggleMenu}>
          Blog
        </Link>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {isMobile ? (
        <div className="flex justify-between items-center p-4 text-white z-[150] w-full">
          <Link to="/" className="flex items-center">
            <img className="h-8 w-8" src="/logo.png" alt="Logo" />
            <p className="ml-2 text-lg font-bold">ARYAN KASHEM</p>
          </Link>
          <div className="cursor-pointer" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </div>
          <MobileHeader isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
        </div>
      ) : (
        <div className="px-[4rem] flex justify-between items-center w-screen z-50">
          <Link to="/" className="relative left-[-3%] flex items-center header-logo">
            <img className="h-[7rem] w-[7rem]" src="/logo.png" alt="Logo" />
            <p className="text-white font-Rubik font-bold">ARYAN KASHEM</p>
          </Link>
          <div className="flex gap-10 header-links">
            <Link to="/" className="header-link">
              <p className="text-white font-Rubik font-bold">Home</p>
            </Link>
            <Link to="/About" className="header-link">
              <p className="text-white font-Rubik font-bold">About</p>
            </Link>
            <Link to="/Resume" className="header-link">
              <p className="text-white font-Rubik font-bold text-[1rem]">Resume & Portfolio</p>
            </Link>
            <Link to="/Blog" className="header-link">
              <p className="text-white font-Rubik font-bold">Blog</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
