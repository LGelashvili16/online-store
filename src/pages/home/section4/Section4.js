import styles from './Section4.module.css';
import { section4Data } from '../../../data/home/homeData';
import ClothesCard from './ClothesCard';

const Section4 = () => {
  return (
    <section className={styles['section4']}>
      <h2>Recommended items</h2>
      <div className={styles['section4-wrapper']}>
        {section4Data.map((prod, i) => {
          return (
            <ClothesCard
              key={i}
              image={prod.image}
              price={prod.price}
              description={prod.description}
              description2={prod.description2}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Section4;
