import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../assets/Photo1.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <section
      id="o-firmie"
      className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-16 bg-[#1B5B31] py-0 "
    >
      <div className="flex flex-col lg:col-start-1 lg:col-span-6 items-center col-start-1 col-span-12">
        <div
          className="lg:h-184.25 h-61 w-full lg:w-full bg-cover object-cover object-right"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
      </div>
      <div className="lg:col-start-7  lg:col-span-6 col-start-1 col-span-12 px-7 lg:px-0">
        <div className="flex flex-col lg:gap-18 gap-6 items-start lg:pl-24">
          <div className="flex flex-col gap-3 lg:gap-10 items-start">
            <div className="flex flex-col gap-4 max-w-lg">
              <h1 className="text-xs text-left font-inter font-normal leading-[150%]  tracking-[-1%] text-[#F5F0EC]">
                O firmie
              </h1>

              <h2 className="lg:text-5xl text-2xl text-[#F5F0EC] font-inter font-normal leading-[115%]">
                Tworzymy z pasją
              </h2>
            </div>
            <p className="lg:text-base text-sm  text-[#F5F0EC] font-inter font-normal leading-[150%] lg:max-w-xl  tracking-[-1%] ">
              Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą
              wykwalifikowani projektanci oraz architekci, których zadaniem jest
              rozpoznanie i realizacja potrzeb każdego Klienta. Nasza
              specjalizacja to przestrzenie nowoczesne, które charakteryzuje
              minimalizm, geometria i elegancka prostota. Tworzymy ogrody
              małoobsługowe, dostosowane do współczesnego trybu życia.
            </p>
          </div>
          <div className="flex items-center flex-row gap-3 lg:gap-9 lg:whitespace-nowrap mb-5 lg:mb-0 w-full ">
            <button className=" w-full  lg:w-auto bg-transparent text-[#F5F0EC] font-inter font-normal border-2 border-[#F5F0EC] px-2 lg:px-5.5 pt-1 pb-1.25 lg:pt-3 lg:pb-3.5 lg:rounded-[200px] rounded-xl hover:shadow-xl shadow-[#1B5B31] transition-colors duration-300 cursor-pointer">
              Poznaj nas bliżej
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
