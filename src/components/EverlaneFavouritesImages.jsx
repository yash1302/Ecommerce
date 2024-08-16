import React from "react";

const EverlaneFavouritesImages = (props) => {
  const { img,index } = props;

  return (
    <div
      className="flex-none w-[19rem] "
      key={index}
    >
      <img
        className="w-full h-[20rem] object-cover rounded-lg"
        src={img}
        alt="Card"
      />
    </div>
  );
};

export default EverlaneFavouritesImages;
