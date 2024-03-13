

const ImageAndData = ({ data }) => {
  console.log('data',data)
  return (
    <div className="flex flex-col gap-2  w-full lg:flex lg:flex-row items-center justify-center lg:gap-8 lg:justify-around ">
      <div>
        <img
          src={data?.img || "https://picsum.photos/200/300"}
          alt=""
          className="aspect-ratio: 300 / 150; object-fit: cover"
        />
      </div>
      <div className="p-4">
        {data?.text.map((para, index) => (
          <div key={index}>
            {index === 0 ? (
              <h3 className="text-xl font-semibold mb-2">{para}</h3>
            ) : (
              <p className="text-base mb-2">{para}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAndData;


