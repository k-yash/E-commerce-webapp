export const Rating = ({ rating }) => {
  return (
    <>
      {rating >= 3 ? (
        <div className="compact-rating above-avg">
          {rating} <span className="fa fa-star "></span>
        </div>
      ) : (
        <div className="compact-rating below-avg">
          {rating} <span className="fa fa-star "></span>
        </div>
      )}
    </>
  );
};
