import React from "react";

const EverlaneFavouritesImages = (props) => {
  const { img, index, type, brand, price } = props;
  return (
    <div className="flex flex-col w-[23.7rem] " key={index}>
      <img
        className="w-full h-[35rem] object-cover"
        src={img}
        alt="Card"
      />

      <div className="flex justify-between mt-2">
        <p className="font-openSans font-normal text-sm">{type}</p>
        <p className="font-openSans font-extralight text-sm">{price}</p>
      </div>
      <p className="font-openSans font-extralight text-sm text-[#737373] mt-1 ">
        {brand}
      </p>
    </div>
  );
};

export default EverlaneFavouritesImages;
