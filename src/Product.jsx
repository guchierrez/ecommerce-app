import { useState, useEffect } from "react";

export function Product({ category, image, name, description, price, hidden }) {
  if (hidden) return;
  return (
    <>
      <div className="bg-zinc-800 items-center">
        <div className="bg-zinc-900 items-center">
          <img
            className="mx-auto hover:scale-105 transition-all duration-300 cursor-pointer"
            src={image}
          />
        </div>
        <h2 className="text-white text-md md:text-xl font-bold line-clamp-2 md:line-clamp-1 my-2">
          {name}
        </h2>
        <p className="text-gray-300 text-sm md:text-base font-thin line-clamp-2 my-1">
          {description}
        </p>
        <span className="text-white text-md md:text-xl font-bold line-clamp-1 my-2">
          {(price / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className="bg-zinc-900 text-white w-full btn text-xs">
          Add to cart
        </button>
      </div>
    </>
  );
}
