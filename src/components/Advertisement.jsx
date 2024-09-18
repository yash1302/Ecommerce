import React from "react";

const Advertisement = () => {
  return (
    <div className="flex items-center justify-center text-xs py-2 gap-1 bg-black text-white flex-col uppercase md:flex-row">
      <p className="tracking-widest">flat 15% off on your 1st app purchase</p>
      <p className="font-thin underline underline-offset-2">Download app</p>
    </div>
  );
};

export default Advertisement;
