import { useNavigate } from 'react-router-dom';
import styles from './HomeOutdoorProduct.module.css';

const HomeOutdoorProduct = (props) => {
  const navigate = useNavigate();

  const categoryHandler = (name) => {
    if (!props.isDragging) {
      navigate(`home-and-outdoor/${name.replaceAll(' ', '-')}`);
    }
  };

  return (
    <div
      className={styles['section2-row2-product']}
      onClick={() => {
        categoryHandler(props.title.toLowerCase());
      }}
    >
      <div className={styles['row2-product-title']}>
        <h3>{props.title}</h3>
        <p>
          From
          <br />
          USD {props.price}
        </p>
        <p className={styles['row2-product-price-resp']}>
          From USD {props.price}
        </p>
      </div>
      <div className={styles['row2-product-image']}>
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
};

export default HomeOutdoorProduct;
