import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BreadCrumb } from "../components/BreadCrumb";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <BreadCrumb title="Criar conta" />
      <div className="min-h-[calc(100vh-40px)] flex items-center justify-center bg-whit-primary px-4 py-12">
        <div className="w-full max-w-xl bg-whit-primary rounded-lg border border-gray-medium p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl text-black-tertiary font-semibold">
              Criar conta
            </h2>
            <p className="text-gray-dark text-sm mt-1">
              Preencha os campos abaixo para criar sua conta
            </p>
          </div>

          <form className="space-y-6">
            {/* Nome completo */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-dark"
              >
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
                placeholder="Digite seu nome completo"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-dark"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
                placeholder="exemplo@email.com"
              />
            </div>

            {/* Grid para campos menores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Telefone */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-dark"
                >
                  Telefone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
                  placeholder="(00) 00000-0000"
                />
              </div>

              {/* CPF */}
              <div className="space-y-2">
                <label
                  htmlFor="cpf"
                  className="block text-sm font-medium text-gray-dark"
                >
                  CPF
                </label>
                <input
                  id="cpf"
                  name="cpf"
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
                  placeholder="000.000.000-00"
                />
              </div>

              {/* Data de Nascimento */}
              <div className="space-y-2">
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-medium text-gray-dark"
                >
                  Data de Nascimento
                </label>
                <input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  required
                  className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
                />
              </div>

              {/* Sexo */}
              <div className="space-y-2">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-dark"
                >
                  Sexo
                </label>
                <div className="relative">
                  <select
                    id="gender"
                    name="gender"
                    required
                    className="appearance-none w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark text-gray-dark bg-whit-primary"
                  >
                    <option className="text-sm" value="">
                      Selecione
                    </option>
                    <option className="text-sm" value="M">
                      Masculino
                    </option>
                    <option className="text-sm" value="F">
                      Feminino
                    </option>
                    <option className="text-sm" value="O">
                      Outro
                    </option>
                    <option className="text-sm" value="N">
                      Prefiro não informar
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-dark">
                    <FiChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Senha e Confirmar Senha */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Senha */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-dark"
                >
                  Senha
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-medium hover:text-gray-dark transition-colors ease-in-out duration-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Confirmar Senha */}
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-dark"
                >
                  Confirmar Senha
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-medium hover:text-gray-dark transition-colors ease-in-out duration-300"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Termos e condições */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="w-4 h-4 custom-checkbox"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className=" text-gray-dark">
                  Eu concordo com os{" "}
                  <Link
                    to="#"
                    className="font-medium text-sm text-black-foreground hover:underline"
                  >
                    Termos e Condições.
                  </Link>
                </label>
              </div>
            </div>

            {/* Botão de Cadastro */}
            <button
              type="submit"
              className="w-full bg-black-tertiary text-whit-primary font-medium py-3 rounded-lg hover:bg-black-secondary transition ease-in-out duration-300"
            >
              Criar conta
            </button>

            {/* Link para Login */}
            <p className="text-center text-sm text-gray-dark">
              Já tem uma conta?{" "}
              <Link
                to="/login"
                className="text-black-foreground font-medium inline-flex space-x-1 items-center hover:underline"
              >
                <span>Faça login aqui</span>
                <FaArrowUpRightFromSquare size={12} />
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
