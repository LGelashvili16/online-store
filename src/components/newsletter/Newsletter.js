import styles from './Newsletter.module.css';

import mailIcon from '../../assets/newsletter/mail.svg';
import { useRef, useState } from 'react';

const Newsletter = () => {
  const [hideIcon, setHideIcon] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  const onChangeHandler = (e) => {
    setHideIcon(true);
    setInputValue(e.target.value);
  };

  const onBlurHandler = (e) => {
    console.log();
    if (e.target.value === '') {
      setHideIcon(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setHideIcon(false);
    setInputValue('');
  };

  return (
    <section className={styles['newsletter']}>
      <div className={styles['newsletter-subscribe']}>
        <h3>Subscribe on our newsletter</h3>
        <p>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
        <form className={styles['newsletter-form']} onSubmit={submitHandler}>
          <img
            className={`${styles['newsletter-mailIcon']} ${
              hideIcon ? styles['hidden'] : ''
            }`}
            src={mailIcon}
            alt=""
          />
          <input
            type="email"
            placeholder="Email"
            value={inputValue}
            ref={inputRef}
            onChange={onChangeHandler}
            onFocus={() => {
              setHideIcon(true);
            }}
            onBlur={onBlurHandler}
          />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
