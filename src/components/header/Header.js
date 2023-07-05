import './Header.css';
import brandLogoImg from '../../assets/header/icons/brand-logo.svg';
import profileImg from '../../assets/header/icons/profile.svg';
import messageImg from '../../assets/header/icons/message.svg';
import ordersImg from '../../assets/header/icons/orders.svg';
import myCartImg from '../../assets/header/icons/my-cart.svg';
import arrowImg from '../../assets/header/icons/expand-arrow.svg';

import { headerCategoriesData } from '../../data/header/headerData.js';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import HeaderLower from './HeaderLower';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  const headerCategoryHandler = () => {
    setShowCategories(!showCategories);
  };

  const menuRef = useRef();
  const categoriesRef = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== categoriesRef.current) {
      setShowCategories(false);
    }
  });

  return (
    <header>
      <div className="header-top">
        <div className="header-logo">
          <Link to="">
            <img src={brandLogoImg} alt="Brand-Logo" />
          </Link>
        </div>

        <form className="header-form">
          <input className="header-search" type="text" placeholder="Search" />

          <div className="header-select">
            <p
              className="header-select-input"
              onClick={headerCategoryHandler}
              ref={categoriesRef}
            >
              All category
            </p>

            <img className="header-dropdown-arrow" src={arrowImg} alt="arrow" />

            <ul
              className={`header-dropdown-list ${
                !showCategories ? 'hidden' : ''
              }`}
              ref={menuRef}
            >
              {headerCategoriesData.map((item, index) => (
                <li key={index}>
                  <Link to="">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <input className="header-search-btn" type="submit" value="Search" />
        </form>

        <div className="header-user">
          <div className="header-user-item">
            <img className="profile-icon" src={profileImg} alt="Profile" />
            <p>Profile</p>
          </div>

          <div className="header-user-item message">
            <img className="message-icon" src={messageImg} alt="Message" />
            <p>Message</p>
          </div>

          <div className="header-user-item orders">
            <img className="orders-icon" src={ordersImg} alt="Orders" />
            <p>Orders</p>
          </div>

          <div className="header-user-item my-cart">
            <img className="my-cart-icon" src={myCartImg} alt="My Cart" />
            <p>My cart</p>
          </div>
        </div>
      </div>

      <HeaderLower />
    </header>
  );
};

export default Header;
