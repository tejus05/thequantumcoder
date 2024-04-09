import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 px-6 relative bottom-0">
      <div className="flex justify-between items-center">
        <div>
          <p>&copy; {new Date().getFullYear()} Your Company</p>
        </div>
        <div>
          <p>Your Company Address</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
