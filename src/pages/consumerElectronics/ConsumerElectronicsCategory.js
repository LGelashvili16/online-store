// /online-store/mobile-accessories

import Breadcrumbs from '../../components/Breadcrumbs';
import AsideList from './AsideList';
import styles from './ConsumerElectronicsCategory.module.css';

import expandArrow from '../../assets/mobile-accessories/expand_less.svg';
import gridView from '../../assets/mobile-accessories/gridview.png';
import listView from '../../assets/mobile-accessories/listview.png';
import sortIcon from '../../assets/mobile-accessories/sort.png';
import filterIcon from '../../assets/mobile-accessories/filter_alt.png';

import { useEffect, useState } from 'react';
import ProductsList from './productsList/ProductsList';
import Newsletter from '../../components/newsletter/Newsletter';
import Pagination from '../../components/pagination/Pagination';

// import { products } from '../../data/mobileAccessories/mobileAccessoriesData';
import {
  useConsumerElectronics,
  useHomeOutdoor,
} from '../../contexts/ProductsContext';

import SelectedFilter from './SelectedFilter';

import {
  category,
  brands,
  features,
  condition,
  ratings,
} from '../../data/consumerElectronics/consumerElectronicsData';

import MayAlsoLike from './mayAlsoLike/MayAlsoLike';
import { useParams } from 'react-router-dom';

const ConsumerElectronicsCategory = () => {
  // const [mobileAccessoryProducts, setMobileAccessoryProducts] =
  //   useMobileAccessoryProducts();

  const [
    mobileAccessoryProduct,
    headphonesProduct,
    gamingSetProduct,
    smartphonesProduct,
    camerasProduct,
    pcLaptopProduct,
  ] = useConsumerElectronics();

  const [, , , smartWatchesProduct] = useHomeOutdoor();

  const [currentProducts, setCurrentProducts] = useState(headphonesProduct);
  console.log();

  const [gridActive, setGridActive] = useState(false);
  const [listActive, setListActive] = useState(true);
  const [cutProductsAmount, setCutProductsAmount] = useState(6);

  const [filterItems, setFilterItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [brandsForm, setBrandsForm] = useState(brands);
  const [featuresForm, setFeaturesForm] = useState(features);
  const [ratingsForm, setRatingsForm] = useState(ratings);

  const [showFeaturedList, setShowFeaturedList] = useState(false);
  const [featured, setFeatured] = useState('Featured');
  const [showRespFilters, setShowRespFilters] = useState(false);
  const [showRespSort, setShowRespSort] = useState(false);
  const [sort, setSort] = useState('Newest');

  const params = useParams();

  useEffect(() => {
    if (params.name === 'mobile-accessory') {
      setCurrentProducts(mobileAccessoryProduct);
    }

    if (params.name === 'headphones') {
      setCurrentProducts(headphonesProduct);
    }

    if (params.name === 'gaming-set') {
      setCurrentProducts(gamingSetProduct);
    }

    if (params.name === 'smartphones') {
      setCurrentProducts(smartphonesProduct);
    }

    if (params.name === 'cameras') {
      setCurrentProducts(camerasProduct);
    }

    if (params.name === 'laptops-&-pc') {
      setCurrentProducts(pcLaptopProduct);
    }

    if (params.name === 'smart-watches') {
      setCurrentProducts(smartWatchesProduct);
    }
  }, [
    params.name,
    headphonesProduct,
    gamingSetProduct,
    smartphonesProduct,
    camerasProduct,
    pcLaptopProduct,
    smartWatchesProduct,
    mobileAccessoryProduct,
  ]);

  // Calculate products quantity
  const currentPageProducts = (products, start, end) => {
    return products.slice(start * (currentPage - 1), end * currentPage);
  };

  const curPageProducts = currentPageProducts(
    currentProducts,
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

  const productsAmount = currentProducts.length;

  const featuredListHandler = () => {
    setShowFeaturedList((prev) => !prev);
  };

  const featuredHandler = (val) => {
    setFeatured(val);
  };

  const respSortHandler = () => {
    setShowRespSort((prev) => !prev);
  };

  const sortHandler = (val) => {
    setSort(val);
  };

  const respFilterHandler = () => {
    setShowRespFilters((prev) => !prev);
  };

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
              showRespFilters={showRespFilters}
            />
          </aside>

          <section className={styles['section-products']}>
            <div
              className={styles['organize-products']}
              style={{ maxWidth: gridActive ? '926px' : '' }}
            >
              <div className={styles['organize-products-inner-wrapper']}>
                <p className={styles['organize-products-info']}>
                  12,911 items in{' '}
                  <strong>{params.name.replaceAll('-', ' ')}</strong>
                </p>

                <div className={styles['organize-products-view']}>
                  <div className={styles['organize-products-verifing']}>
                    <input type="checkbox" id="verified" />
                    <label htmlFor="verified">Verified only</label>
                  </div>

                  <div
                    className={styles['organize-products-featured']}
                    onClick={featuredListHandler}
                  >
                    <p>{featured}</p>
                    <img src={expandArrow} alt="" />

                    <ul
                      className={`${
                        styles['organize-products-featured-list']
                      } ${showFeaturedList && styles['show-featured']}`}
                    >
                      <li onClick={() => featuredHandler('Featured')}>
                        Featured
                      </li>
                      <li onClick={() => featuredHandler('Not featured')}>
                        Not featured
                      </li>
                    </ul>
                  </div>

                  <div
                    className={styles['resp-sort']}
                    onClick={respSortHandler}
                  >
                    <h4>
                      Sort: <span>{sort}</span>
                    </h4>
                    <img src={sortIcon} alt="sort" />

                    <ul
                      className={`${styles['resp-sort-list']} ${
                        showRespSort && styles['show-sort']
                      }`}
                    >
                      <li onClick={() => sortHandler('Newest')}>Newest</li>
                      <li onClick={() => sortHandler('Oldest')}>Oldest</li>
                      <li onClick={() => sortHandler('Low price')}>
                        Low price
                      </li>
                      <li onClick={() => sortHandler('High price')}>
                        High price
                      </li>
                    </ul>
                  </div>

                  <div
                    className={styles['resp-filter']}
                    onClick={respFilterHandler}
                  >
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

export default ConsumerElectronicsCategory;
