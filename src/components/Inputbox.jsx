import React from "react";
import { FiSearch } from "react-icons/fi";

export const Inputbox = ({
  value,
  onChange,
  placeholder = "Pesquisar produtos",
  icon: Icon = FiSearch,
  iconPosition = "right",
  width = "max-w-md",
  variant = "default",
  disabled = false,
  onSubmit,
  className = "",
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSubmit) {
      onSubmit(value);
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "filled":
        return "bg-gray-100 border-transparent hover:bg-gray-dark";
      case "outline":
        return "bg-transparent border-gray-dark hover:border-gray-medium";
      default:
        return "bg-white border-gray-dark hover:border-gray-medium";
    }
  };

  return (
    <div className={`relative w-full ${width} ${className}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full h-10
          ${iconPosition === "left" ? "pl-12 pr-4" : "pl-4 pr-12"}
          rounded-lg border
          ${getVariantStyles()}
          focus:outline-none focus:ring-2 focus:ring-gray-dark focus:border-transparent
          disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
          transition-colors duration-200
        `}
      />
      <div
        className={`absolute ${
          iconPosition === "left" ? "left-3" : "right-3"
        } top-1/2 transform -translate-y-1/2 text-gray-medium`}
      >
        <FiSearch
          size={20}
          className="cursor-pointer transition-colors duration-200 hover:text-gray-dark"
        />
      </div>
    </div>
  );
};
