import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa6";

export const Sidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000,
  });

  const productCategories = [
    {
      name: "Genero",
      subcategories: ["Feminino", "Masculino", "Menina", "Menino"],
    },
    {
      name: "Tamanho",
      subcategories: ["PP", "P", "M", "G", "GG", "XG"],
    },
    {
      name: "Modelagem",
      subcategories: ["Regular", "Reta", "Slim", "Bulky"],
    },
    {
      name: "Comprimento",
      subcategories: ["Longo", "Medio"],
    },
    {
      name: "Estampa",
      subcategories: ["Animes", "Estampada", "Lisa", "Logo"],
    },
  ];

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const handleFilterChange = (category, subcategory) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: {
        ...(prev[category] || {}),
        [subcategory]: !(prev[category]?.[subcategory] || false),
      },
    }));
  };

  const handlePriceRangeChange = (type, value) => {
    setPriceRange((prev) => ({
      ...prev,
      [type]: Number(value),
    }));
  };

  return (
    <>
      <div className="flex-none basis-[18%] sidebar">
        <div className="filter-box">
          <div className="flex items-center mb-4">
            <FiFilter className="mr-2 text-black-tertiary size-5" />
            <h2 className="text-lg font-semibold text-black-tertiary uppercase">
              Filtros
            </h2>
          </div>
          {/* Filtro de Preço */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-black-quaternary">
                Faixa de Preço
              </span>
            </div>
            <div className="flex space-x-2">
              <div className="flex-1">
                <label className="block text-xs text-gray-dark mb-1">
                  Mínimo
                </label>
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) =>
                    handlePriceRangeChange("min", e.target.value)
                  }
                  className="w-full p-2 border border-gray-medium rounded text-sm "
                  min="0"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-dark mb-1">
                  Máximo
                </label>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) =>
                    handlePriceRangeChange("max", e.target.value)
                  }
                  className="w-full p-2 border border-gray-medium rounded text-sm"
                  min="0"
                />
              </div>
            </div>
            <div className="mt-2">
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange.max}
                onChange={(e) => handlePriceRangeChange("max", e.target.value)}
                className="w-full h-2 bg-gray-medium rounded-lg appearance-none cursor-pointer range-slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span className="text-gray-dark">R$ 0</span>
                <span className="text-gray-dark">R$ 2000</span>
              </div>
            </div>
          </div>

          {productCategories.map((category) => (
            <div key={category.name} className="mb-4">
              <div
                className="flex items-center justify-between cursor-pointer hover:bg-gray-light transition-colors duration-300 p-2 rounded"
                onClick={() => toggleCategory(category.name)}
              >
                <span className="font-medium text-black-quaternary">
                  {category.name}
                </span>
                {expandedCategories[category.name] ? (
                  <FaMinus className="text-black-quaternary" size={20} />
                ) : (
                  <FaPlus className="text-black-quaternary" size={20} />
                )}
              </div>

              {expandedCategories[category.name] && (
                <div className="pl-4 mt-2">
                  {category.subcategories.map((subcategory) => (
                    <div
                      key={subcategory}
                      className="flex items-center mb-2  cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={`${category.name}-${subcategory}`}
                        className="mr-2 custom-checkbox w-4 h-4"
                        checked={
                          selectedFilters[category.name]?.[subcategory] || false
                        }
                        onChange={() =>
                          handleFilterChange(category.name, subcategory)
                        }
                      />
                      <label
                        htmlFor={`${category.name}-${subcategory}`}
                        className="text-sm text-gray-dark  cursor-pointer"
                      >
                        {subcategory}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
