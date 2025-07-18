import { Check, Mail, MapPin } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Header from "./Components/Header";
import { Button } from "./Components/ui/button";
import { Separator } from "./Components/ui/separator";
import Marquee from "react-fast-marquee";
import cruzeiro from "./assets/logos/cruzeiro-do-sul.svg";
import usp from "./assets/logos/logo-usp.svg";
import super_geeks from "./assets/logos/super-geeks.svg";
import videira_motors from "./assets/logos/videira-motors.svg";
import zopone from "./assets/logos/zopone.svg";
import superbom from "./assets/logos/super_bom.svg";
import oralsin from "./assets/logos/oral_sin.svg";
import sesi from "./assets/logos/sesi.svg";
import biolab from "./assets/logos/biolab.svg";
import skyfit from "./assets/logos/skyfitt.svg";
import atacado from "./assets/logos/atacado_autoparts.svg";
import FacebookIcon from "./Components/facebook_icon";
import InstagramIcon from "./Components/instagram_icon";
import fachada1 from "./assets/fachadas/fachada1.png";
import fachada2 from "./assets/fachadas/fachada2.png";
import Servicos from "./Components/sections/Servicos";
import Bean from "./Components/bean";
import Feedback from "./Components/Feedback/Feedback";
import Facebook_icon from "./Components/facebook_icon";
import Whatsapp_icon from "./Components/whatsapp_icon";
import logo from "./assets/images/logo.svg";
// Slides desktop
import slide1 from "./assets/images/slide6.png";
import slide2 from "./assets/images/slide5.png";
import slide3 from "./assets/images/slide1.png";
import slide4 from "./assets/images/slide2.png";
// Slides mobile
import slide1_phone from "./assets/images/slide6_phone.png";
import slide2_phone from "./assets/images/slide5_phone.png";
import slide3_phone from "./assets/images/slide1_phone.png";
import slide4_phone from "./assets/images/slide2_phone.png";

