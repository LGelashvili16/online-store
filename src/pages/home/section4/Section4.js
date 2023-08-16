import styles from './Section4.module.css';
import { recommended } from '../../../data/home/homeData';
import ClothesCard from './ClothesCard';

const Section4 = () => {
  return (
    <section className={styles['section4']}>
      <h2>Recommended items</h2>
      <div className={styles['section4-wrapper']}>
        {recommended.map((prod, i) => {
          return (
            <ClothesCard
              key={i}
              image={prod.images[0]}
              price={prod.price}
              description={prod.description}
              description2={prod.description2}
              product={prod}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Section4;
