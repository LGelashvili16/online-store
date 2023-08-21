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
import { useUser } from '../../contexts/UserContext';

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [showRespUserList, setShowRespUserList] = useState(false);
  const [mobileGoBack, setMobileGoBack] = useState('');
  const [mobileGoBackTitle, setMobileGoBackTitle] = useState('');
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [cart] = useCart();
  const [saveForLater] = useSaveForLater();

  const [users, setUsers, loggedInUser, setLoggedInUsers] = useUser();

  const menuRef = useRef();
  const categoriesRef = useRef();

  const profileRef = useRef();
  const profileListRef = useRef();
  const respProfileRef = useRef();
  const respProfileListRef = useRef();

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

  const profileHandler = () => {
    // if (loggedInUser) navigate('/online-store/profile');
    // else
    setShowUserList((prev) => !prev);
  };

  const respProfileHandler = () => {
    // if (loggedInUser) navigate('/online-store/profile');
    // else
    setShowRespUserList((prev) => !prev);
  };

  const logOutHandler = () => {
    setLoggedInUsers([]);

    const existUser = users.find((user) => {
      return user.loggedIn === true;
    });

    if (existUser) {
      setUsers((prev) => {
        return prev.map((user) => {
          if (user.loggedIn === true) {
            return { ...user, loggedIn: false };
          }
          return user;
        });
      });
    }
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
  }, [location.pathname, mobileGoBack]);

  const windowClickHandler = (e) => {
    if (e.target !== menuRef.current && e.target !== categoriesRef.current) {
      setShowCategories(false);
    }

    if (
      e.target !== profileRef.current &&
      e.target !== profileListRef.current
    ) {
      setShowUserList(false);
    }

    if (
      e.target !== respProfileRef.current &&
      e.target !== respProfileListRef.current
    ) {
      setShowRespUserList(false);
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
                  <Link to="/online-store/login">Sign in</Link>
                  <Link to="/online-store/register">Register</Link>
                </div>
              </div>

              <div className={styles['resp-menu-page-s2']}>
                <div>
                  <img src={respHome} alt="" />{' '}
                  <Link to="/online-store/">Home</Link>
                </div>

                <div>
                  <img src={respCategories} alt="" />{' '}
                  <Link to="/online-store/consumer-electronics">
                    Categories
                  </Link>
                </div>

                <div>
                  <img src={respFav} alt="" />{' '}
                  <Link to="/online-store/saved">Favorites</Link>
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
              location.pathname.includes('login') ||
              location.pathname.includes('registration') ||
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
          <div
            className={`${styles['header-user-item']} ${styles['profile']}`}
            ref={profileRef}
            onClick={profileHandler}
          >
            <img
              className={styles['profile-icon']}
              src={profileImg}
              alt="Profile"
            />
            <p>Profile</p>

            {loggedInUser?.loggedIn === true ? (
              <div
                className={`${styles['header-login-register']} ${
                  !showUserList ? styles['hidden'] : ''
                }`}
                ref={profileListRef}
              >
                <Link to="/online-store/profile">Profile</Link>
                <Link to="/online-store/login" onClick={logOutHandler}>
                  Log out
                </Link>
              </div>
            ) : (
              <div
                className={`${styles['header-login-register']} ${
                  !showUserList ? styles['hidden'] : ''
                }`}
                ref={profileListRef}
              >
                <Link to="/online-store/login">Log in</Link>

                <Link to="/online-store/registration">Register</Link>
              </div>
            )}
          </div>

          <Link
            to={
              loggedInUser?.loggedIn === true
                ? '/online-store/dummy/message'
                : 'login'
            }
            className={`${styles['header-user-item']} ${styles['message']}`}
          >
            <img
              className={styles['message-icon']}
              src={messageImg}
              alt="Message"
            />
            <p>Message</p>
          </Link>

          <Link
            to={loggedInUser?.loggedIn === true ? 'saved' : 'login'}
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
            to={loggedInUser?.loggedIn === true ? 'cart' : 'login'}
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
            <Link to={loggedInUser?.loggedIn === true ? 'cart' : 'login'}>
              <img
                className={styles['my-cart-icon']}
                src={respCart}
                alt="My Cart"
              />
            </Link>

            <div onClick={respProfileHandler} ref={respProfileRef}>
              <img
                className={styles['profile-icon']}
                src={respProfile}
                alt="Profile"
              />

              {loggedInUser?.loggedIn === true ? (
                <div
                  className={`${styles['resp-header-login-register']} ${
                    !showRespUserList ? styles['hidden'] : ''
                  }`}
                  ref={respProfileListRef}
                >
                  <Link to="/online-store/profile">Profile</Link>
                  <Link to="/online-store/login" onClick={logOutHandler}>
                    Log out
                  </Link>
                </div>
              ) : (
                <div
                  className={`${styles['resp-header-login-register']} ${
                    !showRespUserList ? styles['hidden'] : ''
                  }`}
                  ref={respProfileListRef}
                >
                  <Link to="/online-store/login">Log in</Link>

                  <Link to="/online-store/registration">Register</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <HeaderLower />
    </header>
  );
};

export default Header;
