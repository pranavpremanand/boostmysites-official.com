import Subscription1 from "../../components/subscription/Subscription1";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Serviceslist from "./components/Serviceslist";

const Services1 = () => {
  return (
    <div className="landing-page">
      <Banner />
      <Serviceslist />
      <Subscription1 />
      <FAQ />
    </div>
  );
};

export default Services1;
