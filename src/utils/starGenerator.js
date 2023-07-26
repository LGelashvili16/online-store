export const generateStars = (starsToBeFilled, filledImg, emptyImg) => {
  const arr = [];

  for (let i = 1; i <= 5; i++) {
    arr.push(
      <img
        key={i}
        src={i <= starsToBeFilled ? filledImg : emptyImg}
        alt="star"
      />
    );
  }
  return arr;
};
