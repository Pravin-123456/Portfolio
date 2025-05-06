import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#skills", label: "Skills" },
    { to: "#projects", label: "Projects" },
    { to: "#contact", label: "Contact" },
  ];

  return (
    <div className="text-white w-full fixed top-0 left-0 px-5 md:px-24 py-5 z-50" >
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">PRAVIN</h1>
        <RxHamburgerMenu
          className="md:hidden cursor-pointer text-2xl"
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.to}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </ul>
      </div>

      {/* Mobile Links */}
      <AnimatePresence>
        {toggle && (
          <motion.ul
            className="flex flex-col space-y-4 mt-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="hover:text-blue-400 transition-colors duration-300"
                onClick={() => setToggle(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
