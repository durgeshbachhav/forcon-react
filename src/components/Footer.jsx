
import { FaLocationPin } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = [
    { label: "About us", url: "#" },
    { label: "Plant & Machinery", url: "#" },
    { label: "Affiliate Program", url: "#" },
    { label: "Press Kit", url: "#" },
  ];

  const contact = [
    {
      icon: <FaLocationPin size={20}/>,
      add: `Mumbai - 209, Maker Chamber-V, Nariman Point, Mumbai, 400021`,
    },
    {
      icon: <FaLocationPin size={20}/>,
      add: `Nashik - 102, Hill View Apartment, Tidke Colony Nashik, 422002`,
    },
    {
      icon: <IoCallSharp size={20}/>,
      add: `(0253) 2311657`,
    },
  ];

  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-col md:flex-row lg:flex-row justify-around">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
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
              <div>
                <p className="mb-4 text-base font-medium">design by SINSS</p>
                <p className="text-sm text-gray-600">
                  &copy; Copyright {currentYear}.SINSS
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Quick Links
              </h3>
              <ul>
                {links.map((link, index) => (
                  <li key={index} className="mb-4">
                    <a
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                      href={link.url}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                {contact.map((info, index) => (
                  <li key={index} className="mb-4 flex items-center">
                    {info.icon}
                    <p className="ml-2">{info.add}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
