import React, { useState } from "react";
import FaqItem from "./Faqitems";

const faqData = [
  {
    id: 1,
    question: "What is an AI voice calling, and how does it work?",
    answer: `An AI voice calling enables businesses to automate inbound and outbound calls using AI-powered voice assistants. These AI-driven solutions handle customer inquiries, appointment bookings, sales calls, and support interactions 24/7.
`,
  },
  {
    id: 2,
    question:
      "What is an AI Video calling?",
    answer:
      "An AI video calling provides businesses with smart video meeting solutions powered by artificial intelligence. Features include auto-transcription, real-time language translation, AI-assisted meeting moderation, and facial recognition for seamless virtual collaboration.",
  },
  {
    id: 3,
    question:
      "What is BaaS (Business-as-a-Service) in this context?",
    answer:
      "Yes! When you subscribe to BoostMySites, you get a fully operational AI voice and video company. You can provide AI-powered calling and video conferencing services to businesses under your own brand and pricing model.",
  },
  {
    id: 4,
    question: "Am I starting my own AI company with BoostMySites?",
    answer:
      "Yes, we offer flexible payment options with installment plans to make our services more accessible to businesses of all sizes.",
  },
  {
    id: 5,
    question: "Do I need technical skills to start my AI voice and video calling company with BoostMySites?",
    answer:
      "No! BoostMySites provides all the tools, training, and support you need to launch and manage your AI business without any coding or technical expertise.",
  },
  {
    id: 6,
    question: "How can I earn money with my AI voice and video calling?",
    answer:
      "OYou can offer AI-powered calling and video conferencing solutions to businesses worldwide. Charge clients on a subscription basis, per call/meeting, or provide custom AI solutions for enterprises.",
  },
  {
    id: 7,
    question: "Can I customize AI voices and video features for my clients?",
    answer:
      "Yes! Our AI solutions allow you to personalize voice assistants, automate conversations, and integrate smart video tools tailored to different industries.",
  },
  {
    id: 8,
    question: "What industries can benefit from AI voices and video calling services?",
    answer:
      "Almost every industry! AI-powered communication is in high demand for e-commerce, healthcare, finance, real estate, education, and customer service sectors.",
  },
  {
    id: 9,
    question: "How do I attract clients for my AI voice and video calling company?",
    answer:
      "BoostMySites provides marketing and sales support to help you acquire clients. You can target businesses that need automated customer interactions, AI-driven video solutions, and seamless communication tools.",
  },
  {
    id: 10,
    question: "How do I get started with BoostMySites?",
    answer:
      "Simply subscribe to BoostMySites, and we’ll provide everything you need to set up, run, and scale your AI voice and video calling company. Start offering AI-powered calling and video conferencing solutions today!",
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
