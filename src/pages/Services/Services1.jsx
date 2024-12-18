import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Serviceslist from "./components/Serviceslist";
import Subscription1 from "./components/Subscription1";

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
