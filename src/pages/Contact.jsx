import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Breadcrumb from "../components/BreadCrumb";
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u9ns5c6", "template_retdbrk", form.current, {
        publicKey: "pGKhxaIklaUus8-y8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="">
      <div className="">
        <div className="mt-8 px-8 lg:px-24 ">
          <Breadcrumb values={["Home", "Contact Us"]} />
        </div>
        <div className="flex flex-col px-8 py-8 lg:py-12 lg:px-24 lg:flex-row gap-8 font-tienne">
          {/* form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="  bg-white rounded-lg lg:w-[30vw]"
          >
            <h2 className="font-bold my-4 text-2xl lg:text-3xl text-red-500">
              Get In Touch
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                id="name"
                type="text"
                name="user_name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                id="email"
                type="email"
                name="user_email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline lg:w-60"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
          {/* image and links */}
          <div className="lg:w-[70vw]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.369842528145!2d73.77000370825571!3d19.992986581332147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb98a5e5e7e7%3A0x64293d34805bb616!2sFORCON%20INFRA%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1710490409198!5m2!1sen!2sin"
              width={"100%"}
              height={"100%"}
            ></iframe>
          </div>
        </div>
      </div>
      {/* addresss section */}
      <div className="mt-8 px-8 py-4 lg:px-24 ">
        <div className="flex items-center justify-center gap-4 my-6 text-xl font-tienne tienne-bold lg:text-4xl lg:my-12">
          <h2>FORCON INFRA BRANCH OFFICES</h2>
        </div>
        <div className="grid grid-row-1 lg:grid-cols-3 gap-2   georgia-regular">
          <div className="mb-4 ">
            <p className="font-bold text-xl mb-2 lg:mb-4">MUMBAI</p>
            <div className="flex items-start justify-start flex-col bg-secondary p-4 text-white rounded-md w-72 h-40">
              <div className="flex items-start justify-center gap-4">
                <div>
                  <MdLocationPin size={20} className="lg:size-6" />
                </div>
                <div>
                  <p>209, Maker Chamber-V,</p>
                  <p>Nariman Point, Mumbai, 400021</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <IoCall size={20} className="lg:size-6" />
                <a href="tel:+9122315 50214">+91 22315 50214</a>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold text-xl mb-2 lg:mb-4">NASHIK HO</p>
            <div className="flex items-start justify-start flex-col bg-secondary p-4 text-white rounded-md w-72 h-40">
              <div className="flex items-start justify-center gap-4">
                <div>
                  <MdLocationPin size={20} className="lg:size-6" />
                </div>
                <div>
                  <p>102, Hill View Apartment,</p>
                  <p>Tidke Colony Nashik. 422002</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <IoCall size={20} className="lg:size-6" />
                <a href="tel:+91 2532311657">+91 2532311657</a>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold text-xl mb-2 lg:mb-4">SINNAR PLANT</p>
            <div className="flex items-start justify-start flex-col bg-secondary p-4 text-white rounded-md w-72 h-40">
              <div className="flex items-start justify-center gap-4">
                <div>
                  <MdLocationPin size={20} className="lg:size-6" />
                </div>
                <div>
                  <p>Gate no 590, Pune-Nashik, road Sinnar Nashik,At Moh,</p>
                  <p> Post chincholi,Maharashtra- 422102</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <IoCall size={20} className="lg:size-6" />
                <a href="tel:+91 9146050695">+91 9146050695</a>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className="font-bold text-xl mb-2 lg:mb-4">RMC PLANT</p>
              <div className="flex items-start justify-start flex-col bg-secondary p-4 text-white rounded-md w-72 h-40">
                <div className="flex items-start justify-center gap-4">
                  <div>
                    <MdLocationPin size={20} className="lg:size-6" />
                  </div>
                  <div>
                    <p>Survey No.359, Via Takali Road, Jejurkar Mala,</p>
                    <p>Near Tapovan STP (Backside) Tal. & Dist- Nashik</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <IoCall size={20} className="lg:size-6" />
                  <a href="tel:+91 8669650552">+91 8669650552</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold text-xl mb-2 lg:mb-4">CRUSHER PLANT</p>
            <div className="flex items-start justify-start flex-col bg-secondary p-4 text-white rounded-md w-72 h-40">
              <div className="flex items-start justify-center gap-4">
                <div>
                  <MdLocationPin size={20} className="lg:size-6" />
                </div>
                <div>
                  <p>Gate No. 148, Mohu, Post. Chincholi,</p>
                  <p>Tal: Sinnar, Nashik, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-start justify-center gap-4">
                <IoCall size={20} className="lg:size-6" />
                <a href="tel:+91 7821092935">+91 7821092935</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="mb-4">
              <p className="font-bold text-lg">EMAIL</p>
              <p>FOR BUSINESS ENQUIRIES:</p>
              <p>info@forconinfra.com</p>
              <p>FOR VACANCIES:</p>
              <p>hr@forconinfra.com</p>
            </div>
            <div className="mb-4">
              <p className="font-bold text-lg">PHONE</p>
              <p>(0253) 2311657</p>
            </div> */
}
