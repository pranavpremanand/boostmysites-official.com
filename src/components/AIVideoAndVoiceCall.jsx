import React, { useState, useEffect } from "react";
import TavusVideoConversation from "./TavusVideoConversation";
import BolnaVoiceCall from "./BolnaVoicecall";

const AIVideoAndVoiceCall = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
      <TavusVideoConversation
        apiKey={process.env.REACT_APP_TAVUS_API_KEY}
        replicaId={process.env.REACT_APP_TAVUS_REPLICA_ID}
      />
      <BolnaVoiceCall
        agentId={process.env.REACT_APP_BOLNA_AGENT_ID}
        apiKey={process.env.REACT_APP_BOLNA_API_KEY}
      />
    </>
  );
};

export default AIVideoAndVoiceCall;
