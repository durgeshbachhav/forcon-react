import React from "react";
import TimeLineImage from "../assets/img/timeline-new.jpg";

const TimeLine = () => {
  return (
    <section className="w-full   mt-10 mb-12 ">
      <div className=" flex flex-col items-center space-y-4 px-4 md:px-6">
        <div className="grid gap-8">
          <h2 className="text-3xl text-center font-tienne tienne-bold tracking-tighter sm:text-4xl">
            Our Timeline
          </h2>
          <img src={TimeLineImage} alt="Photo" className="h-60 lg:h-[70vh]" />
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
