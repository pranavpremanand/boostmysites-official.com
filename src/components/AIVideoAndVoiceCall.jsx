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
        agentId={"4dbc2f90-9d51-4a75-8060-33ec2ec6420e"}
        // agentId={process.env.REACT_APP_BOLNA_AGENT_ID}
        apiKey={process.env.REACT_APP_BOLNA_API_KEY}
      />
    </>
  );
};

export default AIVideoAndVoiceCall;
