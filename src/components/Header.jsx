import React, { useContext } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { Inputbox } from "./Inputbox";
import { FiUser, FiHeart } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";
import { Navigation } from "./Navigation";
import { MyContext } from "../App";

export const Header = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="header border-b border-b-gray-medium pb-2 z-10">
        <div className="py-1 bg-black-tertiary">
          <div className="container mx-auto w-max-[1320px]">
            <p className="text-sm py-3 text-center text-whit-primary">
              Parcele em até 6x sem juros. Frete grátis a partir de R$ 299,00
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container mx-auto">
            <div className="flex justify-between items-center gap-4">
              <div className="flex w-1/6">
                <Link to="/" className="w-full">
                  <img
                    src={Logo}
                    className="w-[200px] h-[100px] object-cover"
                    alt="Logo"
                  />
                </Link>
              </div>

              <div className="flex w-1/3">
                <Inputbox />
              </div>
              <div className="flex gap-4">
                <div className="relative">
                  {context.isLogin ? (
                    <Link
                      to="/profile"
                      className="p-2 rounded-full bg-gray-light hover:bg-gray-medium transition-colors duration-200 flex items-center justify-center "
                      title="Minha Conta"
                    >
                      <FiUser size={25} className="hover:scale-110" />
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className=" flex items-center justify-center py-2 px-3 rounded-3xl bg-black-tertiary text-whit-primary font-medium hover:bg-black-quaternary transition-colors ease-in-out duration-300"
                    >
                      ENTRAR
                    </Link>
                  )}
                </div>
                <div className="relative">
                  <Link
                    to="/coupons"
                    className="p-2 rounded-full bg-gray-light hover:bg-gray-medium transition-colors duration-200 flex items-center justify-center"
                    title="Meus Cupons"
                  >
                    <RiCoupon3Line size={25} className="hover:scale-110" />
                  </Link>
                </div>
                <div className="relative">
                  <Link
                    to="/wishlist"
                    className="p-2 rounded-full bg-gray-light hover:bg-gray-medium transition-colors duration-200 flex items-center justify-center"
                    title="Meus Favoritos"
                  >
                    <FiHeart size={25} className="hover:scale-110" />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-black-tertiary text-whit-primary text-xs font-medium h-5 w-5 flex items-center justify-center rounded-full">
                    1
                  </span>
                </div>
                <div className="relative">
                  <Link
                    to="/cart"
                    className="p-2 rounded-full bg-gray-light hover:bg-gray-medium transition-colors duration-200 flex items-center justify-center"
                    title="Sacola"
                  >
                    <IoBagOutline size={25} className="hover:scale-110" />
                  </Link>
                  <span className="absolute -top-2 -right-2 bg-black-tertiary text-whit-primary text-xs font-medium h-5 w-5 flex items-center justify-center rounded-full">
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};
