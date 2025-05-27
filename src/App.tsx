import { ChevronRight } from "lucide-react";
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
import QuemSomos from "./Components/sections/QuemSomos";
import Servicos from "./Components/sections/Servicos";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative flex h-[800px] w-full flex-col overflow-hidden">
        {/* Fundo com blur sutil, mas ampliado para evitar bordas brancas */}
        <div
          className="absolute inset-0 bg-[url(/src/assets/images/jeep.png)] bg-cover bg-center bg-no-repeat"
          style={{
            filter: "blur(3.25px)",
            transform: "scale(1.02)",
            zIndex: -1,
          }}
        />
        <Header />
        <div className="flex w-full justify-between px-25 py-28 text-white">
          <div className="flex flex-col gap-5">
            <h1 className="max-w-130 text-6xl leading-18 font-bold">
              Transformamos sua{" "}
              <span className="text-secondary-yellow">Marca</span> em{" "}
              <span className="text-secondary-yellow">Destaque Visual</span>.
            </h1>
            <Separator className="bg-secondary-yellow my-1 max-w-20" />
            <p className="max-w-130 text-sm leading-6 font-normal">
              Especialistas em fachadas há mais de 14 anos, oferecendo soluções
              personalizadas para destacar sua empresa.
            </p>
            <div className="flex items-center gap-2">
              <Button className="bg-secondary-yellow hover:bg-mostard-orange cursor-pointer py-5.5 text-base font-bold">
                Quem somos
              </Button>
              <Button
                variant="link"
                className="ml-4 cursor-pointer font-bold text-white"
              >
                Nossos serviços <ChevronRight />
              </Button>
            </div>
          </div>
          <div className="flex h-19 items-center justify-center gap-5">
            <div className="flex flex-col gap-4">
              <a href="https://www.facebook.com" target="_blank">
                <FacebookIcon />
              </a>
              <InstagramIcon />
            </div>
            <Separator orientation="vertical" className="bg-secondary-yellow" />
          </div>
        </div>
      </div>
      <main className="bg-gray-background flex h-screen flex-col items-center justify-start gap-60 px-25 py-10">
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
        <QuemSomos />
        <Servicos />
      </main>
    </div>
  );
}

export default App;