function App() {
  // Estado para controlar o slide atual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Refs para as imagens
  const fachada1Ref = useRef<HTMLImageElement>(null);
  const fachada2Ref = useRef<HTMLImageElement>(null);

  // Estados para controlar a visibilidade das imagens
  const [isImage1Visible, setIsImage1Visible] = useState(false);
  const [isImage2Visible, setIsImage2Visible] = useState(false);

  // Array com os slides desktop
  const slides = [slide1, slide2, slide3, slide4];

  // Array com os slides mobile
  const slidesMobile = [slide1_phone, slide2_phone, slide3_phone, slide4_phone];

  // useEffect para o slideshow automático
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // useEffect para observar quando as imagens entram na viewport
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === fachada1Ref.current) {
            setTimeout(() => setIsImage1Visible(true), 200);
          }
          if (entry.target === fachada2Ref.current) {
            setTimeout(() => setIsImage2Visible(true), 600);
          }
        }
      });
    }, observerOptions);

    if (fachada1Ref.current) observer.observe(fachada1Ref.current);
    if (fachada2Ref.current) observer.observe(fachada2Ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Fixa Comunicação Visual",
      description:
        "Especialistas em fachadas comerciais, residenciais, letra caixa luminosa e totens publicitários há 16 anos em Bauru-SP",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Carlos Giaxa 6-83 PQ Julio Nobrega",
        addressLocality: "Bauru",
        addressRegion: "SP",
        postalCode: "17003-421",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-22.314564",
        longitude: "-49.060654",
      },
      email: "contato@fixacv.com.br",
      url: "https://www.fixacv.com.br",
      sameAs: [
        "https://www.facebook.com/Fixacomunicacaovisual",
        "https://www.instagram.com/fixacomunicacaovisual/",
      ],
      foundingDate: "2008",
      areaServed: {
        "@type": "Place",
        name: "Bauru, Marília, Lins, Jaú, São Paulo",
      },
      serviceType: [
        "Fachadas Comerciais",
        "Fachadas Residenciais",
        "Letra Caixa Luminosa",
        "Totens Publicitários",
        "Comunicação Visual",
        "ACM",
      ],
      priceRange: "$$",
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Fixa Comunicação Visual",
      url: "https://www.fixacv.com.br",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.fixacv.com.br/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };

    const addSchema = (
      schema: {
        "@context": string;
        "@type": string;
        name: string;
        description?: string;
        address?: {
          "@type": string;
          streetAddress: string;
          addressLocality: string;
          addressRegion: string;
          postalCode: string;
          addressCountry: string;
        };
        geo?: { "@type": string; latitude: string; longitude: string };
        email?: string;
        url: string;
        sameAs?: string[];
        foundingDate?: string;
        areaServed?: { "@type": string; name: string };
        serviceType?: string[];
        priceRange?: string;
        potentialAction?: {
          "@type": string;
          target: string;
          "query-input": string;
        };
      },
      id: string,
    ) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(localBusinessSchema, "local-business-schema");
    addSchema(websiteSchema, "website-schema");

    document.title =
      "Fixa Comunicação Visual | Especialistas em Fachadas há 16 Anos | Bauru-SP";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      (metaDescription as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDescription);
    }
    (metaDescription as HTMLMetaElement).content =
      "Fixa Comunicação Visual: 16 anos de experiência em fachadas comerciais, residenciais, letra caixa e totens em Bauru-SP. Rua Carlos Giaxa 6-83 PQ Julio Nobrega. ACM, letreiros luminosos e projetos personalizados com qualidade garantida.";

    return () => {
      // Cleanup
      ["local-business-schema", "website-schema"].forEach((id) => {
        const script = document.getElementById(id);
        if (script) document.head.removeChild(script);
      });
    };
  }, []);

  // const handleScrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="relative flex h-[600px] w-full flex-col overflow-hidden sm:h-[700px] md:h-[750px]">
        {/* Container dos slides */}
        <div className="">
          {slides.map((slide, index) => (
            <div key={index}>
              {/* Slide para desktop */}
              <div
                className={`absolute inset-0 hidden bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out sm:block ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${slide})`,
                  transform: "scale(1.02)",
                  zIndex: -1,
                }}
              />

              {/* Slide para mobile */}
              <div
                className={`absolute inset-0 block bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out sm:hidden ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${slidesMobile[index]})`,
                  transform: "scale(1.02)",
                  zIndex: -1,
                }}
              />
            </div>
          ))}
        </div>

        {/* Indicadores do slideshow  */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-secondary-yellow w-6"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
        <Header />
      </header>

      <main
        className="bg-gray-background flex flex-col items-center justify-start gap-24 px-4 py-10 sm:gap-32 sm:px-8 md:gap-48 md:px-16 lg:px-25"
        role="main"
      >
        <section
          className="flex w-full flex-col items-center gap-8 sm:gap-12"
          aria-label="Nossos clientes"
        >
          <h2 className="text-center text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            Nossos <span className="text-secondary-yellow">principais</span>{" "}
            clientes
          </h2>

          <div className="w-full">
            <h3 className="sr-only">
              Clientes Atendidos pela Fixa Comunicação Visual
            </h3>
            <Marquee
              speed={30}
              gradient={true}
              pauseOnHover={true}
              aria-label="Logos dos nossos clientes"
            >
              <div className="flex items-center gap-16 px-8 sm:gap-24 sm:px-16 md:gap-32 md:px-25">
                <img
                  src={zopone}
                  alt="Cliente Zopone - Fachada comercial realizada pela Fixa Comunicação Visual"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={superbom}
                  alt="Cliente Super Bom - Comunicação visual realizada pela Fixa Comunicação Visual"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={oralsin}
                  alt="Cliente Oralsin - Projeto de fachada realizada pela Fixa Comunicação Visual"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={sesi}
                  alt="Cliente SESI - Comunicação visual institucional realizada pela Fixa Comunicação Visual"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={biolab}
                  alt="Cliente Biolab - Fachada comercial realizada pela Fixa Comunicação Visual"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={skyfit}
                  alt="Cliente SkyFit - Projeto de comunicação visual realizada pela Fixa Comunicação Visual"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={usp}
                  alt="Cliente USP - Projeto de comunicação visual institucional"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={superbom}
                  alt="Cliente EXT - Fachada comercial em ACM"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={super_geeks}
                  alt="Cliente Super Geeks - Letra caixa luminosa"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={videira_motors}
                  alt="Cliente Videira Motors - Totem publicitário"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={atacado}
                  alt="Cliente Atacado Autoparts - Fachada comercial realizada pela Fixa Comunicação Visual"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
                <img
                  src={cruzeiro}
                  alt="Cliente Cruzeiro do Sul - Comunicação visual educacional realizada pela Fixa Comunicação Visual"
                  className="h-8 w-auto sm:h-10 md:h-12"
                  loading="lazy"
                />
              </div>
            </Marquee>
          </div>
        </section>

        <section
          className="flex min-h-screen w-full flex-col items-center justify-center gap-16 sm:gap-24 md:gap-32"
          id="quem-somos"
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <header className="flex flex-col items-center justify-center gap-4 sm:gap-5">
            <Bean text="Quem somos" />
            <h2 className="max-w-full px-4 text-center text-3xl leading-tight font-bold tracking-wide text-black sm:text-4xl sm:leading-10 md:text-5xl md:leading-12">
              Mais de 16 Anos de Excelência em fachadas
            </h2>
          </header>
          <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
            <article
              className="flex h-full w-full flex-col items-center justify-center gap-6 sm:gap-8 md:gap-11 lg:w-1/2 lg:items-start"
              itemProp="description"
            >
              <h3 className="max-w-full px-4 text-center text-lg leading-7 font-bold text-black sm:text-xl sm:leading-8 md:text-2xl md:leading-9 lg:max-w-135 lg:px-0 lg:text-left lg:text-3xl">
                Fundada em{" "}
                <time dateTime="2008" itemProp="foundingDate">
                  2008
                </time>
                , a{" "}
                <span className="text-secondary-yellow" itemProp="name">
                  Fixa Comunicação Visual
                </span>{" "}
                é especialista em{" "}
                <span className="text-secondary-yellow">fachadas</span> e possui
                estrutura para produzir projetos de{" "}
                <span className="text-secondary-yellow">todos</span> os portes
                com <span className="text-secondary-yellow">qualidade</span> e{" "}
                <span className="text-secondary-yellow">eficiência</span>.
              </h3>

              <p className="px-4 text-center text-base font-normal text-black sm:text-lg md:text-xl lg:max-w-135 lg:px-0 lg:text-left lg:text-2xl">
                Nosso compromisso é com a{" "}
                <strong>perfeição nos acabamentos</strong>,{" "}
                <strong>respeito</strong> e transparência com clientes e
                colaboradores.
              </p>

              <ul
                className="flex flex-col gap-3 self-center sm:flex-row sm:gap-5 lg:flex-col lg:self-start"
                role="list"
              >
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <Check
                    className="text-secondary-yellow inline-block flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-light sm:text-base">
                    <strong>Profissionais experientes</strong>
                  </span>
                </li>
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <Check
                    className="text-secondary-yellow inline-block flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-light sm:text-base">
                    <strong>Fachadas de qualidade</strong>
                  </span>
                </li>
                <li className="flex items-center justify-center gap-2 lg:justify-start">
                  <Check
                    className="text-secondary-yellow inline-block flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-light sm:text-base">
                    <strong>Aplicações modernas</strong>
                  </span>
                </li>
              </ul>
              <a
                href="#contato"
                aria-label="Entre em contato para orçamento gratuito"
              >
                <Button className="bg-secondary-yellow hover:bg-mostard-orange w-full cursor-pointer self-center py-3 text-sm font-bold sm:w-fit sm:py-5.5 sm:text-base lg:self-start">
                  Entre em Contato
                </Button>
              </a>
            </article>

            <Separator
              orientation="vertical"
              className="bg-secondary-yellow hidden max-h-32 sm:max-h-48 md:max-h-64 lg:block"
            />

            <figure className="relative flex h-full w-full flex-col items-center justify-start sm:w-5/6 md:w-2/3 lg:w-1/2">
              <img
                ref={fachada1Ref}
                src={fachada1}
                alt="Fachada comercial em ACM realizada pela Fixa Comunicação Visual em Bauru-SP"
                className={`relative z-10 w-4/5 rounded-2xl transition-all duration-1000 ease-out sm:w-3/4 md:w-[30rem] md:translate-x-0 lg:w-[35rem] lg:translate-x-20 ${
                  isImage1Visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                loading="lazy"
                width="560"
                height="400"
              />
              <img
                ref={fachada2Ref}
                src={fachada2}
                alt="Fachada residencial com acabamento premium - Fixa Comunicação Visual Bauru"
                className={`relative z-20 -mt-8 ml-4 w-4/5 rounded-2xl transition-all duration-1000 ease-out sm:-mt-12 sm:ml-8 sm:w-3/4 md:-mt-16 md:ml-12 md:w-[30rem] lg:-mt-20 lg:ml-0 lg:w-[35rem] ${
                  isImage2Visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                loading="lazy"
                width="560"
                height="400"
              />
              <figcaption className="sr-only">
                Exemplos de fachadas realizadas pela Fixa Comunicação Visual:
                fachada comercial em ACM e fachada residencial
              </figcaption>
            </figure>
          </div>
        </section>

        <Servicos />

        <section
          className="flex min-h-screen w-full flex-col items-center justify-center gap-16 sm:gap-24 md:gap-32"
          id="depoimentos"
          itemScope
          itemType="https://schema.org/ReviewSection"
        >
          <header className="flex flex-col items-center justify-center gap-4 sm:gap-5">
            <Bean text="Depoimentos" />
            <h2 className="px-4 text-center text-3xl leading-tight font-bold tracking-wide text-black sm:text-4xl sm:leading-10 md:text-5xl md:leading-12">
              Depoimentos de Clientes
            </h2>
          </header>

          <div className="flex w-full flex-col items-center justify-center gap-10">
            <div className="flex w-full items-center justify-center lg:justify-start">
              <h3 className="max-w-full px-4 text-xl font-bold sm:max-w-80 sm:text-center sm:text-2xl lg:px-0 lg:text-left">
                Depoimentos de quem{" "}
                <span className="text-secondary-yellow">escolheu</span>{" "}
                <span className="text-secondary-yellow">qualidade</span>.
              </h3>
            </div>

            <div
              className="mt-6 grid w-full grid-cols-1 place-items-center gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:gap-10 lg:grid-cols-3"
              role="list"
            >
              <Feedback
                text='"Empresa muita boa de prazo, qualidade e serviço! Recomendo fortemente!"'
                user="Vitor Trimentose."
              />
              <Feedback
                text='"Muito bom, pontuais e profissionais. Muito satisfeito com o atendimento, não tentou vender a solução mais cara e atendeu minhas expectativas"'
                user="Fabio Teixeira de Souza."
              />
              <Feedback
                text='"Com certeza daria 100 estrelas se tivesse. Excelente atendimento, pontualidade e resultado final! Foram atenciosos do começo ao fim de todos os processos e cumpriram todo o prometido, inclusive prazos. Recomendo muito! Na foto a fachada feita por eles."'
                user="Wanessa Ferrari"
              />

              <Feedback
                text='"Empresa nota 10 em atendimento e qualidade do serviço prestado. Cliente satisfeito sempre volta e cá estou! Recomendo de olhos fechados! Sucesso sempre!!!!"'
                user="Jenniffer / ORIENTALE PILATES"
              />

              <Feedback
                text='"Uma empresa responsável é muito organizada estou muito feliz com o prazo de entrega e com a qualidade do serviço."'
                user="
Jmplanejados Junior"
              />

              <Feedback />
            </div>
          </div>
        </section>

        <section
          className="flex w-full flex-col items-center justify-center gap-16 sm:gap-24 md:gap-32"
          id="contato"
          itemScope
          itemType="https://schema.org/ContactPage"
        >
          <Separator className="bg-secondary-yellow border-secondary-yellow my-1 max-w-60 border-2 sm:max-w-80" />

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-6">
            <h2 className="text-preto max-w-full px-4 text-center text-2xl leading-8 font-bold sm:text-3xl sm:leading-10 md:text-4xl md:leading-12 lg:max-w-100">
              Vamos tirar sua{" "}
              <span className="text-secondary-yellow">ideia</span> do{" "}
              <span className="text-secondary-yellow">papel</span> ?
            </h2>

            <p className="text-preto max-w-full px-4 text-center text-base leading-6 font-normal sm:text-lg lg:max-w-120 lg:leading-7">
              Entre em contato com a gente e transforme sua fachada com quem
              entende do assunto!
            </p>

            <address className="flex flex-col flex-wrap items-center justify-center gap-4 not-italic sm:flex-row sm:gap-6 lg:flex-col">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/Fixacomunicacaovisual"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:scale-110"
                  aria-label="Facebook da Fixa Comunicação Visual"
                  title="Siga-nos no Facebook"
                >
                  <Facebook_icon className="text-preto hover:text-secondary-yellow h-6 w-6 transition-colors duration-200" />
                </a>
                <a
                  href="https://www.instagram.com/fixacomunicacaovisual/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:scale-110"
                  aria-label="Instagram da Fixa Comunicação Visual"
                  title="Siga-nos no Instagram"
                >
                  <InstagramIcon className="text-preto hover:text-secondary-yellow h-6 w-6 transition-colors duration-200" />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=551432814305&text=Olá%2C+acabei+de+acessar+o+site+de+vocês+e+gostaria+de+mais+informações+sobre+os+serviços+oferecidos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:scale-110"
                  aria-label="WhatsApp da Fixa Comunicação Visual"
                  title="Converse conosco no WhatsApp"
                  id="agendar-conversa"
                >
                  <Whatsapp_icon
                    className="text-preto hover:text-secondary-yellow h-6 w-6 transition-colors duration-200"
                    id="agendar-conversa"
                  />
                </a>
              </div>

              <div
                className="flex items-center gap-2"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <a
                  href="https://g.co/kgs/JGGiiNA"
                  target="_blank"
                  className="group flex items-center gap-2 transition-colors duration-200"
                >
                  <MapPin className="group-hover:text-secondary-yellow inline-block h-5 w-5 flex-shrink-0 text-black transition-colors duration-200" />
                  <span className="group-hover:text-secondary-yellow text-center text-sm text-black transition-colors duration-200 sm:text-left sm:text-base">
                    <span itemProp="streetAddress">
                      Rua Carlos Giaxa 6-83 PQ Julio Nobrega
                    </span>{" "}
                    - <span itemProp="addressLocality">Bauru</span> -{" "}
                    <span itemProp="addressRegion">SP</span> -{" "}
                    <span itemProp="postalCode">CEP 17003-421</span>
                  </span>
                </a>
              </div>
            </address>
          </div>
        </section>
      </main>
      <footer
        className="bg-preto relative mt-24 flex min-h-96 w-full flex-col items-start justify-between gap-8 px-4 py-16 sm:mt-32 sm:px-8 sm:py-20 md:mt-48 md:px-16 md:py-25 lg:flex-row lg:gap-0 lg:px-25"
        role="contentinfo"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <button
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send/?phone=551432814305&text=Olá%2C+acabei+de+acessar+o+site+de+vocês+e+gostaria+de+mais+informações+sobre+os+serviços+oferecidos.",
              "_blank",
              "noopener,noreferrer",
            )
          }
          className="bg-secondary-yellow hover:bg-mostard-orange absolute -top-6 left-1/2 flex h-16 w-full max-w-sm -translate-x-1/2 cursor-pointer items-center justify-center rounded-2xl px-4 py-3 text-base font-bold transition-colors duration-200 sm:-top-8 sm:h-20 sm:max-w-md sm:px-6 sm:text-lg md:-top-10 md:h-25 md:max-w-[398px] md:text-xl lg:-top-20"
          aria-label="Agendar conversa via WhatsApp"
          title="Clique para agendar uma conversa via WhatsApp"
          id="agendar-conversa"
          type="button"
        >
          <span className="text-center text-white" id="agendar-conversa">
            AGENDAR UMA CONVERSA
          </span>
        </button>
        <div className="flex w-full flex-col items-center justify-start gap-6 sm:gap-8 md:gap-10 lg:w-auto lg:items-start">
          <img
            src={logo}
            alt="Logo Fixa Comunicação Visual - Especialistas em Fachadas"
            className="w-32 sm:w-40 md:w-auto"
            itemProp="logo"
          />
          <p
            className="max-w-full text-center text-sm leading-5 font-medium text-white sm:text-base sm:leading-6 lg:max-w-120 lg:text-left"
            itemProp="description"
          >
            <strong itemProp="name">Fixa Comunicação Visual</strong>:
            Especialistas em <strong>fachadas</strong>, desenvolvemos projetos
            personalizados para valorizar a identidade da sua marca. Da criação
            à instalação, entregamos soluções completas com qualidade, inovação
            e foco nos resultados do seu negócio.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-start gap-3 sm:gap-4 lg:w-auto lg:items-start">
          <h3 className="text-xl font-bold text-white sm:text-2xl">Contatos</h3>
          <address
            className="flex flex-col items-center gap-3 not-italic sm:flex-row sm:gap-4 lg:flex-col lg:items-start"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <div className="flex items-center gap-2">
              <a
                href="https://g.co/kgs/JGGiiNA"
                target="_blank"
                className="group flex items-center gap-2 transition-colors duration-200"
              >
                <MapPin className="group-hover:text-secondary-yellow inline-block h-5 w-5 flex-shrink-0 text-white transition-colors duration-200" />
                <span className="group-hover:text-secondary-yellow text-center text-sm leading-5 font-medium text-white transition-colors duration-200 sm:text-base sm:leading-6 lg:text-left">
                  <span itemProp="streetAddress">
                    Rua Carlos Giaxa 6-83 PQ Julio Nobrega
                  </span>{" "}
                  - <span itemProp="addressLocality">Bauru</span> -{" "}
                  <span itemProp="addressRegion">SP</span> -{" "}
                  <span itemProp="postalCode">CEP 17003-421</span>
                </span>
              </a>
            </div>
            <a
              href="mailto:contato@fixacv.com.br"
              className="group flex items-center gap-2 transition-colors duration-200"
              itemProp="email"
              aria-label="Enviar email para Fixa Comunicação Visual"
              title="Envie um email para contato@fixacv.com.br"
            >
              <Mail className="group-hover:text-secondary-yellow inline-block h-5 w-5 flex-shrink-0 text-white transition-colors duration-200" />
              <span className="group-hover:text-secondary-yellow text-center text-sm leading-5 font-medium text-white transition-colors duration-200 sm:text-base sm:leading-6 lg:text-left">
                contato@fixacv.com.br
              </span>
            </a>
          </address>
        </div>

        <div className="flex w-full flex-col items-center justify-start gap-3 sm:gap-4 lg:w-auto lg:items-start">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Redes Sociais
          </h3>
          <nav
            className="flex flex-col items-center gap-3 sm:gap-4 lg:items-start"
            role="navigation"
            aria-label="Redes sociais"
          >
            <a
              href="https://www.facebook.com/Fixacomunicacaovisual"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors duration-200"
              aria-label="Facebook da Fixa Comunicação Visual"
              title="Siga-nos no Facebook"
              itemProp="sameAs"
            >
              <FacebookIcon className="group-hover:text-secondary-yellow inline-block h-5 w-5 text-white transition-colors duration-200" />
              <span className="group-hover:text-secondary-yellow text-sm leading-5 font-medium text-white transition-colors duration-200 sm:text-base sm:leading-6">
                Facebook
              </span>
            </a>
            <a
              href="https://www.instagram.com/fixacomunicacaovisual/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-colors duration-200"
              aria-label="Instagram da Fixa Comunicação Visual"
              title="Siga-nos no Instagram"
              itemProp="sameAs"
            >
              <InstagramIcon className="group-hover:text-secondary-yellow inline-block h-5 w-5 text-white transition-colors duration-200" />
              <span className="group-hover:text-secondary-yellow text-sm leading-5 font-medium text-white transition-colors duration-200 sm:text-base sm:leading-6">
                Instagram
              </span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=551432814305&text=Olá%2C+acabei+de+acessar+o+site+de+vocês+e+gostaria+de+mais+informações+sobre+os+serviços+oferecidos."
              className="group flex items-center gap-2 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Fixa Comunicação Visual"
              title="Converse conosco no WhatsApp"
              id="agendar-conversa"
            >
              <Whatsapp_icon
                className="group-hover:text-secondary-yellow inline-block h-5 w-5 text-white transition-colors duration-200"
                id="agendar-conversa"
              />
              <span
                className="group-hover:text-secondary-yellow text-sm leading-5 font-medium text-white transition-colors duration-200 sm:text-base sm:leading-6"
                id="agendar-conversa"
              >
                Whatsapp
              </span>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
