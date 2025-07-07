import { useEffect, useState } from "react";
import { Rocket, Trophy, CreditCard, Calendar } from "lucide-react";

const SubscriptionOfferFinal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const reasons = [
    {
      title: "Complete support system",
      description:
        "Branding, website, marketing, mentorship, automation, client acquisition",
      icon: Rocket,
    },
    {
      title: "Proven success",
      description:
        "200+ businesses launched. Many running profitably and scaling monthly",
      icon: Trophy,
    },
    {
      title: "EMI options",
      description: "Starting at just ₹8,000/month, even for low CIBIL scores",
      icon: CreditCard,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Main content card */}
      <div
        className={`relative pt-[10rem] pb-[5rem] max-w-4xl w-full transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-4 md:p-12 shadow-2xl">
          {/* Urgent indicator */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-full animate-bounce">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-ping"></div>
              <span className="text-red-300 text-sm font-semibold">
                🚨 IMPORTANT UPDATE
              </span>
            </div>
          </div>

          {/* Main title with gradient effect */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
            Important Update
          </h1>

          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-fade-in-up delay-300">
              from BoostMySites
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
          </div>

          {/* Key message */}
          <div className="text-center mb-8 animate-fade-in-up delay-500">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-4">
              <span className="font-bold text-orange-400">June 30th, 2025</span>{" "}
              will be the last day to onboard new subscribers under our current
              subscription plan.
            </p>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              This decision has been made to ensure that our existing
              subscribers receive more focused support, stronger connections,
              and better opportunities to grow their businesses with us.
            </p>
          </div>

          {/* Personal message */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-400/30 rounded-2xl p-6 mb-8 animate-fade-in-up delay-600">
            <p className="text-white text-center leading-relaxed">
              We've seen your interest in starting your journey with us—and we'd
              love to have you on board before June 30th.
            </p>
            <p className="text-gray-300 text-center mt-3 leading-relaxed">
              If investment is the only reason holding you back, we've partnered
              with loan providers who can help you get started with EMIs as low
              as <span className="font-bold text-orange-400">₹8,000/month</span>
              , even if your CIBIL score isn't strong.
            </p>
          </div>

          {/* Future plans notice */}
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-400/30 rounded-2xl p-6 mb-8 animate-fade-in-up delay-700">
            <div className="flex items-center justify-center mb-3">
              <Calendar className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-semibold">2026 Update</span>
            </div>
            <p className="text-white text-center leading-relaxed">
              We'll be back with a brand-new subscription model in 2026, but
              until then, this is the final chance to join under the current
              structure.
            </p>
          </div>

          {/* Main content */}
          <div className="space-y-6 mb-8 animate-fade-in-up delay-800 ">
            <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-3 md:p-6 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/30 rounded-xl p-3 md:p-6 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-orange-500/20 transform">
                <p className="text-white font-semibold text-center mb-6 hover:text-orange-200 transition-colors duration-300 text-xl">
                  💼 Why You Should Act Now:
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  {reasons.map((item, index) => (
                    <div
                      key={index}
                      className="relative text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ease-in-out hover:scale-105 transform hover:shadow-lg hover:shadow-orange-500/10 group cursor-pointer overflow-hidden"
                    >
                      {/* Reflection effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out -skew-x-12"></div>
                      </div>

                      <div className="relative z-10">
                        <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 ease-in-out text-orange-400">
                          <item.icon className="mx-auto" />
                        </div>
                        <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
                          <span className="font-semibold text-orange-400 group-hover:text-orange-300 transition-colors duration-300 block mb-2">
                            ✅ {item.title}
                          </span>
                          <span className="group-hover:text-gray-100 transition-colors duration-300 text-sm leading-relaxed">
                            {item.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-red-500/20 to-orange-600/20 border border-red-400/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-orange-400 mb-4 animate-pulse flex items-center justify-center">
                {/* <TrendingUp className="w-6 h-6 mr-2" /> */}
                🔥 This Is Your Window
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">
                If you've been waiting for a perfect time, this is it. Don't
                wait for 2026 when we return with a new (and possibly higher)
                package.
              </p>
              <p className="text-white font-semibold">
                If you've shown interest before, this is your final chance to
                begin your journey with us.
              </p>
              <p className="text-orange-300 font-bold mt-3 text-lg">
                Your idea deserves a real start. Let's build it together.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in-up delay-1000">
            {/* <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-orange-500/25 hover:bg-orange-50 active:scale-95">
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 opacity-20 blur group-hover:opacity-40 transition-opacity duration-300"></div>
            </button> */}

            <p className="text-sm text-gray-400 mt-4">
              Limited time offer • Ends June 30th, 2025
            </p>
          </div>

          {/* Countdown or urgency indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-full">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
              <span className="text-red-300 text-sm font-medium">
                Final chance to join under current structure
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionOfferFinal;
