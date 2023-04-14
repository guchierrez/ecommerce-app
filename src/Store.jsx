import { useState, useEffect } from "react";
import { Product } from "./Product";

import { Navbar } from "./Navbar";

export function Store() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const [searchQuery, setSearchQuery] = useState("");

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar
        handleCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="md:pt-28 pt-48 py-11">
        {isLoading === true ? (
          <div className="w-5/6 mx-auto text-center align-middle items-center p-11 ">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-zinc-800 grid grid-cols-2 md:grid-cols-4 p-8  w-5/6 mx-auto gap-8 shadow-2xl">
            {searchedProducts.map((product) => {
              return <Product key={crypto.randomUUID()} {...product} />;
            })}
          </div>
        )}
      </main>
    </>
  );
}
