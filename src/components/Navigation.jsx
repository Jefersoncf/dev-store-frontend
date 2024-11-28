import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const links = [
    {
      title: "Novidades",
      href: "#",
      submenu: [
        { title: "Lançamentos", href: "/novidades/lancamentos" },
        { title: "Tendências", href: "/novidades/tendencias" },
      ],
    },
    {
      title: "Feminino",
      href: "#",
      submenu: [
        { title: "Roupas", href: "/feminino/roupas" },
        { title: "Calçados", href: "/feminino/calcados" },
        { title: "Acessórios", href: "/feminino/acessorios" },
      ],
    },
    {
      title: "Masculino",
      href: "#",
      submenu: [
        { title: "Roupas", href: "/masculino/roupas" },
        { title: "Calçados", href: "/masculino/calcados" },
        { title: "Relógios", href: "/masculino/relogios" },
      ],
    },
    {
      title: "Infantil",
      href: "#",
      submenu: [
        { title: "Brinquedos", href: "/masculino/roupas" },
        { title: "Roupas", href: "/masculino/calcados" },
        { title: "Calçados", href: "/masculino/relogios" },
      ],
    },
    {
      title: "Esportivo",
      href: "#",
      submenu: [
        { title: "Equipamentos", href: "/masculino/roupas" },
        { title: "Roupas", href: "/masculino/calcados" },
        { title: "Calçados", href: "/masculino/relogios" },
      ],
    },
    {
      title: "Marcas",
      href: "#",
      submenu: [
        { title: "Nike", href: "/masculino/roupas" },
        { title: "Adidas", href: "/masculino/calcados" },
        { title: "Puma", href: "/masculino/relogios" },
      ],
    },
    {
      title: "Outlet",
      href: "#",
      submenu: [
        { title: "Promoções", href: "/masculino/roupas" },
        { title: "Últimas Unidades", href: "/masculino/calcados" },
      ],
    },
  ];

  return (
    <nav>
      <div className="container mx-auto">
        <ul className="flex justify-start items-center gap-4 uppercase mb-0 relative">
          {links.map((link, index) => (
            <li
              key={link.title}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="min-w-[93.3px] text-center relative"
            >
              <Link
                className={`text-base text-black-tertiary group ${
                  activeItem === index
                    ? "font-medium text-black-secondary underline"
                    : ""
                }`}
                href={link.href}
              >
                {link.title}
              </Link>
              {/* Submenu */}
              {activeItem === index && (
                <ul className="absolute top-full left-0 bg-whit-primary shadow-lg p-2 rounded-lg z-10 transition-opacity duration-200 ease-in-out w-40">
                  {link.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="mb-2 mt-4 last:mb-0 text-left capitalize"
                    >
                      <Link
                        className="w-full block text-sm text-black-tertiary hover:text-black-secondary hover:underline"
                        to={subItem.href}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
