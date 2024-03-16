const ImageAndData = ({ data }) => {
  console.log("data", data);
  return (
    <div className="flex flex-col gap-4 items-center justify-center lg:flex-row lg:justify-between px-8 lg:px-24">
      <div className="lg:w-1/2">
        <img
          src={data?.img}
          alt=""
          className="rounded-sm lg:h-[80vh] lg:w-full object-cover"
        />
      </div>
      <div className="lg:w-1/2">
        {data?.text.map((para, index) => (
          <div key={index}>
            {index === 0 ? (
              <h3 className=" font-tienne tienne-bold text-2xl font-semibold mb-2 lg:text-3xl lg:py-2 text-tableheadcolor">
                {para}
              </h3>
            ) : (
              <p className="text-base mb-2 lg:text-justify georgia-regular">
                {para}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageAndData;
