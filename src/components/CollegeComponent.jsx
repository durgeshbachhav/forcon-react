import { useEffect, useRef, useState } from "react";

const CollegeComponent = ({ collegeImages }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 2; // Adjust scrolling speed as needed
        }
      }, 30); // Adjust interval for smoother or faster scrolling
    };

    const stopAutoScroll = () => {
      clearInterval(scrollInterval);
    };

    if (!isHovered) {
      startAutoScroll(); // Start autoplay initially
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [isHovered]);

  return (
    <div
      className="flex items-center justify-center w-full  h-56  bg-gray-300 rounded-lg "
      style={{
        overflow: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
      ref={containerRef}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {Array.isArray(collegeImages) &&
        collegeImages?.map((college, index) => (
          <img
            key={index}
            src={college.imageSrc}
            alt={college.name}
            className="w-40 px-6 "
          />
        ))}
    </div>
  );
};

export default CollegeComponent;
