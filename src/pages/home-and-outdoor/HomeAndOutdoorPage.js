import { useNavigate } from 'react-router-dom';
import { homeOutdoorCategories } from '../../data/homeAndOutdoor/homeAndOutdoorData';
import styles from './HomeAndOutdoorPage.module.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Helmet } from 'react-helmet-async';
import React from 'react';

const HomeAndOutdoorPage = () => {
  const navigate = useNavigate();

  const categoryHandler = (name) => {
    navigate(`${name.replaceAll(' ', '-')}`);
  };

  return (
    <>
      <Helmet>
        <title>Home and Outdoor</title>
        <meta name="description" content="shop home and outdoor items" />
        <link rel="canonical" href="/online-store/home-and-outdoor" />
      </Helmet>

      <div className={styles['container']}>
        <Breadcrumbs />

        <h1 className={styles['page-title']}>Home and outdoor</h1>

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
    </>
  );
};

export default HomeAndOutdoorPage;
