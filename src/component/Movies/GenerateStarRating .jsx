import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import necessary icons

const generateStarRating = (rating) => {
  const ratingStar = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return ratingStar;
};

export default generateStarRating;
