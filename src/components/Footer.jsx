import NavItems from "./NavItems";

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className=" flex flex-wrap justify-center items-center border border-red-500">
          <NavItems />
        </div>
      </nav>
      <p className="text-center text-gray-500 mt-8 mb-4">
        Copyright &#169; 2025 Sajeevan Paramsothy. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
