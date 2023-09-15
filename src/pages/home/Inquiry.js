import styles from './Inquiry.module.css';
import dropdownArrow from '../../assets/header/icons/expand-arrow.svg';
import { pcsAmount } from '../../data/home/homeData';
import { useEffect, useRef, useState } from 'react';

const Inquiry = () => {
  const [showPcsList, setShowPcsList] = useState(false);
  const [showRespForm, setShowRespForm] = useState(false);
  const [mobileScreen, setMobileScreen] = useState(false);

  const [pcs, setPcs] = useState('');

  const [, setForm] = useState({
    requestedItem: '',
    requestedItemDetails: '',
    requestedItemQuantity: '',
    pcs: pcs,
  });

  const detectMobile = () => {
    if (window.innerWidth <= 480 || window.innerWidth <= 769) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  };

  useEffect(() => {
    detectMobile();

    window.addEventListener('resize', detectMobile);

    return () => {
      window.removeEventListener('resize', detectMobile);
    };
  }, [mobileScreen]);

  const pcsListHandler = () => {
    setShowPcsList(!showPcsList);
  };

  const pcsRef = useRef();
  const pcsListRef = useRef();

  const showFormHandler = () => {
    setShowRespForm(!showRespForm);
  };

  const pcsHandler = (e) => {
    setPcs(`${e.target.textContent}`);

    setForm((prev) => {
      prev.pcs = e.target.textContent;
      return prev;
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setForm({
      requestedItem: '',
      requestedItemDetails: '',
      requestedItemQuantity: '',
      pcs: pcs,
    });

    setPcs('');
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      prev[name] = value;
      return prev;
    });
  };

  // Attach window click listener
  const windowClickHandler = (e) => {
    if (e.target !== pcsRef.current && e.target !== pcsListRef.current) {
      setShowPcsList(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', windowClickHandler);

    return () => window.removeEventListener('click', windowClickHandler);
  }, []);

  // ! JSX
  return (
    <section className={styles['section3']}>
      <div
        className={styles['section3-send-quote']}
        style={{ height: showRespForm ? '500px' : '' }}
      >
        <div className={styles['section3-gradient-bg']}>
          <div className={styles['section3-title']}>
            <h2>
              An easy way to send
              <br />
              requests to all suppliers
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              <br /> elit, sed do eiusmod tempor incididunt.
            </p>
            <button
              className={styles['section3-btn-resp']}
              onClick={showFormHandler}
            >
              {!showRespForm ? 'Send inquiry' : 'Cancel inquiry'}
            </button>
          </div>

          <form
            className={`${styles['section3-form']} ${
              mobileScreen && !showRespForm ? styles['hidden'] : styles['']
            }`}
            onSubmit={formSubmitHandler}
          >
            <h3>Send quote to suppliers</h3>
            <input
              type="text"
              name="requestedItem"
              placeholder="What item you need?"
              onChange={onChangeHandler}
            />

            <textarea
              className={styles['textarea']}
              name="requestedItemDetails"
              placeholder="Type more details"
              onChange={onChangeHandler}
            ></textarea>

            <div className={styles['section3-form-quantity']}>
              <input
                type="number"
                name="requestedItemQuantity"
                placeholder="Quantity"
                onChange={onChangeHandler}
              />
              <div
                className={styles['pcs-dropdown']}
                onClick={pcsListHandler}
                ref={pcsRef}
              >
                <p>
                  <span>{pcs}</span>
                  <span>Pcs</span>
                </p>
                <img src={dropdownArrow} alt="Arrow" />
                <ul
                  className={`${styles['pcs-list']}  ${
                    !showPcsList ? styles['hidden'] : ''
                  }`}
                  ref={pcsListRef}
                >
                  {pcsAmount.map((n, i) => {
                    return (
                      <li key={i} onClick={pcsHandler}>
                        {n}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <button>Send inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
