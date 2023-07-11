import styles from './ProductItem.module.css';
import favoriteIcon from '../../../assets/mobile-accessories/favorite.svg';
import filledStarImg from '../../../assets/mobile-accessories/filled-star.svg';
import emptyStarImg from '../../../assets/mobile-accessories/empty-star.svg';

const ProductItem = (props) => {
  return (
    <div
      className={`${props.layout ? styles['product'] : styles['g-product']}`}
    >
      <div
        className={`${
          props.layout ? styles['product-image'] : styles['g-product-image']
        }`}
      >
        <img src={props.image} alt="product images" />
      </div>

      <div
        className={`${
          props.layout ? styles['product-details'] : styles['g-product-details']
        }`}
      >
        <h4
          className={`${
            props.layout
              ? styles['product-details-title']
              : styles['g-product-details-title']
          }`}
        >
          {props.title}
        </h4>

        <div
          className={`${
            props.layout ? styles['product-price'] : styles['g-product-price']
          }`}
        >
          <h2>{props.price}</h2>
          <h3>{props.oldPrice}</h3>
        </div>

        <div className={styles['product-rating']}>
          <div className={styles['product-rating-stars']}>
            <img src={filledStarImg} alt="star" />
            <img src={filledStarImg} alt="star" />
            <img src={filledStarImg} alt="star" />
            <img src={filledStarImg} alt="star" />
            <img src={emptyStarImg} alt="star" />
            <p>7.5</p>
          </div>

          <div
            className={`${
              props.layout ? styles['product-rating-dot'] : styles['hidden']
            }`}
          ></div>

          <p
            className={`${
              props.layout ? styles['product-rating-orders'] : styles['hidden']
            }`}
          >
            {props.orders} orders
          </p>

          <div
            className={`${
              props.layout ? styles['product-rating-dot'] : styles['hidden']
            }`}
          ></div>

          <p
            className={`${
              props.layout
                ? styles['product-rating-shipping']
                : styles['hidden']
            }`}
          >
            {props.shipping}
          </p>
        </div>

        <p
          className={`${
            props.layout ? styles['product-description'] : styles['hidden']
          }`}
        >
          {props.description}
        </p>
        <button
          className={`${
            props.layout ? styles['product-details-btn'] : styles['hidden']
          }`}
        >
          View details
        </button>
      </div>

      <div
        className={`${
          props.layout
            ? styles['product-favorite']
            : styles['g-product-favorite']
        }`}
      >
        <img src={favoriteIcon} alt="favorite" />
      </div>
    </div>
  );
};

export default ProductItem;
