const Contact = () => {
  return (
    <section id="kontakt" className="relative grid grid-cols-12 items-center gap-16 bg-[#F5F0EC] py-15">
      <div className="grid grid-cols-10 gap-16 col-start-3 col-span-8 items-center bg-[#1B5B31] py-30 px-27.5">
        <div className="col-start-1 col-span-7 items-start">
          <h1 className="text-[40px] leading-[120%] font-montserrat font-normal text-[#F5F0EC]">
            Zostańmy w kontakcie! <br />
            Znajdziesz nas na{" "}
            <span className="font-inter font-medium italic">Instagramie.</span>
          </h1>
        </div>
        <div className="col-span-3 flex flex-col gap-6 items-start">
          <span className="text-[#F5F0EC] font-inter font-normal text-base leading-[150%]">
            Śledź nasze <br />
            najnowsze realizacje!
          </span>
          <button className="bg-[#F5F0EC] text-[#1B5B31] text-center font-inter text-base leading-[150%] font-normal px-6 py-3 rounded-[200px] transition-colors duration-300 cursor-pointer hover:bg-opacity-90">
            Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
