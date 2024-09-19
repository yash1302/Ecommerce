import React from "react";

const ArticleImageMobile = (props) => {
  const { heading, img, title, button } = props.obj;
  return (
    <div className="  flex flex-col justify-center items-center gap-4 mt-6">
      <img className="relative w-[30rem] h-[40rem] object-cover brightness-50 rounded-sm" src={img} alt="" />
      <p className="absolute text-white top-[10rem] font-display font-medium text-2xl tracking-wide">
        {heading}
      </p>
      <p className="text-center absolute bottom-[10rem] font-openSans font-medium text-md tracking-wide text-white">{title}</p>
      <p className="absolute bottom-[8rem] font-openSans font-light text-md underline underline-offset-2 hover:cursor-pointer text-white">
        {button}
      </p>
    </div>
  );
};

export default ArticleImageMobile;
