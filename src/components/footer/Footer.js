import styles from './Footer.module.css';
import brandLogo from '../../assets/header/icons/brand-logo.svg';
import facebookIco from '../../assets/footer/facebook.svg';
import twitterIco from '../../assets/footer/twitter.svg';
import linkedinIco from '../../assets/footer/linkedin.svg';
import instaIco from '../../assets/footer/insta.svg';
import youtubeIco from '../../assets/footer/youtube.svg';
import appleStoreImg from '../../assets/footer/market-button.png';
import androidMarketImg from '../../assets/footer/marketAndroid-button.png';
import upArrowImg from '../../assets/footer/expand_less.png';

import { Link } from 'react-router-dom';
import { footerInfo, language } from '../../data/footer/footerData';
import { useChangeLanguage } from '../../contexts/Context';
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const [currentLang, setCurrentLang] = useChangeLanguage();
  const [showLangList, setShowLangList] = useState(false);
  const { about, partnership, information, forUsers } = footerInfo;

  const showListRef = useRef();
  const listRef = useRef();

  const showLangListHandler = () => {
    setShowLangList(!showLangList);
  };

  const selectLangHandler = (lang, flag) => {
    const curFlag = flag;
    const curLang = lang;

    setCurrentLang((prev) => {
      return { ...prev, lang: curLang, flag: curFlag };
    });
  };

  const windowClickHandler = (e) => {
    if (e.target !== showListRef.current && e.target !== listRef.current) {
      setShowLangList(false);
    }

    if (e.target === listRef.current) {
      setShowLangList(true);
    }
  };

  useEffect(() => {
    window.addEventListener('click', windowClickHandler);

    return () => {
      window.removeEventListener('click', windowClickHandler);
    };
  }, []);

  return (
    <footer>
      <div className={styles['footer-upper']}>
        <div className={styles['footer-brand']}>
          <Link to="/online-store/">
            <img src={brandLogo} alt="brand logo" />
          </Link>
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className={styles['footer-social-links']}>
            <Link to="https://www.facebook.com/" target="_blank">
              <img src={facebookIco} alt="facebook" />
            </Link>
            <Link to="https://twitter.com/" target="_blank">
              <img src={twitterIco} alt="twitter" />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <img src={linkedinIco} alt="linkedin" />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <img src={instaIco} alt="instagram" />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <img src={youtubeIco} alt="youtube" />
            </Link>
          </div>
        </div>

        <div className={styles['footer-info']}>
          <div className={styles['footer-info-about']}>
            <h4>About</h4>
            <div className={styles['footer-about-links']}>
              {about.map((link, i) => {
                return (
                  <Link to={link.link} key={i}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={styles['footer-info-partnership']}>
            <h4>Partnership</h4>
            <div className={styles['footer-partnership-links']}>
              {partnership.map((link, i) => {
                return (
                  <Link to={link.link} key={i}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={styles['footer-info-information']}>
            <h4>Information</h4>
            <div className={styles['footer-information-links']}>
              {information.map((link, i) => {
                return (
                  <Link to={link.link} key={i}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={styles['footer-info-forUsers']}>
            <h4>For users</h4>
            <div className={styles['footer-forUsers-links']}>
              {forUsers.map((link, i) => {
                return (
                  <Link to={link.link} key={i}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={styles['footer-info-getApp']}>
            <h4>Get app</h4>
            <div className={styles['footer-getApp']}>
              <Link
                title="App store"
                to="https://www.apple.com/ge/app-store/"
                target="_blank"
              >
                <img src={appleStoreImg} alt="" />
              </Link>
              <Link
                title="Play store"
                to="https://play.google.com/store/games"
                target="_blank"
              >
                <img src={androidMarketImg} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['footer-lower']}>
        <div className={styles['footer-lower-content']}>
          <p className={styles['footer-copyright']}>&copy; 2023 Ecommerce.</p>
          <div
            className={styles['footer-change-lang']}
            ref={showListRef}
            onClick={showLangListHandler}
          >
            <img
              className={styles['footer-flag']}
              src={currentLang.flag}
              alt="English"
            />
            <p>{currentLang.lang}</p>
            <img
              className={styles['footer-arrow']}
              src={upArrowImg}
              alt="expand"
            />
            <ul
              className={`${
                showLangList
                  ? styles['footer-change-lang-list']
                  : styles['hidden']
              }`}
              ref={listRef}
            >
              {language.map((lang, i) => {
                return (
                  <li
                    key={i}
                    onClick={() => selectLangHandler(lang.lang, lang.flag)}
                  >
                    <img src={lang.flag} alt="flag" />
                    <span>{lang.lang}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
