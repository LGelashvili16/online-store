import { useNavigate } from 'react-router-dom';
import { homeOutdoorCategories } from '../../data/homeAndOutdoor/homeAndOutdoorData';
import styles from './HomeAndOutdoorPage.module.css';
import Breadcrumbs from '../../components/Breadcrumbs';

const HomeAndOutdoorPage = () => {
  const navigate = useNavigate();

  const categoryHandler = (name) => {
    navigate(`${name.replaceAll(' ', '-')}`);
  };

  return (
    <div className={styles['container']}>
      <Breadcrumbs />

      <h3 className={styles['page-title']}>Home and outdoor</h3>

      <div className={styles['category-cards']}>
        {homeOutdoorCategories.map((category) => {
          return (
            <div
              key={category.id}
              className={styles['category-card']}
              onClick={() => {
                categoryHandler(category.title.toLowerCase());
              }}
            >
              <h3 className={styles['category-card-title']}>
                {category.title}
              </h3>

              <div className={styles['category-card-about']}>
                <div className={styles['category-card-image']}>
                  <img src={category.images[0]} alt="" />
                </div>

                <div className={styles['category-card-info']}>
                  <p className={styles['category-card-price']}>
                    From: ${category.price}
                  </p>

                  <p className={styles['category-card-description']}>
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeAndOutdoorPage;
