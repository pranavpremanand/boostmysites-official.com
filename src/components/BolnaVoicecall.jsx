import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-country-phone-input";
import "react-country-phone-input/lib/style.css";
import { TiMicrophoneOutline } from "react-icons/ti";
import { FiLoader, FiX } from "react-icons/fi";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const BolnaVoiceCall = ({ agentId, apiKey }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [callData, setCallData] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
    },
  });

  const initiateCall = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const fullPhoneNumber = data.phone.startsWith("+")
        ? data.phone
        : `+${data.phone}`;

      const response = await fetch("https://api.bolna.dev/call", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from_phone_number: "+912269976246",
          recipient_phone_number: fullPhoneNumber,
          agent_id: agentId,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.message || "Failed to initiate call. Please try again."
        );
      }

      setCallData(responseData);
      toast.success("Call initiated successfully!");
      reset();
      setSuccess(true);

      // Close the form after 8 seconds
      setTimeout(() => {
        setCallData(null);
        setIsOpen(false);
        setSuccess(false);
      }, 8000);
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Failed to initiate call");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      // Show buttons if scrolling up or at top of page
      if (scrollingUp || currentScrollPos < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      {/* Floating Button */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[10rem] pointer-events-none"
        }`}
      >
        <div className="relative">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && !isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-16 bottom-0 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap"
              >
                Have a voice call with our AI
                <div className="absolute left-0 top-1/2 w-2 h-2 bg-gray-800 transform rotate-45 -translate-y-1/2 translate-x-1/2"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
              isOpen
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-primary hover:bg-primary-dark"
            }`}
          >
            {isOpen ? (
              <FiX size={24} className="text-white" />
            ) : (
              <TiMicrophoneOutline size={24} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Form Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-[60] w-80 bg-gray-800 rounded-xl p-4 shadow-xl"
          >
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <TiMicrophoneOutline size={20} className="text-primary" />
              AI Voice Call
            </h2>

            <form onSubmit={handleSubmit(initiateCall)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Recipient Phone Number
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "Phone number is required",
                    validate: (value) => {
                      if (!value) return "Phone number is required";
                      return true;
                    },
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      value={field.value}
                      onChange={(value) => {
                        field.onChange(value);
                      }}
                      placeholder="Enter phone number"
                      country="in"
                      inputProps={{
                        required: true,
                        autoComplete: "tel",
                      }}
                      className={`w-full px-3 py-2 rounded-lg bg-gray-700 border ${
                        errors.phone ? "border-red-500" : "border-gray-600"
                      } text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || !isValid}
                className={`w-full px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  loading || !isValid
                    ? "bg-primary/80 cursor-not-allowed"
                    : "bg-primary hover:bg-primary-dark"
                } text-black text-sm`}
              >
                {loading ? (
                  <>
                    <div className="animate-spin">
                      <FiLoader />
                    </div>
                    Calling...
                  </>
                ) : (
                  <>
                    <TiMicrophoneOutline size={18} />
                    Initiate Call
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-3 p-2 bg-red-900/30 border border-red-700 rounded-lg text-red-200 text-xs">
                <p>Error: {error}</p>
              </div>
            )}

            {success && callData && (
              <div className="mt-4 p-3 bg-green-900/30 border border-green-700 rounded-lg text-green-200">
                <p className="font-medium">Call queued successfully!</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p>Status: {callData.status}</p>
                </div>
                <p className="mt-2 text-xs text-green-300">
                  The recipient should receive the call shortly.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BolnaVoiceCall;
