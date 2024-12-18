import React, { useMemo, useState } from "react";
import banner from "../assets/images/sales-team-services-banner.webp";
// import ctaCover from "../assets/images/sales-team-page-cta.webp";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";

const SalesTeamServices = () => {
  const [activeTermsSection, setActiveTermsSection] = useState(null);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQs based on search term
  const filteredFAQs = useMemo(() => {
    if (!searchTerm) return faqs;

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lowerCaseSearchTerm) ||
        faq.answer.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm, faqs]);

  return (
    <div className="pt-[4rem] pb-[2rem] relative">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[80vh] flex items-center rounded-lg shadow-lg mb-12">
        <img
          src={banner}
          loading="lazy"
          data-aos="zoom-out"
          className="absolute w-full left-0 top-0 h-full object-cover -z-20"
          alt=""
        />
        <div className="absolute h-full w-full bg-primary1/40 -z-10"></div>
        <div className="absolute h-full w-full bg-black/75 -z-10"></div>
        <div data-aos="zoom-in" className="wrapper py-16 text-center z-10">
          <h1 className="mb-4 text-4xl md:text-6xl max-w-5xl mx-auto font-semibold leading-tight text-primary1 text-center">
            Streamline Your Sales with BoostMySites
          </h1>
          <p className="text-wrap max-w-5xl tracking-wide text-xl mx-auto mb-8">
            Effortless Sales Management for Your AI Company
          </p>
          <Link
            target="_blank"
            to="/ai-expert/contact/step1"
            className="primary-btn1"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
      <div className="relative">
        <div
          data-aos="fade-right"
          className="blurred-red-circle left-[-10rem] top-[18rem] md:top-[10rem] animate-pulse"
        ></div>
        <div
          data-aos="fade-left"
          className="blurred-red-circle right-[-10rem] bottom-[25%] animate-pulse"
        ></div>
        <div className="wrapper text-white">
          {/* Terms & Conditions Section */}
          <section className="mb-[5rem]">
            <h2
              data-aos="fade-up"
              className="text-4xl font-bold text-white capitalize text-center mb-8"
            >
              Terms & Conditions
            </h2>
            <div className="flex flex-col gap-4">
              {termsAndConditions.map((term, index) => (
                <div data-aos="fade-up" key={index} className="rounded-md">
                  <div
                    onClick={() =>
                      setActiveTermsSection(
                        activeTermsSection === index ? null : index
                      )
                    }
                    className="bg-[#111111] rounded-lg p-4 flex justify-between gap-5 w-full font-medium text-start cursor-pointer hover:bg-[#171717] transition"
                  >
                    <h3 className="font-medium tracking-wide">{term.title}</h3>
                    <span>
                      {activeTermsSection === index ? (
                        <FaMinus className="text-xl" />
                      ) : (
                        <FaPlus className="text-xl" />
                      )}
                    </span>
                  </div>
                  {activeTermsSection === index && (
                    <div className="p-4 rounded-lg text-white/80 font-light bg-[#111111]">
                      <ul
                        data-aos="fade-left"
                        className="list-disc list-outside ml-3"
                      >
                        {term.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-[5rem]">
            <h2
              data-aos="fade-up"
              className="text-4xl font-bold text-white capitalize text-center mb-8"
            >
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto">
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Search FAQs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 mb-6 border rounded-lg bg-gray-200 focus:ring-2 focus:ring-primary1 text-black outline-none"
              />
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div
                    data-aos="fade-up"
                    key={index}
                    className="border border-primary1/50 text-white rounded-lg overflow-hidden"
                  >
                    <div
                      onClick={() =>
                        setActiveFAQ(activeFAQ === index ? null : index)
                      }
                      className="bg-[#080808] rounded-lg p-4 flex justify-between gap-5 w-full font-medium text-start cursor-pointer hover:bg-[#111111] transition"
                    >
                      <h3 className="font-medium tracking-wide">
                        {faq.question}
                      </h3>
                      <span>
                        {activeFAQ === index ? (
                          <FaMinus className="text-xl" />
                        ) : (
                          <FaPlus className="text-xl" />
                        )}
                      </span>
                    </div>
                    {activeFAQ === index && (
                      <div className="p-4 rounded-lg bg-[#080808] text-white/80 font-light">
                        <p data-aos="fade-left">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
                {filteredFAQs.length === 0 && (
                  <div className="text-center text-white p-4">
                    No FAQs found matching your search.
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section
            data-aos="fade-up"
            className="rounded-lg bg-[#1a1919] px-[1rem] overflow-hidden min-h-[40vh] flex flex-col justify-center bg-center bg-cover text-center relative"
            //   style={{ backgroundImage: `url(${ctaCover})` }}
          >
            <div className="relative z-20 py-[3rem]">
              <h2 className="text-3xl font-semibold tracking-wider mb-3">
                Ready to Supercharge Your Sales?
              </h2>
              <p className="text-xl mb-6 font-light">
                Leave the sales to the experts and focus on growing your AI
                company!
              </p>
              <Link to="/ai-expert/contact/step1" className="primary-btn1">
                Sign Up Now
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SalesTeamServices;

const termsAndConditions = [
  {
    title: "Commission Structure",
    details: [
      "Subscribers who opt for the BoostMySites sales team service agree to pay a 20% commission on every successfully closed deal.",
      "This commission is calculated based on the total value of the deal.",
    ],
  },
  {
    title: "Exclusivity Clause",
    details: [
      "Once you sign up for the sales team service, you are not permitted to handle sales directly for your business.",
      "All sales inquiries, negotiations, and closures must be conducted by the BoostMySites sales team.",
    ],
  },
  {
    title: "Quotation Handling",
    details: [
      "All quotations will be issued under the name of BoostMySites and the subscriber’s company.",
      "The dual branding ensures transparency and professionalism during the sales process.",
    ],
  },
  {
    title: "Lead Submission and Management",
    details: [
      "The subscriber must submit all relevant leads through the BoostMySites lead submission system.",
      "Failure to route leads through BoostMySites will be considered a violation of this agreement.",
    ],
  },
  {
    title: "Reporting and Communication",
    details: [
      "BoostMySites will provide regular updates on lead status, client communication, and deal closures.",
      "The subscriber must ensure timely communication with the sales team to avoid delays in deal progression.",
    ],
  },
  {
    title: "Payment and Settlements",
    details: [
      "Commission payments must be settled within 7 business days after the deal closure.",
      "Failure to pay commission on time may result in penalties or suspension of the service.",
    ],
  },
  {
    title: "Service Termination",
    details: [
      "BoostMySites reserves the right to terminate the sales team service if the subscriber fails to comply with these terms and conditions.",
    ],
  },
  {
    title: "Liability Disclaimer",
    details: [
      "BoostMySites is not liable for unsuccessful sales attempts or any loss of potential revenue due to unforeseen circumstances.",
    ],
  },
];

const faqs = [
  {
    question: "How does the 20% commission work?",
    answer:
      "The 20% commission is calculated based on the total value of the deal. For example, if the deal is worth $10,000, the commission owed to BoostMySites would be $2,000.",
  },
  {
    question:
      "Why can’t I handle sales directly after signing up for this service?",
    answer:
      "This exclusivity ensures that all sales processes are handled professionally by our team, maintaining consistency and avoiding confusion for your clients.",
  },
  {
    question: "Will the client know about BoostMySites?",
    answer:
      "The quotation will be issued under both BoostMySites and your company name, ensuring full transparency while retaining your brand identity.",
  },
  {
    question: "How do I submit leads to the BoostMySites sales team?",
    answer:
      "Leads can be submitted via the BoostMySites lead submission system. Detailed instructions will be provided during the onboarding process.",
  },
  {
    question: "What happens if I don’t pay the commission on time?",
    answer:
      "Delayed payments may result in penalties or suspension of the sales team service until the issue is resolved.",
  },
  {
    question: "Can I negotiate the terms of the agreement?",
    answer:
      "Our terms are standardized to ensure fairness and efficiency. However, we’re open to discussions for unique requirements.",
  },
  {
    question: "What if the sales team fails to close the deal?",
    answer:
      "While our team works diligently to close every deal, BoostMySites does not guarantee a 100% success rate. No commission is charged for unclosed deals.",
  },
  {
    question: "Can I opt out of the service later?",
    answer:
      "Yes, you can opt out of the service by providing a 30-day notice. However, all pending commissions must be cleared before termination.",
  },
  {
    question: "How are payments handled for closed deals?",
    answer:
      "Payments from clients will be routed through a joint account managed by BoostMySites. The subscriber will receive their share (after deducting the 20% commission) within 3 business days.",
  },
  {
    question: "Will BoostMySites provide post-sales support to clients?",
    answer:
      "Post-sales support is not included in the sales team service. It is the subscriber’s responsibility to handle client support after the deal is closed.",
  },
];
