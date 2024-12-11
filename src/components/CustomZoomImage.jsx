import React, { useState } from "react";

export const CustomZoomImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");

  const handleMouseMove = (event) => {
    const { offsetX, offsetY, target } = event.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    // Calcula a posição relativa do mouse na imagem (em %)
    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    // Atualiza o ponto de origem do zoom
    setTransformOrigin(`${xPercent}% ${yPercent}%`);
  };

  return (
    <div
      className="relative w-full h-[480px] rounded-lg overflow-hidden cursor-zoom-in"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-300 ${
          isZoomed ? "scale-150 cursor-zoom-out" : "scale-100"
        }`}
        style={{ transformOrigin }}
      />
    </div>
  );
};
