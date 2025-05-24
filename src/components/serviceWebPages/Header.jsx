import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import logo from '../../assets/logo/logo.png'

const ServicePageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", to: "/services/app-development" },
    { name: "Case Study", to: "/services/app-development/case-study" },
  ];

  return (
    <header className="bg-black text-white fixed z-30 w-screen">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"} className="flex items-center space-x-2">
              <img
                src={logo}
                alt="logo"
                className="w-[6rem] sm:w-[8rem] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm font-medium hover:text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Scroll
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              className="inline-block rounded-full bg-[#ff9934] px-6 py-2 text-sm font-medium text-black hover:bg-[#f08a20] transition-colors cursor-pointer"
            >
              Contact us
            </Scroll>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-black/20"
                >
                  {link.name}
                </Link>
              ))}
              <Scroll
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-black/20"
              >
                Contact us
              </Scroll>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default ServicePageHeader;
