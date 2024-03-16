import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-8 lg:py-0  lg:px-16 font-tienne">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col gap-4 min-h-[600px] items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
              Welcome to{" "}
              <span className="text-tableheadcolor">Forcon Infra</span>
            </p>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Providing Sustainable{" "}
              <span className="text-tableheadcolor">
                Infrastructure Solutions
              </span>{" "}
              for Integrating the Nation
            </h1>
          </div>
          <div className="font-tienne">
            <p className="text-base text-gray-600 md:text-xl dark:text-gray-400 lg:text-justify">
              Welcome to Forcon Infra, an industry-leading construction company
              dedicated to providing Infrastructure, Construction, Machinery,
              Marine and RMC of the highest quality. With more than two decades
              of experience in the industry, we've become a reliable partner for
              businesses seeking to construct, develop, and transform their
              infrastructure.
            </p>
            <p className="text-base py-2  text-gray-500 md:text-xl dark:text-gray-400 lg:text-justify text-center lg:py-8">
              Our expertise include Civil Construction, Industrial
              Infrastructure, Road Construction, Bridge Construction, Marine
              Engineering, and much more. Our team of specialists is equipped
              with the most up-to-date technology and industry knowledge to
              ensure that the solutions we provide to the government and
              businesses are of the highest quality and exceed their
              expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
