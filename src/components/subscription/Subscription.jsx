import React, { useState } from "react";
import { Link } from "react-router-dom";

const Subscription = () => {
  const [activePlan, setActivePlan] = useState(1);

  const plans = [
    {
      id: 1,
      name: "Starter Package",
      subtitle: "Employment Contract",
      price: "₹4,00,000",
      duration: "/ year + GST",
      twoYearPrice: "₹5,00,000 + GST for 2 Years",
      description:
        "Starting your AI company with us requires an investment of just ₹4 lakhs + GST for one year with our shared team model.",
      features: [
        "Shared team model (3-4 companies per team)",
        "Expert CA support",
        "Client manager",
        "Development team access",
        "SEO services",
        "Basic branding & marketing",
      ],
      cta: "Start Basic",
      popular: false,
      borderColor: "border-primary/30",
      bgColor: "bg-secondary",
    },
    {
      id: 2,
      name: "Enterprise Basic",
      subtitle: "Priority Support",
      price: "₹15,00,000",
      duration: "/ year + GST",
      twoYearPrice: "₹20,00,000 + GST for 2 Years",
      description:
        "Dedicated support with a more focused approach. You'll have a smaller shared team for personalized attention.",
      features: [
        "Semi-dedicated team (1-2 companies per team)",
        "Priority CA support",
        "Dedicated client manager",
        "Development team with faster turnaround",
        "Advanced branding",
        "Targeted marketing campaigns",
        "Priority support",
      ],
      cta: "Get Premium",
      popular: true,
      borderColor: "border-primary",
      bgColor: "bg-quaternary",
    },
    {
      id: 3,
      name: "Enterprise Premium",
      subtitle: "Dedicated Team",
      price: "₹25,00,000",
      duration: "/ year + GST",
      twoYearPrice: "₹35,00,000 + GST for 2 Years",
      description:
        "Fully dedicated team just for your company with exclusive access to all experts for rapid growth.",
      features: [
        "Fully dedicated team (exclusive to your company)",
        "Premium CA support",
        "Personal client manager",
        "Dedicated development team",
        "Premium branding services",
        "Comprehensive marketing strategy",
        "Lead generation services",
        "Business development support",
        "24/7 priority support",
      ],
      cta: "Go Exclusive",
      popular: false,
      borderColor: "border-primary/20",
      bgColor: "bg-secondary",
    },
  ];

  return (
    <section className="section-pt relative overflow-hidden">
      {/* Background elements */}
      <div className="blurred-red-circle -top-[10rem] -left-[10rem] opacity-20" />
      <div className="sm-blurred-red-circle bottom-[5rem] right-[5rem] opacity-15" />

      <div className="wrapper">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-stroke">Subscription</span>{" "}
            <span className="text-primary">Plans</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your AI startup journey with our
            flexible options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl border ${plan.borderColor} ${
                plan.bgColor
              } transition-all duration-300 ${
                activePlan === plan.id
                  ? "ring-2 ring-primary/50"
                  : "hover:ring-1 hover:ring-primary/30"
              }`}
            >
              {/* {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold px-4 py-1 rounded-full text-xs">
                  MOST POPULAR
                </div>
              )} */}

              <div className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">
                    {plan.id === 1 ? "🚀" : plan.id === 2 ? "💎" : "✨"}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-primary text-sm">{plan.subtitle}</p>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                  <div className="text-gray-400">{plan.duration}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {plan.twoYearPrice}
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <p className="text-gray-300 text-sm mb-4">
                    {plan.description}
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/subscription-form/step1"
                  className={`mt-auto text-center ${
                    plan.popular ? "primary-btn" : "primary-btn1"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
