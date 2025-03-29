import Subscription from "../../components/subscription/Subscription";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Serviceslist from "./components/Serviceslist";

const Services = () => {
  return (
    <div className="landing-page">
      <Banner />
      <Serviceslist />
      <Subscription />
      <FAQ />
    </div>
  );
};

export default Services;
