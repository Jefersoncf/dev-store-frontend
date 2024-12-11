import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-primary" : "text-gray-dark"
        }`}
        fill={index < rating ? "currentColor" : "none"}
      />
    ));
  };

  const calculateAverageRating = () => {
    if (!product.comments || product.comments.length === 0) return 0;
    const totalRating = product.comments.reduce(
      (sum, comment) => sum + comment.rating,
      0
    );
    return (totalRating / product.comments.length).toFixed(1);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="p-4">
            <p className="text-sm text-gray-dark">{product.description}</p>
            {product.additionalDetails && (
              <div className="mt-4">
                <h4 className="font-semibold text-base mb-2">
                  Detalhes Adicionais:
                </h4>
                <ul className="list-disc pl-5">
                  {product.additionalDetails.map((detail, index) => (
                    <li key={index} className="text-sm text-gray-dark">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      case "information":
        return (
          <div className="px-4 pb-4">
            <table className="w-full">
              <tbody>
                {product.specifications &&
                  Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b border-b-gray-medium">
                      <td className="py-2 text-sm text-black-quaternary font-medium">
                        {key}
                      </td>
                      <td className="py-2 text-sm text-gray-dark">{value}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        );
      case "comments":
        return (
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="text-6xl font-bold mr-4">
                {calculateAverageRating()}
              </div>
              <div>
                <div className="flex">
                  {renderStars(Math.round(calculateAverageRating()))}
                </div>
                <p className="text-gray-dark text-xs">
                  {product.comments
                    ? `Baseado em ${product.comments.length} avaliações`
                    : "Sem avaliações"}
                </p>
              </div>
            </div>

            {product.comments &&
              product.comments.map((comment, index) => (
                <div key={index} className="border-b border-b-gray-medium py-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-black-quaternary text-base font-semibold">
                      {comment.name}
                    </div>
                    <div className="flex">{renderStars(comment.rating)}</div>
                  </div>
                  <p className="text-gray-dark text-sm">{comment.text}</p>
                  <p className="text-xs text-gray-medium mt-2">
                    {comment.date}
                  </p>
                </div>
              ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-10 border border-gray-medium rounded-lg overflow-hidden">
      <div className="flex border-b border-b-gray-medium">
        {[
          { key: "description", label: "Descrição" },
          { key: "information", label: "Informações" },
          { key: "comments", label: "Comentários" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-3 font-semibold transition uppercase ${
              activeTab === tab.key
                ? "bg-black-tertiary text-whit-primary"
                : "hover:bg-gray-light"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {renderTabContent()}
    </div>
  );
};
