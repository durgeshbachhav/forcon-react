import React from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/img/logoWhite.png";

const menuItems = [
  {
    name: "HOME",
    to: "/",
  },
  {
    name: "ABOUT US",
    to: "/about",
  },
  {
    name: "VERTICALS",
    to: "/verticals/highway",
    subMenu: [
      { name: "HIGHWAY", to: "/verticals/highway" },
      { name: "AIRPORTS", to: "/verticals/airports" },
      { name: "CRUSHERS", to: "/verticals/crushers" },
      { name: "RMC", to: "/verticals/rmc" },
      { name: "MARINE ENGINEERING", to: "/verticals/marine-engineering" },
      { name: "BUILDINGS", to: "/verticals/buildings" },
      { name: "DAMS & IRRIGATION", to: "/verticals/dams-irrigation" },
      { name: "FLYOVERS & BRIDGES", to: "/verticals/Flyovers-and-bridges" },
    ],
  },
  {
    name: "PLANT & MACHINERY",
    to: "/plant-and-machinery",
  },
  {
    name: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const handleMenuItemClick = (itemName) => {
    if (itemName === "VERTICALS") {
      setIsSubMenuOpen(!isSubMenuOpen);
    } else {
      setIsSubMenuOpen(false);
    }
  };

  return (
    <div
      id="top"
      className="relative w-full bg-primary font-tienne py-4 lg:px-12 "
    >
      <div className="flex  items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* DESKTOP SCREEN */}
        {/* LOGO  */}
        <div className="inline-flex items-center space-x-2">
          <span className="">
            <img
              src={Logo || "https://i.postimg.cc/yxrZ4ygc/logo2.png"}
              alt=""
              className="w-40 lg:w-56 "
            />
          </span>
        </div>
        {/* NAVITEMS  */}
        <div className="hidden lg:block">
          <ul
            onMouseLeave={() => setIsSubMenuOpen(false)}
            className="inline-flex space-x-8"
          >
            {menuItems.map((item) => (
              // SINGLE NAVITEMS
              <li
                key={item.name}
                onMouseEnter={() => setIsSubMenuOpen(item.name === "VERTICALS")}
              >
                <Link
                  to={item.to}
                  className={`text-sm font-semibold text-white hover:text-gray-300 flex items-center justify-center gap-0`}
                  onClick={() => {
                    if (item.name === "VERTICALS") {
                      setIsSubMenuOpen(true);
                    }
                    // handleMenuItemClick(item.name);
                  }}
                >
                  {item.name}
                  {item.name === "VERTICALS" && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>
                {/* SUBMENU OPENS */}
                {item.name === "VERTICALS" && isSubMenuOpen && (
                  <div className="absolute  right-30 z-10 text-white  rounded-lg shadow-lg">
                    <ul
                      className="py-2 text-sm text-white rounded-lg"
                      aria-labelledby="dropdownDefaultButton"
                      onClick={() => {
                        setIsSubMenuOpen(false);
                        toggleMenu();
                      }}
                    >
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.name}>
                          <Link
                            to={subItem.to}
                            className="block px-4 py-2 text-white  bg-secondary hover:bg-uicolor"
                            onClick={() => {
                              setIsSubMenuOpen(false);
                              toggleMenu();
                            }}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 text-white cursor-pointer"
          />
        </div>
        {/* MOBILE SCREEN */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 bg-primary font-tienne  lg:hidden">
            <div className=" rounded-lg">
              <div className="px-4 pb-6 pt-6 ">
                <div className="flex items-center justify-between pb-4">
                  <div className="inline-flex items-center space-x-2">
                    <img
                      src={Logo || "https://i.postimg.cc/yxrZ4ygc/logo2.png"}
                      alt=""
                      className="w-40 lg:w-56 "
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                {/* Mobile Menu */}
                <ul className="flex flex-col justify-start items-start gap-6 px-4 bg-secondary py-4 hover:rounded-lg">
                  {menuItems.map((item) => (
                    <li
                      key={item.name}
                      to={item.to}
                      onClick={() => {
                        handleMenuItemClick(item.name);
                        item.name !== "VERTICALS" && toggleMenu();
                      }}
                      className=" "
                    >
                      <Link
                        to={item.to}
                        className={`static text-sm font-tennie font-bold text-white  flex items-center justify-center gap-0 w-full `}
                      >
                        {item.name}
                        {item.name === "VERTICALS" && (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        )}
                      </Link>
                      {item.name === "VERTICALS" && isSubMenuOpen && (
                        <div className="absolute w-[80%]  z-10 bg-primary  rounded-lg shadow-lg">
                          <ul
                            className="py-2 text-sm "
                            aria-labelledby="dropdownDefaultButton"
                          >
                            {item.subMenu.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  to={subItem.to}
                                  className="static block px-4 py-2 text-white hover:text-white hover:bg-secondary"
                                  onClick={() => toggleMenu()}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
