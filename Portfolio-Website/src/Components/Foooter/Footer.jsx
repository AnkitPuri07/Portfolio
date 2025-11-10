import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6 border-t border-gray-200 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-lg font-semibold mb-2">
          Designed & Built by{" "}
          <span className="text-blue-600 font-bold">Ankit Puri</span>
        </h2>
        <p className="text-sm text-gray-200">
          © {new Date().getFullYear()} Ankit Puri. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-5 mt-4 text-gray-600">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="mailto:ankitpuri985@gmail.com" className="hover:text-blue-600 transition">
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
