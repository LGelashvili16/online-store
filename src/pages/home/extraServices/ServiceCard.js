import { useNavigate } from 'react-router-dom';
import styles from './ServiceCard.module.css';

const ServiceCard = (props) => {
  const navigate = useNavigate();

  const cardHandler = () => {
    navigate(props.link);
  };

  return (
    <div className={styles['service-card']} onClick={cardHandler}>
      <div className={styles['card-image']}>
        <img src={props.image} alt="" />
        <div className={styles['card-icon']}>
          <img src={props.icon} alt="" />
        </div>
      </div>
      <div className={styles['card-title']}>
        <h3>{props.title}</h3>
        <h3>{props.title2}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
