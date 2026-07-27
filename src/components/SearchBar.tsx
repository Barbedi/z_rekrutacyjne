import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchBar = ({ variant = "desktop" }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = variant === "mobile";

  return (
    <div className="flex items-center">
      <button
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="hover:opacity-60 cursor-pointer"
        aria-label="Szukaj"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        placeholder="Szukaj..."
        className={`transition-all duration-300 ease-in-out bg-gray-100 rounded-md text-sm outline-none overflow-hidden ${
          isSearchOpen
            ? isMobile
              ? "w-40 opacity-100 px-1 py-1"
              : "w-48 opacity-100 px-3 py-1"
            : isMobile
              ? "w-0 opacity-0 px-0 py-0"
              : "w-0 opacity-0 px-0 py-0"
        }`}
      />
    </div>
  );
};

export default SearchBar;
