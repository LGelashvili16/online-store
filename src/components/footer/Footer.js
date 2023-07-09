import styles from './Footer.module.css';
import brandLogo from '../../assets/header/icons/brand-logo.svg';
import facebookIco from '../../assets/footer/facebook.svg';
import twitterIco from '../../assets/footer/twitter.svg';
import linkedinIco from '../../assets/footer/linkedin.svg';
import instaIco from '../../assets/footer/insta.svg';
import youtubeIco from '../../assets/footer/youtube.svg';
import appleStoreImg from '../../assets/footer/market-button.png';
import androidMarketImg from '../../assets/footer/marketAndroid-button.png';
import usaFlagImg from '../../assets/footer/USA.png';
import upArrowImg from '../../assets/footer/expand_less.png';

import { Link } from 'react-router-dom';
import { footerInfo } from '../../data/footer/footerData';

const Footer = () => {
  const { about, partnership, information, forUsers } = footerInfo;

  return (
    <footer>
      <div className={styles['footer-upper']}>
        <div className={styles['footer-brand']}>
          <img src={brandLogo} alt="brand logo" />
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className={styles['footer-social-links']}>
            <Link>
              <img src={facebookIco} alt="facebook" />
            </Link>
            <Link>
              <img src={twitterIco} alt="twitter" />
            </Link>
            <Link>
              <img src={linkedinIco} alt="linkedin" />
            </Link>
            <Link>
              <img src={instaIco} alt="instagram" />
            </Link>
            <Link>
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
                  <Link to="" key={i}>
                    {link}
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
                  <Link to="" key={i}>
                    {link}
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
                  <Link to="" key={i}>
                    {link}
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
                  <Link to="" key={i}>
                    {link}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={styles['footer-info-getApp']}>
            <h4>Get app</h4>
            <div className={styles['footer-getApp']}>
              <Link>
                <img src={appleStoreImg} alt="" />
              </Link>
              <Link>
                <img src={androidMarketImg} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['footer-lower']}>
        <div className={styles['footer-lower-content']}>
          <p className={styles['footer-copyright']}>&copy; 2023 Ecommerce.</p>
          <div className={styles['footer-change-lang']}>
            <img src={usaFlagImg} alt="English" />
            <p>English</p>
            <img
              className={styles['footer-arrow']}
              src={upArrowImg}
              alt="expand"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
