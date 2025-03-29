import Subscription from "../../components/subscription/Subscription";
import Banner from "./components/Banner";
import BolnaVoiceCall from "./components/BolnaVoicecall";
import FAQ from "./components/FAQ";
import Serviceslist from "./components/Serviceslist";
import TavusVideoConversation from "./components/TavusVideoConversation";

const BaaS = () => {
  return (
    <div className="landing-page">
      <Banner />
      <Serviceslist />
      <div className="max-w-lg mx-auto">
        <BolnaVoiceCall
          agentId={process.env.REACT_APP_BOLNA_AGENT_ID}
          apiKey={process.env.REACT_APP_BOLNA_API_KEY}
        />
      </div>
      <div className="max-w-lg mx-auto">
        <TavusVideoConversation
          apiKey={process.env.REACT_APP_TAVUS_API_KEY}
          replicaId={process.env.REACT_APP_TAVUS_REPLICA_ID}
        />
      </div>
      <Subscription />
      <FAQ />
    </div>
  );
};

export default BaaS;
