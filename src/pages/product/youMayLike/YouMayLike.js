import { useRecommendedProducts } from '../../../contexts/ProductsContext';
import { youMayLikeData } from '../../../data/productPage/productPage';
import styles from './YouMayLike.module.css';
import YouMayLikeCard from './YouMayLikeCard';

const YouMayLike = () => {
  const [, youMayLikeProducts] = useRecommendedProducts();

  return (
    <div className={styles['youMayLike-container']}>
      <h3>You may like</h3>

      <div className={styles['youMayLike-cards']}>
        {youMayLikeProducts.map((data, i) => {
          return <YouMayLikeCard key={i} prod={data} />;
        })}
      </div>
    </div>
  );
};

export default YouMayLike;
