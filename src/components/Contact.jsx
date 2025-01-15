import Footer from "../components/Footer";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative flex flex-col min-h-[75vh] ">
      <div
        id="ct-info"
        className="flex flex-col flex-grow justify-center items-center "
      >
        <p className="text-xl font-semibold  text-gray-500 md:text-2xl">
          Get in Touch
        </p>
        <h1 className="text-2xl text-white font-bold mb-1 md:text-4xl">
          Contact Me
        </h1>

        <div className="flex justify-center flex-wrap items-center  border p-[2px] rounded-lg border-2 border-transparent bg-gradient-to-br from-pink-500 to-blue-500 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-center text-white w-full h-full bg-[#0F172A] rounded-lg">
            <a
              href="mailto:sparamsothy131@gmail.com"
              className="flex flex-wrap items-center justify-center px-4 py-2 hover:text-red-500 transition-all md:text-2xl"
            >
              <FaEnvelope className="h-8 w-8 inline mr-2" />
              sparamsothy131@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/sajeevan-paramsothy
            
            "
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 hover:text-blue-600 transition-all md:text-2xl"
            >
              <FaLinkedin className="h-8 w-8 inline mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
