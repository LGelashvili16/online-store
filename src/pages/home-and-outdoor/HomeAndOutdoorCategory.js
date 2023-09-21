import Breadcrumbs from '../../components/Breadcrumbs';
import AsideList from './AsideList';
import styles from './HomeAndOutdoorCategory.module.css';

import expandArrow from '../../assets/mobile-accessories/expand_less.svg';
import gridView from '../../assets/mobile-accessories/gridview.png';
import listView from '../../assets/mobile-accessories/listview.png';
import sortIcon from '../../assets/mobile-accessories/sort.png';
import filterIcon from '../../assets/mobile-accessories/filter_alt.png';

import { useEffect, useState } from 'react';
import ProductsList from './productsList/ProductsList';
import Newsletter from '../../components/newsletter/Newsletter';
import Pagination from '../../components/pagination/Pagination';

import { useHomeOutdoor } from '../../contexts/ProductsContext';

import SelectedFilter from './SelectedFilter';

import {
  category,
  brands,
  features,
  condition,
  ratings,
} from '../../data/homeAndOutdoor/homeAndOutdoorData';

import MayAlsoLike from './mayAlsoLike/MayAlsoLike';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HomeAndOutdoorCategory = () => {
  const [
    softChairsProduct,
    sofaChairProduct,
    kitcheDishesProduct,
    smartWatchesProduct,
    kitchenMixerProduct,
    blendersProduct,
    homeApplianceProduct,
    coffeeMakerProduct,
  ] = useHomeOutdoor();

  const [currentProducts, setCurrentProducts] = useState(softChairsProduct);

  const [gridActive, setGridActive] = useState(false);
  const [listActive, setListActive] = useState(true);
  const [cutProductsAmount, setCutProductsAmount] = useState(6);

  const [filterItems, setFilterItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [brandsForm, setBrandsForm] = useState(brands);
  const [featuresForm, setFeaturesForm] = useState(features);
  const [ratingsForm, setRatingsForm] = useState(ratings);

  const [showFeaturedList, setShowFeaturedList] = useState(false);
  const [, setFeatured] = useState('Featured');
  const [showRespFilters, setShowRespFilters] = useState(false);
  const [showRespSort, setShowRespSort] = useState(false);
  const [sort, setSort] = useState('Newest');

  const params = useParams();

  useEffect(() => {
    if (params.name === 'soft-chairs') {
      setCurrentProducts(softChairsProduct);
    }

    if (params.name === 'sofa-&-chair') {
      setCurrentProducts(sofaChairProduct);
    }

    if (params.name === 'kitchen-dishes') {
      setCurrentProducts(kitcheDishesProduct);
    }

    if (params.name === 'smart-watches') {
      setCurrentProducts(smartWatchesProduct);
    }

    if (params.name === 'kitchen-mixer') {
      setCurrentProducts(kitchenMixerProduct);
    }

    if (params.name === 'blenders') {
      setCurrentProducts(blendersProduct);
    }

    if (params.name === 'home-appliance') {
      setCurrentProducts(homeApplianceProduct);
    }

    if (params.name === 'coffee-maker') {
      setCurrentProducts(coffeeMakerProduct);
    }
  }, [
    params.name,
    softChairsProduct,
    sofaChairProduct,
    kitcheDishesProduct,
    smartWatchesProduct,
    kitchenMixerProduct,
    blendersProduct,
    homeApplianceProduct,
    coffeeMakerProduct,
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
      <Helmet>
        <title>{params.name}</title>
        <meta name="description" content="shop home and outdoor items" />
        <link
          rel="canonical"
          href={`/online-store/consumer-electronics/${params.name}`}
        />
      </Helmet>

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
                    <p>Featured</p>
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

export default HomeAndOutdoorCategory;
