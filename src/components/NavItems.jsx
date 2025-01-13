import { Link } from "react-scroll";

const NavItems = () => {
  const linkStyle =
    "text-black text-2  xl hover:text-gray-500 hover:underline block p-2 text-center  transition-all duration-300 ease-in-out lg:text-3xl md:text-2xl";
  return (
    // absolute: Positions the dropdown container relative to the closest positioned ancestor
    // top-full: Places the dropdown container outside and below the parent element.
    // right-0: Aligns the dropdown menu’s right edge to the right edge of its parent container
    // space-y-1: Adds vertical spacing of 4px between the links.
    <>
      {/* <div className="flex"> */}
      <Link className={linkStyle} to="about">
        About
      </Link>
      <Link className={linkStyle} to="projects">
        Projects
      </Link>
      <Link className={linkStyle} to="contact">
        Contact
      </Link>
    </>
  );
};

export default NavItems;
