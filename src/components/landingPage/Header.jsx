import logo from "../../assets/logo/logo.png";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import { Link as RLink, useLocation } from "react-router-dom";

const options = [
  {
    id: 1,
    title: "Features",
    path: "features",
  },
  {
    id: 2,
    title: "Courses",
    path: "courses",
  },
  {
    id: 3,
    title: "Client Reviews",
    path: "reviews",
  },
  {
    id: 4,
    title: "FAQ",
    path: "faq",
  },
];

const Header = ({ path }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

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
    <div
      className={`fixed z-50 py-3 flex justify-center w-full top-0 left-0 ${
        isScrolled ? "backdrop-blur-md bg-black/30" : "bg-black"
      }`}
    >
      <div className="w-full">
        <div className="wrapper flex justify-between items-center w-full">
          {pathname.includes("contact") ? (
            <RLink to={path} className="cursor-pointer">
              <img loading="lazy" 
                src={logo}
                alt=""
                className="h-[4rem] md:h-[5rem] object-contain -mb-3"
              />
            </RLink>
          ) : (
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              <img loading="lazy" 
                src={logo}
                alt=""
                className="h-[4rem] md:h-[5rem] object-contain -mb-3"
              />
            </Link>
          )}
          {!pathname.includes("contact/step") && (
            <div className="text-sm hidden lg:flex items-center gap-7 w-full justify-end">
              {options.map((option) => (
                <Link
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to={option.path}
                  key={option.id}
                  className="text-white link cursor-pointer"
                  activeClass="link-active"
                >
                  {option.title}
                </Link>
              ))}
              <RLink
                rel="noreferrer"
                target="_blank"
                to="https://course.boostmysites.com/wp-login.php?redirect_to=courses/flutter-app-development-program"
                className="text-primary"
              >
                Login
              </RLink>
              {path === "/" ? (
                <RLink to={`${path}contact`} className="primary-btn">
                  Join Now
                </RLink>
              ) : (
                <RLink to={`${path}/contact`} className="primary-btn">
                  Join Now
                </RLink>
              )}
            </div>
          )}

          {!pathname.includes("contact/step") && (
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="py-4 px-10 z-10 bg-black text-white"
            >
              <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-primary text-[2.2rem]"
                >
                  <IoMdClose />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {options.map(({ title, path, id }) => (
                  <Link
                    onClick={() => setIsOpen(false)}
                    key={id}
                    className="text-2xl font-medium transition-colors duration-300 link"
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </Drawer>
          )}
          {!pathname.includes("contact/step") && (
            <div
              className="block lg:hidden justify-self-end"
              onClick={toggleDrawer}
            >
              <Hamburger
                color="#FFAB23"
                size="23"
                toggled={isOpen}
                rounded
                toggle={setIsOpen}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
