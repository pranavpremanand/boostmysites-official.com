import React from "react";

const SubscriptionOffer = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-28 md:pt-44 pb-12">
      {/* Glowing Header */}
      <div className="wrapper">
        <div
          data-aos="fade-up"
          className="relative max-w-7xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent opacity-20 blur-3xl -z-10"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-300 leading-tight">
            SECURE YOUR SPOT BEFORE APRIL 30TH
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Big Changes Coming to Our Subscription Plans!
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Current Pricing Card */}
            <div
              data-aos="fade-up"
              className="bg-gradient-to-br from-secondary to-gray-900 rounded-xl p-6 md:p-8 border border-gray-800 shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-primary">
                  Current Pricing
                </h2>
                <span className="self-start sm:self-auto px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm font-medium border border-green-800">
                  Until April 30th
                </span>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="bg-quaternary p-5 md:p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    1-Year Plan
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold">
                    ₹4,00,000{" "}
                    <span className="text-sm md:text-base font-normal text-gray-400">
                      + GST
                    </span>
                  </p>
                </div>

                <div className="bg-quaternary p-5 md:p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    2-Year Plan
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold">
                    ₹5,00,000{" "}
                    <span className="text-sm md:text-base font-normal text-gray-400">
                      + GST
                    </span>
                  </p>
                </div>

                <div className="bg-quaternary p-5 md:p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    Revenue Share
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    70%{" "}
                    <span className="text-white text-lg md:text-xl">(You)</span>{" "}
                    / 30%{" "}
                    <span className="text-white text-lg md:text-xl">(Us)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* New Pricing Card */}
            <div
              data-aos="fade-up"
              className="bg-gradient-to-br from-secondary to-gray-900 rounded-xl p-6 md:p-8 border border-gray-800 shadow-lg hover:shadow-red-500/20 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h2 className="text-xl md:text-2xl font-bold text-red-400">
                  From May 1st
                </h2>
                <span className="self-start sm:self-auto px-3 py-1 bg-red-900/50 text-red-300 rounded-full text-sm font-medium border border-red-800">
                  New Pricing
                </span>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="bg-quaternary p-5 md:p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    All Plans Increase
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-red-400">
                    50%{" "}
                    <span className="text-sm md:text-base font-normal text-gray-400">
                      Price Hike
                    </span>
                  </p>
                </div>

                <div className="bg-quaternary p-5 md:p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    New Revenue Share
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-red-400">
                    60%{" "}
                    <span className="text-white text-lg md:text-xl">(You)</span>{" "}
                    / 40%{" "}
                    <span className="text-white text-lg md:text-xl">(Us)</span>
                  </p>
                </div>

                <div className="bg-quaternary p-5 md:p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    Limited Time Offer
                  </h3>
                  <p className="text-base md:text-lg text-gray-300">
                    Lock in current rates with just ₹5,000 booking amount before
                    April 30th
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/80 to-red-500/80 p-0.5 rounded-xl">
              <div
                data-aos="fade-up"
                className="bg-black rounded-xl p-6 md:p-8"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
                  Why This Matters For You
                </h2>
                <p className="text-gray-300 mb-6 md:mb-8 text-center max-w-3xl mx-auto">
                  We're offering a final opportunity to lock in your AI company
                  setup at the current pricing and revenue share. All it takes
                  is a ₹5,000 booking amount before April 30th to secure your
                  spot - your onboarding can happen anytime after.
                </p>

                <div className="text-center">
                  <a
                    href="https://rzp.io/rzp/JlbbMTo"
                    className="inline-block px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-black font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/30"
                  >
                    RESERVE YOUR SPOT NOW
                  </a>
                </div>

                <p className="mt-6 text-red-400 text-center text-sm md:text-base">
                  This is a serious window to act. Once the date passes, these
                  benefits close permanently.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div
            data-aos="fade-up"
            className="mt-12 md:mt-16 text-center text-gray-400 max-w-4xl mx-auto"
          >
            <p className="text-base md:text-lg">
              Confirm your booking now and take the first step toward launching
              your AI company with a trusted, full-service infrastructure behind
              you.
            </p>
            <div className="mt-6 md:mt-8 border-t border-gray-800 pt-6 md:pt-8">
              <p className="text-sm md:text-base">
                This change reflects the growing demand for top-tier AI,
                branding, and digital execution talent and our ongoing
                investment in hiring elite professionals to ensure every client
                gets premium results, fast, and without compromise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionOffer;
