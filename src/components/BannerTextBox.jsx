import React from "react";

export const BannerTextBox = () => {
  return (
    <div className="container mx-auto mt-4 ">
      <div className="text-center p-5 border-2 border-black-quaternary rounded-lg">
        <h1 className="text-2xl font-bold uppercase text-black-tertiary">
          Produtos eletrônicos
        </h1>
        <p className="text-gray-dark text-sm">
          Encontre o produto perfeito para você e aproveite as nossas promoções
        </p>
      </div>
    </div>
  );
};
