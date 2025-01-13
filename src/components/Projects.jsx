import Project from "./Project";
import { projectsInfo } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="relative border border-red-500">
      <p className="text-center ">Browse My Recent</p>
      <h1 className="text-xl text-center font-bold mb-1 md:text-3xl">
        Projects
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,1fr)]  gap-8 justify-center border border-blue-500 sm:grid-cols-[repeat(auto-fit,minmax(700px,1fr))]">
        {projectsInfo.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
