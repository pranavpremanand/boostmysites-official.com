import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Serviceslist from "./components/Serviceslist";
import Subscription from "./components/Subscription";

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
