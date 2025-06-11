import { Quote } from "lucide-react";
import stars from "../../assets/images/stars.svg";

interface FeedbackProps {
  text?: string;
  user?: string;
}

export default function Feedback({ text, user }: FeedbackProps) {
  return (
    <div className="flex h-full w-full flex-col items-start justify-between gap-4 rounded-xl bg-[#F5F5F5] p-5 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 sm:gap-5 sm:p-6 md:rounded-2xl">
      <div className="flex items-start justify-start rounded-full bg-white p-2.5 shadow sm:p-3">
        <Quote
          fill="#474A56"
          stroke="#474A56"
          className="h-5 w-5 scale-x-[-1] text-[#474A56] sm:h-6 sm:w-6"
        />
      </div>
      <span className="text-preto flex-grow text-left text-sm leading-relaxed font-normal sm:text-base sm:leading-6">
        {text ||
          "“Ótimos profissionais, cumpriram prazo e fizeram o serviço muito rápido e com capricho. Indico sem dúvida.”"}
      </span>
      <div className="flex w-full items-center justify-between border-t-2 border-gray-200 pt-3 sm:pt-4">
        <span className="text-xs font-medium text-gray-600 sm:text-sm">
          {user || "Leonardo Amantéa"}
        </span>
        <img
          src={stars}
          alt="Avaliação 5 estrelas"
          className="pointer-events-none h-4 select-none sm:h-5"
        />
      </div>
    </div>
  );
}
