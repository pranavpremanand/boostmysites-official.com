import { Link, useLocation } from "react-router-dom";
import { Link as SLink } from "react-scroll";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex backdrop-blur-sm flex-col gap-4 md:items-center justify-center py-[4rem] text-white mt-14 border-t border-gray-800/70">
      <div className="wrapper w-full flex md:flex-row flex-col items-center justify-between gap-10">
        <img src={logo} alt="logo" className="h-[5rem] object-contain" />
        {/* <div className="flex flex-col gap-3">
          <h5 className="font-semibold">Courses</h5>
          <div className="flex md:flex-row flex-col gap-1 md:gap-5">
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <Link className="link" to="/">
                  AI Driven Design
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Personalized Content
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Optimized for Conversions
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <Link className="link" to="/">
                  Predictive Analytics
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Automated Marketing
                </Link>
              </li>
              <li>
                <Link className="link" to="/">
                  Continuous Optimization
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="flex flex-col gap-3">
          <h5 className="font-semibold">BOOSTMYSITES</h5>
          <ul className="flex flex-col gap-1 text-sm text-center text-white/80 font-light">
            {!pathname.includes('contact/step')&&<li>
              <SLink
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="link cursor-pointer"
                to="reviews"
              >
                Reviews
              </SLink>
            </li>}
            {!pathname.includes("contact/step") && (
              <li>
                <Link className="link cursor-pointer" to="/">
                  Contact Us
                </Link>
              </li>
            )}
            {/* <li>
              <Link
                className="link"
                rel="noopener noreferrer"
                target="_blank"
                to="https://course.boostmysites.com/wp-login.php?redirect_to=courses/flutter-app-development-program"
              >
                Log In
              </Link>
            </li> */}
            <li>
              <Link
                className="link"
                to='/privacy-policy'>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="">
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <Link
                className="link"
                rel="noopener noreferrer"
                target="_blank"
                to="https://course.boostmysites.com/wp-login.php?redirect_to=courses/flutter-app-development-program"
              >
                Log In
              </Link>
            </li> */}
        {/* <li>
              <Link className="link" to="/">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="link" to="/">
                Privacy Policy
              </Link>
            </li> */}
        {/* <li>
              <Link className="link" to="/">
                Contact Us
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="pt-[2rem] border-t border-white/30 w-full mt-[1rem]">
        <p className="text-sm text-white/80 font-light text-center">
          © 2024 BoostMySites. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
