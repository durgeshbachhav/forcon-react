const Card = (props) => {
  const { img, desc } = props.cardData;
  return (
    <div className="bg-primary rounded-lg">
      <div className="shadow-lg overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 lg:aspect-none">
          {" "}
          {/* Maintain aspect ratio */}
          <img
            src={img}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />{" "}
          {/* Ensure image covers the container */}
        </div>
        <div className="p-4">
          <p className="text-white text-center georgia-regular">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
