import Project from "./Project";
import { projectsInfo } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="relative lg:mt-0 pt-[4vh]">
      <p className="text-center font-semibold  text-gray-500">
        Browse My Recent
      </p>
      <h1 className="text-xl text-white text-center font-bold mb-1 md:text-3xl">
        Projects
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,1fr)]  gap-8 justify-center m-6 sm:grid-cols-[repeat(auto-fit,minmax(700px,1fr))]">
        {projectsInfo.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
