import React from "react";

const BenefitsImages = (props) => {
  const { icon, text } = props;
  return (
    <div className="my-4 flex flex-col items-center gap-3 w-[30rem]">
      <div className="text-7xl flex items-center justify-center mb-[2rem] h-[4rem]">{icon}</div>
      <div className="text-md text-center w-[rem]">{text}</div>
    </div>
  );
};

export default BenefitsImages;
