import Bean from "../bean";
import { Separator } from "../ui/separator";
import fachada1 from "../../assets/fachadas/fachada1.png";
import fachada2 from "../../assets/fachadas/fachada2.png";

export default function QuemSomos() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-32">
      <div className="flex flex-col items-center justify-center gap-5">
        <Bean text="Quem somos" />
        <h2 className="max-w-3/4 text-center text-5xl leading-12 font-bold tracking-wide text-black">
          Mais de 16 Anos de Excelência em fachadas
        </h2>
      </div>
      <div className="flex h-screen w-full justify-between gap-10">
        <div className="flex h-full w-1/2 flex-col gap-16">
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
        </div>
        <Separator
          orientation="vertical"
          className="bg-secondary-yellow mt-28 max-h-64"
        />
        <div className="w-1/2">
          <img src={fachada1} alt="" />
          <img src={fachada2} alt="" className="mt-10" />
        </div>
      </div>
    </section>
  );
}
