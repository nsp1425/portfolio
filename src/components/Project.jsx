import { FaGithub } from "react-icons/fa";

const Project = ({ project }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 border border-gray-500 bg-gray-100 sm:flex-nowrap ">
      <div className="max-w-[400px] ml-4 border border-green-500 ">
        <img src={project.image} alt="Project 1" className="rounded-2xl" />
      </div>
      <div className="flex flex-col justify-center items-center border border-red-500">
        <h2 className=" text-center text-gray-600 font-semibold text-xl mb-2 m-4 text-black">
          {project.title}
        </h2>
        <div className="w-full ml-4">
          <span className="font-bold mr-2">Technologies Used:</span>
          <span>{project.technologies}</span>
        </div>
        <p className="m-2"> {project.description} </p>
        <div className="flex  mt-4 ml-4 gap-4 w-full">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 border border-gray-800 bg-gray-200 rounded-lg text-black hover:bg-gray-300 hover:text-gray-800 transition-all"
          >
            <FaGithub className="h-6 w-6 mr-2" />
            Check the Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
