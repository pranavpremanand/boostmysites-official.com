import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

const FaqItem = ({ id, question, answer, isOpen, onClose }) => {
  return (
    <div className="border border-primary rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full p-4 text-left flex justify-between items-center bg-black/20 hover:bg-black/30 transition-colors duration-200"
        onClick={() => onClose(id)}
      >
        <span className="font-medium text-white">{question}</span>
        <CgArrowTopRight
          width={20}
          height={20}
          className="min-w-5 min-h-5 max-h-5 max-w-5 text-orange-500 transform transition-transform"
          style={{
            transform: isOpen === id ? "rotate(85deg)" : "rotate(-5deg)",
          }}
        />
      </button>
      {isOpen === id && (
        <div className="p-4 bg-black/10">
          <p className="text-gray-300 whitespace-pre-line">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
