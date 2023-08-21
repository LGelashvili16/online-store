import { useRecommendedProducts } from '../../contexts/ProductsContext';
import styles from './RelatedProducts.module.css';
import RelatedProductsCard from './RelatedProductsCard';

const RelatedProducts = () => {
  const [, , relatedProducts] = useRecommendedProducts();
  return (
    <div className={styles['related-products']}>
      <h3>Related products</h3>
      <div className={styles['related-products-cards']}>
        {relatedProducts.map((prod, i) => {
          return <RelatedProductsCard key={i} prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
