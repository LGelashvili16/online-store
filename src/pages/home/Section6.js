import './Section6.css';
import mailIcon from '../../assets/home/section6/mail.svg';
import { useState } from 'react';

const Section6 = () => {
  const [showIcon, setShowIcon] = useState(false);

  const hideIconHandler = () => {
    setShowIcon(!showIcon);
  };

  const showIconHandler = () => {
    setShowIcon(false);
  };

  return (
    <div className="section6">
      <div className="section6-subscribe">
        <h3>Subscribe on our newsletter</h3>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <form className="section6-form">
          <img
            className={`section6-mailIcon ${showIcon ? 'hidden' : ''}`}
            src={mailIcon}
            alt=""
          />
          <input
            type="email"
            placeholder="Email"
            onClick={hideIconHandler}
            onBlur={showIconHandler}
          />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Section6;
