import React, { useState } from "react";
import FaqItem from "./Faqitems";

const faqData = [
  {
    id: 1,
    question: "What services are included in the 6-Month Subscription Plan?",
    answer: `The 6-month subscription plan (₹2.44 Lakhs) provides:
    • Branding and marketing support.
    • Assistance with company registration and compliance via a CA.
    • Daily operational support and access to a scrutinizing team.
    • Mentorship with a structured roadmap.
    • Customized CRM system for lead management and sales tracking.
    • Access to developers, designers, and networking opportunities.`,
  },
  {
    id: 2,
    question:
      "How is the 1-Year Subscription Plan different from the 6-Month Plan?",
    answer:
      "The 1-Year Subscription Plan offers extended support and additional benefits compared to the 6-Month Plan, including longer-term strategic planning and enhanced resources.",
  },
  {
    id: 3,
    question:
      "What additional benefits do I get with the 2-Year Subscription Plan?",
    answer:
      "The 2-Year Subscription Plan includes premium features, priority support, and exclusive access to advanced tools and resources for long-term business growth.",
  },
  {
    id: 4,
    question: "Can I pay for the subscription in installments?",
    answer:
      "Yes, we offer flexible payment options with installment plans to make our services more accessible to businesses of all sizes.",
  },
  {
    id: 5,
    question: "Who will assist me during the subscription period?",
    answer:
      "You'll be supported by a dedicated team of professionals, including business analysts, developers, designers, and mentors throughout your subscription period.",
  },
  {
    id: 6,
    question: "What is the CRM system, and how does it help my business?",
    answer:
      "Our CRM system is a comprehensive tool for managing customer relationships, tracking leads, and monitoring sales performance to help grow your business effectively.",
  },
  {
    id: 7,
    question: "What kind of mentorship is included in these plans?",
    answer:
      "Our mentorship program includes one-on-one sessions with industry experts, structured guidance, and regular progress tracking to help achieve your business goals.",
  },
  {
    id: 8,
    question: "Can I upgrade my subscription plan during the term?",
    answer:
      "Yes, you can upgrade your subscription plan at any time to access additional features and benefits. We'll adjust the pricing accordingly.",
  },
  {
    id: 9,
    question: "Are there any hidden charges apart from the subscription cost?",
    answer:
      "No, our pricing is transparent with no hidden charges. All features and services mentioned in the plan are included in the subscription cost.",
  },
  {
    id: 10,
    question: "How do I get started with BoostMySites?",
    answer:
      "Getting started is easy! Simply choose your preferred subscription plan, complete the registration process, and our team will guide you through the onboarding process.",
  },
  {
    id: 11,
    question:
      "I am a complete beginner with no coding knowledge. Can I start this?",
    answer:
      "Absolutely! Our platform is designed to accommodate users of all skill levels, including complete beginners. We provide comprehensive support and guidance throughout your journey.",
  },
];

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = (id) => {
    setIsOpen((prev) => {
      return prev === id ? "" : id;
    });
  };
  return (
    <div className=" bg-transparent py-12 px-4 sm:px-6 lg:px-8">
      <div className="wrapper ">
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          FAQ
        </h1>
        <div className="space-y-6">
          {faqData.map((faq) => (
            <div data-aos="fade-up" className="bg-black" key={faq.id}>
              <FaqItem
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                onClose={onClose}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
