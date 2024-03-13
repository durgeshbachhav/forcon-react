import React from "react";
import TimeLineImage from "../assets/img/Timeline.png";

const TimeLine = () => {
  return (
    <section className="w-full py:20 lg:h-screen py-12">
      <div className=" flex flex-col items-center space-y-4 px-4 md:px-6">
        <div className="grid gap-4">
          <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl">
            Our Timeline
          </h2>
          <img src={TimeLineImage} alt="Photo" className="h-60   lg:h-96" />
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
