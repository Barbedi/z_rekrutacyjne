import photo from "../assets/logo-full-light.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black relative grid grid-cols-12 gap-16 items-center text-[#F5F0EC]">
      <div className="py-20 px-64 col-span-12 flex flex-col gap-30 ">
        <div>
          <div className="flex flex-row justify-between items-center w-full">
            <div>
              <span className="text-lg">
                <span className="font-bold text-lg">giard</span>design
              </span>
            </div>
            <div className="flex flex-row gap-6 items-center">
              <span className="text-[#F5F0EC] font-inter font-normal text-base leading-[150%]">
                Daj znać, co możemy dla Ciebie zrobić!
              </span>
              <button className="bg-[#1B5B31] text-[#F5F0EC] font-inter font-normal px-6 pt-3 pb-3.5 rounded-[200px] transition-colors duration-300 cursor-pointer">
                Skontaktuj się z nami
              </button>
            </div>
          </div>
          <div className="border-t border-[#F5F0EC] my-15.5"></div>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row gap-12 items-center">
              <a className="font-inter text-sm font-normal leading-[150%] cursor-pointer hover:underline">
                Kontakt
              </a>
              <a className="font-inter text-sm font-normal leading-[150%] cursor-pointer hover:underline">
                Instagram
              </a>
              <a className="font-inter text-sm font-normal leading-[150%] cursor-pointer hover:underline">
                Facebook
              </a>
              <a className="font-inter text-sm font-normal leading-[150%] cursor-pointer hover:underline">
                LinkedIn
              </a>
            </div>
            <div className="flex flex-row gap-12 items-center">
              <span className="font-inter text-sm font-normal leading-[150%]">
                000-000-000
              </span>
              <span className="font-inter text-sm font-normal leading-[150%]">
                giarddesign@kontakt.pl
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <span className="font-inter text-base font-normal leading-[150%]">
            Prawa zastrzeżone © 2022
          </span>
          <div className="flex flex-row gap-4 items-center">
            <span className="font-inter text-base font-normal leading-[150%]">
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
