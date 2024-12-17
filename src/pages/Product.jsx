import React, { useEffect, useMemo, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { BreadCrumb } from "../components/BreadCrumb";
import { BannerTextBox } from "../components/BannerTextBox";
import Grid2 from "../assets/grid-2.png";
import Grid3 from "../assets/grid-3.png";
import Grid4 from "../assets/grid-4.png";
import { FiChevronDown } from "react-icons/fi";
import { ProductItem } from "../components/ProductItem";
import { Pagination } from "../components/Pagination";
import { products } from "../data";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { ProductCard } from "../components/ProductCard";

export const Product = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [grid, setGrid] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filterOptions = [
    {
      value: "popular",
      label: "Mais Populares",
    },
    {
      value: "lowest-price",
      label: "Menor Preço",
    },
    {
      value: "newest",
      label: "Novidades",
    },
    {
      value: "highest-discount",
      label: "Maior Desconto",
    },
  ];

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);

    // Opcional: Callback para o componente pai
    if (onFilterChange) {
      onFilterChange(selectedValue);
    }
  };

  // Cálculo para produtos exibidos na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
  console.log(currentProducts);

  return (
    <>
      <BreadCrumb title="Produtos" />
      <BannerTextBox />
      <section className="container mx-auto mt-6 product-page">
        <div className="flex justify-between">
          <Sidebar />
          <div className="flex-none basis-[80%]">
            <div className="show-grid w-full flex items-center py-1 px-3 mb-5 rounded-lg bg-gray-light">
              <div className="w-full flex items-center gap-1 ">
                <img
                  src={Grid2}
                  onClick={() => setGrid(2)}
                  className={`p-2 rounded-lg size-10 cursor-pointer hover:bg-gray-medium transition duration-300 ${
                    grid === 2 ? "bg-gray-medium" : ""
                  }`}
                  alt="Grid 2"
                  title="Vizualizar duas colunas"
                />
                <img
                  src={Grid3}
                  onClick={() => setGrid(3)}
                  className={`p-2 rounded-lg size-10 cursor-pointer hover:bg-gray-medium transition duration-300 ${
                    grid === 3 ? "bg-gray-medium" : ""
                  }`}
                  alt="Grid 3"
                  title="Vizualizar três colunas"
                />
                <img
                  src={Grid4}
                  onClick={() => setGrid(4)}
                  className={`p-2 rounded-lg size-[42px] cursor-pointer hover:bg-gray-medium transition duration-300 ${
                    grid === 4 ? "bg-gray-medium" : ""
                  }`}
                  alt="Grid 4"
                  title="Vizualizar quatro colunas"
                />
              </div>

              <div className="w-[350px] flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-gray-dark text-sm">123</span>
                  <span className="text-gray-dark text-sm">Produtos</span>
                </div>
                <div className="w-full">
                  <div className="relative text-sm">
                    <select
                      value={selectedFilter}
                      onChange={handleFilterChange}
                      className="appearance-none w-full border border-gray-medium  rounded-md pl-3 pr-10 py-2 text-gray-dark focus:outline-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Ordenar por
                      </option>
                      {filterOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          className="text-gray-dark "
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-dark">
                      <FiChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProductItem grid={grid} products={currentProducts} />

            <div className="flex justify-end mt-5">
              {/* Componente de paginação */}
              <Pagination
                totalItems={products.length} // Número total de produtos vindo da API
                itemsPerPage={itemsPerPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
