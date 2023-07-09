import style from './ClothesCard.module.css';

const ClothesCard = (props) => {
  return (
    <div className={style['clothes-card']}>
      <div className={style['clothes-card-img']}>
        <img src={props.image} alt="" />
      </div>
      <h4 className={style['clothes-card-price']}>{props.price}</h4>
      <div className={style['clothes-card-description']}>
        <p>{props.description}</p>
        <p>{props.description2}</p>
      </div>
    </div>
  );
};

export default ClothesCard;
