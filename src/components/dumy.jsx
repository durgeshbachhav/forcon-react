import React from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const menuItems = [
  {
    name: "Home",
    to: "*",
  },
  {
    name: "About Us",
    to: "/about",
  },
  {
    name: "Verticals",
    to: "/verticals",
    subMenu: [
      { name: "HIGHWAY", to: "/verticals/highway" },
      { name: "AIRPORTS", to: "/verticals/airports" },
      { name: "CRUSHERS", to: "/verticals/crushers" },
      { name: "RMC", to: "/verticals/rmc" },
      { name: "MARINE ENGINEERING", to: "/verticals/marine-engineering" },
      { name: "BUILDINGS", to: "/verticals/buildings" },
      { name: "DAMS & IRRIGATION", to: "/verticals/dams-irrigation" },
      { name: "Flyovers & Bridges", to: "/verticals/Flyovers-and-bridges" },
    ],
  },
  {
    name: "Plant & Machinery",
    to: "/plant-and-machinery",
  },
  {
    name: "Contact",
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

  return (
    <div className="relative w-full bg-white">
      <div className="flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="">
            <img
              src={
                "/src/img/logo2.png" ||
                "https://i.postimg.cc/yxrZ4ygc/logo2.png"
              }
              alt=""
            />
          </span>
        </div>
        <div className="hidden lg:block">
          <ul
            onMouseLeave={() => setIsSubMenuOpen(false)}
            className="inline-flex space-x-8"
          >
            {menuItems.map((item) => (
              <li
                key={item.name}
                onMouseEnter={() => setIsSubMenuOpen(item.name === "Verticals")}
              >
                <a
                  href={item.to}
                  className={`text-sm font-semibold text-gray-800 hover:text-gray-900 flex items-center justify-center gap-0`}
                >
                  {item.name}
                  {item.name === "Verticals" && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </a>
                {item.name === "Verticals" && isSubMenuOpen && (
                  <div className="absolute  right-30 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.to}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {subItem.name}
                          </a>
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
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <img
                      src={
                        "/src/img/logo2.png" ||
                        "https://i.postimg.cc/yxrZ4ygc/logo2.png"
                      }
                      alt=""
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
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.to}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50 "
                        onMouseLeave={() => setIsSubMenuOpen(false)}

                      >
                        <span
                          className={`ml-3 text-base font-medium text-gray-900 ${
                            item.name === "Verticals"
                              ? "flex items-center justify-around"
                              : ""
                          }`}
                          onMouseEnter={() =>
                            setIsSubMenuOpen(item.name === "Verticals")
                          }
                        >
                          <div>{item.name}</div>
                          <div>
                            {item.name === "Verticals" && (
                              <ChevronDown className="ml-1 h-4 w-4" />
                            )}
                          </div>
                          {item.name === "Verticals" && isSubMenuOpen && (
                            <div className="relative  top-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg">
                              <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownDefaultButton"
                              >
                                {item.subMenu.map((subItem) => (
                                  <li key={subItem.name}>
                                    <a
                                      href={subItem.to}
                                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                      {subItem.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
