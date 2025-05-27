import Bean from "../bean";
import Carrousel from "../Carrousel/Carrousel";
import { Button } from "../ui/button";

export default function Servicos() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-32">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <Bean text="Portfólio" />
        <h2 className="max-w-3/4 text-center text-5xl leading-12 font-bold tracking-wide text-black">
          Nossos serviços e Soluções
        </h2>
        <div className="flex w-full flex-col justify-between gap-10">
          <div className="flex w-full items-end justify-between">
            <span className="max-w-52 text-left text-2xl font-bold">
              Fachadas de alto padrão para sua Empresa.
            </span>
            <Button className="bg-secondary-yellow hover:bg-mostard-orange w-fit cursor-pointer py-5.5 text-base font-bold">
              Contratar Serviços
            </Button>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <Carrousel />
          </div>
        </div>
      </div>
    </section>
  );
}
