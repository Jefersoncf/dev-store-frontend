import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export const Coupon = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [couponCode, setCouponCode] = useState("");

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

  const handleRedeemCoupon = () => {
    // Aqui vai a lógica para resgatar o cupom
    console.log("Resgatando cupom:", couponCode);
    setCouponCode(""); // Limpa o input após resgatar
  };

  const filterCoupons = () => {
    return coupons.filter(
      (coupon) => activeCategory === "all" || coupon.category === activeCategory
    );
  };

  return (
    <div className="container bg-whit-primary rounded-lg">
      {/* Header with Search */}
      <div className="p-6 border-b border-gray-medium bg-gray-light rounded-t-lg">
        <h2 className="text-xl font-semibold text-black-quaternary">
          Meus Cupons
        </h2>
      </div>
      <div className="p-8 border-b border-gray-medium bg-gray-medium">
        <div className="w-[80%] flex flex-col mx-auto py-4 md:flex-row md:items-center">
          <label className="text-black-quaternary font-medium whitespace-nowrap sm:mr-2">
            Adicionar Cupom:
          </label>
          <div className="flex flex-1 space-x-2">
            <input
              type="text"
              placeholder="Digite seu cupom"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-light rounded-md focus:outline-none focus:border-transparent"
            />
            <button
              onClick={handleRedeemCoupon}
              className="bg-black-tertiary text-whit-primary font-medium px-6 py-2 rounded-lg hover:bg-black-secondary transition ease-in-out duration-300"
            >
              Resgatar
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-gray-light">
        <nav className="flex overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeCategory === category.id
                  ? "border-black-tertiary text-black-tertiary"
                  : "border-gray-light text-gray-dark hover:text-black-tertiary hover:border-black-tertiary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Coupons Grid */}
      <div className="py-6">
        <div className="grid gap-6 md:grid-cols-2">
          {filterCoupons().map((coupon) => (
            <div
              key={coupon.id}
              className="border border-gray-light rounded-lg p-6 space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-black-quaternary">
                    {coupon.discount} OFF
                  </h3>
                  <p className="text-gray-dark text-sm mt-1">
                    {coupon.description}
                  </p>
                </div>
                <span className="px-3 py-1 bg-gray-light text-black-quaternary rounded-full text-sm font-medium">
                  {coupon.code}
                </span>
              </div>

              <div className="space-y-2 text-sm text-gray-dark">
                <p>Valor mínimo: R$ {coupon.minPurchase.toFixed(2)}</p>
                <p>
                  Válido até: {new Date(coupon.validUntil).toLocaleDateString()}
                </p>
              </div>

              <button
                className="w-full mt-4 px-4 py-2 bg-black-tertiary text-whit-primary rounded-md hover:bg-black-secondary focus:outline-none focus:ring-2 focus:ring-black-quaternary focus:ring-offset-2 transition-colors"
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
