import { FilterButton } from "./FilterButton";

export function FilterButtons({ handleCategorySelect, selectedCategory }) {
  const all = {
    handleCategorySelect: handleCategorySelect,
    name: "ALL",
    imgSrc: "cart",
    category: "all",
    selectedCategory: selectedCategory,
  };

  const pc = {
    handleCategorySelect: handleCategorySelect,
    name: "PC",
    imgSrc: "pc",
    category: "pc",
    selectedCategory: selectedCategory,
  };

  const hardware = {
    handleCategorySelect: handleCategorySelect,
    name: "HARDWARE",
    imgSrc: "hardware",
    category: "hardware",
    selectedCategory: selectedCategory,
  };

  const software = {
    handleCategorySelect: handleCategorySelect,
    name: "SOFTWARE",
    imgSrc: "software",
    category: "software",
    selectedCategory: selectedCategory,
  };

  const peripheral = {
    handleCategorySelect: handleCategorySelect,
    name: "PERIPHERALS",
    imgSrc: "peripheral",
    category: "peripheral",
    selectedCategory: selectedCategory,
  };

  return (
    <div className="mx-auto bg-zinc-800 bg-opacity-60 py-4 px-4 rounded-3xl text-white flex gap-5 overflow-auto">
      <FilterButton {...all} />
      <FilterButton {...pc} />
      <FilterButton {...hardware} />
      <FilterButton {...software} />
      <FilterButton {...peripheral} />
    </div>
  );
}
