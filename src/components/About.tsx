import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../assets/Photo1.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <section className="relative grid grid-cols-12 items-center gap-16 bg-[#1B5B31] py-0 ">
      <div className="flex flex-col col-start-1 col-span-6 items-center">
        <div
          className="h-184.25 w-full bg-cover object-cover object-right"
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
      </div>
      <div className="col-start-7 col-span-6">
        <div className="flex flex-col gap-18 items-start pl-24">
          <div className="flex flex-col gap-10 items-start">
            <div className="flex flex-col gap-4 max-w-lg">
              <h1 className="text-xs text-left font-inter font-normal leading-[150%]  tracking-[-1%] text-[#F5F0EC]">
                O firmie
              </h1>

              <h2 className="text-5xl text-[#F5F0EC] font-inter font-normal leading-[115%]">
                Tworzymy z pasją
              </h2>
            </div>
            <p className="text-base text-[#F5F0EC] font-inter font-normal leading-[150%] max-w-xl tracking-[-1%]">
              Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą
              wykwalifikowani projektanci oraz architekci, których zadaniem jest
              rozpoznanie i realizacja potrzeb każdego Klienta. Nasza
              specjalizacja to przestrzenie nowoczesne, które charakteryzuje
              minimalizm, geometria i elegancka prostota. Tworzymy ogrody
              małoobsługowe, dostosowane do współczesnego trybu życia.
            </p>
          </div>
          <div className="flex items-center flex-row gap-9 whitespace-nowrap">
            <button className="bg-transparent text-[#F5F0EC] font-inter font-normal border-2 border-[#F5F0EC] px-5.5 pt-3 pb-3.5 rounded-[200px] hover:shadow-xl shadow-[#1B5B31] transition-colors duration-300 cursor-pointer">
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
