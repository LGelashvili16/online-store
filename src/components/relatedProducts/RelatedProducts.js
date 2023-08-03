import { relatedProdutcs } from '../../data/productPage/productPage';
import styles from './RelatedProducts.module.css';
import RelatedProductsCard from './RelatedProductsCard';

const RelatedProducts = () => {
  return (
    <div className={styles['related-products']}>
      <h3>Related products</h3>
      <div className={styles['related-products-cards']}>
        {relatedProdutcs.map((prod, i) => {
          return (
            <RelatedProductsCard
              key={i}
              image={prod.image}
              title={prod.title}
              price={prod.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
