import profile from "../assets/profile.png";
import resume from "../assets/Resume.pdf";
import { languagesInfo } from "../constants";
import Language from "./Language";

const About = () => {
  return (
    <section
      id="about"
      className="relative mt-8 md:mt-0 pt-[4vh] min-h-screen flex flex-col"
    >
      <p className="text-center font-semibold text-gray-500 mb-2">
        Get To Know More
      </p>
      <h1 className="text-xl text-white text-center font-bold mb-1 md:text-3xl">
        About Me
      </h1>
      <div
        id="container"
        className="flex flex-wrap w-full items-center justify-around  flex-grow"
      >
        <div
          id="myself"
          className="flex flex-col justify-center items-center text-white mt-4"
        >
          <div className=" max-w-[300px]">
            <img
              src={profile}
              alt="Sajeevan Paramsothy profile picture"
              className=""
            />
          </div>
          <span className="mt-8 max-w-[500px] m-4">
            I am a Computer Science graduate from Concordia University with a
            passion for creating software that solves real-world problems. I
            have experience in front-end and back-end development, database
            management, and machine learning, which I use to build efficient and
            impactful solutions. Outside of work, I have a strong interest in
            learning about markets and exploring the world of trading. This
            blend of technical expertise and curiosity drives my continuous
            growth both personally and professionally.
          </span>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-center border-[0.1rem] border-gray-700 hover:border-white hover:bg-gray-700 hover:text-white cursor-pointer transition-all duration-300 font-semibold  py-4 w-32 rounded-2xl"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className=" text-center border-[0.1rem] border-gray-700 bg-gray-700 text-white hover:bg-black hover:text-white cursor-pointer transition-all duration-300 font-semibold py-4 w-32 rounded-2xl"
            >
              Contact Info
            </a>
          </div>
        </div>
        <div
          id="languages"
          className="flex justify-center items-center text-white mt-8"
        >
          <div className="grid grid-cols-3 gap-4 w-full h-full">
            {languagesInfo.map((language) => (
              <Language key={language.id} language={language} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
