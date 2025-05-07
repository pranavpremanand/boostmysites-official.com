import React from "react";
import { Link } from "react-router-dom";
import ecommerceArchitectureImg from "../../assets/ecommerce/ecommerce-architecture.jpg";
import { MdArrowOutward } from "react-icons/md";
import { ecommerceServices } from "../../data/constant";

const EcommerceBusiness = () => {
  return (
    <div className="min-h-screen bg-secondary text-white pt-28 md:pt-36 pb-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="blurred-red-circle animate-pulse left-[-10rem] top-[-5rem] opacity-40"></div>
        <div className="blurred-red-circle animate-pulse right-[-10rem] top-[35%] opacity-40"></div>
        <div className="sm-blurred-red-circle animate-pulse left-[20%] top-[60%] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMTExMTEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* Hero Section with Glowing Header */}
      <div className="wrapper">
        <div
          data-aos="fade-up"
          className="relative max-w-7xl mx-auto text-center mb-12 md:mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-purple-500/20 opacity-30 blur-[100px] -z-10"></div>

          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-quaternary border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
            <span className="text-sm text-gray-300">
              Next-Gen E-Commerce Solutions
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-yellow-300 to-primary leading-tight">
            Start Your E-Commerce Business with BoostMySites
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/70 hidden md:block"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl">
              Get a complete infrastructure to run and scale your e-commerce
              company
            </p>
            <div className="h-px w-12 bg-gradient-to-r from-primary/70 to-transparent hidden md:block"></div>
          </div>

          <Link
            to="/connect-with-us/1"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-yellow-500 text-black font-medium px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 group"
          >
            Get Started Now
            <MdArrowOutward className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Introduction */}
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto mb-20 text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10 blur-sm"></div>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            When you subscribe to BoostMySites, you get much more than just a
            website—you get a complete infrastructure to run and scale your
            e-commerce company. From branding to backend, everything is managed
            by our expert team.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-300">
              Everything That's Included
            </span>
            <div className="h-1 w-full bg-gradient-to-r from-primary to-yellow-300 mt-1 rounded-full"></div>
          </h2>
        </div>

        {/* Main Content - Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10 blur-xl"></div>

          {/* Service Cards */}
          {ecommerceServices.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              className="group bg-gradient-to-b from-quaternary/90 to-quaternary/70 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 -z-20">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover object-center rounded-xl opacity-50 group-hover:opacity-60 transition-opacity duration-500 brightness-125 contrast-125 grayscale"
                />
              </div>
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute inset-0 bg-quaternary/60 -z-15"></div>

              <div className="flex items-center mb-4 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary font-bold text-shadow-sm">{service.id}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300 text-shadow-sm">
                  {service.title}
                </h3>
              </div>
              <div className="pl-3 border-l-2 border-primary/50 relative z-10">
                <div className="text-shadow-sm font-medium">
                  {service.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Diagram Section */}
        <div className="mt-24 relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10 blur-xl"></div>
          <div className="sm-blurred-red-circle animate-pulse left-[10%] top-[20%] opacity-30"></div>
          <div className="sm-blurred-red-circle animate-pulse right-[10%] bottom-[20%] opacity-30"></div>

          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 bg-quaternary border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
              <span className="text-sm text-gray-300">Technical Overview</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-yellow-300 to-primary">
              SaaS E-Commerce Platform Architecture
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
          </div>

          <div data-aos="zoom-in" className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-yellow-500/50 to-primary/50 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="bg-gradient-to-b from-quaternary to-quaternary/90 backdrop-blur-sm p-3 md:p-8 rounded-xl border border-gray-800 relative z-10">
              <img
                src={ecommerceArchitectureImg}
                alt="E-Commerce Platform Architecture"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div
            className="text-center mt-12 max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <p className="text-gray-300 text-lg">
              Our architecture is designed for scalability, security, and
              performance. We use industry-leading technologies to ensure your
              e-commerce platform can handle growth and provide a seamless
              experience for your customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceBusiness;
