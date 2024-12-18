import React, { useState } from "react";
import {
  oneYearPlanDetails,
  sixMonthPlanDetails,
  twoYearPlanDetails,
} from "../../../data/constant";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const Subscription = () => {
  const [openIndexOne, setOpenIndexOne] = useState(null);
  const [openIndexTwo, setOpenIndexTwo] = useState(null);
  const [openIndexThree, setOpenIndexThree] = useState(null);

  const toggleAccordionOne = (index) => {
    setOpenIndexOne(openIndexOne === index ? null : index);
  };
  const toggleAccordionTwo = (index) => {
    setOpenIndexTwo(openIndexTwo === index ? null : index);
  };
  const toggleAccordionThree = (index) => {
    setOpenIndexThree(openIndexThree === index ? null : index);
  };
  return (
    <>
      <div className=" bg-transparent py-16 px-4">
        <div className="wrapper ">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold text-center text-primary mb-4"
          >
            Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col p-6 bg-black border border-primary rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">📅</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-white mb-2">
                {sixMonthPlanDetails.title}
              </h3>

              <div className="space-y-3 flex-grow">
                {sixMonthPlanDetails.accordionDetails.map((detail, index) => (
                  <Accordion
                    key={index}
                    plan={detail}
                    isOpen={openIndexOne === index}
                    toggleAccordion={() => toggleAccordionOne(index)}
                  />
                ))}
              </div>

              <div data-aos="fade-up" className="mt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-6">
                  {sixMonthPlanDetails.price}{" "}
                </div>

                <Link
                  className="w-full mt-4 primary-btn"
                  to="/ai-expert/contact/step1"
                >
                  Subscribe
                </Link>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-black border border-primary rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">📅</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-white mb-2">
                {oneYearPlanDetails.title}
              </h3>

              <div className="space-y-3 flex-grow">
                {oneYearPlanDetails.accordionDetails.map((detail, index) => (
                  <Accordion
                    key={index}
                    plan={detail}
                    isOpen={openIndexTwo === index}
                    toggleAccordion={() => toggleAccordionTwo(index)}
                  />
                ))}
              </div>

              <div data-aos="fade-up" className="mt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-6">
                  {oneYearPlanDetails.price}{" "}
                </div>
                <Link
                  className="w-full mt-4 primary-btn"
                  to="/ai-expert/contact/step1"
                >
                  Subscribe
                </Link>
              </div>
            </div>
            <div className="flex flex-col p-6 bg-black border border-primary rounded-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-primary">📅</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center text-white mb-2">
                {twoYearPlanDetails.title}
              </h3>

              <div className="space-y-3 flex-grow">
                {twoYearPlanDetails.accordionDetails.map((detail, index) => (
                  <Accordion
                    key={index}
                    plan={detail}
                    isOpen={openIndexThree === index}
                    toggleAccordion={() => toggleAccordionThree(index)}
                  />
                ))}
              </div>

              <div data-aos="fade-up" className="mt-6 text-center">
                <div className="text-3xl font-bold text-primary mb-6">
                  {twoYearPlanDetails.price}{" "}
                </div>
                <Link
                  className="w-full mt-4 primary-btn"
                  to="/ai-expert/contact/step1"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
