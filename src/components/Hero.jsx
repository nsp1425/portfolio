import resume from "../assets/Resume.pdf";
import profile from "../assets/profile.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="profile"
      className="flex flex-wrap justify-center items-center gap-[15px] min-h-[80vh] border border-red-500 "
    >
      <div className=" max-w-[400px] border border-blue-500 ">
        <img
          src={profile}
          alt="Sajeevan Paramsothy profile picture"
          className=""
        />
      </div>
      <div className="flex flex-col justify-center items-center border border-green-500">
        <p className="font-semibold text-gray-500 mb-2">Hello, I'm</p>
        <h1 className=" text-xl text-center font-bold mb-1 md:text-3xl">
          Sajeevan Paramsothy
        </h1>
        <p className="text-xl text-center font-semibold text-gray-500 mb-4 md:text-2xl">
          New Developer
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-center border-[0.1rem] border-gray-700 hover:border-white hover:bg-gray-700 hover:text-white cursor-pointer transition-all duration-300 font-semibold  py-4 w-32 rounded-2xl"
          >
            Download CV
          </a>
          <button
            className="border-[0.1rem] border-gray-700 bg-gray-700 text-white hover:bg-black hover:text-white cursor-pointer transition-all duration-300 font-semibold py-4 w-32 rounded-2xl"
            onClick="location.href='./#contact'"
          >
            Contact Info
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <a
            href="https://linkedin.com/in/sajeevan-paramsothy

"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaLinkedin className="h-8 w-8 text-black hover:text-blue-600 transition-all" />
          </a>
          <a
            href="https://github.com/nsp1425"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <FaGithub className="h-8 w-8 text-black hover:text-gray-800 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
