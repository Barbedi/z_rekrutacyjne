import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import photo from "../assets/Photo.png";
import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

const slides = [
  {
    id: 1,
    image: photo,
    heading: "Nowoczesna aranżacja Twojego ogrodu",
    description:
      "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?w=1200&q=80&auto=format",
    heading: "Tworzymy ogrody, które zachwycają",
    description:
      "Pasja do zieleni połączona z nowoczesnym designem. Projektujemy i realizujemy przestrzenie dopasowane do Twojego stylu życia.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1645526629357-16bbd762c8d5?w=1200&q=80&auto=format",
    heading: "Twój ogród, nasza wizja",
    description:
      "Odkryj potencjał swojej przestrzeni na nowo. Przekształcamy zwykłe podwórka w wyjątkowe strefy relaksu i odpoczynku.",
  },
];

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const goToPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const goToNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const currentSlide = slides[selectedIndex];

  return (
    <section
      id="hero"
      className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-16 bg-[#DCC1AB] py-0"
    >
      <div className="flex flex-col col-start-1 col-span-12 lg:col-span-6 justify-center lg:px-22 px-7 order-2 lg:order-1">
        <div className="flex flex-col lg:gap-18 gap-6 md:gap-12 items-start">
          <div className="flex flex-col lg:gap-11 md:gap-7 gap-3 items-start max-w-xl transition-all duration-500">
            <h1 className="lg:text-6xl md:text-4xl text-3xl text-left font-montserrat font-medium lg:leading-17.5 md:leading-14">
              {currentSlide.heading}
            </h1>
            <p className="md:text-base text-sm text-black font-inter font-normal leading-[150%]">
              {currentSlide.description}
            </p>
          </div>

          <div className="flex items-center md:flex-row flex-col lg:gap-9 gap-3 lg:whitespace-nowrap mb-5 lg:mb-0 w-full">
            <a
              href="#kontakt"
              className="bg-[#1B5B31] w-full lg:w-auto text-center text-white font-inter font-normal border-2 border-[#1B5B31] lg:px-6 px-2 lg:pt-3 pt-1 lg:pb-3.5 pb-1.25 lg:rounded-[200px] rounded-xl hover:shadow-xl shadow-[#1B5B31] transition-colors duration-300 cursor-pointer"
            >
              Skontaktuj się z nami
            </a>
            <a
              href="#projekty"
              className="w-full lg:w-auto bg-transparent justify-center group border-2 border-[#1B5B31] text-[#1B5B31] font-inter font-normal lg:px-6 px-2 lg:pt-3 pt-1 lg:pb-3.5 pb-1.25 lg:rounded-[200px] rounded-xl hover:shadow-xl shadow-[#1B5B31] transition-colors duration-300 cursor-pointer flex items-center gap-2"
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
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="flex-[0_0_100%] min-w-0 lg:h-184.25 h-61 bg-cover bg-right"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-8 px-8 py-6 absolute bottom-0 right-0 bg-[#F5F0EC] z-10">
          <button
            className="justify-center items-center flex cursor-pointer hover:opacity-60 transition-opacity"
            aria-label="Poprzedni slajd"
            onClick={goToPrev}
          >
            <FontAwesomeIcon
              className="text-black text-2xl"
              icon={faArrowLeft}
            />
          </button>
          <button
            className="justify-center items-center flex cursor-pointer hover:opacity-60 transition-opacity"
            aria-label="Następny slajd"
            onClick={goToNext}
          >
            <FontAwesomeIcon
              className="text-black text-2xl"
              icon={faArrowRight}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
