import { useState } from "react";
import { Headset, Menu as MenuIcon, X as XIcon } from "lucide-react";
import logo from "../assets/images/logo.svg";

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
    <header className="border-gray-border/50 sticky top-0 z-50 w-full border-b text-white backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 md:px-8 lg:px-10">
        <a
          href="/"
          aria-label="Página inicial FixaCV"
          className="flex-shrink-0"
        >
          <img
            src={logo}
            alt="Logo FixaCV"
            className="h-6 w-auto sm:h-8 md:h-10 lg:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-4 md:flex lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-secondary-yellow text-sm font-medium transition-colors duration-200 lg:text-base lg:font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <a
          href="#contato"
          className="hover:text-secondary-yellow hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 md:flex lg:gap-3 lg:px-4 lg:text-base"
        >
          <Headset className="text-secondary-yellow h-4 w-4 lg:h-5 lg:w-5" />
          <span className="whitespace-nowrap">Fazer um orçamento</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          className="rounded-md p-2 text-white transition-colors hover:bg-gray-700 focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset md:hidden"
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 shadow-xl backdrop-blur-md md:hidden">
          <div className="container mx-auto px-4 py-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="hover:text-secondary-yellow block py-3 text-center text-lg font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contato"
              onClick={handleLinkClick}
              className="bg-secondary-yellow hover:bg-opacity-90 mt-6 flex w-full items-center justify-center gap-3 rounded-md px-6 py-3 text-center text-lg font-bold text-black transition-colors duration-200"
            >
              <Headset size={20} />
              Fazer um orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
