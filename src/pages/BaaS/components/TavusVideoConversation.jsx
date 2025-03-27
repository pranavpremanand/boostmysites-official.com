import React, { useState } from "react";
import { FiVideo, FiX, FiLoader } from "react-icons/fi";
import { tavusAIConversationContext } from "../../../data/TavusAIConversationContext";

const TavusVideoConversation = ({ apiKey, replicaId }) => {
  const [conversationData, setConversationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          replica_id: "rb17cf590e15",
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
    } catch (err) {
      setError(err.message);
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-4">
      {/* Main Interface */}
      <div data-aos="fade-up" className="bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <FiVideo className="text-primary" />
          AI Video Conversation
        </h2>

        {!conversationData ? (
          <button
            onClick={startConversation}
            disabled={loading}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
              loading
                ? "bg-primary/80 cursor-not-allowed"
                : "primary-btn hover:bg-primary"
            } text-black shadow-md`}
          >
            {loading ? (
              <>
                <div className="spin">
                  <FiLoader />
                </div>
                Starting...
              </>
            ) : (
              <>
                <FiVideo size={20} />
                Start Video Call
              </>
            )}
          </button>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full px-6 py-3 primary-btn text-white rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <FiVideo size={20} />
            Join Video Call
          </button>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-200">
            <p className="font-medium">Error: {error}</p>
          </div>
        )}
      </div>

      {/* Video Call Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={() => setIsModalOpen(false)}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            </div>

            {/* Modal container */}
            <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl w-full">
              <div className="bg-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-start">
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
                    <div className="relative md:pt-[56.25%] rounded-lg overflow-hidden bg-black">
                      <iframe
                        src={conversationData.conversation_url}
                        allow="camera; microphone; fullscreen; display-capture"
                        className="md:absolute md:top-0 md:left-0 w-full h-full min-h-[65vh] md:min-h-max"
                        title="AI Video Conversation"
                      />
                    </div>
                  ) : (
                    <div className="py-16 text-center text-gray-400 flex flex-col items-center gap-2">
                      <div className="spin">
                        <FiLoader className="h-8 w-8" />
                      </div>
                      <span>Loading conversation...</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-800/50 px-4 py-3 sm:px-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="inline-flex items-center gap-2 primary-btn"
                >
                  <FiX size={20} />
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TavusVideoConversation;
