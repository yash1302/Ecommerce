import React from 'react'
import { IoStarSharp } from "react-icons/io5";

const ReviewImagesMobile = (props) => {
    const { rating, review, brand,type, img } = props.obj;
    const myExample = () => {
      let reviewStars = [];
      for (let i = 0; i < rating; i++) {
        reviewStars.push(<IoStarSharp />);
      }
  
      return reviewStars;
    };
  return (
    <div className='flex flex-col '>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="flex mb-2">{myExample()}</p>
          <p className="w-[15rem] text-sm font-display font-extralight mb-4 tracking-wide">
            {review}
          </p>
          <img src={img} alt="" className='rounded-full h-[5rem] w-[5rem] object-cover'/>
        </div>
    </div>
  )
}

export default ReviewImagesMobile