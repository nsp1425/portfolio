import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-end w-full bg-navbar min-h-[14vh] z-50">
        <div
          id="Hamburger-Icon"
          className="text-3xl cursor-pointer relative  mr-8 md:hidden"
          onClick={() => setIsOpenMenu((prevState) => !prevState)}
        >
          {isOpenMenu ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
          {isOpenMenu && (
            <div
              id="Hamburger-Menu"
              className="md:hidden absolute right-0 w-fit bg-navbar transition-all duration-300 ease-in-out z-50"
            >
              <NavItems />
            </div>
          )}
        </div>
        <div className="md:flex md:mr-8 hidden">
          <NavItems />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
