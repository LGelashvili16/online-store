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
        return (
          <ProductItem
            layout={layout}
            key={i}
            image={prod.image}
            title={prod.title}
            price={prod.price}
            oldPrice={prod.oldPrice}
            rating={prod.rating}
            orders={prod.orders}
            shipping={prod.shipping}
            description={prod.description}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
