import React from "react";

const EverlaneFavouritesImages = (props) => {
  const { img, index, type, brand, price } = props;
  return (
    <div className="flex flex-col " key={index}>
      <img
        className="w-full h-[13rem] md:h-[25rem] object-cover rounded-md"
        src={img}
        alt="Card"
      />

      <div className="flex justify-between mt-2 flex-row text-xs md:text-sm">
        <p className="font-openSans font-normal">{type}</p>
        <p className="font-openSans md:font-extralight font-bold">{price}</p>
      </div>
      <p className="font-openSans font-extralight text-[#737373] mt-1 hidden md:block">
        {brand}
      </p>
    </div>
  );
};

export default EverlaneFavouritesImages;
