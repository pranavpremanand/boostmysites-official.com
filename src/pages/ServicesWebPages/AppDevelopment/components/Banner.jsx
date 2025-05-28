import { Link } from "react-router-dom";
import bannerimage from "../../../../assets/images/servicewebpages/app development/bannerimage.png";
import aboutimage from "../../../../assets/images/servicewebpages/app development/about-app.png";
import servicesbackgroundimage from "../../../../assets/images/servicewebpages/app development/servicesbackgroundimage.jpg";
import servicecenterimage from "../../../../assets/images/servicewebpages/app development/service-center-image.png";
import customersupporticon from "../../../../assets/images/servicewebpages/app development/customer-support-icon.png";
import { FaWhatsapp } from "react-icons/fa";
import { Link as Scroll } from "react-scroll";

const Banner = () => {
  const services = [
    {
      id: 1,
      section: "IOS APP DEVELOPMENT",
      description:
        "At Boostmysites, we specialize in crafting innovative and user-friendly iOS apps that captivate your audience and drive business growth.",
    },
    {
      id: 2,
      section: "ANDROID APP DEVELOPMENT",
      description:
        "At Boostmysites, we specialize in creating high-quality Android apps that captivate users and drive business growth.",
    },
    {
      id: 3,
      section: "CROSS-PLATFORM APP DEVELOPMENT",
      description:
        "At Boostmysites, we specialize in crafting innovative and user-friendly iOS apps that captivate your audience and drive business growth.",
    },
    { id: 7, img: servicecenterimage },
    {
      id: 4,
      section: "UI/UX DESIGN",
      description:
        "At Boostmysites, we believe that great design is the key to a successful digital product...",
    },
    {
      id: 5,
      section: "APP TESTING AND QUALITY ASSURANCE",
      description:
        "Ensuring a seamless user experience is paramount. Our rigorous testing and quality assurance processes guarantee that your app functions flawlessly.",
    },
    {
      id: 6,
      section: "APP MAINTENANCE AND SUPPORT",
      description:
        "Keep your app running smoothly and up-to-date with our comprehensive maintenance and support services.",
    },
  ];
  return (
    <div className="bg-black text-white">
      <section className="pt-[8rem]">
        <div className="wrapper py-[4rem]">
          <div className="grid md:grid-cols-2 gap-7">
            <div className="flex flex-col md:gap-0 gap-5 justify-evenly">
              <h1 data-aos="fade-right" className="banner-heading text-primary">
                Mobile App Design
              </h1>
              <p data-aos="fade-right" className="desc !text-gray-300">
                Is Your App Losing Users?
                <br /> A clunky user experience and annoying
                <br /> pop-ups can drive users away. Don't let
                <br /> poor design sabotage your app's success.
                <br /> Let's Fix That.
              </p>
              <Scroll
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                data-aos="fade-right"
                className="primary-btn w-fit"
              >
                Craft Your App With Us!
              </Scroll>
            </div>
            <div data-aos="fade-left">
              <img
                src={bannerimage}
                alt="banner"
                className="max-h-[30rem] md:max-h-[40rem]"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper py-[4rem]">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="mx-auto">
              <img
                data-aos="fade-right"
                src={aboutimage}
                alt="about"
                className="max-h-[35rem] w-auto"
              />
            </div>
            <div>
              <h4 data-aos="fade-left" className="text-xl font-bold">
                Your User's New Favorite App
                <br />
                We'll design an app that users can't put down.
              </h4>
              <div
                data-aos="fade-left"
                className="bg-primary group mt-5 p-5 rounded-xl hover:bg-primary/90 transition-all duration-300"
              >
                <h5 className="text-xl font-bold text-black group-hover:text-white">
                  Is Your App's UX Overburdened?
                </h5>
                <p className="text-lg font-semibold mt-3">
                  A cluttered app interface can confuse and frustrate users.
                  Simplify your app's design, and watch user engagement soar.
                </p>
              </div>
              <a
                href="https://wa.me/919632953355?text=Hi!%20I%20want%20to%20build%20an%20app%20for%20my%20business.%20Please%20guide%20me%20with%20the%20next%20steps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-6 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold w-fit transition-all duration-300 hover:-translate-y-1 mx-auto"
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="relative  bg-top bg-no-repeat bg-current">
          <div className="absolute left-0 top-0  w-full h-full">
            <img
              src={servicesbackgroundimage}
              alt="service"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative h-full   bg-black/70">
            <div className="relative wrapper z-10  py-[4rem]">
              <div className="text-center">
                <h2
                  data-aos="fade-up"
                  className="text-3xl font-bold text-primary "
                >
                  APP SERVICES
                </h2>
                <p data-aos="fade-up" className="max-w-[40rem] mx-auto pt-4">
                  We offer end-to-end mobile app solutions including iOS,
                  Android, and cross-platform development with intuitive UI/UX
                  design, thorough testing, and seamless maintenance. From idea
                  to launch and beyond, we ensure performance, reliability, and
                  user satisfaction.
                </p>{" "}
              </div>
              <div className="pt-[4rem]">
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                  <div className="space-y-6">
                    {services.slice(0, 3).map((service) => (
                      <div
                        data-aos="fade-right"
                        key={service.id}
                        className=" rounded-lg hover:bg-white/10 transition-all duration-300 p-6 shadow-lg hover:shadow-xl "
                      >
                        <h2 className="text-xl font-bold text-orange-500 mb-4">
                          {service.section}
                        </h2>
                        <p className="text-gray-300 text-justify">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      data-aos="fade-up"
                      src={services[3].img}
                      alt="service"
                      className="shadow-lg max-w-full h-auto max-h-[38rem] rounded-3xl"
                    />
                  </div>

                  <div className="space-y-6">
                    {services.slice(4).map((service) => (
                      <div
                        data-aos="fade-left"
                        key={service.id}
                        className=" rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-white/10 transition-all duration-300"
                      >
                        <h2 className="text-xl font-bold text-orange-500 mb-4">
                          {service.section}
                        </h2>
                        <p className="text-gray-300 text-justify">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="max-w-[30rem] mt-8 text-center mx-auto rounded-lg p-6 shadow-lg hover:bg-white/10 transition-all duration-300"
                >
                  <img
                    src={customersupporticon}
                    alt="customer support icon"
                    className="mx-auto mb-3"
                  />
                  <h2 className="text-xl font-bold text-orange-500 mb-4">
                    24/7 support by real pepole
                  </h2>
                  <p className="text-gray-300">
                    Enjoy 24/7 support from real people, ready to help you
                    anytime with fast, friendly, and reliable assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
