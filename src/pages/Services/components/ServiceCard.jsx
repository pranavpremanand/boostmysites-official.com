import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <Link to={service.link} target="_blank" className="aspect-square">
      <div
        className={` ${
          service.title === "AI Calling Agency" && "cursor-pointer"
        } group h-full w-full border border-slate-200 hover:border-primary relative overflow-hidden rounded-xl p-6 transition-all duration-300`}
      >
        <div className="absolute inset-0">
          <img
            src={service?.img}
            alt={service?.title}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
        <div className="relative z-20">
          <h3 className="text-xl font-bold text-primary mb-2">
            {service?.title}
          </h3>
          <p className="text-white">{service?.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
