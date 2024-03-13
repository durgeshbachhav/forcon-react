import React, { useState, useEffect } from "react";
import C1 from "../assets/img/c1.png";
import C2 from "../assets/img/c2.png";
import C3 from "../assets/img/c3.png";

const FamilyComponent = () => {
  const [members, setMembers] = useState(0);
  const [roads, setRoads] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (members < 300) {
        setMembers((prevMembers) => prevMembers + 1);
      }
      if (roads < 1500) {
        setRoads((prevRoads) => prevRoads + 10);
      }
      if (experience < 25) {
        setExperience((prevExperience) => prevExperience + 1);
      }
    }, 10); // Adjust the interval as needed (100 milliseconds for smoother animation)

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, [members, roads, experience]);

  return (
    <div className="p-12 lg:flex justify-center py-12 bg-white">
      <div className="flex flex-col gap-3 lg:flex-row lg:gap-20">
        <div className="text-center flex flex-col items-center justify-center">
          <img src={C1} alt="" />
          <p className="mt-4 text-3xl font-bold">{members}+</p>
          <p className="text-lg">Members In Forcon Family</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <img src={C2} alt="" />
          <p className="mt-4 text-3xl font-bold">{roads}+</p>
          <p className="text-lg">KMS Of Roads Constructed</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <img src={C3} alt="" />
          <p className="mt-4 text-3xl font-bold">{experience}+</p>
          <p className="text-lg">Years Of Broad Experience</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyComponent;
