import style from './ExtraServices.module.css';
import {
  section5ServicesData,
  section5SuppliersData,
} from '../../../data/home/homeData';
import ServiceCard from './ServiceCard';
import FlagCard from './FlagCard';

const ExtraServices = () => {
  return (
    <section className={style['section5']}>
      <h2 className={style['section5-services']}>Our extra services</h2>
      <div className={style['section5-services-cards']}>
        {section5ServicesData.map((card, i) => {
          return (
            <ServiceCard
              key={i}
              image={card.image}
              icon={card.icon}
              title={card.title}
              title2={card.title2}
            />
          );
        })}
      </div>

      <h2 className={style['section5-suppliers']}>Suppliers by region</h2>
      <div className={style['section5-flags']}>
        {section5SuppliersData.map((country, i) => {
          return (
            <FlagCard
              key={i}
              flag={country.flag}
              name={country.name}
              site={country.site}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ExtraServices;
