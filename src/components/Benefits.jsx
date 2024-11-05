import React from "react";
import BenefitsImagesMobile from "./BenefitsImagesMobile";
import { BsBoxSeam } from "react-icons/bs";
import { BsRecycle } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import BenefitsImages from "./BenefitsImagesMobile";

const Benefits = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="font-light font-display text-center mt-6 md:mt-[4rem] lg:mt-[6rem] text-xl md:text-2xl lg:text-3xl tracking-wide mb-[2rem]">
          What We Offer
        </p>
      <div className="flex items-center justify-center">
        <BenefitsImages
          icon={<BsBoxSeam />}
          text={`Enjoy free shipping on U.S. orders over $100.`}
        />
        <BenefitsImages
          icon={<BsRecycle />}
          text={`Designed with you and the planet in mind.`}
        />
        <BenefitsImages
          icon={<CiLocationOn />}
          text={`We have 11 stores across the U.S.`}
        />
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Benefits;
