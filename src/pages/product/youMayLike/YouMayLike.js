import { youMayLikeData } from '../../../data/productPage/productPage';
import styles from './YouMayLike.module.css';
import YouMayLikeCard from './YouMayLikeCard';

const YouMayLike = () => {
  return (
    <div className={styles['youMayLike-container']}>
      <h3>You may like</h3>

      <div className={styles['youMayLike-cards']}>
        {youMayLikeData.map((data, i) => {
          return (
            <YouMayLikeCard
              key={i}
              image={data.image}
              price={data.price}
              title={data.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default YouMayLike;
