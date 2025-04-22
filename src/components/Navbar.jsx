import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close navbar when a nav item is clicked
  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  const logo = "Liton Ali";

  return (
    <nav className="bg-[#11285D]/59" ref={navbarRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-[#FF9C01] font-bold text-3xl tracking-wider">
              <NavLink to="/">{logo}</NavLink>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                className="border-b-2 hover:border-b-[#FF9C01] tracking-wider text-white px-3 py-2 rounded-md text-md font-medium"
                onClick={handleNavItemClick}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="border-b-2 hover:border-b-[#FF9C01] tracking-wider text-white px-3 py-2 rounded-md text-md font-medium"
                onClick={handleNavItemClick}
                to="about"
              >
                About
              </NavLink>

              <NavLink
                className="border-b-2 hover:border-b-[#FF9C01] tracking-wider text-white px-3 py-2 rounded-md text-md font-medium"
                onClick={handleNavItemClick}
                to="projects"
              >
                Projects
              </NavLink>
              <NavLink
                className="border-b-2 hover:border-b-[#FF9C01] tracking-wider text-white px-3 py-2 rounded-md text-md font-medium"
                onClick={handleNavItemClick}
                to="contact"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? "block z-10" : "hidden"}`}>
        <div className="flex flex-col">
          <NavLink
            className="border-b-2 hover:border-b-[#FF9C01] tracking-wider text-white px-3 py-2 rounded-2xl text-md font-medium"
            onClick={handleNavItemClick}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="border-b-2 hover:border-b-[#FF9C01] tracking-wider text-white px-3 py-2 rounded-2xl  text-md font-medium"
            onClick={handleNavItemClick}
            to="about"
          >
            About
          </NavLink>

          <NavLink
            className="border-b-2 hover:border-b-[#FF9C01] tracking-wider text-white px-3 py-2 rounded-2xl  text-md font-medium"
            onClick={handleNavItemClick}
            to="projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="border-b-2 hover:border-b-[#FF9C01] tracking-wider text-white px-3 py-2 rounded-2xl  text-md font-medium"
            onClick={handleNavItemClick}
            to="contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
