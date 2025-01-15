import { FaGithub } from "react-icons/fa";
import { DiBitbucket } from "react-icons/di";
import tradingview_logo from "../assets/tradingview_logo.png";

const LogoRenderer = ({ link }) => {
  // Determine which icon to render based on the string
  if (link.toLowerCase().includes("bitbucket")) {
    return <DiBitbucket className="h-6 w-6 mr-2" />;
  } else if (link.toLowerCase().includes("tradingview")) {
    return (
      <img
        src={tradingview_logo}
        alt="My Github profile"
        className="h-6 w-6 mr-2"
      />
    );
  } else {
    return <FaGithub className="h-6 w-6 mr-2" />;
  }
};

const Project = ({ project }) => {
  return (
    <div className="relative p-[4px] rounded-lg bg-gradient-to-br from-pink-500 to-blue-500 ">
      {/* Inner Content Div */}
      <div className="flex flex-wrap justify-center items-center gap-8  w-full h-full bg-[#0F172A] rounded-lg p-4 sm:flex-nowrap">
        {/* Project Image */}
        <div className="max-w-[400px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        {/* Project Details */}
        <div className="flex flex-col justify-center items-start text-white">
          <h2 className="text-center font-semibold text-xl mb-4">
            {project.title}
          </h2>
          <div className="mb-4">
            <span className="font-bold mr-2">Technologies Used:</span>
            <span>{project.technologies}</span>
          </div>
          <p className="mb-4">{project.description}</p>
          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-600 transition-all"
            >
              <LogoRenderer link={project.link} />
              Check the Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
