import React, { useState } from "react";

export const Orders = () => {
  const [activeStatus, setActiveStatus] = useState("all");

  // Dados de exemplo - em um caso real virão do backend
  const orders = [
    {
      id: "12345",
      date: "15/03/2024",
      status: "finished",
      product: "Nome do Produto",
      quantity: 1,
      price: 199.9,
      image:
        "https://t-static.dafiti.com.br/4Q0Vbzlk2kUO87RLlAeAe8PKDMg=/fit-in/333x483/static.dafiti.com.br/p/polo-ralph-lauren-camisa-polo-polo-ralph-lauren-slim-logo-vermelha-3467-9647405-1-product.jpg",
    },
    {
      id: "12344",
      date: "10/03/2024",
      status: "in_progress",
      product: "Nome do Produto",
      quantity: 2,
      price: 299.8,
      image:
        "https://t-static.dafiti.com.br/4Q0Vbzlk2kUO87RLlAeAe8PKDMg=/fit-in/333x483/static.dafiti.com.br/p/polo-ralph-lauren-camisa-polo-polo-ralph-lauren-slim-logo-vermelha-3467-9647405-1-product.jpg",
    },
    {
      id: "12348",
      date: "10/09/2024",
      status: "in_progress",
      product: "Nome do Produto",
      quantity: 2,
      price: 298.8,
      image:
        "https://t-static.dafiti.com.br/pYRnxBo-tGPXaFpytZv76R06x10=/fit-in/333x483/static.dafiti.com.br/p/aramis-camisa-polo-aramis-reta-mini-icon-preta-2601-98825241-1-product.jpg",
    },
    {
      id: "12369",
      date: "17/05/2024",
      status: "finished",
      product: "Nome do Produto",
      quantity: 2,
      price: 48.9,
      image:
        "https://t-static.dafiti.com.br/pYRnxBo-tGPXaFpytZv76R06x10=/fit-in/333x483/static.dafiti.com.br/p/aramis-camisa-polo-aramis-reta-mini-icon-preta-2601-98825241-1-product.jpg",
    },
    {
      id: "12347",
      date: "25/04/2024",
      status: "cancelled",
      product: "Nome do Produto",
      quantity: 2,
      price: 19.9,
      image:
        "https://t-static.dafiti.com.br/5Arv_2lMDDj4KGCXp5Nv6zbB_-s=/fit-in/333x483/static.dafiti.com.br/p/aramis-camisa-polo-aramis-reta-friso-azul-6227-82925241-1-product.jpg",
    },
    {
      id: "12399",
      date: "18/10/2024",
      status: "cancelled",
      product: "Nome do Produto",
      quantity: 2,
      price: 99.8,
      image:
        "https://t-static.dafiti.com.br/5Arv_2lMDDj4KGCXp5Nv6zbB_-s=/fit-in/333x483/static.dafiti.com.br/p/aramis-camisa-polo-aramis-reta-friso-azul-6227-82925241-1-product.jpg",
    },
    {
      id: "12339",
      date: "20/07/2024",
      status: "returned",
      product: "Nome do Produto",
      quantity: 1,
      price: 399.9,
      image:
        "https://t-static.dafiti.com.br/oqgJNstpf2BJE5BMFf1zAvLFIwQ=/fit-in/333x483/static.dafiti.com.br/p/mood-modas-cal%25c3%25a7a-mood-modas-pantalona-fenda-lisa-feminina-el%25c3%25a1stico-pantacourt-flare-boca-de-sino-262-preto-1814-99095301-1-product.jpg",
    },
    {
      id: "12336",
      date: "10/05/2024",
      status: "finished",
      product: "Nome do Produto",
      quantity: 2,
      price: 255.0,
      image:
        "https://t-static.dafiti.com.br/82etr7jcPvHgr_AQZtyJPGPgJ20=/fit-in/333x483/static.dafiti.com.br/p/vekyo-cal%25c3%25a7a-flare-vekyo-cotel%25c3%25aa-veludo-grossa-c%25c3%25b3s-alto-cintura-alta-azul-7543-46996531-1-product.jpg",
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      in_progress: "bg-yellow-light text-yellow-primary",
      finished: "bg-green-light text-green-tertiary",
      cancelled: "bg-red-light text-red-secondary",
      returned: "bg-gray-medium text-gray-dark",
      all: "bg-gray-light text-black-quaternary",
    };
    return colors[status] || colors.all;
  };

  const getStatusText = (status) => {
    const texts = {
      in_progress: "Em Andamento",
      finished: "Finalizado",
      cancelled: "Cancelado",
      returned: "Devolvido",
      all: "Todos",
    };
    return texts[status] || status;
  };

  const filterOrders = (status) => {
    if (status === "all") return orders;
    return orders.filter((order) => order.status === status);
  };

  const navigationItems = [
    { id: "all", label: "Todos" },
    { id: "in_progress", label: "Em Andamento" },
    { id: "finished", label: "Finalizado" },
    { id: "cancelled", label: "Cancelado" },
    { id: "returned", label: "Devolução" },
  ];

  return (
    <div className="container mx-auto bg-whit-primary rounded-lg">
      {/* Navigation Menu */}
      <div className="sticky top-0 bg-gray-light rounded-t-xl z-10">
        <nav className="flex overflow-x-auto">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveStatus(item.id)}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeStatus === item.id
                  ? "border-black-quaternary text-black-quaternary"
                  : "border-whit-primary text-gray-dark hover:text-black-quaternary hover:border-black-quaternary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Orders List */}
      <div className="py-6 space-y-6">
        {filterOrders(activeStatus).map((order) => (
          <div
            key={order.id}
            className="border border-gray-light rounded-lg overflow-hidden"
          >
            <div className="p-4 bg-gray-light border-b border-gray-light">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-medium text-black-quaternary">
                    Pedido #{order.id}
                  </span>
                  <span className="ml-4 text-gray-dark">{order.date}</span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                    order.status
                  )}`}
                >
                  {getStatusText(order.status)}
                </span>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-whit-primary rounded-md overflow-hidden">
                  <img
                    src={order.image}
                    alt={order.product}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-black-quaternary text-sm">
                    {order.product}
                  </h3>
                  <p className="text-gray-dark text-sm">
                    Quantidade: {order.quantity}
                  </p>
                  <p className="text-black-quaternary text-sm font-medium">
                    R$ {order.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-light border-t border-gray-light">
              <div className="flex justify-between items-center">
                <button className="text-blue-secondary hover:text-blue-tertiary">
                  Ver Detalhes
                </button>
                <div className="text-right">
                  <p className="text-sm text-gray-dark">Total:</p>
                  <p className="text-lg font-medium text-black-quaternary">
                    R$ {order.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
