import './ClothesCard.css';

const ClothesCard = (props) => {
  return (
    <div className="clothes-card">
      <div className="clothes-card-img">
        <img src={props.image} alt="" />
      </div>
      <h4 className="clothes-card-price">{props.price}</h4>
      <div className="clothes-card-description">
        <p>{props.description}</p>
        <p>{props.description2}</p>
      </div>
    </div>
  );
};

export default ClothesCard;
