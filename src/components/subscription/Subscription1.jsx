import React, { useState } from "react";
import { subscriptionPlansInDollars } from "../../data/constant";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const Subscription1 = () => {
  const [openIndices, setOpenIndices] = useState({}); // Maintain state for each plan

  const toggleAccordion = (planTitle, index) => {
    setOpenIndices((prev) => ({
      ...prev,
      [planTitle]: prev[planTitle] === index ? null : index, // Toggle the index for the specific plan
    }));
  };

  return (
    <div className="bg-transparent py-16 px-4">
      <div className="wrapper">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-primary mb-4"
        >
          Subscription Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {subscriptionPlansInDollars.map((plan) => (
            <div
              key={plan.title}
              className="flex flex-col p-6 bg-black border border-primary rounded-lg h-fit"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">📅</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-white mb-2">
                {plan.title}
              </h3>

              <div className="space-y-3 flex-grow">
                {plan.accordionDetails.map((detail, index) => (
                  <Accordion
                    key={index}
                    plan={detail}
                    isOpen={openIndices[plan.title] === index} // Check state for the specific plan
                    toggleAccordion={() => toggleAccordion(plan.title, index)} // Pass plan title and index
                  />
                ))}
              </div>

              <div data-aos="fade-up" className="mt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-6">
                  {plan.price}
                </div>

                <Link
                  className="w-full mt-4 primary-btn"
                  to="/ai-expert/contact/step1"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription1;
