import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../../data/constant";

const Serviceslist = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-transparent">
      <div className="wrapper">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-bold mb-4 text-primary"
          >
            Services you can offer to your customers through BOOSTMYSITES
            subscription
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div data-aos="fade-up" className="bg-black" key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serviceslist;
