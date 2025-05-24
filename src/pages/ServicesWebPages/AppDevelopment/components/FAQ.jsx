import { useState } from "react";
import { BiSolidCaretDownCircle } from "react-icons/bi";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="padding-between">
      <div className="wrapper">
        <h2 className="section-heading" data-aos="fade-up">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="" data-aos="fade-up">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                }
                className="flex w-full justify-between py-4 text-left"
              >
                <span className="md:text-xl font-medium">{faq.question}</span>

                <BiSolidCaretDownCircle
                  size={25}
                  className={`mt-1 flex-shrink-0 text-white transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  activeIndex === index ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
