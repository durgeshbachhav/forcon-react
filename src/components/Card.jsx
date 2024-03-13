const Card = (props) => {
  const { img, desc } = props.cardData;
  return (
    <div className="max-w-xs mx-auto mb-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={img} alt="" className="w-full h-auto" />
        <div className="p-4">
          <p className="text-gray-800 text-center">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
