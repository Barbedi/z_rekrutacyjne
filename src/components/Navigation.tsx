import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      id="navigation"
      className="relative grid grid-cols-1 lg:grid-cols-12 items-center lg:gap-16 lg:py-6 gap-5 py-3 bg-white "
    >
      <div className="col-span-12 col-start-1 flex flex-row justify-between items-center lg:px-22 px-7">
        <div className="flex flex-row gap-6 items-center">
          <span className="text-lg">
            <span className="font-bold text-lg">giard</span>design
          </span>
        </div>
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-12 items-center">
            <li className="relative">
              <a
                className="flex items-center gap-1 text-sm hover:opacity-60"
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
                      className="block text-sm px-4 py-2 hover:bg-gray-100"
                    >
                      Projekty
                    </a>
                  </li>
                  <li>
                    <a
                      href="#wizualizacje"
                      className="block text-sm px-4 py-2 hover:bg-gray-100"
                    >
                      Wizualizacje
                    </a>
                  </li>
                  <li>
                    <a
                      href="#realizacje"
                      className="block text-sm px-4 py-2 hover:bg-gray-100"
                    >
                      Realizacja
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#o-firmie" className="text-sm hover:opacity-60">
                O firmie
              </a>
            </li>
            <li>
              <a href="#projekty" className="text-sm hover:opacity-60">
                Realizacje
              </a>
            </li>
            <li>
              <a href="#kontakt" className="text-sm hover:opacity-60">
                Kontakt
              </a>
            </li>
            <li className="relative flex items-center">
              <div className="flex items-center">
                <SearchBar />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <SearchBar variant="mobile" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faXmark : faBars}
              size="lg"
            />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 translate-y-0 z-50"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none z-50"
        }`}
      >
        <ul className="flex flex-col gap-4 px-7 pb-4">
          <li className="relative border-b border-gray-100 lg:border-none">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-full gap-1  lg:py-0 px-4 py-2 hover:bg-gray-100"
            >
              Oferta
              <FontAwesomeIcon
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                icon={faChevronDown}
              />
            </button>

            <div
              className={`static left-0 w-full  bg-white  overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen
                  ? "max-h-screen opacity-100 translate-y-0 z-50"
                  : "max-h-0 opacity-0 -translate-y-2 pointer-events-none z-50"
              }`}
            >
              <ul className="py-2 pl-2">
                <li>
                  <a
                    href="#projects"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Projekty
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
            <a href="#o-firmie" className=" block px-4 py-2 hover:bg-gray-100">
              O firmie
            </a>
          </li>
          <li>
            <a href="#realizacje" className="block px-4 py-2 hover:bg-gray-100">
              Realizacja
            </a>
          </li>
          <li>
            <a href="#kontakt" className="block px-4 py-2 hover:bg-gray-100">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
