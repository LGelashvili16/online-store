import { Link } from 'react-router-dom';
import burgerMenuImg from '../../assets/header/icons/Hamburger-menu.svg';
import arrowImg from '../../assets/header/icons/expand-arrow.svg';
import { useRef, useState } from 'react';

import { headerHelpData } from '../../data/header/headerData.js';
import { headerFlags } from '../../data/header/headerData.js';
import { currencyData } from '../../data/header/headerData.js';
import { headerCategoriesData } from '../../data/header/headerData.js';

import './HeaderLower.css';

const HeaderLower = () => {
  const [showHelpList, setShowHelpList] = useState(false);
  const [showCurrencyList, setShowCurrencyList] = useState(false);
  const [showShippingList, setShowShippingList] = useState(false);
  const [showAllCategory, setShowAllCategory] = useState(false);

  const headerHelpHandler = () => {
    setShowHelpList(!showHelpList);
  };

  const menuRef = useRef();
  const helpListRef = useRef();

  const currencyHandler = () => {
    setShowCurrencyList(!showCurrencyList);
  };

  const currencyRef = useRef();
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
  const categoryListRef = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== helpListRef.current) {
      setShowHelpList(false);
    }

    if (
      e.target !== currencyRef.current &&
      e.target !== currencyListRef.current
    ) {
      setShowCurrencyList(false);
    }

    if (
      e.target !== shippingRef.current &&
      e.target !== shippingListRef.current
    ) {
      setShowShippingList(false);
    }

    if (
      e.target !== categoryRef.current &&
      e.target !== categoryListRef.current
    ) {
      setShowAllCategory(false);
    }
  });

  return (
    <div className="header-lower">
      <div className="header-lower-wrapper">
        <nav>
          <ul className="header-lower-list">
            <li className="header-lower-list-burger">
              <img src={burgerMenuImg} alt="Burger menu" />
              {/* <Link to="">All category</Link> */}
              <p
                className="burger-allCategory"
                onClick={allCategoryHandler}
                ref={categoryRef}
              >
                All category
              </p>
              <ul
                className={`burger-allCategory-list ${
                  showAllCategory ? 'showAllCat' : ''
                }`}
                ref={categoryListRef}
              >
                {headerCategoriesData.map((category, i) => {
                  return (
                    <li key={i}>
                      <Link>{category}</Link>
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
            <li className="header-help">
              <p onClick={headerHelpHandler} ref={helpListRef}>
                Help
              </p>

              <img
                className="header-lower-dropdown-arrow"
                src={arrowImg}
                alt="arrow"
              />

              <ul
                className={`header-help-dropdown-list ${
                  !showHelpList ? 'hidden' : ''
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

        <div className="header-currency-shipping">
          <ul>
            <li className="header-curency-dropdown">
              <p onClick={currencyHandler} ref={currencyListRef}>
                {currencyData[0]}
              </p>
              <img
                className="header-currency-dropdown-arrow"
                src={arrowImg}
                alt="arrow"
              />
              <ul
                className={`header-currency-list ${
                  !showCurrencyList ? 'hidden' : ''
                }`}
                ref={currencyRef}
              >
                {currencyData.map((currency, index) => (
                  <li key={index}>{<p>{currency}</p>}</li>
                ))}
              </ul>
            </li>

            <li className="header-shipping-dropdown">
              <p onClick={shippingHandler} ref={shippingRef}>
                Ship to
              </p>
              <img
                className="header-current-shipping"
                src={headerFlags[0].flag}
                alt=""
              />
              <img
                className="header-shipping-dropdown-arrow"
                src={arrowImg}
                alt="arrow"
              />
              <ul
                className={`header-flags-list ${
                  !showShippingList ? 'hidden' : ''
                }`}
                ref={shippingListRef}
              >
                {headerFlags.map((item, index) => (
                  <li key={index}>
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
