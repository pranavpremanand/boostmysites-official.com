import { useNavigate } from "react-router-dom";
import { appDevelopmentCaseStudies } from "../../../data/caseStudies/appDevelopment";

const Projects = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/services/app-development/case-study/${id}`);
  };

  return (
    <div className=" bg-black px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {appDevelopmentCaseStudies.map((project, index) => {
            return (
              <div
                data-aos="fade-up"
                key={index}
                onClick={() => handleClick(project.id)}
                className={`group relative flex justify-center items-center  `}
              >
                <div className="overflow-hidden rounded-lg bg-gray-900">
                  <img
                    src={project.dpImage}
                    alt={project.client}
                    className="w-full h-full aspect-square cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 h-[5rem] left-0   w-full absolute bottom-5 flex items-center justify-center">
                  <div className="flex w-[80%] h-full justify-center items-center bg-gradient-to-b rounded-xl from-white  to-white/50">
                    <h3 className="text-black cursor-pointer text-lg font-medium pr-4">
                      {project.client}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
