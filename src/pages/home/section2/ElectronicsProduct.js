import styles from './ElectronicsProduct.module.css';

const ElectronicsProduct = (props) => {
  return (
    <div className={styles['section2-row3-product']}>
      <div className={styles['row3-product-title']}>
        <h3>{props.title}</h3>
        <p>
          From
          <br />
          USD {props.price}
        </p>
        <p className={styles['row3-product-price-resp']}>
          From USD {props.price}
        </p>
      </div>
      <div className={styles['row3-product-image']}>
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
};

export default ElectronicsProduct;
