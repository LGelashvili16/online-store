import styles from './ProductsList.module.css';
import ProductItem from './ProductItem';

const ProductsList = ({ layout, products }) => {
  return (
    <div
      className={`${styles['list-container']} ${
        layout ? styles['flex'] : styles['grid']
      }`}
    >
      {products.map((prod, i) => {
        return <ProductItem key={i} product={prod} layout={layout} />;
      })}
    </div>
  );
};

export default ProductsList;
