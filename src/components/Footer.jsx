import React from "react";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { TbBrandTiktok } from "react-icons/tb";
import { paymentMethods } from "../data";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="py-8 border-t border-t-gray-medium">
        <div className="container mx-auto grid grid-cols-4 gap-8">
          {/* Coluna 1: Sobre Nós */}
          <div>
            <h3 className="text-base uppercase text-black-tertiary font-semibold mb-4">
              Sobre Nós
            </h3>
            <p className="text-gray-dark text-sm">
              Sua loja online de confiança, oferecendo os melhores produtos com
              entrega rápida e segura.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                to="#"
                title="Facebook"
                className="text-black-secondary hover:text-black-quaternary transition"
              >
                <FiFacebook size={24} />
              </Link>
              <Link
                to="#"
                title="Instagram"
                className="text-black-secondary hover:text-black-quaternary transition"
              >
                <FiInstagram size={24} />
              </Link>
              <Link
                to="#"
                title="Tiktok"
                className="text-black-secondary hover:text-black-quaternary transition"
              >
                <TbBrandTiktok size={24} />
              </Link>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-base uppercase text-black-tertiary font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-dark hover:underline">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-dark hover:underline">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-dark hover:underline">
                  Categorias
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-dark hover:underline">
                  Promoções
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-dark hover:underline">
                  Minha Conta
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento ao Cliente */}
          <div>
            <h3 className="text-base uppercase text-black-tertiary font-semibold mb-4">
              Atendimento
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-dark">SAC: 0800 123 4567</li>
              <li className="text-gray-dark">contato@loja.com.br</li>
              <li className="text-gray-dark">Segunda a Sexta: 8h - 18h</li>
              <li className="text-gray-dark">Sábado: 9h - 13h</li>
            </ul>
          </div>

          {/* Coluna 4: Métodos de Pagamento */}
          <div>
            <h4 className="text-base uppercase text-black-tertiary font-semibold mb-4">
              Métodos de Pagamento
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-white rounded-lg p-2 flex justify-center items-center"
                >
                  <img
                    src={method.icon}
                    alt={method.name}
                    className="w-full h-10 object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-dark mt-4 text-sm">
              Compre com segurança usando diversos métodos de pagamento.
            </p>
          </div>
        </div>

        {/* Rodapé de Copyright */}
        <div className="container mx-auto border-t border-t-gray-medium mt-8 pt-6 text-center">
          <p className="text-gray-dark text-sm">
            © 2024 Sua Loja Online. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
};
