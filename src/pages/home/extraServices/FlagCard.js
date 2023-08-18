import styles from './FlagCard.module.css';

const FlagCard = (props) => {
  return (
    <div className={styles['flag-card']}>
      <img src={props.flag} alt={props.name} />
      <div className={styles['flag-card-country']}>
        <h4>{props.name}</h4>
        <p>{props.site}</p>
      </div>
    </div>
  );
};

export default FlagCard;
