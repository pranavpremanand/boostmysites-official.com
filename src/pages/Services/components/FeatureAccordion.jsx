import React from "react";
import { useAccordion } from "../Context/AccordianContext";
import { BsArrowUp } from "react-icons/bs";
import { BiArrowToBottom } from "react-icons/bi";

const FeatureAccordion = ({ feature, featureId, heading }) => {
  const { openFeatureId, toggleFeature } = useAccordion();
  const isOpen = openFeatureId === featureId;

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => toggleFeature(featureId)}
        className="w-full p-3 bg-white/5 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-colors"
      >
        <span className="text-white text-sm">{heading}</span>
        {isOpen ? (
          <BsArrowUp className="w-5 h-5 text-primary" />
        ) : (
          <BiArrowToBottom className="w-5 h-5 text-primary" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="p-3 bg-white/5 text-sm text-gray-300">
          <ul>
            {feature?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeatureAccordion;
