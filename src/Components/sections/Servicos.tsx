import Bean from "../bean";
import three from "../../assets/images/threeImages.jpg";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useState } from "react";

import comercio from "../../assets/fachadas/fachada6.png";
import residencial from "../../assets/fachadas/residencial.jpg";
import letraCaixa from "../../assets/fachadas/letra_caixa.jpg";
import totem from "../../assets/fachadas/totem.jpg";

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
          "Letras em relevo com iluminação interna (geralmente LED) e uma face frontal de policarbonato translúcido, que difunde a luz de forma uniforme. O policarbonato é resistente a impactos e intempéries, ideal para comunicação visual de destaque.",
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
    mainDescription:
      "Totens informativos e promocionais para melhor visibilidade.",
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

// Dados para o caso padrão (fallback)
const defaultFachadaDetails = {
  mainDescription:
    "Totens informativos e promocionais para melhor visibilidade.",
  showBenefit: true,
  benefitText:
    "ACM (Aluminum Composite Material) para durabilidade e estética.",
  subItems: fachadaData.totens.subItems,
};

type FachadaTipo = "comercial" | "residencial" | "letraCaixa" | "totens";

export default function Servicos() {
  const [tipoFachada, setTipoFachada] = useState<FachadaTipo>("comercial");

  const imagens: Record<FachadaTipo, string> = {
    comercial: comercio,
    residencial: residencial,
    letraCaixa: letraCaixa,
    totens: totem,
  };

  const currentDisplayData = fachadaData[tipoFachada] || defaultFachadaDetails;
  const currentImage = imagens[tipoFachada];

  return (
    <section className="flex w-full flex-col items-center justify-center gap-32" id="portfolio">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <Bean text="Portfólio" />
        <h2 className="max-w-3/4 text-center text-5xl leading-12 font-bold tracking-wide text-black">
          Nossos serviços e Soluções
        </h2>
        <div className="flex w-full flex-col justify-between gap-10">
          <div className="flex w-full items-end justify-between">
            <span className="max-w-52 text-left text-2xl font-bold">
              Fachadas de <span className="text-secondary-yellow">alto</span>{" "}
              <span className="text-secondary-yellow">padrão</span> para sua{" "}
              <span className="text-secondary-yellow">empresa</span>.
            </span>
            <Button className="bg-secondary-yellow hover:bg-mostard-orange w-fit cursor-pointer py-5.5 text-base font-bold">
              Contratar Serviços
            </Button>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={three}
              alt="Apresentação de serviços e soluções de fachadas"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-start justify-between gap-10">
        <div className="bg-light-white flex h-full min-h-[900px] flex-col items-start justify-between gap-11 rounded-2xl px-12 py-8">
          <div className="flex flex-col items-start gap-8">
            <h3 className="text-2xl font-bold">Tipos de Fachadas</h3>
            <Button
              variant={"link"}
              onClick={() => setTipoFachada("comercial")}
              className="text-light-gray hover:text-secondary-yellow cursor-pointer text-base font-bold"
            >
              Fachadas Comerciais
            </Button>
            <Button
              variant={"link"}
              onClick={() => setTipoFachada("residencial")}
              className="text-light-gray hover:text-secondary-yellow cursor-pointer text-base font-bold"
            >
              Fachadas Residenciais
            </Button>
            <Button
              variant={"link"}
              onClick={() => setTipoFachada("letraCaixa")}
              className="text-light-gray hover:text-secondary-yellow cursor-pointer text-base font-bold"
            >
              Letra Caixa
            </Button>
            <Button
              variant={"link"}
              onClick={() => setTipoFachada("totens")}
              className="text-light-gray hover:text-secondary-yellow cursor-pointer text-base font-bold"
            >
              Totens
            </Button>
          </div>
          <Button className="bg-secondary-yellow w-full cursor-pointer font-bold">
            Entrar em Contato
          </Button>
        </div>
        <div className="my-auto flex h-60 items-center justify-center">
          <Separator
            orientation="vertical"
            className="bg-secondary-yellow my-auto max-h-90"
          />
        </div>
        <div className="flex h-full w-3/6 flex-col items-start justify-start gap-3">
          {/* Exibição da imagem dinâmica */}
          {currentImage && (
            <img
              src={currentImage}
              alt={`Imagem para ${tipoFachada}`}
              className="h-full w-full rounded-2xl object-cover transition-all duration-500 ease-in-out hover:scale-102"
            />
          )}
          <div className="flex w-full flex-col items-start justify-start gap-5">
            <h3 className="text-preto text-4xl font-bold">
              {/* Título principal dinâmico (do seu código original) */}
              {tipoFachada === "comercial"
                ? "Fachadas comerciais personalizadas para destacar sua empresa."
                : tipoFachada === "residencial"
                  ? "Fachadas residenciais que combinam estética e funcionalidade."
                  : tipoFachada === "letraCaixa"
                    ? "Letra caixa iluminada para destacar sua marca."
                    : "Totens informativos e promocionais para melhor visibilidade."}
            </h3>
            <ul
              style={{ listStyleType: "disc" }}
              className="flex flex-col gap-6" // Gap geral entre os LIs principais
            >
              {/* ===== ITEM DINÂMICO COM ESTILO REFINADO ===== */}
              <li className="text-preto ml-5 text-base font-normal">
                <p className="text-preto mb-4 text-lg leading-relaxed">
                  {currentDisplayData.mainDescription}
                </p>
                {currentDisplayData.subItems &&
                  currentDisplayData.subItems.length > 0 && (
                    <ul
                      style={{ listStyleType: "circle", marginLeft: "20px" }}
                      className="mt-4 flex flex-col gap-3"
                    >
                      {currentDisplayData.subItems.map((item, index) => (
                        <li key={index} className="leading-relaxed">
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
              {/* ===== FIM DO ITEM DINÂMICO ===== */}

              {/* Outros serviços estáticos, com estilo refinado */}
              <li className="text-preto ml-5 text-base font-normal">
                <span className="text-preto font-semibold">
                  Envelopamento de veículos para publicidade móvel.
                </span>
                <p className="text-light-gray mt-1 ml-5 leading-relaxed">
                  Transforme seus veículos em outdoors dinâmicos com adesivos de
                  alta performance, durabilidade e impacto visual.
                </p>
              </li>
              <li className="text-preto ml-5 text-base font-normal">
                <span className="text-preto font-semibold">
                  Impressão de alta qualidade para materiais promocionais.
                </span>
                <p className="text-light-gray mt-1 ml-5 leading-relaxed">
                  Cores vibrantes, definição impecável e acabamentos
                  profissionais para flyers, banners, cartões e outros materiais
                  de divulgação.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
