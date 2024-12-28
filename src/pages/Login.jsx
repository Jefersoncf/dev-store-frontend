import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BreadCrumb } from "../components/BreadCrumb";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import { MyContext } from "../App";

export const Login = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterVisible(false);
  }, []);

  return (
    <>
      <BreadCrumb title="Login" />

      <div className="min-h-[calc(100vh-40px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-whit-primary p-8 border border-gray-medium rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl text-black-tertiary font-semibold">
              Login
            </h2>
            <p className="text-gray-dark text-sm mt-1">
              Olá, Bem-vindo de voltar 👋
            </p>
          </div>

          <form className="space-y-5">
            <button className="w-full py-2 my-3 border border-gray-medium flex space-x-2 items-center justify-center rounded-lg text-gray-dark hover:bg-black-tertiary hover:text-whit-primary transition ease-in-out duration-300">
              <FcGoogle size={24} />
              <span className="text-base ">Entrar com Google</span>
            </button>
            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-medium"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-whit-primary text-gray-dark">
                  Ou continue com email
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-dark"
              >
                Insira seu e-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-dark"
              >
                Insira sua senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex items-center my-3">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 custom-checkbox"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-dark ml-2"
                >
                  Lembrar-me
                </label>
              </div>
              <div className="flex items-center my-3">
                <Link
                  to="/forgot-password"
                  className="font-medium text-sm text-black-foreground hover:underline"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black-tertiary text-whit-primary font-medium py-3 rounded-lg hover:bg-black-secondary transition ease-in-out duration-300"
            >
              Fazer login
            </button>
            <p className="text-center text-sm text-gray-dark">
              Não tem cadastro?{" "}
              <Link
                to="/signup"
                className="text-black-foreground font-medium inline-flex space-x-1 items-center hover:underline"
              >
                <span>Registre-se aqui</span>
                <FaArrowUpRightFromSquare size={12} />
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
