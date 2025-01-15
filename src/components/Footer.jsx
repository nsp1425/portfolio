import NavItems from "./NavItems";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className=" flex flex-wrap justify-center items-center text-white ">
          <NavItems />
        </div>
      </nav>
      <p className="text-center text-gray-500 mt-8 mb-12">
        Copyright &#169; 2025 Sajeevan Paramsothy. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
