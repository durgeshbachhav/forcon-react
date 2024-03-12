import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 min-h-[600px] items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
              Welcome to Forcon Infra
            </p>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Providing Sustainable Infrastructure Solutions for Integrating the
              Nation
            </h1>
          </div>
          <div className="mx-auto max-w-2xl space-y-4">
            <p className="text-base text-gray-500 md:text-xl dark:text-gray-400">
              An industry-leading construction company dedicated to providing
              infrastructure, construction, machinery, RMC, and manufacturing
              solutions of the highest quality.
            </p>
            <p className="text-base text-gray-500 md:text-xl dark:text-gray-400">
              With more than two decades of experience in the industry, we've
              become a reliable partner for businesses seeking to construct,
              develop, and transform their infrastructure.
            </p>
            <p className="text-base text-gray-500 md:text-xl dark:text-gray-400">
              Our services include civil construction, industrial
              infrastructure, road construction, bridge construction, water and
              waste management, and much more. Our team of specialists is
              equipped with the most up-to-date technology and industry
              knowledge to ensure that the solutions we provide to our clients
              are of the highest quality and exceed their expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
