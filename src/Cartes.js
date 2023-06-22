function Carte({ data }) {
  const { image, title, message, buttonText } = data;

  return (
    <div className="max-w-sm md:w-1/4 items-center bg-blend-hard-light rounded-xl shadow-md min-h-[208px] border-zinc-800 border-4 ">
      {image ? (
        <img
          className="rounded-lg h-full -mb-36"
          src={image}
          alt={title ? title : "image"}
        />
      
      ):
      <div className="h-[9.5rem]"></div>
      }
      {title && (
        <div className="h-2/4 flex flex-col justify-between py-3 ">
          <div className="text-xl pl-4 font-medium text-red-600">
            {title}
            <p className=" text-amber-50 text-sm">{message}</p>
          </div>
          {buttonText && (
            <button className="bg-white bg-opacity-60  mb-2 ml-auto mr-2 flex-initial hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              {buttonText}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Carte;