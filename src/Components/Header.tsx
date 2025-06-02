import { useState } from "react";
import { Headset, Menu as MenuIcon, X as XIcon } from "lucide-react"; // Assuming you use lucide-react
import logo from "../assets/images/logo.svg"; // Ensure path is correct

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#quem-somos", label: "Quem somos" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b-gray-border/50 sticky top-0 z-50 w-full border-b-1 text-white backdrop-blur-md">
      {" "}
      <nav className="container mx-auto flex h-20 items-center justify-between px-6 sm:h-24 md:px-8 lg:px-10">
        {" "}
        <a href="/" aria-label="Página inicial FixaCV">
          <img
            src={logo}
            alt="Logo FixaCV"
            className="h-8 sm:h-10 md:h-12"
          />{" "}
        </a>
        <ul className="hidden items-center gap-6 md:flex lg:gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-secondary-yellow text-sm font-semibold transition-colors duration-200 lg:text-base lg:font-bold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#orcamento"
          className="hover:text-secondary-yellow hidden items-center justify-end gap-2 rounded-md px-3 py-2 transition-colors duration-200 md:flex lg:gap-3 lg:px-4"
        >
          <Headset
            size={28}
            className="text-secondary-yellow group-hover:text-preto h-5 w-5 lg:h-6 lg:w-6"
          />{" "}
          <span className="w-autotext-left text-xs leading-tight font-semibold lg:text-base lg:font-bold">
            Fazer um orçamento
          </span>
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            className="rounded-md p-2 text-white transition-colors hover:bg-gray-700 focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
          >
            {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="bg-preto absolute top-full left-0 w-full p-6 shadow-xl md:hidden">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="hover:text-secondary-yellow block py-2 text-lg font-semibold transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#orcamento" // Example link
            onClick={handleLinkClick}
            className="bg-secondary-yellow text-preto hover:bg-opacity-90 mt-8 flex w-full items-center justify-center gap-3 rounded-md px-6 py-3 text-center text-lg font-bold transition-colors duration-200"
          >
            <Headset size={24} />
            Fazer um orçamento
          </a>
        </div>
      )}
    </header>
  );
}
