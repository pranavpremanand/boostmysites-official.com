import React from "react";
import { Timeline } from "../ui/timeline";
import { roadmap } from "../../data/constant";

const Roadmap = () => {
  return (
    <div>
      <Timeline data={roadmap} />
    </div>
  );
};

export default Roadmap;
