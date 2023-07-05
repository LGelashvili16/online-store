import './Section4.css';
import { section4Data } from '../../../data/home/homeData';
import ClothesCard from './ClothesCard';

const Section4 = () => {
  return (
    <section className="section4">
      <h2>Recommended items</h2>
      <div className="section4-wrapper">
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
