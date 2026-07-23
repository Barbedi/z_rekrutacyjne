import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative grid grid-cols-12 items-center gap-4 px-12  py-6 bg-white">
      <div className="col-start-1 col-span-2 text-2xl ">
        <span className="font-bold">giard</span>design
      </div>

      <ul className="grid col-start-8 col-span-5 grid-cols-5 gap-12 ">
        <li>
          <a
            onClick={() => setIsOpen(!isOpen)}
            href="#"
            className="flex items-center gap-1 hover:opacity-60"
          >
            Oferta
            <FontAwesomeIcon
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              icon={faChevronDown}
            />
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-60">
            O firmie
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-60">
            Realizacje
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-60">
            Kontakt
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-60">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
