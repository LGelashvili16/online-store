import Breadcrumbs from '../../components/Breadcrumbs';
import AsideList from './AsideList';
import styles from './MobileAccesories.module.css';

import expandArrow from '../../assets/mobile-accessories/expand_less.svg';
import gridView from '../../assets/mobile-accessories/gridview.png';
import listView from '../../assets/mobile-accessories/listview.png';
import { useState } from 'react';
import ProductsList from './productsList/ProductsList';
import Section6 from '../home/Section6';

const MobileAccessories = () => {
  const [gridActive, setGridActive] = useState(false);
  const [listActive, setListActive] = useState(true);

  const activeHandler = (e) => {
    const active = /active/g;
    const curElement = e.target.closest('div').classList;

    if (!active.test(curElement[1])) {
      setGridActive(!gridActive);
      setListActive(!listActive);
    }

    return;
  };

  return (
    <>
      <div className={styles['container']}>
        <Breadcrumbs />

        <div className={styles['content']}>
          <aside>
            <AsideList />
          </aside>

          <section className={styles['section-products']}>
            <div
              className={styles['organize-products']}
              style={{ 'max-width': gridActive ? '926px' : '' }}
            >
              <p className={styles['organize-products-info']}>
                12,911 items in <strong>Mobile accessory</strong>
              </p>

              <div className={styles['organize-products-view']}>
                <div className={styles['organize-products-verifing']}>
                  <input type="checkbox" id="verified" />
                  <label htmlFor="verified">Verified only</label>
                </div>

                <div className={styles['organize-products-featured']}>
                  <p>Featured</p>
                  <img src={expandArrow} alt="" />
                </div>

                <div className={styles['organize-products-switcher']}>
                  <div
                    className={`${styles['organize-products-switcher-grid']} ${
                      gridActive ? styles['active'] : ''
                    }`}
                    onClick={activeHandler}
                  >
                    <img src={gridView} alt="" />
                  </div>
                  <div
                    className={`${styles['organize-products-switcher-list']} ${
                      listActive ? styles['active'] : ''
                    }`}
                    onClick={activeHandler}
                  >
                    <img src={listView} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <ProductsList layout={listActive} />
          </section>
        </div>
      </div>
      <Section6 />
    </>
  );
};

export default MobileAccessories;
