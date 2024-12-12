import { roadmap } from "../../data/constant";

const RoadmapWithAccordion = () => {
  return (
    <div className="flex text-white flex-col gap-5">
      <h2 className="text-4xl font-bold text-white text-center">
        Roadmap
      </h2>
      <div className="grid sm:grid-cols-2 gap-5 mt-5">
        {roadmap.map((item, index) => (
          <div className="accordion-item h-full bg-[#111111] text-center flex flex-col justify-center" key={index}>
            <p className="accordion-title text-xl">{`${item.title}`}</p>
            <p className="accordion-content">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapWithAccordion;
