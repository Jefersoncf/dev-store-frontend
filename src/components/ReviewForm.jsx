import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const ReviewForm = ({ onSubmitReview }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!username.trim() || !message.trim() || rating === 0) {
      alert("Por favor, preencha todos os campos e selecione uma avaliação.");
      return;
    }

    // Prepare review object
    const newReview = {
      name: username,
      text: message,
      rating: rating,
      date: new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };

    onSubmitReview(newReview);

    // Reset form
    setUsername("");
    setMessage("");
    setRating(0);
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      return (
        <button
          type="button"
          key={index}
          onClick={() => setRating(starValue)}
          onMouseEnter={() => setHoveredRating(starValue)}
          onMouseLeave={() => setHoveredRating(0)}
          className="focus:outline-none "
        >
          <FaStar
            className={`w-8 h-8 cursor-pointer transition ${
              (hoveredRating || rating) >= starValue
                ? "text-yellow-primary fill-current"
                : "text-gray-medium"
            }`}
          />
        </button>
      );
    });
  };

  return (
    <div className="bg-white border border-gray-medium rounded-lg p-6 mt-6">
      <h3 className="text-2xl font-semibold text-black-quaternary mb-4">
        Deixe sua Avaliação
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-base text-gray-dark font-medium">
            Nome
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Seu nome"
            className="w-full border border-gray-medium rounded-md px-3 py-2 focus:outline-none focus:border-gray-dark"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-base text-gray-dark font-medium">
            Avaliação
          </label>
          <div className="flex items-center space-x-2">
            {renderStars()}
            {rating > 0 && (
              <span className="ml-2 text-gray-medium">
                {rating} de 5 estrelas
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-2 text-base text-gray-dark font-medium">
            Comentário
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Conte sua experiência com o produto..."
            rows="4"
            className="w-full border border-gray-medium rounded-md px-3 py-2 focus:outline-none focus:border-gray-dark"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full max-w-sm bg-black-tertiary text-whit-primary py-3 rounded-lg hover:bg-black-secondary transition ease-in-out duration-300"
        >
          Enviar Avaliação
        </button>
      </form>
    </div>
  );
};
