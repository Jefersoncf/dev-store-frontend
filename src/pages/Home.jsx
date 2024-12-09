import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { ProductCard } from "../components/ProductCard";
import { BannerSlider } from "../components/BannerSlider";
import { ProductSlider } from "../components/ProductSlider";

export const Home = () => {
  return (
    <>
      <BannerSlider />
      {/* Destaques */}
      <section className="home-products mt-5">
        <div className="container mx-auto flex items-center justify-between">
          <div className="">
            <h3 className="text-2xl text-black-tertiary font-semibold mb-0">
              Produtos em Destaque
            </h3>
            <p className="text-gray-dark text-sm mb-0">
              Não perca essa oportunidade de comprar o produto perfeito para
              voce!
            </p>
          </div>
          <div className="">
            <Link
              to="/product"
              className="flex items-center px-4 py-2 text-black-foreground border border-gray-dark  hover:bg-black-tertiary hover:text-whit-primary transition-colors duration-500 ease-in-out rounded-3xl font-medium"
            >
              Ver Todos
              <IoArrowForwardOutline className="ml-2 size-5" />
            </Link>
          </div>
        </div>
        {/* products */}
        <div className="container mx-auto mt-5">
          <ProductSlider />
        </div>
      </section>
      {/* Novos */}
      <section className="home-products mt-5">
        <div className="container mx-auto flex items-center justify-between">
          <div className="">
            <h3 className="text-2xl text-black-tertiary font-semibold mb-0">
              Produtos Novos
            </h3>
            <p className="text-gray-dark text-sm mb-0">
              Nossos produtos novos estao aqui, aproveite!
            </p>
          </div>
          <div className="">
            <button className="flex items-center px-4 py-2 text-black-foreground border border-gray-dark  hover:bg-black-tertiary hover:text-whit-primary transition-colors duration-500 ease-in-out rounded-3xl font-medium">
              Ver Todos
              <IoArrowForwardOutline className="ml-2 size-5" />
            </button>
          </div>
        </div>
        {/* products */}
        <div className="container mx-auto mt-5">
          <ProductCard />
        </div>

        <div className="container mx-auto mt-5">
          <div className="flex items-center justify-between gap-5">
            <div className="w-1/2 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="w-full h-80 cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out"
                alt=""
              />
            </div>
            <div className="w-1/2 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="w-full h-80 cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter mt-5">
        <div className="container mx-auto rounded-lg flex items-center justify-between px-5 h-[300px] bg-black-quaternary">
          <div className="w-1/2 text-whit-primary">
            <p className="mb-2">20% de desconto na primeira compra!</p>
            <h4 className="text-3xl font-semibold mb-4">
              Inscreva-se na nossa newsletter.
            </h4>
            <p className="text-sm text-gray-light">
              Cadastre seu melhor e-mail para receber promoções e cupons de
              desconto exclusivos!
            </p>
          </div>
          <div className="w-1/2 overflow-hidden">
            <form className="w-full p-4">
              <label
                htmlFor="email"
                className="block text-base font-medium text-whit-primary mb-2"
              >
                Insira seu e-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                className="w-full px-3 py-2 border border-gray-dark rounded-lg mb-4 focus:outline-none focus:ring-1 focus:ring-gray-medium"
              />
              <button
                type="submit"
                className="w-full max-w-[250px] bg-whit-primary text-black-secondary py-2 rounded-lg font-medium hover:bg-gray-tertiary transition duration-300"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
};
