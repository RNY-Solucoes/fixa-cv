import { Headset } from "lucide-react";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <header className="border-b-gray-border flex items-center justify-between border-b-1 px-25 py-14 text-white">
      <nav className="flex w-full items-center justify-between">
        <img src={logo} alt="Logo FixaCV" />
        <ul className="flex gap-10">
          <li className="hover:text-secondary-yellow text-lg font-bold transition-colors duration-200">
            <a href="#">Quem somos</a>
          </li>
          <li className="hover:text-secondary-yellow text-lg font-bold transition-colors duration-200">
            <a href="#">Portfólio</a>
          </li>
          <li className="hover:text-secondary-yellow text-lg font-bold transition-colors duration-200">
            <a href="#">Depoimentos</a>
          </li>
          <li className="hover:text-secondary-yellow text-lg font-bold transition-colors duration-200">
            <a href="#">Contato</a>
          </li>
        </ul>
        <a
          href="#"
          className="hover:text-secondary-yellow flex items-center justify-end gap-6"
        >
          <Headset size={35} color="#fbbf24" />
          <span className="w-20 text-left text-base leading-4 font-bold transition-colors duration-200">
            Fazer um orçamento
          </span>
        </a>
      </nav>
    </header>
  );
}
