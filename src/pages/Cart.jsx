import React, { useState } from "react";
import { FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { BreadCrumb } from "../components/BreadCrumb";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Camiseta Básica",
      price: 49.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "Calça Jeans",
      price: 129.9,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ]);

  // Function to update quantity
  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Function to toggle item selection
  const toggleItemSelection = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <BreadCrumb title="Carrinho" />
      <section className="container  mx-auto my-10">
        <div className="flex bg-whit-primary border border-gray-medium rounded-lg p-6">
          {/* Cart Items List */}
          <div className="w-2/3 pr-6 border-r border-gray-medium">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold text-black-tertiary">
                Seu Carrinho
              </h2>
              <p className="mt-1 text-gray-dark text-sm">
                Há um total de{" "}
                <span className="text-black-tertiary font-semibold">
                  {cartItems.length}{" "}
                </span>
                itens no seu carrinho.
              </p>
            </div>
            <div className="grid grid-cols-12 mb-4 py-3 px-2 bg-gray-light rounded-t-md text-black-tertiary">
              <div className="col-span-5 text-left font-medium">Produto</div>
              <div className="col-span-3 text-right font-medium">
                Quantidade
              </div>
              <div className="col-span-2 text-right font-medium">Subtotal</div>
              <div className="col-span-2 text-right font-medium">Remover</div>
            </div>
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-12 items-center mb-4 pb-4 ${
                  index !== cartItems.length - 1
                    ? "border-b border-b-gray-medium"
                    : ""
                }`}
              >
                <div className="col-span-5 flex items-center space-x-4 ">
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleItemSelection(item.id)}
                    className="custom-checkbox w-4 h-4"
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium text-black-quaternary">
                      {item.name}
                    </h3>
                    <p className="text-gray-dark text-sm">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="col-span-3 flex justify-end items-center">
                  <div className="flex items-center border border-gray-medium rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-gray-light"
                    >
                      <FaMinus size={16} className="text-gray-dark" />
                    </button>
                    <span className="w-12 flex items-center justify-center px-4 text-sm font-medium text-black-quaternary">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-gray-light"
                    >
                      <FaPlus size={16} className="text-gray-dark" />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 text-right">
                  <span className="text-black-quaternary text-sm">
                    {" "}
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="col-span-2 flex justify-end">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-secondary hover:bg-red-light transition-colors duration-300 ease-in-out p-2 rounded"
                  >
                    <FaRegTrashCan size={20} className="" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-1/3 pl-6">
            <h2 className="text-2xl font-semibold text-black-tertiary mb-6">
              Resumo
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-dark text-sm">Subtotal</span>
                <span className="text-gray-dark text-sm font-semibold">
                  R$ {total.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-dark text-sm">Entrega</span>
                <span className="text-gray-dark text-sm font-semibold">
                  Grátis
                </span>
              </div>

              <div className="flex justify-between font-semibold text-lg border-t border-gray-medium pt-4">
                <span className="text-black-tertiary">Total</span>
                <span className="text-black-tertiary">
                  R$ {total.toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-black-tertiary text-whit-primary py-3 rounded-lg hover:bg-black-secondary transition ease-in-out duration-300">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
