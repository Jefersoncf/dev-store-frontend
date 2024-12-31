import React from "react";

export const Addresses = () => {
  return (
    <div className="container">
      <div className="bg-whit-primary rounded-lg">
        <div className="p-4 border-b border-gray-light bg-gray-light rounded-t-lg">
          <div className="flex justify-between items-center py-0.5">
            <h2 className="text-xl font-semibold text-black-tertiary">
              Meus Endereços
            </h2>
            <button className="px-4 py-2 bg-blue-secondary text-whit-primary rounded-md hover:bg-blue-tertiary transition-colors ease-in-out duration-300">
              Adicionar Endereço
            </button>
          </div>
        </div>

        {/* Lista de Endereços */}
        <div className="py-6 space-y-4">
          {/* Endereço Card */}
          <div className="border border-gray-light rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-base font-medium text-black-quaternary">
                  Casa
                </h3>
                <p className="text-sm text-gray-dark">Rua Exemplo, 123</p>
                <p className="text-sm text-gray-dark">Bairro - Cidade/Estado</p>
                <p className="text-sm text-gray-dark">CEP: 12345-678</p>
              </div>
              <div className="space-x-2">
                <button className="text-sm text-blue-secondary hover:text-blue-tertiary">
                  Editar
                </button>
                <button className="text-sm text-red-secondary hover:text-red-primary">
                  Excluir
                </button>
              </div>
            </div>
          </div>

          {/* Outro Endereço Card */}
          <div className="border border-gray-light rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="font-medium text-black-quaternary">Trabalho</h3>
                <p className="text-sm text-gray-dark">Avenida Comercial, 456</p>
                <p className="text-sm text-gray-dark">Centro - Cidade/Estado</p>
                <p className="text-sm text-gray-dark">CEP: 12345-678</p>
              </div>
              <div className="space-x-2">
                <button className="text-sm text-blue-secondary hover:text-blue-tertiary">
                  Editar
                </button>
                <button className="text-sm text-red-secondary hover:text-red-primary">
                  Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
