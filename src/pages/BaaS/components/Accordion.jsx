import React from "react";

import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Accordion = ({ plan, isOpen, toggleAccordion }) => {
  return (
    <div
      data-aos="fade-up"
      className="border border-white/10 rounded-lg text-white"
    >
      <button
        className="w-full text-start p-3 bg-white/5 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors"
        onClick={toggleAccordion}
      >
        <span className="text-white text-sm">{plan.heading}</span>
        {isOpen ? (
          <FaChevronRight className="w-5 h-5 text-primary" />
        ) : (
          <FaChevronDown className="w-5 h-5 text-primary" />
        )}
      </button>
      {isOpen && (
        <div className="p-3 bg-white/5 text-sm text-gray-300">
          <h2 className="font-bold text-gray-200">{plan.description}</h2>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            {(plan.services || plan.mentors)?.map((item, index) => {
              if (plan.mentors) {
                // If the item is from the mentors list, format the name and designation
                const [name, ...designation] = item.split(",");
                return (
                  <li key={index} className="">
                    <strong>{name} </strong> {designation.join(" ")}
                  </li>
                );
              }

              // If it's not from the mentors, it's from the services list
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Accordion;
