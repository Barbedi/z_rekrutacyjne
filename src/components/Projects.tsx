import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#DCC1AB] relative grid grid-cols-12 items-center gap-16 pt-30 pb-11"
    >
      <div className="gap-24- flex flex-col  col-span-12 items-start ">
        <div className="gap-4 flex flex-col  col-span-12 items-start pl-40">
          <span className="text-[#1B5B31] font-inter font-normal text-xs leading-[150%]">
            Realizacje
          </span>
          <h1 className="text-5xl font-montserrat font-medium leading-[115%] text-black">
            Nasze {""}
            <span className="font-inter font-medium italic text-5xl">
              projekty
            </span>
          </h1>
        </div>
        <div className="flex flex-col col-span-12 items-start ">
          tu zdjecia z projektami
        </div>
      </div>
      <div className="flex flex-col col-span-12  items-center ">
        <button className="bg-transparent text-black border border-black px-5.5 pt-3 pb-3.5 rounded-[200px] hover:bg-white/50 transition-colors duration-300 cursor-pointer ">
          Rozwiń
          <FontAwesomeIcon className="ml-2" icon={faArrowDown} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
