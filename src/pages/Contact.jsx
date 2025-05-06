import React from "react";
import PageCount from "../components/PageCount";

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className="relative px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-300 bg-[#0f0727]"
      id="contact"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 border-b border-gray-500/30 pb-6">
        {/* Logo & Description */}
        <div className="md:max-w-md md:mx-10">
          <h1 className="text-xl text-white">Pravin</h1>
          <p className="mt-6 text-sm leading-relaxed">
            Trust me — let's grow together and build scalable, impactful web
            solutions with the power of the MERN stack
          </p>
        </div>

        {/* Links & Newsletter */}
        <div className="flex-1 flex flex-col md:flex-row items-start md:justify-end gap-10">
          {/* Company Links */}
          <div>
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#Services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="font-semibold mb-5 text-white">Contact</h2>
            <p className="text-sm mb-4">
              Have questions or thoughts? We'd love to hear from you!{" "}
            </p>
            <div className="flex flex-col items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-500/30 placeholder-gray-400 outline-none w-full max-w-64 h-9 rounded px-2 bg-transparent text-white"
              />
              <input
                type="text"
                placeholder="Enter Your Message or Query"
                className="border border-gray-500/30 placeholder-gray-400 outline-none w-full max-w-64 h-9 rounded px-2 bg-transparent text-white"
              />
              <button className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="pt-6 text-center text-xs md:text-sm text-gray-400 pb-5">
        © {year} Company Name. All rights reserved.
      </p>
      <PageCount page={5} />
    </footer>
  );
};

export default Footer;
