import React from 'react';
import styles from './SearchedPage.module.css';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useSearched } from '../../contexts/Context';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchedPage = () => {
  const [searched] = useSearched();
  const navigate = useNavigate();

  const location = useLocation();

  const param = location.pathname.split('/').at(-1);

  const categoryHandler = (name, id) => {
    navigate(`../product/${`${param}`}/${parseInt(id)}`);
  };

  return (
    <div className={styles['container']}>
      <Breadcrumbs />

      <h3 className={styles['page-title']}>Searched results</h3>

      <div className={styles['searched-cards']}>
        {!searched.length > 0 && <p>No search results!</p>}
        {searched.map((category) => {
          return (
            <div
              key={category.id}
              className={styles['searched-card']}
              onClick={() => {
                categoryHandler(category.title.toLowerCase(), category.id);
              }}
            >
              <h3 className={styles['searched-card-title']}>
                {category.title}
              </h3>

              <div className={styles['searched-card-about']}>
                <div className={styles['searched-card-image']}>
                  <img src={category.images[0]} alt="" />
                </div>

                <div className={styles['searched-card-info']}>
                  <p className={styles['searched-card-price']}>
                    From: {category.price}
                  </p>

                  <p className={styles['searched-card-description']}>
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

export default SearchedPage;
