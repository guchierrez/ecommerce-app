import { useState, useEffect } from "react";

export function Product({
  category,
  image,
  name,
  description,
  price,
  id,
  hidden,
  productsArray,
  setCartProducts,
  cartProducts,
}) {
  if (hidden) return;

  function handleClick(array, e) {
    const addedProduct = array.find(
      (product) => product.id === e.target.dataset.id
    );
    addedProduct.quantity = 1;
    cartProducts.some((product) => product.id === addedProduct.id)
      ? setCartProducts((prevCartProducts) =>
          prevCartProducts.map((product) => {
            if (product.id !== addedProduct.id) return product;
            return { ...product, quantity: product.quantity + 1 };
          })
        )
      : setCartProducts((prevCartProducts) => [
          ...prevCartProducts,
          { ...addedProduct, quantity: 1 },
        ]);
  }

  return (
    <>
      <div className="bg-zinc-800 items-center">
        <label htmlFor={`my-modal-${id}`}>
          <div className="bg-zinc-900 items-center overflow-hidden">
            <img
              className="mx-auto hover:scale-105 transition-all duration-300 cursor-pointer"
              src={image}
            />
          </div>
        </label>
        <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
        <label htmlFor={`my-modal-${id}`} className="modal cursor-pointer">
          <label
            className="modal-box relative bg-zinc-800 flex flex-col"
            htmlFor=""
          >
            <img
              className="w-1/2 mx-auto hover:scale-105 transition-all duration-300"
              src={image}
            />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-md font-thin py-2">{description}</p>
            <p className="py-2 text-lg font-bold">
              {(price / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </label>
        </label>
        <h2 className=" text-md md:text-xl font-bold line-clamp-1 my-2">
          {name}
        </h2>
        <p className="text-gray-300 text-sm md:text-base font-thin line-clamp-2 my-1">
          {description}
        </p>
        <span className=" text-md md:text-xl font-bold line-clamp-1 my-2">
          {(price / 100).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
        <button
          data-id={id}
          className="bg-zinc-900  w-full btn btn-primary border-none text-xs"
          onClick={(e) => handleClick(productsArray, e)}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}
