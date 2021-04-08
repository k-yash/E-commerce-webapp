export const Rating = ({ rating }) => {
  return (
    <>
      {rating >= 3 ? (
        <div class="compact-rating above-avg">
          {rating} <span class="fa fa-star "></span>
        </div>
      ) : (
        <div class="compact-rating below-avg">
          {rating} <span class="fa fa-star "></span>
        </div>
      )}
    </>
  );
};
