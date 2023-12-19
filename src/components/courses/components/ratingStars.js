import React from 'react';

const RatingStars = ({ totalRating }) => {
  const renderStars = () => {
    const stars = [];
    const filledStars = Math.floor(totalRating);
    const remainingStar = totalRating - filledStars;

    // Render filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i}>&#9733;</span>); // Filled star
    }

    // Render remaining star (if any)
    if (remainingStar > 0) {
      const percentageFilled = (remainingStar * 100).toFixed(0);
      stars.push(
        <span key="remaining" style={{ width: `${percentageFilled}%`, overflow: 'hidden' }}>
          &#9733;
        </span>
      );
    }

    // Render empty stars to fill up to 5 stars
    const remainingEmptyStars = 5 - filledStars - (remainingStar > 0 ? 1 : 0);
    for (let i = 0; i < remainingEmptyStars; i++) {
      stars.push(<span key={`empty-${i}`}>&#9734;</span>); // Empty star
    }

    return stars;
  };

  return <div className="rating-stars">{renderStars()}</div>;
};

export default RatingStars;
