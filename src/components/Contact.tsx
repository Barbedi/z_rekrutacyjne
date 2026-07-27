import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section
      id="kontakt"
      className="relative grid grid-cols-1 gap-5 py-0 lg:grid-cols-12 items-center lg:gap-16 bg-[#F5F0EC] lg:py-15"
    >
      <div className="grid grid-cols-1 gap-5  lg:grid-cols-10 lg:gap-16 col-start-1 lg:col-start-3 lg:col-span-8 items-center bg-[#1B5B31] py-10 lg:py-30 px-9 lg:px-27.5">
        <div className="col-start-1 lg:col-span-7 items-start">
          <h1 className="lg:text-[40px] text-center lg:text-left text-2xl leading-[120%] font-montserrat font-normal text-[#F5F0EC]">
            Zostańmy w kontakcie! <br />
            Znajdziesz nas na{" "}
            <span className="font-inter font-medium italic">Instagramie.</span>
          </h1>
        </div>
        <div className="lg:col-span-3 col-span-1 flex flex-col lg:gap-6 gap-2 lg:items-start items-center">
          <span className="text-[#F5F0EC] font-inter font-normal text-base leading-[150%] nowrap text-center lg:text-left">
            Śledź nasze <br className="hidden lg:inline" />
            najnowsze realizacje!
          </span>
          <button className="bg-[#F5F0EC] text-[#1B5B31]  w-1/2 lg:w-auto  text-center font-inter lg:text-base text-xs leading-[150%] font-normal lg:px-6 px-2 py-1 lg:py-3 lg:rounded-[200px] rounded-xl transition-colors duration-300 cursor-pointer hover:bg-opacity-90">
            <FontAwesomeIcon icon={faInstagram}  />
            Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
