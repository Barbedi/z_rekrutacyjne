import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Masonry from "react-masonry-css";
import { useState } from "react";

const Projects = () => {
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1170&q=80",
  ];

  const breakpoint = {
    default: 3,
    810: 2,
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      id="projekty"
      className="bg-[#DCC1AB] relative grid grid-cols-1 gap-5 pt-10 pb-4 lg:grid-cols-12 items-center lg:gap-16 lg:pt-30 lg:pb-11"
    >
      <div className="lg:gap-24 gap-6 flex flex-col col-span-4 lg:col-span-12 items-start ">
        <div className="lg:gap-4 gap-1.5 flex flex-col col-span-4 lg:col-span-12 items-start lg:pl-40 pl-13">
          <span className="text-[#1B5B31] font-inter font-normal text-xs leading-[150%]">
            Realizacje
          </span>
          <h2 className="lg:text-5xl text-2xl font-montserrat font-medium leading-[115%] text-black">
            Nasze{" "}
            <span className="font-inter font-medium italic lg:text-5xl text-2xl">
              projekty
            </span>
          </h2>
        </div>

        <div
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "lg:max-h-500 xl:max-h-900 xs:max-h-250" : "max-h-250"}`}
        >
          <Masonry
            breakpointCols={breakpoint}
            className="flex gap-4 w-auto"
            columnClassName="flex flex-col gap-4 "
          >
            {images.map((image, index) => (
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className=" w-full object-cover"
              />
            ))}
          </Masonry>
          <div className="flex flex-col col-span-12 items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={` absolute bottom-10 z-50 items-center bg-transparent text-black border border-black px-5.5 pt-3 pb-3.5 rounded-[200px] hover:shadow-lg hover:translate-y-0.5 transition-all duration-300 cursor-pointer hover:bg-white hover:border-white`}
            >
              {isOpen ? "Zwiń" : "Rozwiń"}
              <FontAwesomeIcon
                className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                icon={faArrowDown}
              />
            </button>
          </div>

          {!isOpen ? (
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-50%  to-[#DCC1AB]"></div>
          ) : (
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-80% to-[#DCC1AB] "></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
