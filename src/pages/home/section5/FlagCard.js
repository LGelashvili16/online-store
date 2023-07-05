import './FlagCard.css';

const FlagCard = (props) => {
  return (
    <div className="flag-card">
      <img src={props.flag} alt={props.name} />
      <div className="flag-card-country">
        <h4>{props.name}</h4>
        <p>{props.site}</p>
      </div>
    </div>
  );
};

export default FlagCard;
