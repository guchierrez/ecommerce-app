export function SearchBar({ value, setSearchQuery }) {
  return (
    <input
      type="text"
      value={value}
      placeholder="Search product..."
      className="input w-full bg-zinc-800 text-gray-300 placeholder-gray-300 opacity-60 focus:opacity-100 transition-all duration-300 italic"
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
    />
  );
}
