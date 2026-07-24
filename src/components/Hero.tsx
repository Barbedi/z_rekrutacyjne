import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../assets/Photo.png";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="relative grid grid-cols-12 items-center gap-16 bg-[#DCC1AB] py-0 ">
      <div className="flex flex-col col-start-1 col-span-5 items-center">
        <div className="flex flex-col gap-11 items-start">
          <div className="flex flex-col gap-11 max-w-md">
            <h1 className="text-6xl text-left font-montserrat font-medium leading-17.5">
              Nowoczesna aranżacja Twojego ogrodu
            </h1>
            <span className="text-md text-black font-inter font-normal leading-[150%]">
              Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka
              realizacji. Oferujemy kompleksowy zakres usług z indywidualnym
              podejściem do każdego projektu.
            </span>
          </div>
          <div className="flex items-center flex-row gap-9 whitespace-nowrap">
            <button className="bg-[#1B5B31] text-white font-inter font-normal border-2 border-[#1B5B31] px-6 pt-3 pb-3.5 rounded-[200px] hover:shadow-xl shadow-[#1B5B31] transition-colors duration-300 cursor-pointer">
              Skontaktuj się z nami
            </button>
            <button className="bg-transparent group border-2 border-[#1B5B31] text-[#1B5B31] font-inter font-normal px-6 pt-3 pb-3.5 rounded-[200px] hover:shadow-xl shadow-[#1B5B31] transition-colors duration-300 cursor-pointer">
              Zobacz nasze realizacje
              <FontAwesomeIcon
                className="group-hover:animate-bounce duration-300"
                icon={faArrowDown}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="col-start-7 col-span-6">
        <div
          className="h-184.25 w-full bg-cover object-cover object-right"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="flex flex-row gap-8 px-8 py-6 absolute bottom-0 right-0 bg-[#F5F0EC]">
            <div className="justify-center items-center flex">
              <FontAwesomeIcon
                className="text-black text-5xl"
                icon={faArrowLeft}
              />
            </div>
            <div className="justify-center items-center flex">
              <FontAwesomeIcon
                className="text-black text-5xl"
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
