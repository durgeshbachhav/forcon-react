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
    name: "Plant & Machinary",
    to: "/plant-and-machinary",
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
      <div className=" flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
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
                // onClick={() =>
                //   item.name === "Verticals" && setIsSubMenuOpen(true)
                // }
              >
                <a
                  to={item.to}
                  className={`text-sm font-semibold text-gray-800 hover:text-gray-900 flex items-center justify-center gap-0 ${
                    isSubMenuOpen ? "" : ""
                  }`}
                >
                  {item.name}
                  {item.name === "Verticals" && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </a>
                {item.name === "Verticals" && isSubMenuOpen && (
                  <div className="absolute right-30 z-10 bg-black divide-y divide-gray-100 rounded-lg shadow-lg">
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      {item.subMenu.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            to={subItem.to}
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
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
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

//////////////////////////////////////////////////////////////////////

// import React from "react";

// const Navbar = () => {
//   const subMenuList = [
//     "HIGHWAY",
//     "AIRPORTS",
//     "CRUSHERS",
//     "RMC",
//     "MARINE ENGINEERING",
//     "BUILDINGS",
//     "DAMS & IRRIGATION",
//     "MANUFACTURING",
//   ];

//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleSubMenu = () => {
//     setIsSubMenuOpen(!isSubMenuOpen);
//   };

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img
//             src={
//               "/src/img/logo2.png" || "https://i.postimg.cc/yxrZ4ygc/logo2.png"
//             }
//             alt=""
//           />
//         </a>
//         <button
//           data-collapse-toggle="navbar-multi-level"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-multi-level"
//           aria-expanded="false"
//         >
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div
//           className="hidden w-full md:block md:w-auto"
//           id="navbar-multi-level"
//         >
//           <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <a
//                 to="#"
//                 className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
//                 aria-current="page"
//               >
//                 HOME
//               </a>
//             </li>
//             <li>
//               <a
//                 to="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 ABOUT US
//               </a>
//             </li>
//             {/* dropdown menu */}
//             <li>
//               <button
//                 id="dropdownNavbarLink"
//                 data-dropdown-toggle="dropdownNavbar"
//                 className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
//                 onClick={() => toggleSubMenu()}
//               >
//                 VERTICALS{" "}
//                 <svg
//                   className="w-2.5 h-2.5 ms-2.5"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 10 6"
//                 >
//                   <path
//                     stroke="currentColor"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     stroke-width="2"
//                     d="m1 1 4 4 4-4"
//                   />
//                 </svg>
//               </button>

//               <div
//                 id="dropdownNavbar"
//                 className={`z-10 ${
//                   isSubMenuOpen ? "block" : "hidden"
//                 } font-normal bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="dropdownLargeButton"
//                 >
//                   <ul>
//                     {subMenuList.map((list, index) => (
//                       <li key={index} className="cursor-pointer">
//                         <a
//                           to={`/${list}`} // Change 'to' to 'href'
//                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                         >
//                           {list}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </ul>
//               </div>
//             </li>

//             <li>
//               <a
//                 to="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 PLANT & MACHINERY
//               </a>
//             </li>
//             <li>
//               <a
//                 to="#"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 CONTACT
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
