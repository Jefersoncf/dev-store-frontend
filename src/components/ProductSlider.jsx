import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoChevronBack, IoChevronForward, IoExpand } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { RatingStars } from "./RatingStars";

const items = [
  {
    id: 1,
    name: "Camiseta Básica",
    price: "89,90",
    oldPrice: "129,90",
    image:
      "https://t-static.dafiti.com.br/nYV1_mLGVD3HjieqXNpkjRsn6-0=/fit-in/215x312/static.dafiti.com.br/p/aramis-t%25c3%25aanis-aramis-calce-f%25c3%25a1cil-verde-5706-44438231-2-product.jpg",
  },
  {
    id: 2,
    name: "Camiseta Básica",
    price: "89,90",
    oldPrice: "129,90",
    image:
      "https://t-static.dafiti.com.br/nYV1_mLGVD3HjieqXNpkjRsn6-0=/fit-in/215x312/static.dafiti.com.br/p/aramis-t%25c3%25aanis-aramis-calce-f%25c3%25a1cil-verde-5706-44438231-2-product.jpg",
  },
  {
    id: 3,
    name: "Camiseta Básica",
    price: "89,90",
    oldPrice: "129,90",
    image:
      "https://t-static.dafiti.com.br/nYV1_mLGVD3HjieqXNpkjRsn6-0=/fit-in/215x312/static.dafiti.com.br/p/aramis-t%25c3%25aanis-aramis-calce-f%25c3%25a1cil-verde-5706-44438231-2-product.jpg",
  },
  {
    id: 4,
    name: "Camiseta Básica",
    price: "89,90",
    oldPrice: "129,90",
    image:
      "https://t-static.dafiti.com.br/nYV1_mLGVD3HjieqXNpkjRsn6-0=/fit-in/215x312/static.dafiti.com.br/p/aramis-t%25c3%25aanis-aramis-calce-f%25c3%25a1cil-verde-5706-44438231-2-product.jpg",
  },
];

export const ProductSlider = ({ rating, totalReviews }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [carouselSwiper, setCarouselSwiper] = useState(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        onSwiper={setCarouselSwiper}
        slidesPerView={4}
        spaceBetween={20}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1320: { slidesPerView: 4 },
        }}
        className="product-carousel"
      >
        <div className="w-fit grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-5 gap-x-8 mb-4">
          {items.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="w-[315px] relative group">
                {/* Badge */}
                <span className="absolute top-4 left-4 bg-black-quaternary text-whit-primary text-xs font-bold py-1 px-2 rounded">
                  -20%
                </span>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
                {/* Botões Expandir e Favoritar */}
                <button
                  title="Expandir"
                  className="absolute top-4 right-4 p-2 bg-whit-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                >
                  <IoExpand className="w-5 h-5 text-black-foreground hover:scale-110 hover:text-black-secondary transition-colors" />
                </button>
                <button
                  title="Adicionar aos favoritos"
                  className="absolute top-14 right-4 p-2 bg-whit-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                >
                  <FiHeart className="w-5 h-5 text-black-foreground hover:scale-110 hover:text-red-primary transition-colors" />
                </button>

                <div className="py-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-black-tertiary  ">
                      {product.name}
                    </h3>
                    <RatingStars rating={rating} totalReviews={totalReviews} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-black-tertiary">
                      R$ {product.price}
                    </span>
                    <span className="text-sm text-gray-dark line-through">
                      R$ {product.oldPrice}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <button
        onClick={() => carouselSwiper?.slidePrev()}
        className={`carousel-prev absolute top-[36%] left-4 transform -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow-lg ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <IoChevronBack className="text-2xl" />
      </button>

      {/* Botão Próximo */}
      <button
        onClick={() => carouselSwiper?.slideNext()}
        className={`carousel-next absolute top-[36%] right-4 transform -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow-lg ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <IoChevronForward className="text-2xl" />
      </button>
    </div>
  );
};
