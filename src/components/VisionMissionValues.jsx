const VisionMissionValues = () => {
  return (
    <div className="flex flex-col justify-center gap-4 lg:flex-row lg:gap-4 py-8 px-8 lg:px-24 text-black">
      <div className="p-6 border rounded-md lg:w-[50%] bg-white ">
        <h2 className="text-2xl font-bold mb-4 font-tienne">Vision</h2>
        <p className="text-base text-justify georgia-regular">
          At Forcon Infra, we recognize the significant societal impact of
          infrastructure and are committed in playing a crucial role in the
          advancement of national infrastructure facilities for economic and
          cultural integration. Our aim is to establish long-lasting customer
          partnerships based on trust, honesty, and transparency. Our ultimate
          objective is to be the nation's leading provider of infrastructure
          solutions.
        </p>
      </div>
      <div className="p-6 border rounded-md lg:w-[50%] bg-white">
        <h2 className="text-2xl font-bold mb-4 font-tienne">Mission</h2>
        <ul className="list-disc pl-5 text-base text-justify georgia-regular">
          <li>To provide the best products and services</li>
          <li>To ensure affordability without compromising quality</li>
          <li>To meet project deadlines and adhere to quality standards</li>
          <li>
            To utilize methodical planning, execution, management, and
            monitoring processes
          </li>
          <li>Commitment to delivering the best possible results</li>
          <li>Never compromise on the quality of deliverables</li>
        </ul>
      </div>
    </div>
  );
};

export default VisionMissionValues;
