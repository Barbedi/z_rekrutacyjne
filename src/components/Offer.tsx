import {
  faPencil,
  faEye,
  faHandSparkles,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Offer = () => {
  return (
    <section className="relative grid grid-cols-12 gap-16 pt-30 pb-40 bg-[#F5F0EC] items-center">
      <div className="flex flex-col col-start-3 col-span-7 items-start gap-20">
        <div className="flex flex-col gap-8 items-start">
          <div className="flex flex-col gap-4 max-w-lg">
            <h1 className="text-xs text-left font-inter font-normal leading-[150%]  tracking-[-1%] text-[#1B5B31]">
              Oferta
            </h1>

            <h2 className="text-5xl text-black font-inter font-normal leading-[115%]">
              Działamy kompleksowo
            </h2>
          </div>
          <p className="text-base text-black font-inter font-normal leading-[150%] max-w-xl tracking-[-1%]">
            Oferujemy kompletną obsługę inwestycji terenów zielonych.
            Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne.
            Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie,
            a na każdym etapie posłużymy radą i wieloletnim doświadczeniem.
          </p>
        </div>
      </div>
      <div className="col-span-12 flex w-full  items-center gap-16 px-22">
        <div className="flex col-auto flex-col px-10 py-12 bg-white gap-3 rounded-[28px]">
          <div className="flex flex-col  gap-8 items-start">
            <FontAwesomeIcon className="text-black text-5xl" icon={faPencil} />
            <h1 className="text-[28px] ">Projekty</h1>
          </div>
          <p className="text-sm text-black font-inter font-normal leading-[150%]">
            Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym
            wykorzystaniem istniejącej przestrzeni.
          </p>
          <a href="" className="text-[#1B5B31] underline mt-auto">
            Dowiedz się więcej
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </a>
        </div>
        <div className="flex flex-col px-10 py-12 bg-white gap-3 rounded-[28px]">
          <div className="flex flex-col  gap-8 items-start">
            <FontAwesomeIcon className="text-black text-5xl" icon={faEye} />
            <h1 className="text-[28px] ">Wizualizacje</h1>
          </div>
          <p className="text-sm text-black font-inter font-normal leading-[150%]">
            Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru
            animowanego w technologii 3D.
          </p>
          <a href="" className="text-[#1B5B31] underline mt-auto">
            Dowiedz się więcej
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </a>
        </div>
        <div className="flex flex-col px-10 py-12 bg-white gap-3 rounded-[28px]">
          <div className="flex flex-col  gap-8 items-start">
            <FontAwesomeIcon
              className="text-black text-5xl"
              icon={faHandSparkles}
            />
            <h1 className="text-[28px] ">Realizacje</h1>
          </div>
          <p className="text-sm text-black font-inter font-normal leading-[150%]">
            Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i
            zaawansowanych technologii.
          </p>
          <a href="" className="text-[#1B5B31] underline">
            Dowiedz się więcej
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Offer;
