import styles from './Header.module.css';
import brandLogoImg from '../../assets/header/icons/brand-logo.svg';
import profileImg from '../../assets/header/icons/profile.svg';
import messageImg from '../../assets/header/icons/message.svg';
import ordersImg from '../../assets/header/icons/orders.svg';
import myCartImg from '../../assets/header/icons/my-cart.svg';
import arrowImg from '../../assets/header/icons/expand-arrow.svg';

import respMenu from '../../assets/header/icons/Hamburger-menu.png';
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
import goBackIcon from '../../assets/mobile-accessories/arrow_back.png';

import { headerCategoriesData } from '../../data/header/headerData.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import HeaderLower from './HeaderLower';
import { useCart } from '../../contexts/CartContext';
import { useSaveForLater } from '../../contexts/SaveForLaterContext';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [mobileGoBack, setMobileGoBack] = useState('');
  const [mobileGoBackTitle, setMobileGoBackTitle] = useState('');
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [cart] = useCart();
  const [saveForLater] = useSaveForLater();

  const menuRef = useRef();
  const categoriesRef = useRef();

  const location = useLocation();

  const navigate = useNavigate();

  const burgerMenuHandler = (e) => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  const goBackHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (showBurgerMenu) {
      document.body.style.overflow = 'hidden';
    }

    if (!showBurgerMenu) {
      document.body.style.overflow = 'auto';
    }
  }, [showBurgerMenu]);

  const stopPropagationHandelr = (e) => {
    e.stopPropagation();
  };

  const headerCategoryHandler = () => {
    setShowCategories(!showCategories);
  };

  const categoryRedirectHandler = (link) => {
    navigate(link);
  };

  useEffect(() => {
    const mobileGoBackHandler = () => {
      setMobileGoBack(location.pathname);

      const goBackTitle =
        location.pathname
          .split('/')
          .slice(-1)[0]
          .replace('-', ' ')
          .charAt(0)
          .toUpperCase() +
        location.pathname.split('/').slice(-1)[0].replace('-', ' ').slice(1);

      setMobileGoBackTitle(goBackTitle);
    };

    mobileGoBackHandler();

    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setWindowSize(window.innerWidth);
      });
    };
  }, [location.pathname]);

  const windowClickHandler = (e) => {
    if (e.target !== menuRef.current && e.target !== categoriesRef.current) {
      setShowCategories(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', windowClickHandler);

    return () => {
      window.removeEventListener('click', windowClickHandler);
    };
  }, []);

  return (
    <header>
      <div
        className={`${
          mobileGoBack !== '/online-store/' && windowSize <= 480
            ? styles['resp-header-top']
            : styles['header-top']
        } ${
          location.pathname.includes('/product/mobile-accessory') ||
          location.pathname.includes('cart')
            ? styles['resp-header-product']
            : styles['']
        }`}
      >
        <div
          className={`${
            mobileGoBack !== '/online-store/' && windowSize <= 480
              ? styles['hidden']
              : styles['resp-header-menu']
          }`}
        >
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
                  <img src={respHome} alt="" /> <Link>Home</Link>
                </div>

                <div>
                  <img src={respCategories} alt="" /> <Link>Categories</Link>
                </div>

                <div>
                  <img src={respFav} alt="" /> <Link>Favorites</Link>
                </div>

                <div>
                  <img src={respOrders} alt="" /> <Link>My orders</Link>
                </div>
              </div>

              <div className={styles['resp-menu-page-s3']}>
                <div>
                  <img src={respLang} alt="" /> <Link>English | USD</Link>
                </div>

                <div>
                  <img src={respContact} alt="" /> <Link>Contact us</Link>
                </div>

                <div>
                  <img src={respAbout} alt="" /> <Link>About</Link>
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

        <div
          className={`${
            mobileGoBack !== '/online-store/' && windowSize <= 480
              ? styles['hidden']
              : styles['header-logo']
          }`}
        >
          <Link to="/online-store/">
            <img src={brandLogoImg} alt="Brand-Logo" />
          </Link>
        </div>

        <Link
          // to={
          //   location.pathname.includes('product/mobile-accessory')
          //     ? 'mobile-accessory'
          //     : '/online-store/'
          // }
          className={`${
            mobileGoBack !== '/online-store/' && windowSize <= 480
              ? styles['resp-goBack-title']
              : styles['hidden']
          }`}
          onClick={goBackHandler}
        >
          <img src={goBackIcon} alt="go back" />

          {!location.pathname.includes('/product/mobile-accessory') && (
            <h2>{mobileGoBackTitle}</h2>
          )}
        </Link>

        <form
          className={`${styles['header-form']} ${
            (location.pathname.includes('cart') ||
              location.pathname.includes('/product/mobile-accessory')) &&
            windowSize <= 480
              ? styles['hidden']
              : ''
          }`}
        >
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
                !showCategories ? styles['list-hidden'] : ''
              }`}
              ref={menuRef}
            >
              {headerCategoriesData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => categoryRedirectHandler(item.link)}
                >
                  <Link to={item.link}>{item.name}</Link>
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

        <div
          className={`${
            mobileGoBack !== '/online-store/' && windowSize <= 480
              ? styles['resp-header-user']
              : styles['header-user']
          }`}
        >
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

          <Link
            to="saved"
            className={`${styles['header-user-item']} ${styles['orders']}`}
          >
            <img
              className={styles['orders-icon']}
              src={ordersImg}
              alt="Orders"
            />
            <p>Saved</p>
            <span className={styles['saved-badge']}>{saveForLater.length}</span>
          </Link>

          <Link
            to="cart"
            className={`${styles['header-user-item']} ${styles['my-cart']}`}
          >
            <img
              className={styles['my-cart-icon']}
              src={myCartImg}
              alt="My Cart"
            />
            <p>My cart</p>
            <span className={styles['my-cart-badge']}>{cart.length}</span>
          </Link>

          <div className={styles['resp-header-user']}>
            <Link to="cart">
              <img
                className={styles['my-cart-icon']}
                src={respCart}
                alt="My Cart"
              />
            </Link>

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
