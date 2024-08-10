import React from "react";
import Outfits from "./Outfits";

const OutfitSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[8rem]">
      <h1 className="text-2xl">Outfits</h1>
      <div className="flex gap-4 mt-[4rem]">
        <Outfits
          imageLink="https://images.unsplash.com/photo-1687435843258-85d6d13e010f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YSUyMG1hbiUyMHdpdGglMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D"
          headingName="New Arrivals"
          btnName="SHOP THE LATEST"
        />
        <Outfits
          imageLink="https://images.unsplash.com/photo-1687435843258-85d6d13e010f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YSUyMG1hbiUyMHdpdGglMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D"
          headingName="New Arrivals"
          btnName="SHOP THE LATEST"
        />
        <Outfits
          imageLink="https://images.unsplash.com/photo-1687435843258-85d6d13e010f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YSUyMG1hbiUyMHdpdGglMjBibGF6ZXJ8ZW58MHx8MHx8fDA%3D"
          headingName="New Arrivals"
          btnName="SHOP THE LATEST"
        />
      </div>
    </div>
  );
};

export default OutfitSection;
