import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-8 lg:py-0  lg:px-16 font-tienne">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col gap-4 min-h-[500px] items-center justify-center space-y-4 text-center">
          <div className="">
            <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl animate-slidein300">
              Providing Sustainable{" "}
              <span className="text-tableheadcolor animate-slidein">
                Infrastructure Solutions
              </span>{" "}
              for Integrating the Nation
            </h2>
          </div>
          <div className="font-tienne animate-slidein">
            <p className="text-base  md:text-xl   lg:text-justify animate-slidein500">
              Welcome to Forcon Infra, an industry-leading Construction Company
              dedicated to providing Infrastructure, Construction, Machinery,
              Marine Engineering and RMC of the highest quality.
            </p>
            <p className="text-base py-2   md:text-xl  lg:text-justify text-center lg:py-8 animate-slidein700">
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
