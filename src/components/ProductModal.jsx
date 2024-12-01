import React, { useState } from "react";
import { RatingStars } from "./RatingStars";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { TbTag } from "react-icons/tb";

import { CustomZoomImage } from "./CustomZoomImage";

export const ProductModal = (props, isModalOpen) => {
  const product = {
    id: "PROD-001",
    name: "Smartphone XYZ",
    images: [
      "https://t-static.dafiti.com.br/nYV1_mLGVD3HjieqXNpkjRsn6-0=/fit-in/215x312/static.dafiti.com.br/p/aramis-t%25c3%25aanis-aramis-calce-f%25c3%25a1cil-verde-5706-44438231-2-product.jpg",
      "https://t-static.dafiti.com.br/dRzbYqimcmi1LM8lkKPify70UE8=/fit-in/60x87/static.dafiti.com.br/p/aramis-t%c3%aanis-slip-on-aramis-liso-azul-marinho-5457-25890331-6-feed.jpg",
      "https://t-static.dafiti.com.br/GNeugDgNIQmvwUPRaIaKX8dC8nY=/fit-in/60x87/static.dafiti.com.br/p/aramis-t%c3%aanis-slip-on-aramis-liso-azul-marinho-5452-25890331-3-feed.jpg",
      "https://t-static.dafiti.com.br/s0-eHwRWiU7uWOgeYs0cFpkBaC4=/fit-in/430x623/static.dafiti.com.br/p/aramis-t%c3%aanis-slip-on-aramis-liso-azul-marinho-5447-25890331-1-zoom.jpg",
    ],
    price: 1999.99,
    oldPrice: 2499.99,
    stock: 50,
    description:
      "Um smartphone de última geração com câmera de alta resolução e bateria de longa duração. Design elegante e recursos avançados para usuários exigentes.",
    rating: 4,
    reviews: 128,
    category: "Eletrônicos",
  };

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const addToCart = () => {
    console.log(
      `Adicionando ${quantity} unidades do produto ${product.id} ao carrinho`
    );
  };

  return (
    <div className="relative">
      <div
        className="bg-whit-primary rounded-lg shadow-xl w-[850px] max-h-[90vh] overflow-y-auto relative p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => props.toggleModal(!isModalOpen)}
          className="absolute top-4 right-4 text-gray-dark hover:text-gray-900"
        >
          <IoClose
            size={24}
            className="hover:text-red-primary transition-colors duration-300"
          />
        </button>

        <div className="mt-4">
          <div className="mb-2 border-b border-b-gray-medium">
            <h2 className="text-2xl font-semibold text-black-tertiary">
              {product.name}
            </h2>

            {/* Reviews */}
            <div className="flex items-center my-2 gap-2">
              <div>
                <span className="text-gray-dark ml-2 text-sm">Marca: </span>
                <span className="text-black-tertiary ml-2 text-sm">
                  {product.category}
                </span>
              </div>
              <RatingStars rating={product.rating} />
              <div>
                <span className="text-gray-dark text-sm">ID do Produto: </span>
                <span className="font-semibold text-black-quaternary">
                  {product.id}
                </span>
              </div>
            </div>
          </div>

          <div className="flex space-x-6 mt-4">
            <div className="w-[40%]">
              <div className="mb-4">
                <CustomZoomImage
                  src={product.images[selectedImage]}
                  alt={product.name}
                />
              </div>

              <div className="flex space-x-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index
                        ? "border-black-quaternary"
                        : "border-gray-medium hover:border-gray-dark"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-[60%] space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-dark text-lg  line-through">
                    R$ {product.oldPrice}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold text-black-tertiary">
                      R$ {product.price.toFixed(2)}
                    </span>
                    <span className="text-lg text-red-secondary">
                      -
                      {Math.round(
                        ((product.oldPrice - product.price) /
                          product.oldPrice) *
                          100
                      )}
                      %
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-dark text-sm mb-1">Estoque:</p>
                <p className="font-semibold text-black-quaternary">
                  {product.stock} unidades disponíveis
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black-quaternary mb-2">
                  Descrição:
                </h3>
                <p className="text-gray-dark text-sm">{product.description}</p>
              </div>

              {/* Quantity and Cart Controls */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-dark rounded-lg overflow-hidden">
                    <button
                      onClick={decrementQuantity}
                      className="p-2 hover:bg-gray-light"
                    >
                      <FaMinus size={20} className="text-black-quaternary" />
                    </button>
                    <span className="w-12 flex items-center justify-center px-4 text-lg font-semibold text-black-quaternary">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="p-2 hover:bg-gray-light"
                      disabled={quantity >= product.stock}
                    >
                      <FaPlus size={20} className="text-black-quaternary" />
                    </button>
                  </div>
                  <button
                    onClick={addToCart}
                    className="flex-grow flex items-center justify-center bg-black-tertiary text-whit-primary px-4 py-2 rounded-lg hover:bg-black-quaternary transition-colors"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>

                <div className="flex space-x-4">
                  <button className="w-[40%] flex items-center justify-center p-2 rounded-lg transition-colors hover:bg-gray-light text-gray-dark border">
                    Ver Detalhes
                  </button>
                  <button
                    onClick={toggleFavorite}
                    className={`w-[60%] flex items-center justify-center p-2 gap-1 rounded-lg transition-colors ${
                      isFavorite
                        ? "bg-gray-medium text-black-quaternary border"
                        : "hover:bg-gray-light text-gray-dark border"
                    }`}
                  >
                    <FiHeart
                      size={20}
                      fill={isFavorite ? "currentColor" : "none"}
                    />
                    <span>
                      {isFavorite
                        ? "Remover dos Favoritos"
                        : "Adicionar aos Favoritos"}
                    </span>
                  </button>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-t-gray-medium my-4"></div>

              <div className="flex items-center text-gray-600">
                <TbTag className="mr-2 text-gray-dark" size={20} />
                <span className="text-black-quaternary font-semibold">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
