import './Footer.css';
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
      <div className="footer-upper">
        <div className="footer-brand">
          <img src={brandLogo} alt="brand logo" />
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="footer-social-links">
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

        <div className="footer-info">
          <div className="footer-info-about">
            <h4>About</h4>
            <div className="footer-about-links">
              {about.map((link, i) => {
                return (
                  <Link to="" key={i}>
                    {link}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="footer-info-partnership">
            <h4>Partnership</h4>
            <div className="footer-partnership-links">
              {partnership.map((link, i) => {
                return (
                  <Link to="" key={i}>
                    {link}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="footer-info-information">
            <h4>Information</h4>
            <div className="footer-information-links">
              {information.map((link, i) => {
                return (
                  <Link to="" key={i}>
                    {link}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="footer-info-forUsers">
            <h4>For users</h4>
            <div className="footer-forUsers-links">
              {forUsers.map((link, i) => {
                return (
                  <Link to="" key={i}>
                    {link}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="footer-info-getApp">
            <h4>Get app</h4>
            <div className="footer-getApp">
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

      <div className="footer-lower">
        <div className="footer-lower-content">
          <p className="footer-copyright">&copy; 2023 Ecommerce.</p>
          <div className="footer-change-lang">
            <img src={usaFlagImg} alt="English" />
            <p>English</p>
            <img className="footer-arrow" src={upArrowImg} alt="expand" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
