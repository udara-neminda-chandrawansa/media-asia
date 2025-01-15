import React from "react";

const ProductCard = ({ title, content, image, locations }) => {
  return (
    <div className="bg-white cursor-pointer aspect-square">
      <div className="relative inset-0 flex items-center justify-center h-full">
        <p className="absolute top-0 left-0 z-10 p-2 font-medium text-white">
          {locations}
        </p>
        <img
          src={image}
          alt={image}
          className="object-cover object-center w-full h-full"
        />
        <p className="absolute z-10 px-6 font-medium text-center text-white">
          {content}
        </p>
        {/*backdrop*/}
        <div className="absolute w-full h-full transition-all bg-black opacity-60 hover:opacity-50"></div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
