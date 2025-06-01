import Bean from "../bean";
import { Separator } from "../ui/separator";
import fachada1 from "../../assets/fachadas/fachada1.png";
import fachada2 from "../../assets/fachadas/fachada2.png";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

export default function QuemSomos() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-32">
      <div className="flex flex-col items-center justify-center gap-5">
        <Bean text="Quem somos" />
        <h2 className="max-w-3/4 text-center text-5xl leading-12 font-bold tracking-wide text-black">
          Mais de 16 Anos de Excelência em fachadas
        </h2>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex h-full w-1/2 flex-col justify-center gap-11">
          <span className="max-w-135 text-3xl leading-9 font-bold text-black">
            Fundada em 2008, a{" "}
            <span className="text-secondary-yellow">
              Fixa Comunicação Visual
            </span>{" "}
            é especialista em{" "}
            <span className="text-secondary-yellow">fachadas</span> e possui
            estrutura para produzir projetos de{" "}
            <span className="text-secondary-yellow">todos</span> os portes com{" "}
            <span className="text-secondary-yellow">qualidade</span> e{" "}
            <span className="text-secondary-yellow">eficiência</span>.
          </span>
          <Separator
            orientation="horizontal"
            className="bg-secondary-yellow max-w-20"
          />
          <span className="max-w-135 text-2xl font-normal text-black">
            Nosso compromisso é com a perfeição nos acabamentos, respeito e
            transparência com clientes e colaboradores.
          </span>
          <div className="flex flex-col gap-5">
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
          <Button className="bg-secondary-yellow hover:bg-mostard-orange w-fit cursor-pointer py-5.5 text-base font-bold">
            Quem somos
          </Button>
        </div>
        <Separator
          orientation="vertical"
          className="bg-secondary-yellow mt-28 max-h-64"
        />
        <div className="flex h-full w-1/2 flex-col items-center justify-start">
          <img
            src={fachada1}
            alt=""
            className="relative z-1 w-[35rem] translate-x-31 rounded-2xl"
          />
          <img
            src={fachada2}
            alt=""
            className="relative z-2 w-[35rem] -translate-y-10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
