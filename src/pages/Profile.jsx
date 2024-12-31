import React from "react";
import { FiChevronDown } from "react-icons/fi";

export const Profile = () => {
  return (
    <div className="max-w-md mx-auto my-5 rounded-lg border border-gray-medium overflow-hidden">
      {/* Profile Image Container */}
      <div className="w-full flex flex-col items-center p-4 bg-gray-light">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-medium">
          <img
            src="/api/placeholder/128/128"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="text-sm font-medium text-blue-secondary hover:text-blue-primary transition-colors duration-300 ease-in-out">
          Alterar foto
        </button>
      </div>

      {/* User Information Form */}
      <form className="p-6 space-y-4">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-dark">
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
            placeholder="João Silva"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-dark">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
            placeholder="joao.silva@email.com"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-dark">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border border-gray-medium rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-dark"
            placeholder="(11) 98765-4321"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="gender"
            className="text-sm font-medium text-gray-dark"
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

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-black-tertiary text-whit-primary font-medium py-3 rounded-lg hover:bg-black-secondary transition ease-in-out duration-300"
          >
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
};
