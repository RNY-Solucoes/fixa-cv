import Bean from "../bean";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importar imagens de cada categoria
// Comerciais
import comercial1 from "../../assets/comerciais/comercial1.jpg";
import comercial2 from "../../assets/comerciais/comercial2.jpg";
import comercial3 from "../../assets/comerciais/comercial3.jpg";
import comercial4 from "../../assets/comerciais/comercial4.jpg";
import comercial5 from "../../assets/comerciais/comercial5.jpg";
import comercial6 from "../../assets/comerciais/comercial6.jpg";

// Residenciais
import residencial1 from "../../assets/residenciais/residencial1.jpg";
import residencial2 from "../../assets/residenciais/residencial2.jpg";

// Letra Caixa
import letraCaixa1 from "../../assets/letracaixa/letracaixa1.jpg";
import letraCaixa2 from "../../assets/letracaixa/letracaixa2.jpg";
import letraCaixa3 from "../../assets/letracaixa/letracaixa3.jpg";
import letraCaixa4 from "../../assets/letracaixa/letracaixa4.jpg";
import letraCaixa5 from "../../assets/letracaixa/letracaixa5.jpg";
import letraCaixa6 from "../../assets/letracaixa/letracaixa6.jpg";
import letraCaixa7 from "../../assets/letracaixa/letracaixa7.jpg";

// Totens
import totem1 from "../../assets/totens/totem1.jpg";
import totem2 from "../../assets/totens/totem2.jpg";
import totem3 from "../../assets/totens/totem3.jpg";
import totem4 from "../../assets/totens/totem4.jpg";
import totem5 from "../../assets/totens/totem5.jpg";
import totem6 from "../../assets/totens/totem6.jpg";

const fachadaData = {
  comercial: {
    mainDescription:
      "ACM (Aluminum Composite Material) para fachadas comerciais personalizadas.",
    subItems: [
      {
        title: "ACM 3mm",
        description:
          "Painéis de Alumínio Composto com 3mm de espessura, frequentemente utilizados em fachadas comerciais devido à sua leveza, planicidade, durabilidade e facilidade de personalização com cores e formas diversas. Oferecem um visual moderno e são resistentes às intempéries.",
      },
      {
        title: "Lonas",
        description:
          "Material flexível, geralmente PVC, impresso com a identidade visual da empresa. As lonas são uma opção versátil e de bom custo-benefício para comunicação em fachadas, permitindo grandes formatos e trocas periódicas. Podem ser tensionadas em estruturas metálicas.",
      },
    ],
  },
  residencial: {
    mainDescription:
      "Revestimento de ACM 4mm Kynnar (15 anos de garantia) para fachadas residenciais.",
    showBenefit: true,
    benefitText:
      "ACM (Aluminum Composite Material) Kynnar para excepcional durabilidade e retenção de cor (15 anos de garantia), além de estética superior.",
    subItems: [
      {
        title: "Portas em ACM 4mm Kynnar (15 anos de garantia)",
        description:
          "Portas fabricadas com o mesmo material ACM 4mm e pintura Kynnar, garantindo uniformidade estética com o revestimento da fachada. São leves, resistentes à corrosão, empenamento e oferecem bom isolamento termoacústico, além da durabilidade da pintura Kynnar.",
      },
    ],
  },
  letraCaixa: {
    mainDescription: "Letra Caixa Luminosa com face em Policarbonato.",
    showBenefit: true,
    benefitText:
      "Materiais de alta qualidade como Policarbonato, PVC e Acrílico são utilizados para garantir durabilidade, excelente acabamento e o impacto visual desejado para sua marca.",
    subItems: [
      {
        title: "Luminosa com Face em Policarbonato",
        description:
          "Letras em relevo com iluminação interna (LED) e uma face frontal de policarbonato translúcido, que difunde a luz de forma uniforme. O policarbonato é resistente a impactos e intempéries, ideal para comunicação visual de destaque.",
      },
      {
        title: "Retro Iluminada (ou Iluminação Reversa)",
        description:
          'Letras caixa onde a iluminação LED é instalada na parte de trás, projetando a luz na superfície onde a letra está fixada (parede, painel). Isso cria um efeito de "auréola" ou contorno luminoso, conferindo sofisticação ao letreiro.',
      },
      {
        title: "Sem Iluminação (PVC 10,20mm)",
        description:
          "Letras caixa fabricadas em PVC expandido, com espessuras de 10mm ou 20mm. O PVC é um material leve, versátil e de bom custo para letras sem iluminação, podendo ser pintado em diversas cores. Ideal para sinalização interna ou externa onde a iluminação não é um requisito.",
      },
    ],
  },
  totens: {
    mainDescription: "Totens pequenos e/ou gigantes para melhor visibilidade.",
    showBenefit: true,
    benefitText:
      "Estruturas robustas e materiais de alta qualidade, incluindo ACM e metais, são selecionados para garantir durabilidade, estabilidade e estética superior em totens.",
    subItems: [
      {
        title: "Luminosos",
        description:
          "Estruturas verticais de sinalização com iluminação interna (backlight), geralmente utilizando LEDs e faces em acrílico ou lona translúcida. São altamente visíveis à noite e de grande impacto para identificar estabelecimentos ou transmitir mensagens.",
      },
      {
        title: "Frontlight",
        description:
          "Totens cuja comunicação visual é iluminada por fontes de luz externas direcionadas à sua face (iluminação frontal). Utilizam materiais opacos para a impressão, como lonas ou ACM adesivado, e a iluminação é feita por refletores.",
      },
    ],
  },
};

