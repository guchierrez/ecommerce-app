import { useState, useEffect } from "react";
import { Cart } from "./Cart";
import { Login } from "./Login";
import { SearchBar } from "./SearchBar";
import { FilterButtons } from "./FilterButtons";

export function Navbar({
  handleCategorySelect,
  selectedCategory,
  searchQuery,
  setSearchQuery,
  cartProducts,
  setCartProducts,
}) {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      setIsNavbarHidden(scrollY > 100);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {
    return (
      <header
        className={`py-2 fixed w-full transition-all duration-300 z-10 ${
          isNavbarHidden ? "-top-52 md:top-0" : "top-0"
        }`}
      >
        <ul className="w-5/6 md:py-2 mx-auto grid grid-cols-10 gap-3  md:gap-10 justify-between items-center">
          <li className="md:col-span-4 xs:col-span-6 col-span-5">
            <SearchBar value={searchQuery} setSearchQuery={setSearchQuery} />
          </li>
          <li className="md:col-span-4 col-span-10 row-start-2 md:row-start-auto">
            <FilterButtons
              handleCategorySelect={handleCategorySelect}
              selectedCategory={selectedCategory}
            />
          </li>
          <li className="md:col-span-2 xs:col-span-4 col-span-5 flex gap-5 ml-auto">
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
            <Login />
          </li>
        </ul>
      </header>
    );
  }
}
