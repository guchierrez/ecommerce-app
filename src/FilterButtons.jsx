import { FilterButton } from "./FilterButton";

export function FilterButtons({ handleCategorySelect, selectedCategory }) {
  const all = {
    handleCategorySelect: handleCategorySelect,
    name: "ALL",
    imgSrc: "assets/cart.png",
    category: "all",
    selectedCategory: selectedCategory,
  };

  const pc = {
    handleCategorySelect: handleCategorySelect,
    name: "PC",
    imgSrc: "assets/pc.png",
    category: "pc",
    selectedCategory: selectedCategory,
  };

  const hardware = {
    handleCategorySelect: handleCategorySelect,
    name: "HARDWARE",
    imgSrc: "assets/hardware.png",
    category: "hardware",
    selectedCategory: selectedCategory,
  };

  const software = {
    handleCategorySelect: handleCategorySelect,
    name: "SOFTWARE",
    imgSrc: "assets/software.png",
    category: "software",
    selectedCategory: selectedCategory,
  };

  const peripheral = {
    handleCategorySelect: handleCategorySelect,
    name: "PERIPHERALS",
    imgSrc: "assets/peripheral.png",
    category: "peripheral",
    selectedCategory: selectedCategory,
  };

  return (
    <div className="mx-auto bg-zinc-800 bg-opacity-60 hover:bg-opacity-100 transition-all duration-300 py-4 px-4 rounded-3xl text-white flex gap-5 overflow-auto">
      <FilterButton {...all} />
      <FilterButton {...pc} />
      <FilterButton {...hardware} />
      <FilterButton {...software} />
      <FilterButton {...peripheral} />
    </div>
  );
}
