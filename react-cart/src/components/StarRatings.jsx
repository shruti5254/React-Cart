
import { useState } from 'react';
import { GoStarFill } from "react-icons/go"; 

const StarRating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating || 0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    if (onRatingChange) {
      onRatingChange(index);
    }
  };

  return (
    <div className="star-rating flex flex-row items-center gap-1.5">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            style={{ cursor: 'pointer', fontSize: '18px', color: index <= (hover || rating) ? '#facc15' : '#7D8184' }}
          >
            <GoStarFill /> {/* Unicode star character */}
          </span>
        );
      })}
      <span className="text-base text-[#7D8184] font-semibold ml-1">({rating})</span>
    </div>
  );
};

export default StarRating;