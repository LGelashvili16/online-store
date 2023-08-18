import { useNavigate } from 'react-router-dom';
import style from './ClothesCard.module.css';

const ClothesCard = ({ product }) => {
  const navigate = useNavigate();

  const productClickHandler = (e) => {
    navigate(`product/${`${product.path}`}/${parseInt(product.id)}`);
  };

  return (
    <div className={style['clothes-card']} onClick={productClickHandler}>
      <div className={style['clothes-card-img']}>
        <img src={product.images[0]} alt="" />
      </div>
      <h4 className={style['clothes-card-price']}>{product.price}</h4>
      <div className={style['clothes-card-description']}>
        <p>{product.description}</p>
        <p>{product.description2}</p>
      </div>
    </div>
  );
};

export default ClothesCard;
