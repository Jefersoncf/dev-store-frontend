import React from "react";
import { FaStar } from "react-icons/fa";

export const RatingStars = ({ rating, totalReviews }) => {
  // const totalReviews = Math.floor(rating);
  return (
    <div className="flex items-center space-x-1 text-xs">
      <span className="text-yellow-primary">
        <FaStar className="h-4 w-4" />
      </span>
      <span className="font-medium text-black-foreground">{rating}/5</span>
      <span className="text-black-foreground">({totalReviews} reviews)</span>
    </div>
  );
};
