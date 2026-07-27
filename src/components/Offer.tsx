import {
  faPencil,
  faEye,
  faHandSparkles,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Offer = () => {
  return (
    <section
      id="oferta"
      className="relative grid grid-cols-1 gap-5 pt-10 pb-13 lg:grid-cols-12 md:gap-x-16 md:gap-y-12 lg:gap-y-24 lg:pt-30 lg:pb-40 bg-[#F5F0EC] md:items-start md:justify-start"
    >
      <div className="flex flex-col px-7 w-full col-span-12 lg:col-start-3 lg:col-span-7 lg:items-start lg:gap-20 md:gap-7">
        <div className="flex flex-col gap-8 items-start">
          <div className="flex flex-col gap-4 max-w-lg">
            <h1 className="text-xs text-left font-inter font-normal leading-[150%]  tracking-[-1%] text-[#1B5B31]">
              Oferta
            </h1>

            <h2 className="lg:text-5xl md:text-4xl text-2xl text-black font-montserrat font-medium leading-[115%] tracking-[-3%]">
              Działamy{" "}
              <span className="text-black font-inter italic leading-[115%] tracking-0">
                kompleksowo
              </span>
            </h2>
          </div>
          <p className="lg:text-base text-sm text-black font-inter font-normal leading-[150%] max-w-xl  tracking-[-1%]">
            Oferujemy kompletną obsługę inwestycji terenów zielonych.
            Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne.
            Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie,
            a na każdym etapie posłużymy radą i wieloletnim doświadczeniem.
          </p>
        </div>
      </div>
      <div className="col-span-12 col-start-1 flex w-full  flex-col lg:flex-row items-stretch lg:items-center gap-5 lg:gap-16 px-7 lg:px-22 ">
        <a
          id="projects"
          className=" cursor-pointer flex group col-span-12 flex-col px-10 py-12 bg-white hover:bg-[#1B5B31]/15 gap-3 rounded-[28px] hover:-translate-y-1.5 hover:shadow-xl shadow-[#1B5B31]/30 transition-all duration-300 ease-out "
        >
          <div className="flex flex-col  gap-8 items-start">
            <FontAwesomeIcon
              className="text-black group-hover:text-[#1B5B31] text-5xl"
              icon={faPencil}
            />
            <h1 className="text-[28px] font-medium font-montserrat leading-[115%] tracking-[-5%]">
              Projekty
            </h1>
          </div>
          <p className="text-sm text-black font-inter font-normal leading-[150%] tracking-[-1%]">
            Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym
            wykorzystaniem istniejącej przestrzeni.
          </p>
          <span className="text-[#1B5B31] underline mt-auto font-inter font-normal leading-[150%] ">
            Dowiedz się więcej
            <FontAwesomeIcon
              className="ml-0.5 group-hover:translate-x-1 transition-transform duration-300"
              icon={faArrowRight}
            />
          </span>
        </a>
        <a
          id="wizualizacje"
          className="cursor-pointer flex group col-span-12 flex-col px-10 py-12 bg-white hover:bg-[#1B5B31]/15 gap-3 rounded-[28px] hover:-translate-y-1.5 hover:shadow-xl shadow-[#1B5B31]/30 transition-all duration-300 ease-out"
        >
          <div className="flex flex-col  gap-8 items-start">
            <FontAwesomeIcon
              className="text-black group-hover:text-[#1B5B31] text-5xl"
              icon={faEye}
            />
            <h1 className="text-[28px] font-medium font-montserrat leading-[115%] tracking-[-5%]">
              Wizualizacje
            </h1>
          </div>
          <p className="text-sm text-black font-inter font-normal leading-[150%] tracking-[-1%]">
            Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru
            animowanego w technologii 3D.
          </p>
          <span className="text-[#1B5B31] underline mt-auto font-inter font-normal leading-[150%] ">
            Dowiedz się więcej
            <FontAwesomeIcon
              className="ml-0.5 group-hover:translate-x-1 transition-transform duration-300"
              icon={faArrowRight}
            />
          </span>
        </a>
        <a
          id="realizacje"
          className="cursor-pointer flex group col-span-full flex-col px-10 py-12 bg-white hover:bg-[#1B5B31]/15 gap-3 rounded-[28px] hover:-translate-y-1.5 hover:shadow-xl shadow-[#1B5B31]/30 transition-all duration-300 ease-out"
        >
          <div className="flex flex-col  gap-8 items-start">
            <FontAwesomeIcon
              className="text-black group-hover:text-[#1B5B31] text-5xl"
              icon={faHandSparkles}
            />
            <h1 className="text-[28px] font-medium font-montserrat leading-[115%] tracking-[-5%]">
              Realizacje
            </h1>
          </div>
          <p className="text-sm text-black font-inter font-normal leading-[150%] tracking-[-1%]">
            Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i
            zaawansowanych technologii.
          </p>
          <span className="text-[#1B5B31] underline mt-auto font-inter font-normal leading-[150%] ">
            Dowiedz się więcej
            <FontAwesomeIcon
              className="ml-0.5 group-hover:translate-x-1 transition-transform duration-300"
              icon={faArrowRight}
            />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Offer;
