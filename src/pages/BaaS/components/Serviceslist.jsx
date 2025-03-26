import React from "react";
import ServiceCard from "./ServiceCard";
import videoVid from "../../../assets/videos/Ai_Video.mp4";
import callingVid from "../../../assets/videos/Ai_calling.mp4";

// services
export const services = [
  {
    id: 0,
    title: "",
    desc: "",
    video: videoVid,
    link: "",
  },
  {
    id: 1,
    title:
      "Turn your AI vision into a profitable business! With BoostMySites, you can launch your own AI-powered AI voice calling and AI video calling company and offer cutting-edge services to businesses worldwide.",
    desc: `
    • Ready-to-Use AI Calling & Video Software – Start your business instantly, no coding required.
    • White-Label Branding – Offer AI-powered voice and video services under your own brand.
    • Customizable AI Agents – Personalize AI voice assistants and video conferencing features for any industry.
    • Automated Client Engagement – AI handles calls, meetings, follow-ups, and lead nurturing.
    • Business & Sales Training – Learn how to attract clients and scale your AI voice calling and AI video calling company successfully.`,
    img: require("../../../assets/images/serviceimg/web.webp"),
    link: "",
  },
  {
    id: 2,
    title: "",
    desc: "",
    video: callingVid,
    link: "",
  },
];

const Serviceslist = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-transparent">
      <div className="wrapper">
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-2xl md:text-4xl font-bold mb-4 text-primary"
          >
            Start your AI calling and video calling company and help to
            revolutionize world.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div data-aos="fade-up" className="bg-black" key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serviceslist;
