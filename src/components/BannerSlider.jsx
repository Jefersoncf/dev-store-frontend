import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoChevronBack, IoChevronForward, IoExpand } from "react-icons/io5";

export const BannerSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [bannerSwiper, setBannerSwiper] = useState(null);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="container mx-auto relative overflow-hidden banner my-8"
    >
      <Swiper
        onSwiper={setBannerSwiper}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        }}
        lazy="true"
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="banner-slider"
      >
        <SwiperSlide>
          <div>
            <img
              src="https://dafitistatic.dafiti.com.br/cms/MASC/2024_02_16_10_58_28_premium_04.png"
              className="w-full h-full"
              alt="Banner 1"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://dafitistatic.dafiti.com.br/cms/merchan/geral/2024_10_23_11_12_26_D1V-destaque-desk-SALE_MP-1920x640.png"
              className="w-full h-full"
              alt="Banner 2"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden">
            <img
              src="https://dafitistatic.dafiti.com.br/cms/merchan/geral/2024_11_11_17_25_28_desk-1920x640_(30).png"
              className="w-full h-full"
              alt="Banner 3"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="https://dafitistatic.dafiti.com.br/cms/merchan/masculino/2024_11_13_15_13_17_DESK-_ADIDAS_MASC.png"
              className="w-full h-full"
              alt="Banner 4"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <button
        onClick={() => bannerSwiper?.slidePrev()}
        className={`banner-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow-lg ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <IoChevronBack className="text-2xl" />
      </button>

      {/* Botão Próximo */}
      <button
        onClick={() => bannerSwiper?.slideNext()}
        className={`banner-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white text-black p-3 rounded-full shadow-lg ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <IoChevronForward className="text-2xl" />
      </button>
    </div>
  );
};
