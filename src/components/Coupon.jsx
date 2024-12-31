import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export const Coupon = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Dados de exemplo
  const coupons = [
    {
      id: 1,
      code: "FIRST10",
      discount: "10%",
      category: "new_user",
      description: "Desconto de 10% na primeira compra",
      validUntil: "2024-12-31",
      minPurchase: 100,
      type: "percentage",
    },
    {
      id: 2,
      code: "FRETE50",
      discount: "R$ 50",
      category: "shipping",
      description: "Desconto de R$50 no frete",
      validUntil: "2024-12-31",
      minPurchase: 200,
      type: "fixed",
    },
    {
      id: 3,
      code: "SUMMER25",
      discount: "25%",
      category: "seasonal",
      description: "Desconto de verão em produtos selecionados",
      validUntil: "2024-12-31",
      minPurchase: 150,
      type: "percentage",
    },
  ];

  const categories = [
    { id: "all", label: "Todos" },
    { id: "new_user", label: "Novos Usuários" },
    { id: "shipping", label: "Frete" },
    { id: "seasonal", label: "Sazonais" },
    { id: "special", label: "Especiais" },
  ];

  const filterCoupons = () => {
    return coupons.filter(
      (coupon) =>
        (activeCategory === "all" || coupon.category === activeCategory) &&
        (searchTerm === "" ||
          coupon.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coupon.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div className="container bg-whit-primary rounded-lg shadow-lg">
      {/* Header with Search */}
      <div className="p-6 border-b">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:items-center">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar cupom..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="border-b">
        <nav className="flex overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeCategory === category.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Coupons Grid */}
      <div className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {filterCoupons().map((coupon) => (
            <div
              key={coupon.id}
              className="border rounded-lg p-6 space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {coupon.discount} OFF
                  </h3>
                  <p className="text-gray-600 mt-1">{coupon.description}</p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {coupon.code}
                </span>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p>Valor mínimo: R$ {coupon.minPurchase.toFixed(2)}</p>
                <p>
                  Válido até: {new Date(coupon.validUntil).toLocaleDateString()}
                </p>
              </div>

              <button
                className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                onClick={() => navigator.clipboard.writeText(coupon.code)}
              >
                Copiar Código
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
