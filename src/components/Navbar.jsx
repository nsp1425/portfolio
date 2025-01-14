import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <nav>
      {/*
            item-center:        Vertically aligns the child elements within the height of the navbar
            justify-between:    Positions the child elements at opposite ends of the navbar 
        */}
      <div className="flex items-center justify-between px-4 md:justify-around h-[12vh] w-full ">
        {/* Left: Name */}
        <div className="text-xl text-center text-black cursor-default lg:text-3xl md:text-2xl">
          Sajeevan Paramsothy
        </div>

        <div
          className="text-3xl cursor-pointer relative inline-block  md:hidden "
          onClick={() => setIsOpenMenu((prevState) => !prevState)}
        >
          {isOpenMenu ? <FaTimes /> : <FaBars />}
        </div>
        <div className="md:flex hidden">
          <NavItems />
        </div>
      </div>
      {isOpenMenu && (
        <div className="md:hidden absolute right-0 w-fit bg-white overflow-hidden transition-all duration-300 ease-in-out border border-green-500">
          <NavItems />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
