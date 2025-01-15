import { FiChevronsDown } from "react-icons/fi";
import { MdMouse } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-wrap justify-center items-center  min-h-[86vh]"
    >
      {/* Content at the center */}
      <div className="flex flex-col justify-center items-center mb-24 md:ml-8">
        <p className="text-1xl font-semibold text-gray-500 mb-2 md:text-2xl lg:text-3xl">
          Hello, I'm
        </p>
        <h1 className="text-white text-5xl text-center font-bold mx-4 md:text-6xl lg:text-8xl">
          Sajeevan Paramsothy
        </h1>
        <p className="text-xl text-center mt-8 font-semibold text-gray-500 mb-4 mx-4 md:text-3xl lg:text-4xl">
          Frontend & Backend Developer | Data Enthusiast | Innovator
        </p>
      </div>

      {/* Mouse and Down Arrow at the bottom */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <MdMouse className="hidden text-white text-3xl mb-2 md:flex" />
        <motion.div
          className="flex flex-col items-center"
          animate={{
            y: [0, 10, 0], // Moves down by 10px and back up
          }}
          transition={{
            duration: 1.5, // Animation duration
            repeat: Infinity, // Repeat forever
          }}
        >
          <FiChevronsDown className="text-white text-6xl mb-24 md:text-3xl md:mb-0" />
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;
