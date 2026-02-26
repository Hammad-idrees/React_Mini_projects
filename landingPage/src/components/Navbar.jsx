import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        {/* Main Row */}
        <div className="flex items-center">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          {/* Desktop Auth Buttons - Right */}
          <div className="hidden lg:flex items-center space-x-4 ml-auto">
            <a
              href="#"
              className="py-2 px-3 border border-gray-600 rounded-md hover:bg-gray-800 transition"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md hover:from-amber-600 hover:to-yellow-600 transition"
            >
              Create an Account
            </a>
          </div>

          {/* Mobile Menu Button - Right */}
          <div className="lg:hidden ml-auto">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-gray-100 py-2 px-4"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Centered Desktop Nav */}
        <ul className="hidden lg:flex space-x-12 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-gray-300 hover:text-gray-100 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden mt-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-300 hover:text-gray-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
