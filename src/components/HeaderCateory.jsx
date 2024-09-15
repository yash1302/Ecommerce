import React from "react";

const HeaderCateory = () => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center justify-center gap-6 container mx-auto text-sm font-extralight">
        <ul className="li my-2 hover:underline underline-offset-4">
          <a href="">Men</a>
        </ul>
        <ul className="li my-2 hover:underline underline-offset-4">
          <a href="">Women</a>
        </ul>
        <ul className="li my-2 hover:underline underline-offset-4">
          <a href="">About</a>
        </ul>
        <ul className="li my-2 hover:underline underline-offset-4">
          <a href="">Everworld Stories</a>
        </ul>
        {/* <ul className="li mx-3 my-2">
          <a href="">Pants & Jeans</a>
        </ul>
        <ul className="li mx-3 my-2">
          <a href="">Tops & Sweaters</a>
        </ul>
        <ul className="li mx-3 my-2">
          <a href="">Outerwear</a>
        </ul>
        <ul className="li mx-3">
          <a href="">Shoes & Bags</a>
        </ul>
        <ul className="li mx-3 text-red-600">
          <a href="">Sale</a>
        </ul> */}
      </div>
      <hr className="bg-gray-200 "/>
    </div>
  );
};

export default HeaderCateory;
