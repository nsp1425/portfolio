const NavItems = () => {
  const linkStyle =
    "text-2xl hover:text-gray-500 hover:underline block p-2 transition-all duration-300 ease-in-out lg:text-3xl ";
  return (
    // absolute: Positions the dropdown container relative to the closest positioned ancestor
    // top-full: Places the dropdown container outside and below the parent element.
    // right-0: Aligns the dropdown menu’s right edge to the right edge of its parent container
    // space-y-1: Adds vertical spacing of 4px between the links.
    <>
      {/* <div className="flex"> */}
      <ul className="flex flex-col gap-4 md:flex-row md:gap-8 list-none">
        <li>
          <a href="#about" className={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={linkStyle}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={linkStyle}>
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
