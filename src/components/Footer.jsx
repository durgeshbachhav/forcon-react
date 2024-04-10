import { MdLocationPin } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaCaretRight } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "/src/assets/img/logoWhite.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { icon: <FaCaretRight />, label: "About us", url: "/about#top" },
    {
      icon: <FaCaretRight />,
      label: "Plant & Machinery",
      url: "/plant-and-machinery#top",
    },
    { icon: <FaCaretRight />, label: "Verticals", url: "/#sector" },
    { icon: <FaCaretRight />, label: "Contact Us", url: "/contact#top" },
  ];

  const contact = [
    {
      icon: <MdLocationPin size={30} />,
      add: `Mumbai - 209, Maker Chamber-V, Nariman Point, Mumbai, 400021`,
    },
    {
      icon: <MdLocationPin size={30} />,
      add: `Nashik - 102, Hill View Apartment, Tidke Colony Nashik, 422002`,
    },
    {
      icon: <IoCallSharp size={30} />,
      add: `(0253) 2311657`,
    },
  ];

  return (
    <footer className="bg-primary text-white py-6 px-8  font-tienne flex items-center justify-center  flex-col lg:gap-16 lg:py-8  lg:px-20">
      <div className=" flex flex-col lg:flex-row justify-center lg:justify-center gap-10 lg:gap-16">
        {/* Quick Links */}
        <div className="lg:w-1/3  ">
          <h1 className="text-lg font-bold mb-4">Quick Links</h1>
          <div>
            {links.map((link, index) => (
              <HashLink
                key={index}
                to={link.url}
                className="flex items-center mb-2"
              >
                <div className="mr-2">{link.icon}</div>
                <span className="hover:underline">{link.label}</span>
              </HashLink>
            ))}
          </div>  
        </div>

        {/* Logo */}
        <div className="lg:w-1/5 flex items-center justify-center flex-col gap-8 ">
          <img src={Logo} alt="Logo" className="w-40 lg:w-full" />
          <div className="flex justify-center">
            <div className="mx-2 bg-blue-50 rounded-full p-2 text-black hover:bg-tableheadcolor cursor-pointer">
              <FaFacebookF className="text-xl " />
            </div>
            <Link
              to="https://www.instagram.com/forcon.infra?igsh=aWpxcDA3YWcwMnlr"
              className="mx-2 bg-blue-50 rounded-full p-2 text-black hover:bg-tableheadcolor cursor-pointer"
            >
              <FaInstagram className="text-xl" />
            </Link>
            <Link
              to={"https://www.linkedin.com/company/forcon-infra/"}
              className="mx-2 bg-blue-50 rounded-full p-2 text-black hover:bg-tableheadcolor cursor-pointer"
            >
              <FaLinkedin className="text-xl" />
            </Link>
            <div className="mx-2 bg-blue-50 rounded-full p-2 text-black hover:bg-tableheadcolor cursor-pointer">
              <FaWhatsapp className="text-xl" />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="lg:w-1/3 ">
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <div>
            {contact.map((data, index) => (
              <div key={index} className="flex items-center mb-2">
                <div className="mr-2">{data.icon}</div>
                <span>{data.add}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* brandtheory */}
      <div className="mt-8 lg:-mt-6 text-center">
        <div className="mb-4">
          <h2 className="text-lg font-bold">Designed by Brand Theory</h2>
          <p>© All rights reserved {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
