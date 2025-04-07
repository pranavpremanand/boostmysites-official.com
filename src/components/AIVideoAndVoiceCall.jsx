import TavusVideoConversation from "./TavusVideoConversation";
import BolnaVoiceCall from "./BolnaVoicecall";

const AIVideoAndVoiceCall = () => {
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
