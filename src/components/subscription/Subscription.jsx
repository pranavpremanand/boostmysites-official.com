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

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Subscription = () => {
//   const [activePlan, setActivePlan] = useState(1);
//   const [plans, setPlans] = useState([]);
//   const [lastUpdated, setLastUpdated] = useState("");
//   const basePlans = [
//     {
//       id: 1,
//       name: "Starter Package",
//       subtitle: "Employment Contract",
//       basePrice: 400000,
//       price: 400000,
//       duration: "/ year + GST",
//       baseTwoYearPrice: 500000,
//       twoYearPrice: 500000,
//       description:
//         "Starting your AI company with us requires an investment of just ₹4 lakhs + GST for one year with our shared team model.",
//       features: [
//         "Shared team model (3-4 companies per team)",
//         "Expert CA support",
//         "Client manager",
//         "Development team access",
//         "SEO services",
//         "Basic branding & marketing",
//       ],
//       cta: "Start Basic",
//       popular: false,
//       borderColor: "border-primary/30",
//       bgColor: "bg-secondary",
//       dailyChange: 0,
//       changePercentage: 0,
//     },
//     {
//       id: 2,
//       name: "Enterprise Basic",
//       subtitle: "Priority Support",
//       basePrice: 1500000,
//       price: 1500000,
//       duration: "/ year + GST",
//       baseTwoYearPrice: 2000000,
//       twoYearPrice: 2000000,
//       description:
//         "Dedicated support with a more focused approach. You'll have a smaller shared team for personalized attention.",
//       features: [
//         "Semi-dedicated team (1-2 companies per team)",
//         "Priority CA support",
//         "Dedicated client manager",
//         "Development team with faster turnaround",
//         "Advanced branding",
//         "Targeted marketing campaigns",
//         "Priority support",
//       ],
//       cta: "Get Premium",
//       popular: true,
//       borderColor: "border-primary",
//       bgColor: "bg-quaternary",
//       dailyChange: 0,
//       changePercentage: 0,
//     },
//     {
//       id: 3,
//       name: "Enterprise Premium",
//       subtitle: "Dedicated Team",
//       basePrice: 2500000,
//       price: 2500000,
//       duration: "/ year + GST",
//       baseTwoYearPrice: 3500000,
//       twoYearPrice: 3500000,
//       description:
//         "Fully dedicated team just for your company with exclusive access to all experts for rapid growth.",
//       features: [
//         "Fully dedicated team (exclusive to your company)",
//         "Premium CA support",
//         "Personal client manager",
//         "Dedicated development team",
//         "Premium branding services",
//         "Comprehensive marketing strategy",
//         "Lead generation services",
//         "Business development support",
//         "24/7 priority support",
//       ],
//       cta: "Go Exclusive",
//       popular: false,
//       borderColor: "border-primary/20",
//       bgColor: "bg-secondary",
//       dailyChange: 0,
//       changePercentage: 0,
//     },
//   ];

//   // Function to generate consistent daily prices based on date
//   const generateDailyPrices = (dateString) => {
//     // Create a predictable seed based on the date
//     const seed = dateString.split("-").join("");
//     const random = (min, max, planId) => {
//       const x = Math.sin(Number(seed + planId)) * 10000;
//       return Math.floor((x - Math.floor(x)) * (max - min) + min);
//     };

//     return basePlans.map((plan) => {
//       // Generate consistent random values between -5% and +5% for this date
//       const changePercentage = random(-5, 5, plan.id) / 100;
//       const changeAmount = Math.round(plan.basePrice * changePercentage);
//       const price = plan.basePrice + changeAmount;

//       const twoYearChangePercentage = random(-5, 5, plan.id + 10) / 100;
//       const twoYearChangeAmount = Math.round(
//         plan.baseTwoYearPrice * twoYearChangePercentage
//       );
//       const twoYearPrice = plan.baseTwoYearPrice + twoYearChangeAmount;

//       return {
//         ...plan,
//         price,
//         twoYearPrice,
//         dailyChange: changeAmount,
//         changePercentage,
//         lastUpdated: new Date().toLocaleString("en-IN", {
//           timeZone: "Asia/Kolkata",
//         }),
//       };
//     });
//   };

//   // Initialize prices
//   useEffect(() => {
//     const getCurrentIndiaDate = () => {
//       const now = new Date();
//       const options = { timeZone: "Asia/Kolkata" };
//       return new Date(now.toLocaleString("en-US", options));
//     };

//     const indiaDate = getCurrentIndiaDate();
//     const dateString = indiaDate.toISOString().split("T")[0]; // YYYY-MM-DD format

//     // Check if we have saved prices for today
//     const savedData = JSON.parse(localStorage.getItem("dailyPlanPrices"));

//     if (savedData && savedData.date === dateString) {
//       setPlans(savedData.plans);
//       setLastUpdated(savedData.lastUpdated);
//     } else {
//       // Generate new prices for today
//       const todayPrices = generateDailyPrices(dateString);
//       const updateTime = new Date().toLocaleString("en-IN", {
//         timeZone: "Asia/Kolkata",
//       });

//       const dataToSave = {
//         date: dateString,
//         plans: todayPrices,
//         lastUpdated: updateTime,
//       };

//       localStorage.setItem("dailyPlanPrices", JSON.stringify(dataToSave));
//       setPlans(todayPrices);
//       setLastUpdated(updateTime);
//     }

//     // Set up interval to check for new day (every hour)
//     const intervalId = setInterval(() => {
//       const now = new Date();
//       const indiaNow = new Date(
//         now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
//       );
//       const hours = indiaNow.getHours();
//       const minutes = indiaNow.getMinutes();

//       // Check if it's midnight (12 AM) IST
//       if (hours === 0 && minutes === 0) {
//         const newDateString = indiaNow.toISOString().split("T")[0];
//         const newPrices = generateDailyPrices(newDateString);
//         const updateTime = indiaNow.toLocaleString("en-IN", {
//           timeZone: "Asia/Kolkata",
//         });

//         const dataToSave = {
//           date: newDateString,
//           plans: newPrices,
//           lastUpdated: updateTime,
//         };

//         localStorage.setItem("dailyPlanPrices", JSON.stringify(dataToSave));
//         setPlans(newPrices);
//         setLastUpdated(updateTime);
//       }
//     }, 3600000); // Check every hour

//     return () => clearInterval(intervalId);
//   }, []);

//   // Format currency with Indian locale
//   const formatCurrency = (amount) => {
//     return new Intl.NumberFormat("en-IN", {
//       maximumFractionDigits: 0,
//     }).format(amount);
//   };

//   if (plans.length === 0) {
//     return (
//       <div className="wrapper py-16 text-center text-white">
//         Loading plans...
//       </div>
//     );
//   }
//   return (
//     <section className="section-pt relative overflow-hidden">
//       {/* Background elements */}
//       <div className="blurred-red-circle -top-[10rem] -left-[10rem] opacity-20" />
//       <div className="sm-blurred-red-circle bottom-[5rem] right-[5rem] opacity-15" />

//       <div className="wrapper">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             <span className="text-stroke">Subscription</span>{" "}
//             <span className="text-primary">Plans</span>
//           </h2>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             Choose the perfect plan for your AI startup journey with our
//             flexible options
//           </p>
//           <p className="text-sm text-gray-500 mt-2">
//             Prices update daily at 12:00 AM IST. Last updated:{" "}
//             {new Date().toLocaleString("en-IN")}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {plans.map((plan) => (
//             <div
//               key={plan.id}
//               className={`relative rounded-xl border ${plan.borderColor} ${
//                 plan.bgColor
//               } transition-all duration-300 ${
//                 activePlan === plan.id
//                   ? "ring-2 ring-primary/50"
//                   : "hover:ring-1 hover:ring-primary/30"
//               }`}
//             >
//               <div className="p-8 h-full flex flex-col">
//                 <div className="mb-6">
//                   <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4">
//                     {plan.id === 1 ? "🚀" : plan.id === 2 ? "💎" : "✨"}
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
//                   <p className="text-primary text-sm">{plan.subtitle}</p>
//                 </div>

//                 <div className="mb-6">
//                   <div className="flex items-end">
//                     <div className="text-3xl font-bold text-primary">
//                       {formatCurrency(plan.price)}
//                     </div>
//                     <div
//                       className={`ml-2 text-sm font-medium ${
//                         plan.dailyChange >= 0
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {plan.dailyChange >= 0 ? "↑" : "↓"}
//                       {Math.abs(plan.dailyChange).toLocaleString("en-IN")}(
//                       {plan.changePercentage > 0 ? "+" : ""}
//                       {plan.changePercentage.toFixed(2)}%)
//                     </div>
//                   </div>
//                   <div className="text-gray-400">{plan.duration}</div>
//                   <div className="text-sm text-gray-500 mt-1">
//                     {formatCurrency(plan.twoYearPrice)} + GST for 2 years
//                   </div>
//                 </div>

//                 <div className="mb-6 flex-grow">
//                   <p className="text-gray-300 text-sm mb-4">
//                     {plan.description}
//                   </p>
//                   <ul className="space-y-2">
//                     {plan.features.map((feature, index) => (
//                       <li key={index} className="flex items-start">
//                         <svg
//                           className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                         <span className="text-gray-300 text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <Link
//                   to="/subscription-form/step1"
//                   className={`mt-auto text-center ${
//                     plan.popular ? "primary-btn" : "primary-btn1"
//                   }`}
//                 >
//                   {plan.cta}
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Subscription;
