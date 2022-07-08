import React from "react";

const MenuParser = ({menuData,filter}) => {
  return (
    <>
      {menuData
        .filter((item) => item.category === filter)
        .map((dish, index) => (
          <article
            className="flex flex-wrap items-center justify-between mb-8 col-span-1"
            key={index}
          >
            <h2 className="text-lg font-montaga text-rose-300 uppercase font-semibold grow m-0">
              {dish.name}
            </h2>
            <p className="font-semibold">${dish.price}</p>
            <p className="font-sans flex flex-1 basis-full text-justify mt-3">
              {dish.description}
            </p>
          </article>
        ))}
    </>
  );
};

export default MenuParser;
