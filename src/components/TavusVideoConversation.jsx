import React, { useEffect, useState } from "react";
import { FiVideo, FiX, FiLoader } from "react-icons/fi";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { tavusAIConversationContext } from "../data/TavusAIConversationContext";

const TavusVideoConversation = ({ apiKey, replicaId }) => {
  const [conversationData, setConversationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const startConversation = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://tavusapi.com/v2/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify({
          replica_id: replicaId,
          conversation_name: "Alex",
          conversational_context: tavusAIConversationContext,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to start conversation");
      }

      const data = await response.json();
      setConversationData(data);
      setIsModalOpen(true);
      toast.success("Video conversation started!");
      setIsOpen(false);
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Failed to start video conversation");
      console.log("Error:", err);
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
        className={`fixed bottom-24 left-6 z-50 transition-all duration-300
      ${
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
                Start a video conversation with our AI
                <div className="absolute left-0 top-1/2 w-2 h-2 bg-gray-800 transform rotate-45 -translate-y-1/2 translate-x-1/2"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <button
            onClick={() => {
              if (conversationData) {
                setIsModalOpen(true);
              } else {
                setIsOpen(!isOpen);
                setError(null);
              }
            }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
              isOpen || isModalOpen
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-primary hover:bg-primary-dark"
            }`}
          >
            {isOpen || isModalOpen ? (
              <FiX size={24} className="text-white" />
            ) : (
              <FiVideo size={24} className="text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Form Panel */}
      <AnimatePresence>
        {isOpen && !conversationData && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-44 left-6 z-40 w-80 bg-gray-800 rounded-xl p-4 shadow-xl"
          >
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <FiVideo size={20} className="text-primary" />
              AI Video Conversation
            </h2>

            <button
              onClick={startConversation}
              disabled={loading}
              className={`w-full px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                loading
                  ? "bg-primary/80 cursor-not-allowed"
                  : "bg-primary hover:bg-primary-dark"
              } text-black text-sm`}
            >
              {loading ? (
                <>
                  <div className="animate-spin">
                    <FiLoader />
                  </div>
                  Starting...
                </>
              ) : (
                <>
                  <FiVideo size={18} />
                  Start Video Call
                </>
              )}
            </button>

            {error && (
              <div className="mt-3 p-2 bg-red-900/30 border border-red-700 rounded-lg text-red-200 text-xs">
                <p>Error: {error}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Call Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] overflow-y-auto"
          >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* Background overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
                onClick={() => setIsModalOpen(false)}
              >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
              </motion.div>

              {/* Modal container */}
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl w-full"
              >
                <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-start z-[60] relative">
                    <h3 className="text-lg font-medium text-white flex items-center gap-2">
                      <FiVideo className="text-primary" />
                      Live AI Video Conversation
                    </h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                      <FiX className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-4">
                    {conversationData?.conversation_url ? (
                      <div className="relative w-full md:pt-[56.25%] rounded-t-lg overflow-hidden bg-black">
                        <iframe
                          src={conversationData.conversation_url}
                          allow="camera; microphone; fullscreen; display-capture"
                          className="md:absolute md:top-0 md:left-0 w-full h-full min-h-[65vh] md:min-h-max"
                          title="AI Video Conversation"
                        />
                      </div>
                    ) : (
                      <div className="py-16 text-center text-gray-400 flex flex-col items-center gap-2">
                        <div className="animate-spin">
                          <FiLoader className="h-8 w-8" />
                        </div>
                        <span>Loading conversation...</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-800/50 rounded-b-lg px-4 py-3 sm:px-6 flex justify-end z-[60] relative">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg text-black text-sm"
                    >
                      <FiX size={20} />
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TavusVideoConversation;