// Imagens para cada categoria
const imagens = {
  comercial: [
    comercial1,
    comercial2,
    comercial3,
    comercial4,
    comercial5,
    comercial6,
  ],
  residencial: [residencial1, residencial2],
  letraCaixa: [
    letraCaixa1,
    letraCaixa2,
    letraCaixa3,
    letraCaixa4,
    letraCaixa5,
    letraCaixa6,
    letraCaixa7,
  ],
  totens: [totem1, totem2, totem3, totem4, totem5, totem6],
};

// Dados para o caso padrão (fallback)
const defaultFachadaDetails = {
  mainDescription: "Totens pequenos e/ou gigantes para melhor visibilidade.",
  showBenefit: true,
  benefitText:
    "ACM (Aluminum Composite Material) para durabilidade e estética.",
  subItems: fachadaData.totens.subItems,
};

type FachadaTipo = "comercial" | "residencial" | "letraCaixa" | "totens";

// Componente do Slider
function ImageSlider({
  images,
  categoria,
}: {
  images: string[];
  categoria: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset slider to first position when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [categoria]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-2xl sm:h-64 md:h-80 lg:h-full">
      <img
        src={images[currentIndex]}
        alt={`${categoria} - Imagem ${currentIndex + 1}`}
        className="h-full w-full object-cover transition-all duration-500 ease-in-out"
      />

      {images.length > 1 && (
        <>
          {/* Botão Anterior */}
          <button
            onClick={prevSlide}
            className="bg-opacity-50 hover:bg-opacity-70 absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-black p-2 text-white transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={nextSlide}
            className="bg-opacity-50 hover:bg-opacity-70 absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-black p-2 text-white transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-secondary-yellow"
                    : "bg-opacity-50 hover:bg-opacity-70 bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Servicos() {
  const [tipoFachada, setTipoFachada] = useState<FachadaTipo>("comercial");

  const currentDisplayData = fachadaData[tipoFachada] || defaultFachadaDetails;
  const currentImages = imagens[tipoFachada];

  return (
    <section
      className="flex w-full flex-col items-center justify-center gap-16 sm:gap-24 md:gap-32"
      id="portfolio"
    >
      {/* Header Section */}
      <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-5">
        <Bean text="Portfólio" />
        <h2 className="max-w-full px-4 text-center text-3xl leading-tight font-bold tracking-wide text-black sm:text-4xl sm:leading-10 md:text-5xl md:leading-12">
          Nossos serviços e Soluções
        </h2>
        <div className="flex w-full flex-col justify-between gap-6 sm:gap-8 md:gap-10">
          <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:items-end sm:gap-0">
            <span className="max-w-full px-4 text-center text-xl font-bold sm:max-w-52 sm:px-0 sm:text-left sm:text-2xl">
              Fachadas de <span className="text-secondary-yellow">alto</span>{" "}
              <span className="text-secondary-yellow">padrão</span> para sua{" "}
              <span className="text-secondary-yellow">empresa</span>.
            </span>
            <a href="#contato">
              <Button className="bg-secondary-yellow hover:bg-mostard-orange w-full cursor-pointer px-6 py-3 text-sm font-bold sm:w-fit sm:py-5.5 sm:text-base">
                Contratar Serviços
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex h-full w-full flex-col items-start justify-between gap-6 lg:flex-row lg:gap-10">
        {/* Sidebar - Navigation */}
        <div className="bg-light-white flex h-full w-full flex-col items-start justify-between gap-8 rounded-2xl px-6 py-6 sm:gap-11 sm:px-8 sm:py-8 lg:min-h-[900px] lg:w-auto lg:px-12">
          <div className="flex w-full flex-col items-start gap-4 sm:gap-6 lg:gap-8">
            <h3 className="text-xl font-bold sm:text-2xl">Tipos de Fachadas</h3>
            <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4 lg:w-auto lg:flex-col lg:gap-5">
              <Button
                variant={"link"}
                onClick={() => setTipoFachada("comercial")}
                className={`text-light-gray hover:text-secondary-yellow h-auto cursor-pointer justify-start p-0 text-sm font-bold sm:text-base ${
                  tipoFachada === "comercial" ? "text-secondary-yellow" : ""
                }`}
              >
                Fachadas Comerciais
              </Button>
              <Button
                variant={"link"}
                onClick={() => setTipoFachada("residencial")}
                className={`text-light-gray hover:text-secondary-yellow h-auto cursor-pointer justify-start p-0 text-sm font-bold sm:text-base ${
                  tipoFachada === "residencial" ? "text-secondary-yellow" : ""
                }`}
              >
                Fachadas Residenciais
              </Button>
              <Button
                variant={"link"}
                onClick={() => setTipoFachada("letraCaixa")}
                className={`text-light-gray hover:text-secondary-yellow h-auto cursor-pointer justify-start p-0 text-sm font-bold sm:text-base ${
                  tipoFachada === "letraCaixa" ? "text-secondary-yellow" : ""
                }`}
              >
                Letra Caixa
              </Button>
              <Button
                variant={"link"}
                onClick={() => setTipoFachada("totens")}
                className={`text-light-gray hover:text-secondary-yellow h-auto cursor-pointer justify-start p-0 text-sm font-bold sm:text-base ${
                  tipoFachada === "totens" ? "text-secondary-yellow" : ""
                }`}
              >
                Totens
              </Button>
            </div>
          </div>
          <a href="#contato" className="w-full">
            <Button className="bg-secondary-yellow hover:bg-mostard-orange w-full cursor-pointer py-3 text-sm font-bold sm:text-base">
              Entrar em Contato
            </Button>
          </a>
        </div>

        {/* Separator - Hidden on mobile/tablet */}
        <div className="my-auto hidden items-center justify-center lg:flex">
          <Separator
            orientation="vertical"
            className="bg-secondary-yellow my-auto max-h-90"
          />
        </div>

        {/* Content Area */}
        <div className="flex h-full w-full flex-col items-start justify-start gap-3 sm:gap-4 md:gap-6 lg:w-3/6">
          {/* Dynamic Image Slider */}
          {currentImages && currentImages.length > 0 && (
            <ImageSlider images={currentImages} categoria={tipoFachada} />
          )}

          {/* Content */}
          <div className="flex w-full flex-col items-start justify-start gap-4 px-2 sm:gap-5 sm:px-0">
            <h3 className="text-preto text-2xl leading-tight font-bold sm:text-3xl md:text-4xl">
              {tipoFachada === "comercial"
                ? "Fachadas comerciais personalizadas para destacar sua empresa."
                : tipoFachada === "residencial"
                  ? "Fachadas residenciais que combinam estética e funcionalidade."
                  : tipoFachada === "letraCaixa"
                    ? "Letra caixa iluminada para destacar sua marca."
                    : "Totens pequenos e/ou gigantes para melhor visibilidade."}
            </h3>

            <ul
              style={{ listStyleType: "disc" }}
              className="flex flex-col gap-4 sm:gap-6"
            >
              {/* Dynamic Item */}
              <li className="text-preto ml-4 text-sm font-normal sm:ml-5 sm:text-base">
                <p className="text-preto mb-3 text-base leading-relaxed sm:mb-4 sm:text-lg">
                  {currentDisplayData.mainDescription}
                </p>
                {currentDisplayData.subItems &&
                  currentDisplayData.subItems.length > 0 && (
                    <ul
                      style={{ listStyleType: "circle", marginLeft: "15px" }}
                      className="mt-3 flex flex-col gap-2 sm:mt-4 sm:gap-3"
                    >
                      {currentDisplayData.subItems.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm leading-relaxed sm:text-base"
                        >
                          <strong className="text-preto">{item.title}:</strong>
                          <span className="text-light-gray">
                            {" "}
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
