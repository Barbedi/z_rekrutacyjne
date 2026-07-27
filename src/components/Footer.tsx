import photo from "../assets/logo-full-light.png";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black relative grid-cols-1 gap-5  grid lg:grid-cols-12 lg:gap-16 items-center text-[#F5F0EC]"
    >
      <div className=" py-7 lg:py-20 px-7 lg:px-64 col-span-4 lg:col-span-12 flex flex-col gap-8 lg:gap-30 ">
        <div>
          <div className="flex flex-col md:flex-row justify-between lg:items-start items-stretch w-full gap-4 lg:gap-0">
            <span className="lg:text-lg text-md">
              <span className="font-bold md:text-lg text-md">giard</span>
              design
            </span>

            <div className="flex gap-3 flex-col md:flex-row lg:gap-6 items-start md:items-center">
              <span className="text-[#F5F0EC] font-inter font-normal text-xs lg:text-base leading-[150%]">
                Daj znać, co możemy dla Ciebie zrobić!
              </span>
              <button className="bg-[#1B5B31] w-full lg:w-auto text-[#F5F0EC] font-inter font-normal px-2 pt-2 pb-2 lg:px-6 lg:pt-3 lg:pb-3.5 lg:rounded-[200px] rounded-xl hover:shadow-[#1B5B31]/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer lg:text-base text-xs ">
                Skontaktuj się z nami
              </button>
            </div>
          </div>
          <div className="border-t lg:border-[#F5F0EC] border-[#F5F0EC]/30 my-5 md:my-15.5"></div>
          <div className="flex flex-col gap-4 md:flex-row md:justify-between lg:items-center items-start w-full">
            <div className="flex flex-row gap-6 lg:gap-12 items-center">
              <a className="font-inter lg:text-sm text-xs font-normal leading-[150%] cursor-pointer hover:underline">
                Kontakt
              </a>
              <a className="font-inter lg:text-sm text-xs font-normal leading-[150%] cursor-pointer hover:underline">
                Instagram
              </a>
              <a className="font-inter lg:text-sm text-xs font-normal leading-[150%] cursor-pointer hover:underline">
                Facebook
              </a>
              <a className="font-inter lg:text-sm text-xs font-normal leading-[150%] cursor-pointer hover:underline">
                LinkedIn
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-2 lg:gap-12 lg:items-center text-start">
              <span className="font-inter lg:text-sm text-xs font-normal leading-[150%]">
                000-000-000
              </span>
              <span className="font-inter lg:text-sm text-xs font-normal leading-[150%]">
                giarddesign@kontakt.pl
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F5F0EC]/30 my-0.5 md:hidden"></div>
        <div className="flex md:flex-row flex-col justify-between items-center w-full">
          <span className="font-inter lg:text-base text-xs font-normal leading-[150%]">
            Prawa zastrzeżone © 2022
          </span>
          <div className="flex flex-row lg:gap-4 gap-1.5 items-center">
            <span className="font-inter lg:text-base text-xs font-normal leading-[150%]">
              made by
            </span>
            <img src={photo} alt="logo" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
