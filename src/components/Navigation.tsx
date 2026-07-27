import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav
      id="navigation"
      className="relative grid grid-cols-12 items-center gap-16 py-6 bg-white "
    >
      <div className="col-span-12 col-start-1 flex flex-row justify-between items-center px-22">
        <div className="flex flex-row gap-6 items-center">
          <span className="text-lg">
            <span className="font-bold text-lg">giard</span>design
          </span>
        </div>
        <div>
          <ul className="flex flex-row gap-12 items-center">
            <li className="relative">
              <a
                className="flex items-center gap-1 hover:opacity-60"
                onClick={() => setIsOpen(!isOpen)}
                href="#"
              >
                Oferta
                <FontAwesomeIcon
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  icon={faChevronDown}
                />
              </a>

              <div
                className={`absolute left-0 top-full min-w-50 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-96 opacity-100 translate-y-0 z-50"
                    : "max-h-0 opacity-0 -translate-y-2 pointer-events-none z-50"
                }`}
              >
                <ul className="py-2">
                  <li>
                    <a
                      href="#projects"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Projektowanie
                    </a>
                  </li>
                  <li>
                    <a
                      href="#wizualizacje"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Wizualizacje
                    </a>
                  </li>
                  <li>
                    <a
                      href="#realizacje"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Realizacja
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#o-firmie" className="hover:opacity-60">
                O firmie
              </a>
            </li>
            <li>
              <a href="#projekty" className="hover:opacity-60">
                Realizacje
              </a>
            </li>
            <li>
              <a href="#kontakt" className="hover:opacity-60">
                Kontakt
              </a>
            </li>
            <li className="relative flex items-center">
              <div className="flex items-center">
                <a
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  href="#"
                  className="hover:opacity-60 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </a>
                <input
                  type="text"
                  placeholder="Szukaj..."
                  className={`transition-all duration-300 ease-in-out bg-gray-100 rounded-md text-sm outline-none ${
                    isSearchOpen
                      ? "w-48 opacity-100 px-3 py-1 "
                      : "w-0 opacity-0 px-0 py-0 "
                  } overflow-hidden`}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
