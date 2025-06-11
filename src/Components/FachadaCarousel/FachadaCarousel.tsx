import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "../../assets/slider/slide1.jpg";
import slide2 from "../../assets/slider/slide2.jpg";
import slide3 from "../../assets/slider/slide3.jpg";
import slide4 from "../../assets/slider/slide4.jpg";
import slide5 from "../../assets/slider/slide5.jpg";
import slide6 from "../../assets/slider/slide6.jpg";
import slide7 from "../../assets/slider/slide7.jpg";
import slide8 from "../../assets/slider/slide8.jpg";

const fachadas = [
  {
    src: slide1,
    alt: "Fachada residencial em ACM - Fixa Comunicação Visual",
    title: "Fachada Residencial",
  },
  {
    src: slide2,
    alt: "Fachada comercial  - Fixa Comunicação Visual",
    title: "Fachada Comercial",
  },
  {
    src: slide3,
    alt: "Totem - Fixa Comunicação Visual",
    title: "Totem",
  },
  {
    src: slide4,
    alt: "Fachada residencial - Fixa Comunicação Visual",
    title: "Fachada Residencial",
  },
  {
    src: slide5,
    alt: "Letra Caixa Luminosa - Fixa Comunicação Visual",
    title: "Letra Caixa Luminosa",
  },
  {
    src: slide6,
    alt: "Fachada ACM premium - Fixa Comunicação Visual",
    title: "Fachada ACM",
  },
  {
    src: slide7,
    alt: "Projeto especial - Fixa Comunicação Visual",
    title: "Projeto Especial",
  },
  {
    src: slide8,
    alt: "Instalação completa - Fixa Comunicação Visual",
    title: "Instalação Completa",
  },
];

export default function FachadasCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      containScroll: "trimSnaps",
      dragFree: false,
      loop: false, // Removendo o loop
      skipSnaps: false,
      inViewThreshold: 0.7,
    },
    [ClassNames()],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full py-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {fachadas.map((fachada, index) => (
            <div
              key={index}
              className="embla__slide min-w-0 flex-[0_0_85%] px-3 transition-all duration-300 ease-out sm:flex-[0_0_65%] md:flex-[0_0_55%] lg:flex-[0_0_45%]"
            >
              <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-out hover:shadow-2xl sm:h-80 md:h-96">
                <img
                  src={fachada.src}
                  alt={fachada.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute right-4 bottom-4 left-4">
                  <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                    {fachada.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        className="focus:ring-secondary-yellow absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white focus:ring-2 focus:outline-none"
        onClick={scrollPrev}
        aria-label="Fachada anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="focus:ring-secondary-yellow absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-lg transition-all duration-200 hover:scale-110 hover:bg-white focus:ring-2 focus:outline-none"
        onClick={scrollNext}
        aria-label="Próxima fachada"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
