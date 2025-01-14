import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-[45vh]"
    >
      <p className="font-semibold  text-gray-500">Get in Touch</p>
      <h1 className="text-xl font-bold mb-1 md:text-3xl">Contact Me</h1>

      <div className="flex justify-center flex-wrap items-center gap-4 border rounded-2xl border-gray-500 bg-gray-100 m-8 p-4 max-w-max">
        <a
          href="mailto:sparamsothy131@gmail.com"
          className="flex flex-wrap items-center justify-center"
        >
          <FaEnvelope className="h-8 w-8 inline mr-2" />
          sparamsothy131@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/sajeevan-paramsothy
            
            "
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2 hover:text-blue-600 transition-all"
        >
          <FaLinkedin className="h-8 w-8 inline mr-2" />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
