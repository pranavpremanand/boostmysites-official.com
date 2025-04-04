import logo from "../assets/logo/logo.png";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { Link, Link as RLink } from "react-router-dom";

const options = [
  {
    id: 0,
    title: "Home",
    path: "/",
  },
  {
    id: 1,
    title: "Start Your AI Company",
    path: "/ai-expert",
  },
  {
    id: 2,
    title: "Start Your Ecommerce Company",
    path: "https://ecommerce.boostmysites.com",
  },
  {
    id: 3,
    title: "BaaS",
    path: "/baas",
  },
];

const companyLinks = [
  {
    id: 1,
    title: "Services and Pricing",
    path: "/services",
  },
  {
    id: 2,
    title: "Sales Team",
    path: "/sales-team-services",
  },
  {
    id: 3,
    title: "Blogs",
    path: "/blogs",
  },
  // {
  //   id: 4,
  //   title: "Client Stories",
  //   path: "/boostmysites-client-reviews",
  // },
  {
    id: 5,
    title: "Reviews",
    path: "/reviews",
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/ai-expert/contact/step1",
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Change 100 to whatever scroll position you prefer
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed border-b border-white/5 z-50 py-3 flex justify-center w-full top-0 left-0 ${
          isScrolled ? "backdrop-blur-md bg-secondary/30" : "bg-secondary"
        }`}
      >
        <div className="w-full">
          <div className="wrapper flex justify-between items-center w-full">
            <RLink to="/home" className="cursor-pointer">
              <img
                loading="lazy"
                src={logo}
                alt=""
                className="h-[4rem] md:h-[5rem] object-contain -mb-3"
              />
            </RLink>
            <div className="text-sm hidden xl:flex items-center gap-14">
              {options.map((option) => (
                <RLink
                  to={option.path}
                  key={option.id}
                  className="text-white link cursor-pointer"
                >
                  {option.title}
                </RLink>
              ))}
              <div className="relative group">
                <button className="text-sm cursor-pointer peer">Company</button>
                <div
                  className="invisible overflow-hidden absolute w-[17rem] bg-[#111111e5] backdrop-blur-sm flex flex-col top-[160%] -left-full rounded-lg 
                      peer-hover:visible hover:visible transition-all duration-300"
                >
                  {companyLinks.map((link) => (
                    <Link
                      key={link.id}
                      to={link.path}
                      className="px-5 py-3 hover:bg-white/10 transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
              <RLink to="/connect-with-us/1" className="primary-btn1">
                Let's Connect
              </RLink>
            </div>

            <div
              className="block xl:hidden justify-self-end"
              onClick={toggleDrawer}
            >
              <Hamburger
                color="#F0801C"
                size="23"
                toggled={isOpen}
                rounded
                toggle={setIsOpen}
              />
            </div>
          </div>
        </div>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="py-4 z-10 bg-black text-white"
      >
        <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
          <button
            onClick={() => setIsOpen(false)}
            className="text-primary1 text-[2.2rem]"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="flex flex-col">
          {options.concat(companyLinks).map(({ title, path }) => (
            <RLink
              onClick={() => setIsOpen(false)}
              key={path}
              className="text-xl py-2 pl-4 pr-2 hover:bg-[#262626] w-full font-medium cursor-pointer transition-colors duration-300"
              to={path}
            >
              {title}
            </RLink>
          ))}
          <RLink
            onClick={() => setIsOpen(false)}
            className="text-xl py-2 pl-4 pr-2 hover:bg-[#262626] w-full font-medium cursor-pointer transition-colors duration-300"
            to="/connect-with-us"
          >
            Let's Connect
          </RLink>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
