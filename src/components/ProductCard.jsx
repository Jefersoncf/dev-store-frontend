import React, { useState } from "react";
import { IoExpand } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { RatingStars } from "./RatingStars";
import { ProductModal } from "./ProductModal";

const items = [
  {
    id: 1,
    name: "Camiseta Básica",
    price: "89,90",
    oldPrice: "129,90",
    image:
      "https://t-static.dafiti.com.br/nYV1_mLGVD3HjieqXNpkjRsn6-0=/fit-in/215x312/static.dafiti.com.br/p/aramis-t%25c3%25aanis-aramis-calce-f%25c3%25a1cil-verde-5706-44438231-2-product.jpg",
  },
  {
    id: 2,
    name: "Camiseta Básica",
    price: "89,90",
    oldPrice: "129,90",
    image:
      "https://t-static.dafiti.com.br/nYV1_mLGVD3HjieqXNpkjRsn6-0=/fit-in/215x312/static.dafiti.com.br/p/aramis-t%25c3%25aanis-aramis-calce-f%25c3%25a1cil-verde-5706-44438231-2-product.jpg",
  },
  {
    id: 3,
    name: "Camiseta Básica",
    price: "89,90",
    oldPrice: "129,90",
    image:
      "https://t-static.dafiti.com.br/nYV1_mLGVD3HjieqXNpkjRsn6-0=/fit-in/215x312/static.dafiti.com.br/p/aramis-t%25c3%25aanis-aramis-calce-f%25c3%25a1cil-verde-5706-44438231-2-product.jpg",
  },
  {
    id: 4,
    name: "Camiseta Básica",
    price: "89,90",
    oldPrice: "129,90",
    image:
      "https://t-static.dafiti.com.br/nYV1_mLGVD3HjieqXNpkjRsn6-0=/fit-in/215x312/static.dafiti.com.br/p/aramis-t%25c3%25aanis-aramis-calce-f%25c3%25a1cil-verde-5706-44438231-2-product.jpg",
  },
];

export const ProductCard = ({ rating, totalReviews, grid }) => {
  const gridClass = `grid-${grid}`;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (id) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="w-fit grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-5 gap-x-8 mb-4">
        {items?.length > 0 ? (
          items.map((product) => (
            <div
              key={product.id}
              className={`w-[315px] relative group hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden`}
            >
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-black-quaternary text-whit-primary text-xs font-bold py-1 px-2 rounded">
                -20%
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              {/* Botões Expandir e Favoritar */}
              <button
                onClick={() => toggleModal(1)}
                title="Expandir"
                className="absolute top-4 right-4 p-2 bg-whit-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
              >
                <IoExpand className="w-5 h-5 text-black-foreground hover:scale-110 hover:text-black-secondary transition-colors" />
              </button>
              <button
                title="Adicionar aos favoritos"
                className="absolute top-14 right-4 p-2 bg-whit-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
              >
                <FiHeart className="w-5 h-5 text-black-foreground hover:scale-110 hover:text-red-primary transition-colors" />
              </button>

              <div className="py-3 px-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-black-tertiary  ">
                    {product.name}
                  </h3>
                  <RatingStars rating={rating} totalReviews={totalReviews} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-black-tertiary">
                    R$ {product.price}
                  </span>
                  <span className="text-sm text-gray-dark line-through">
                    R$ {product.oldPrice}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-center w-full text-red-secondary">
            Nenhum produto disponível.
          </h3>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black-primary bg-opacity-50">
          <ProductModal toggleModal={toggleModal} />
        </div>
      )}
    </>
  );
};
