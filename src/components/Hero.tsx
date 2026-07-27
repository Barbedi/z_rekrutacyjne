import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../assets/Photo.png";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-16 bg-[#DCC1AB] py-0"
    >
      <div className="flex flex-col col-start-1 col-span-12 lg:col-span-6 justify-center lg:px-22 px-7 order-2 lg:order-1">
        <div className="flex flex-col lg:gap-18 gap-6 items-start">
          <div className="flex flex-col lg:gap-11 gap-3 items-start max-w-xl  ">
            <h1 className="lg:text-6xl text-3xl text-left font-montserrat font-medium  lg:leading-17.5">
              Nowoczesna aranżacja Twojego ogrodu
            </h1>
            <span className="lg:text-base text-sm text-black font-inter font-normal leading-[150%]">
              Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka
              realizacji. Oferujemy kompleksowy zakres usług z indywidualnym
              podejściem do każdego projektu.
            </span>
          </div>
          <div className="flex items-center lg:flex-row flex-col lg:gap-9 gap-3 lg:whitespace-nowrap mb-5 lg:mb-0 w-full ">
            <a
              href="#kontakt"
              className="bg-[#1B5B31] w-full lg:w-auto text-center  text-white font-inter font-normal border-2 border-[#1B5B31] lg:px-6 px-2 lg:pt-3 pt-1 lg:pb-3.5 pb-1.25 lg:rounded-[200px] rounded-xl hover:shadow-xl shadow-[#1B5B31] transition-colors duration-300 cursor-pointer"
            >
              Skontaktuj się z nami
            </a>
            <a
              href="#projekty"
              className=" w-full lg:w-auto bg-transparent justify-center group border-2 border-[#1B5B31] text-[#1B5B31] font-inter font-normal lg:px-6 px-2 lg:pt-3 pt-1 lg:pb-3.5 pb-1.25 lg:rounded-[200px] rounded-xl hover:shadow-xl shadow-[#1B5B31] transition-colors duration-300 cursor-pointer flex items-center gap-2"
            >
              Zobacz nasze realizacje
              <FontAwesomeIcon
                className="group-hover:animate-bounce transition-transform duration-300"
                icon={faArrowDown}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:col-start-7 lg:col-span-6 col-start-1 col-span-12 relative order-1 lg:order-2">
        <div
          className="lg:h-184.25 h-61 w-full lg:w-full bg-cover bg-right"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="flex flex-row gap-8 px-8 py-6 absolute bottom-0 right-0 bg-[#F5F0EC]">
            <button
              className="justify-center items-center flex cursor-pointer hover:opacity-60"
              aria-label="Poprzedni slajd"
            >
              <FontAwesomeIcon
                className="text-black text-2xl"
                icon={faArrowLeft}
              />
            </button>
            <button
              className="justify-center items-center flex cursor-pointer hover:opacity-60"
              aria-label="Następny slajd"
            >
              <FontAwesomeIcon
                className="text-black text-2xl"
                icon={faArrowRight}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
