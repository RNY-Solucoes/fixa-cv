import { Check, ChevronRight, Mail, MapPin } from "lucide-react";
import Header from "./Components/Header";
import { Button } from "./Components/ui/button";
import { Separator } from "./Components/ui/separator";
import Marquee from "react-fast-marquee";
import cruzeiro from "./assets/logos/cruzeiro-do-sul.svg";
import usp from "./assets/logos/logo-usp.svg";
import ext from "./assets/logos/ext-logo.svg";
import super_geeks from "./assets/logos/super-geeks.svg";
import videira_motors from "./assets/logos/videira-motors.svg";
import yank from "./assets/logos/yank-logo.svg";
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

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="relative flex h-[800px] w-full flex-col overflow-hidden">
        <div
          className="absolute inset-0 bg-[url(/src/assets/images/slide1.png)] bg-center bg-no-repeat lg:bg-cover"
          style={{
            // filter: "blur(3.25px)",
            transform: "scale(1.02)",
            zIndex: -1,
          }}
        />
        <Header />
        <div className="flex w-full flex-col justify-end px-25 py-28 text-white lg:flex-row">
          <div className="flex flex-col items-center gap-5 lg:items-end">
            <h1 className="max-w-130 text-center text-6xl leading-18 font-bold tracking-wide lg:text-right">
              Transformamos sua{" "}
              <span className="text-secondary-yellow">Marca</span> em{" "}
              <span className="text-secondary-yellow">Destaque Visual</span>.
            </h1>
            <Separator className="bg-secondary-yellow my-1 max-w-20" />
            <p className="max-w-130 text-center text-sm leading-6 font-normal text-white lg:text-right">
              Especialistas em fachadas há mais de 14 anos, oferecendo soluções
              personalizadas para destacar sua empresa.
            </p>
            <div className="invi flex items-center gap-2">
              <a href="#quem-somos">
                <Button className="bg-secondary-yellow hover:bg-mostard-orange cursor-pointer py-5.5 text-base font-bold">
                  Quem somos
                </Button>
              </a>
              <a href="#portfolio">
                <Button
                  variant="link"
                  className="ml-4 cursor-pointer font-bold text-white"
                >
                  Nossos serviços <ChevronRight />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="bg-gray-background flex flex-col items-center justify-start gap-48 px-25 py-10">
        <section className="flex w-full items-center">
          <Marquee speed={30} gradient={true} pauseOnHover={true}>
            <div className="flex items-center gap-32 px-25">
              <img
                src={cruzeiro}
                alt="Logo Cruzeiro do Sul"
                className="h-12 w-auto"
              />
              <img src={usp} alt="Logo USP" className="h-12 w-auto" />
              <img src={ext} alt="Logo EXT" className="h-12 w-auto" />
              <img
                src={super_geeks}
                alt="Logo Super Geeks"
                className="h-12 w-auto"
              />
              <img
                src={videira_motors}
                alt="Logo Videira Motors"
                className="h-12 w-auto"
              />
              <img
                src={yank}
                alt="Logo Yank Solutions"
                className="h-12 w-auto"
              />
            </div>
          </Marquee>
        </section>
        <section
          className="flex w-full flex-col items-center justify-center gap-32 lg:h-screen"
          id="quem-somos"
        >
          <div className="flex flex-col items-center justify-center gap-5">
            <Bean text="Quem somos" />
            <h2 className="max-w-3/4 text-center text-5xl leading-12 font-bold tracking-wide text-black">
              Mais de 16 Anos de Excelência em fachadas
            </h2>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex h-full flex-col justify-center gap-11 lg:w-1/2">
              <span className="max-w-200 text-center text-2xl leading-9 font-bold text-black lg:max-w-135 lg:text-left lg:text-3xl">
                Fundada em 2008, a{" "}
                <span className="text-secondary-yellow">
                  Fixa Comunicação Visual
                </span>{" "}
                é especialista em{" "}
                <span className="text-secondary-yellow">fachadas</span> e possui
                estrutura para produzir projetos de{" "}
                <span className="text-secondary-yellow">todos</span> os portes
                com <span className="text-secondary-yellow">qualidade</span> e{" "}
                <span className="text-secondary-yellow">eficiência</span>.
              </span>
              <Separator
                orientation="horizontal"
                className="bg-secondary-yellow lg:max-w-20"
              />
              <span className="text-center text-xl font-normal text-black lg:max-w-135 lg:text-left lg:text-2xl">
                Nosso compromisso é com a perfeição nos acabamentos, respeito e
                transparência com clientes e colaboradores.
              </span>
              <div className="flex gap-5 self-center lg:flex-col lg:self-start">
                <div className="flex items-center gap-2">
                  <Check className="text-secondary-yellow inline-block" />
                  <span>Profissionais experientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-secondary-yellow inline-block" />
                  <span>Fachadas de qualidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-secondary-yellow inline-block" />
                  <span>Aplicações modernas</span>
                </div>
              </div>
              <Button className="bg-secondary-yellow hover:bg-mostard-orange w-fit cursor-pointer self-center py-5.5 text-base font-bold lg:self-start">
                Quem somos
              </Button>
            </div>
            <Separator
              orientation="vertical"
              className="bg-secondary-yellow max-h-64 lg:mt-28"
            />
            <div className="lg:1/2 flex h-full w-2/3 flex-col items-center justify-start">
              <img
                src={fachada1}
                alt=""
                className="relative z-1 w-[35rem] -translate-x-30 rounded-2xl lg:translate-x-31"
              />
              <img
                src={fachada2}
                alt=""
                className="relative z-2 w-[35rem] translate-x-20 -translate-y-20 rounded-2xl lg:translate-x-0 lg:-translate-y-10"
              />
            </div>
          </div>
        </section>
        <Servicos />
        <section
          className="flex h-screen w-full flex-col items-center justify-center gap-32"
          id="depoimentos"
        >
          <div className="flex flex-col items-center justify-center gap-5">
            <Bean text="Depoimentos" />
            <h2 className="text-center text-5xl leading-12 font-bold tracking-wide text-black">
              Depoimentos de Clientes
            </h2>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-10">
            <div className="items-centerer flex w-full gap-2">
              <span className="max-w-52 text-left text-2xl font-bold">
                Depoimentos de quem{" "}
                <span className="text-secondary-yellow">escolheu</span>{" "}
                <span className="text-secondary-yellow">qualidade</span>.
              </span>
            </div>
            <div className="mt-10 grid h-full w-full grid-cols-3 place-items-center gap-10">
              <Feedback />
              <Feedback />
              <Feedback />
              <Feedback />
              <Feedback />
              <Feedback />
            </div>
          </div>
        </section>
        <section
          className="flex w-full flex-col items-center justify-center gap-32"
          id="contato"
        >
          <Separator className="bg-secondary-yellow border-secondary-yellow my-1 max-w-80 border-2" />
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h3 className="text-preto max-w-70 text-center text-4xl leading-12 font-bold">
              Vamos tirar sua{" "}
              <span className="text-secondary-yellow">ideia</span> do{" "}
              <span className="text-secondary-yellow">papel</span> ?
            </h3>
            <span className="text-preto max-w-90 text-center text-lg leading-6 font-normal">
              Entre em contato com a gente e transforme sua fachada com quem
              entende do assunto!
            </span>
            <div className="flex items-center gap-4">
              <Facebook_icon className="text-preto" />
              <InstagramIcon className="text-preto" />
              <Whatsapp_icon className="text-preto" />
              <div className="flex items-center gap-2">
                <MapPin className="inline-block" />
                <span>Rua Mário Fongaro, 78 - Arujá - SP</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-preto relative mt-48 flex min-h-96 w-full items-start justify-between px-25 py-25">
        <a
          href="https://wa.me/message/YYJWHNXPTEZMJ1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary-yellow hover:bg-mostard-orange absolute top-0 left-1/2 flex h-25 w-[398px] -translate-x-1/2 -translate-y-20 cursor-pointer items-center justify-center rounded-2xl px-6 py-3 text-xl font-bold"
        >
          <span className="text-white">AGENDAR UMA CONVERSA</span>
        </a>
        <div className="flex flex-col items-start justify-start gap-10">
          <img src={logo} alt="Logo fixa cv" />
          <span className="max-w-120 text-left text-base leading-6 font-medium text-white">
            Especialistas em fachadas, desenvolvemos projetos personalizados
            para valorizar a identidade da sua marca. Da criação à instalação,
            entregamos soluções completas com qualidade, inovação e foco nos
            resultados do seu negócio.
          </span>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <span className="text-2xl font-bold text-white">Contatos</span>
          <div className="flex items-center gap-2">
            <MapPin className="inline-block text-white" />
            <span className="ml-2 text-base leading-6 font-medium text-white">
              Rua Mário Fongaro, 78 - Arujá - SP
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="inline-block text-white" />
            <span className="ml-2 text-base leading-6 font-medium text-white">
              contato@fixacv.com.br
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <span className="text-2xl font-bold text-white">Redes Sociais</span>
          <div className="flex items-center gap-2">
            <FacebookIcon className="inline-block text-white" />
            <span className="ml-2 text-base leading-6 font-medium text-white">
              Facebook
            </span>
          </div>
          <div className="flex items-center gap-2">
            <InstagramIcon className="inline-block text-white" />
            <span className="ml-2 text-base leading-6 font-medium text-white">
              Instagram
            </span>
          </div>
          <a
            href="https://wa.me/message/YYJWHNXPTEZMJ1"
            className="flex items-center gap-2"
            target="_blank"
          >
            <Whatsapp_icon className="inline-block text-white" />
            <span className="hover:text-secondary-yellow ml-2 text-base leading-6 font-medium text-white">
              Whatsapp
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
