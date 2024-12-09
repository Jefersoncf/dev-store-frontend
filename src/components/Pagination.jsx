import React, { useMemo, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export const Pagination = ({
  totalItems = 0,
  itemsPerPage = 8,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage]
  );

  const paginate = (pageNumber) => {
    const newPage = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(newPage);
    onPageChange(newPage); // Notifica o componente pai sobre a mudança de página
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-5">
      {/* Botão Anterior */}
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md bg-gray-light hover:bg-gray-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoChevronBack className="w-5 h-5 text-black-quaternary" />
      </button>

      {/* Números de Página */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => paginate(index + 1)}
          className={`w-9 h-9 rounded-md ${
            currentPage === index + 1
              ? "bg-black-quaternary text-whit-primary"
              : "bg-gray-light text-black-quaternary hover:bg-gray-medium transition-colors duration-300"
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Botão Próximo */}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md bg-gray-light hover:bg-gray-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoChevronForward className="w-5 h-5 text-black-quaternary" />
      </button>
    </div>
  );
};
