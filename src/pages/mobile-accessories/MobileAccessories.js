import Breadcrumbs from '../../components/Breadcrumbs';
import AsideList from './AsideList';
import styles from './MobileAccesories.module.css';

import expandArrow from '../../assets/mobile-accessories/expand_less.svg';
import gridView from '../../assets/mobile-accessories/gridview.png';
import listView from '../../assets/mobile-accessories/listview.png';

const mobileAccessories = () => {
  return (
    <div className={styles['container']}>
      <Breadcrumbs />

      <div className={styles['content']}>
        <aside>
          <AsideList />
        </aside>

        <section className={styles['section-products']}>
          <div className={styles['organize-products']}>
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
                <div className={styles['organize-products-switcher-grid']}>
                  <img src={gridView} alt="" />
                </div>
                <div
                  className={`${styles['organize-products-switcher-list']} ${styles['active']}`}
                >
                  <img src={listView} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default mobileAccessories;
