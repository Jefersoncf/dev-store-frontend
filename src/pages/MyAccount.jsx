import { useState } from "react";
import { Profile } from "../components/Profile";
import { Addresses } from "../components/Addresses";
import { Orders } from "./Orders";
import { Coupon } from "../components/Coupon";

export const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "addresses":
        return <Addresses />;
      case "orders":
        return <Orders />;
      case "coupons":
        return <Coupon />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="container mx-auto mt-6 bg-gray-light">
      <div className="flex justify-between">
        {/* Sidebar */}
        <aside className="w-[20%] bg-whit-primary">
          <div className="p-4">
            <h2 className="text-xl font-bold text-black-quaternary mb-6">
              Minha Conta
            </h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "profile"
                    ? "bg-gray-light text-black-tertiary"
                    : "text-black-tertiary hover:bg-gray-light"
                }`}
              >
                Perfil
              </button>
              <button
                onClick={() => setActiveTab("addresses")}
                className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "addresses"
                    ? "bg-gray-light text-black-quaternary"
                    : "text-black-quaternary hover:bg-gray-light"
                }`}
              >
                Endereços
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "orders"
                    ? "bg-gray-light text-black-quaternary"
                    : "text-black-quaternary hover:bg-gray-light"
                }`}
              >
                Minhas Compras
              </button>
              <button
                onClick={() => setActiveTab("coupons")}
                className={`w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "coupons"
                    ? "bg-gray-light text-black-quaternary"
                    : "text-black-quaternary hover:bg-gray-light"
                }`}
              >
                Meus Cupons
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-none basis-[80%] p-8  bg-whit-primary">
          <div>{renderContent()}</div>
        </main>
      </div>
    </div>
  );
};
