import React from "react";

const TimeLine = () => {
  return (
    <section className="w-full py-6">
      <div className="container flex flex-col items-center space-y-4 px-4 md:px-6">
        <div className="grid gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Timeline
          </h2>
          <img
            src="https://i.postimg.cc/25nsWZpZ/Timeline.png"
            alt="Photo"
            width="800"
            height="400"
            className="aspect-[2/1] rounded-lg object-cover animate-pulse hover:scale-95 "
          />
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
