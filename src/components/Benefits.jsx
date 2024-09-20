import React from "react";
import BenefitsImagesMobile from "./BenefitsImagesMobile";
import { BsBoxSeam } from "react-icons/bs";
import { BsRecycle } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Benefits = () => {
  return (
    <div className="container mx-auto">
      <div className="md:hidden">
        <p className="font-light font-display text-center mt-6 md:mt-[4rem] lg:mt-[6rem] text-xl md:text-2xl lg:text-3xl tracking-wide">
          What We Offer
        </p>
        <BenefitsImagesMobile
          icon={<BsBoxSeam />}
          text={`Enjoy free shipping on U.S. orders over $100.`}
        />
        <BenefitsImagesMobile
          icon={<BsRecycle />}
          text={`Designed with you and the planet in mind.`}
        />
        <BenefitsImagesMobile
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
