import React from "react";

export function FilterButton({
  handleCategorySelect,
  name,
  category,
  imgSrc,
  selectedCategory,
}) {
  const handleClick = () => {
    handleCategorySelect(category);
  };

  const isSelected = category === selectedCategory;

  return (
    <button
      data-category={category}
      className={`rounded-md font-medium cursor-pointer transition-all duration-300 ${
        isSelected ? "opacity-60" : "hover:opacity-60"
      } w-full`}
      onClick={handleClick}
    >
      <img className="mx-auto" style={{ width: "20px" }} src={imgSrc} />
    </button>
  );
}
