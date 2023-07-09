import styles from './Header.module.css';
import brandLogoImg from '../../assets/header/icons/brand-logo.svg';
import profileImg from '../../assets/header/icons/profile.svg';
import messageImg from '../../assets/header/icons/message.svg';
import ordersImg from '../../assets/header/icons/orders.svg';
import myCartImg from '../../assets/header/icons/my-cart.svg';
import arrowImg from '../../assets/header/icons/expand-arrow.svg';

import respMenu from '../../assets/header/icons/Hamburger-menu.svg';
import respCart from '../../assets/header/icons/resp-shopping-cart.svg';
import respProfile from '../../assets/header/icons/resp-person.svg';
import respAvatar from '../../assets/header/icons/resp-Avatar.png';
import searchProfile from '../../assets/header/icons/search-icon.png';
import respHome from '../../assets/header/icons/resp-menu-home.svg';
import respCategories from '../../assets/header/icons/resp-menu-controls.svg';
import respFav from '../../assets/header/icons/resp-menu-fav.svg';
import respOrders from '../../assets/header/icons/resp-menu-orders.svg';
import respLang from '../../assets/header/icons/resp-menu-lang.svg';
import respContact from '../../assets/header/icons/resp-menu-contact.svg';
import respAbout from '../../assets/header/icons/resp-menu-about.svg';

import { headerCategoriesData } from '../../data/header/headerData.js';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import HeaderLower from './HeaderLower';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const burgerMenuHandler = (e) => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  const stopPropagationHandelr = (e) => {
    e.stopPropagation();
  };

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
      <div className={styles['header-top']}>
        <div className={styles['resp-header-menu']}>
          <img src={respMenu} alt="" onClick={burgerMenuHandler} />

          <div
            className={`${styles['resp-menu-page-wrapper']} ${
              !showBurgerMenu ? styles['hidden'] : ''
            }`}
            onClick={burgerMenuHandler}
          >
            <div
              className={styles['resp-menu-page']}
              onClick={stopPropagationHandelr}
            >
              <div className={styles['resp-menu-page-s1']}>
                <img src={respAvatar} alt="" />
                <div>
                  <Link>Sign in</Link>
                  <Link>Register</Link>
                </div>
              </div>

              <div className={styles['resp-menu-page-s2']}>
                <div>
                  <img src={respHome} /> <Link>Home</Link>
                </div>

                <div>
                  <img src={respCategories} /> <Link>Categories</Link>
                </div>

                <div>
                  <img src={respFav} /> <Link>Favorites</Link>
                </div>

                <div>
                  <img src={respOrders} /> <Link>My orders</Link>
                </div>
              </div>

              <div className={styles['resp-menu-page-s3']}>
                <div>
                  <img src={respLang} /> <Link>English | USD</Link>
                </div>

                <div>
                  <img src={respContact} /> <Link>Contact us</Link>
                </div>

                <div>
                  <img src={respAbout} /> <Link>About</Link>
                </div>
              </div>

              <div className={styles['resp-menu-page-s4']}>
                <Link>User agreetment</Link>
                <Link>Partnership</Link>
                <Link>Privacy policy</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['header-logo']}>
          <Link to="">
            <img src={brandLogoImg} alt="Brand-Logo" />
          </Link>
        </div>

        <form className={styles['header-form']}>
          <img
            className={styles['header-form-search-icon']}
            src={searchProfile}
            alt=""
          />
          <input
            className={styles['header-search']}
            type="text"
            placeholder="Search"
          />

          <div className={styles['header-select']}>
            <p
              className={styles['header-select-input']}
              onClick={headerCategoryHandler}
              ref={categoriesRef}
            >
              All category
            </p>

            <img
              className={styles['header-dropdown-arrow']}
              src={arrowImg}
              alt="arrow"
            />

            <ul
              className={`${styles['header-dropdown-list']} ${
                !showCategories ? styles['hidden'] : ''
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

          <input
            className={styles['header-search-btn']}
            type="submit"
            value="Search"
          />
        </form>

        <div className={styles['header-user']}>
          <div className={`${styles['header-user-item']} ${styles['profile']}`}>
            <img
              className={styles['profile-icon']}
              src={profileImg}
              alt="Profile"
            />
            <p>Profile</p>
          </div>

          <div className={`${styles['header-user-item']} ${styles['message']}`}>
            <img
              className={styles['message-icon']}
              src={messageImg}
              alt="Message"
            />
            <p>Message</p>
          </div>

          <div className={`${styles['header-user-item']} ${styles['orders']}`}>
            <img
              className={styles['orders-icon']}
              src={ordersImg}
              alt="Orders"
            />
            <p>Orders</p>
          </div>

          <div className={`${styles['header-user-item']} ${styles['my-cart']}`}>
            <img
              className={styles['my-cart-icon']}
              src={myCartImg}
              alt="My Cart"
            />
            <p>My cart</p>
          </div>

          <div className={styles['resp-header-user']}>
            <img
              className={styles['my-cart-icon']}
              src={respCart}
              alt="My Cart"
            />

            <img
              className={styles['profile-icon']}
              src={respProfile}
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <HeaderLower />
    </header>
  );
};

export default Header;
