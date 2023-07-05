import './ServiceCard.css';

const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <div className="card-image">
        <img src={props.image} alt="" />
        <div className="card-icon">
          <img src={props.icon} alt="" />
        </div>
      </div>
      <div className="card-title">
        <h3>{props.title}</h3>
        <h3>{props.title2}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
