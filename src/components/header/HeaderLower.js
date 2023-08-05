import styles from './HeaderLower.module.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import burgerMenuImg from '../../assets/header/icons/Hamburger-menu.png';
import arrowImg from '../../assets/header/icons/expand-arrow.svg';
import { useEffect, useRef, useState } from 'react';

import { headerHelpData } from '../../data/header/headerData.js';
import { headerFlags } from '../../data/header/headerData.js';
import { currencyData } from '../../data/header/headerData.js';
import { headerCategoriesData } from '../../data/header/headerData.js';

import { useCurrencyData, useShipToData } from '../../contexts/Context';

import { motion } from 'framer-motion';

const HeaderLower = () => {
  const [showHelpList, setShowHelpList] = useState(false);
  const [showCurrencyList, setShowCurrencyList] = useState(false);
  const [showShippingList, setShowShippingList] = useState(false);
  const [showAllCategory, setShowAllCategory] = useState(false);

  const [currentCurrency, setCurrentCurrency] = useCurrencyData();
  const [currentShipTo, setCurrentShipTo] = useShipToData();

  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef();

  const location = useLocation();

  useEffect(() => {
    setCarouselWidth(
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth + 15
    );
  }, []);

  const navigate = useNavigate();

  const headerHelpHandler = () => {
    setShowHelpList(!showHelpList);
  };

  const menuRef = useRef();
  const helpListRef = useRef();

  const currencyHandler = () => {
    setShowCurrencyList(!showCurrencyList);
  };

  const currencyRef = useRef();
  const currencyTextRef = useRef();
  const currencyListRef = useRef();

  const shippingHandler = () => {
    setShowShippingList(!showShippingList);
  };

  const shippingRef = useRef();
  const shippingListRef = useRef();

  const allCategoryHandler = () => {
    setShowAllCategory(!showAllCategory);
  };

  const categoryRef = useRef();
  const categoryImgRef = useRef();
  const categoryListRef = useRef();

  const categoryRedirectHandler = (link) => {
    navigate(link);
  };

  const currentCurrencyHandler = (e) => {
    setCurrentCurrency(e.target.textContent);
  };

  const currentShipToHandler = (e) => {
    setCurrentShipTo(e.target.closest('li').children[0].src);
  };

  const windowClickHandler = (e) => {
    if (e.target !== menuRef.current && e.target !== helpListRef.current) {
      setShowHelpList(false);
    }

    if (
      e.target !== currencyRef.current &&
      e.target !== currencyTextRef.current
    ) {
      setShowCurrencyList(false);
    }

    if (e.target === currencyListRef.current) {
      setShowCurrencyList(true);
    }

    if (
      e.target !== shippingRef.current &&
      e.target !== shippingListRef.current
    ) {
      setShowShippingList(false);
    }

    if (
      e.target !== categoryImgRef.current &&
      e.target !== categoryRef.current
    ) {
      setShowAllCategory(false);
    }

    if (e.target === categoryListRef.current) {
      setShowAllCategory(true);
    }
  };

  useEffect(() => {
    window.addEventListener('click', windowClickHandler);

    return () => {
      window.removeEventListener('click', windowClickHandler);
    };
  }, []);

  return (
    <div
      className={`${styles['header-lower']} ${
        location.pathname.includes('product/mobile-accessory')
          ? styles['hidden']
          : ''
      }`}
    >
      <motion.div
        className={`${styles['resp-carousel']} ${
          location.pathname.includes('product/mobile-accessory')
            ? styles['hidden']
            : ''
        }`}
        ref={carouselRef}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth }}
          className={styles['resp-inner-carousel']}
        >
          <div>
            <Link>All category</Link>
          </div>
          <div>
            <Link to="mobile-accessory">Mobile accessory</Link>
          </div>
          <div>
            <Link>Gadgets</Link>
          </div>
          <div>
            <Link>Clothes</Link>
          </div>
          <div>
            <Link>Accesories</Link>
          </div>
        </motion.div>
      </motion.div>

      <div className={styles['header-lower-wrapper']}>
        <nav>
          <ul className={styles['header-lower-list']}>
            <li
              className={styles['header-lower-list-burger']}
              onClick={allCategoryHandler}
            >
              <img
                src={burgerMenuImg}
                alt="Burger menu"
                onClick={allCategoryHandler}
                ref={categoryImgRef}
              />
              {/* <Link to="">All category</Link> */}
              <p
                className={styles['burger-allCategory']}
                ref={categoryRef}
                onClick={allCategoryHandler}
              >
                All category
              </p>
              <ul
                className={`${styles['burger-allCategory-list']} ${
                  showAllCategory ? styles['showAllCat'] : ''
                }`}
                ref={categoryListRef}
              >
                {headerCategoriesData.map((category, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => categoryRedirectHandler(category.link)}
                    >
                      <Link to={category.link}>{category.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li>
              <Link to="">Hot offers</Link>
            </li>

            <li>
              <Link to="">Gift boxes</Link>
            </li>
            <li>
              <Link to="">Projects</Link>
            </li>
            <li>
              <Link to="">Menu item</Link>
            </li>
            <li className={styles['header-help']}>
              <p onClick={headerHelpHandler} ref={helpListRef}>
                Help
              </p>

              <img
                className={styles['header-lower-dropdown-arrow']}
                src={arrowImg}
                alt="arrow"
              />

              <ul
                className={`${styles['header-help-dropdown-list']} ${
                  !showHelpList ? styles['hidden'] : ''
                }`}
                ref={menuRef}
              >
                {headerHelpData.map((item, index) => (
                  <li key={index}>
                    <Link to="">{item}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>

        <div className={styles['header-currency-shipping']}>
          <ul>
            <li
              className={styles['header-currency-dropdown']}
              onClick={currencyHandler}
              ref={currencyRef}
            >
              <p ref={currencyTextRef} onClick={currencyHandler}>
                {currentCurrency}
              </p>
              <img
                className={styles['header-currency-dropdown-arrow']}
                src={arrowImg}
                alt="arrow"
              />
              <ul
                className={`${styles['header-currency-list']} ${
                  !showCurrencyList ? styles['hidden'] : ''
                }`}
                ref={currencyListRef}
              >
                {currencyData.map((currency, index) => (
                  <li key={index} onClick={currentCurrencyHandler}>
                    {<p>{currency.name}</p>}
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles['header-shipping-dropdown']}>
              <p onClick={shippingHandler} ref={shippingRef}>
                Ship to
              </p>
              <img
                className={styles['header-current-shipping']}
                src={currentShipTo}
                alt=""
              />
              <img
                className={styles['header-shipping-dropdown-arrow']}
                src={arrowImg}
                alt="arrow"
              />
              <ul
                className={`${styles['header-flags-list']} ${
                  !showShippingList ? styles['hidden'] : ''
                }`}
                ref={shippingListRef}
              >
                {headerFlags.map((item, index) => (
                  <li key={index} onClick={currentShipToHandler}>
                    {<img src={item.flag} alt="" />}
                    {<p>{item.country}</p>}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLower;
