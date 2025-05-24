import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { appDevelopmentCaseStudies } from "../../../../data/caseStudies/appDevelopment";

const animation = { duration: 25000, easing: (t) => t };

const SliderWorksSection = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    rtl: false,
    slides: {
      perView: "auto",
      spacing: 24,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  const [sliderRef2] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    rtl: true,
    slides: {
      perView: "auto",
      spacing: 24,
    },
    // breakpoints: {
    //   "(min-width: 640px)": {
    //     slides: { perView: 2, spacing: 24 },
    //   },
    //   "(min-width: 1024px)": {
    //     slides: { perView: 4, spacing: 24 },
    //   },
    // },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 1, true, animation);
    },
  });

  return (
    <div className="padding-between">
      <div className="wrapper">
        <h2 className="section-heading" data-aos="fade-up">
          Some works that exceed our{" "}
          <span className="text-primary">client’s expectations!</span>
        </h2>
      </div>

      <div className="mb-12" data-aos="fade-up">
        <div ref={sliderRef} className="keen-slider overflow-hidden">
          {appDevelopmentCaseStudies.map((item) => (
            <div
              key={item.id}
              className="keen-slider__slide !min-w-[280px] sm:!min-w-[400px] !max-w-[600px] overflow-hidden rounded-lg"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative aspect-video">
                  <img
                    src={item.bannerImage}
                    alt={item.client}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div
          ref={sliderRef2}
          className="keen-slider overflow-hidden"
          data-aos="fade-up"
        >
          {appDevelopmentCaseStudies
            .sort((a, b) => a.id - b.id)
            .map((item) => (
              <div
                key={item.id}
                className="keen-slider__slide !min-w-[280px] sm:!min-w-[400px] !max-w-[600px] rounded-lg"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative aspect-video">
                    <img
                      src={item.bannerImage}
                      alt={item.client}
                      className="w-full h-full object-cover "
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SliderWorksSection;
