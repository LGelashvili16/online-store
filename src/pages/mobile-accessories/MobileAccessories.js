// /online-store/mobile-accessories

import Breadcrumbs from '../../components/Breadcrumbs';
import AsideList from './AsideList';
import styles from './MobileAccesories.module.css';

import expandArrow from '../../assets/mobile-accessories/expand_less.svg';
import gridView from '../../assets/mobile-accessories/gridview.png';
import listView from '../../assets/mobile-accessories/listview.png';
import sortIcon from '../../assets/mobile-accessories/sort.png';
import filterIcon from '../../assets/mobile-accessories/filter_alt.png';

import { memo, useState } from 'react';
import ProductsList from './productsList/ProductsList';
import Newsletter from '../../components/newsletter/Newsletter';
import Pagination from '../../components/pagination/Pagination';

import { products } from '../../data/mobileAccessories/mobileAccessoriesData';
import SelectedFilter from './SelectedFilter';

import {
  category,
  brands,
  features,
  condition,
  ratings,
} from '../../data/mobileAccessories/mobileAccessoriesData';
import MayAlsoLike from './mayAlsoLike/MayAlsoLike';

const MobileAccessories = () => {
  console.log('MOBILE-ACCESSORY COMPONENT');

  const [gridActive, setGridActive] = useState(false);
  const [listActive, setListActive] = useState(true);
  const [cutProductsAmount, setCutProductsAmount] = useState(6);

  const [filterItems, setFilterItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [brandsForm, setBrandsForm] = useState(brands);
  const [featuresForm, setFeaturesForm] = useState(features);
  const [ratingsForm, setRatingsForm] = useState(ratings);

  // Calculate products quantity
  const currentPageProducts = (start, end) => {
    return products.slice(start * (currentPage - 1), end * currentPage);
  };

  const curPageProducts = currentPageProducts(
    cutProductsAmount,
    cutProductsAmount
  );

  const activePageHandler = (e) => {
    const active = /active/g;
    const curElement = e.target.closest('div').classList;

    if (!active.test(curElement[1])) {
      setGridActive(!gridActive);
      setListActive(!listActive);
    }

    return;
  };

  const productsAmount = products.length;

  return (
    <>
      <div className={styles['container']}>
        <Breadcrumbs />

        <div className={styles['content']}>
          <aside>
            <AsideList
              category={category}
              brands={brandsForm}
              setBrandsForm={setBrandsForm}
              features={featuresForm}
              setFeaturesForm={setFeaturesForm}
              ratings={ratingsForm}
              setRatingsForm={setRatingsForm}
              condition={condition}
              filterItems={filterItems}
              setFilterItems={setFilterItems}
            />
          </aside>

          <section className={styles['section-products']}>
            <div
              className={styles['organize-products']}
              style={{ maxWidth: gridActive ? '926px' : '' }}
            >
              <div className={styles['organize-products-inner-wrapper']}>
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

                  <div className={styles['resp-sort']}>
                    <h4>
                      Sort: <span>Newest</span>
                    </h4>
                    <img src={sortIcon} alt="sort" />
                  </div>

                  <div className={styles['resp-filter']}>
                    <h4>
                      Filter (<span>{filterItems.length}</span>)
                    </h4>
                    <img src={filterIcon} alt="sort" />
                  </div>

                  <div className={styles['organize-products-switcher']}>
                    <div
                      className={`${
                        styles['organize-products-switcher-grid']
                      } ${gridActive ? styles['active'] : ''}`}
                      onClick={activePageHandler}
                    >
                      <img src={gridView} alt="" />
                    </div>
                    <div
                      className={`${
                        styles['organize-products-switcher-list']
                      } ${listActive ? styles['active'] : ''}`}
                      onClick={activePageHandler}
                    >
                      <img src={listView} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SelectedFilter
              filteredOptions={filterItems}
              setFilterItems={setFilterItems}
              setBrandsForm={setBrandsForm}
              setFeaturesForm={setFeaturesForm}
              setRatingsForm={setRatingsForm}
            />

            <ProductsList products={curPageProducts} layout={listActive} />

            <Pagination
              currentPage={currentPage}
              total={productsAmount}
              limit={cutProductsAmount}
              onPageChange={(page) => setCurrentPage(page)}
              showProductsAmount={(amount) => setCutProductsAmount(amount)}
            />

            <MayAlsoLike />
          </section>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default memo(MobileAccessories);
