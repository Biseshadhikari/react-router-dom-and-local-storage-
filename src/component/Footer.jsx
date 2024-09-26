import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="text-center md:text-left">
          <h5 className="text-lg font-semibold">Your Company Name</h5>
          <p className="text-sm">© 2024 All rights reserved.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <a href="#!" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#!" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
