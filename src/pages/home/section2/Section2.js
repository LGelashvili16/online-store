import DiscountedProduct from './DiscountedProduct';
import HomeOutdoorProduct from './HomeOutdoorProduct';
import ElectronicsProduct from './ElectronicsProduct';

import {
  section2Discounted,
  section2HomeOutdoor,
  section2Electronics,
} from '../../../data/home/homeData';

import styles from './Section2.module.css';
import frwdArrowIcon from '../../../assets/home/section2/arrow_forward.svg';
import CountDown from './CountDown';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Section2 = () => {
  const [row1ProductsWidth, setRow1ProductsWidth] = useState(0);
  const row1ProductsRef = useRef();

  useEffect(() => {
    setRow1ProductsWidth(
      row1ProductsRef.current.scrollWidth - row1ProductsRef.current.offsetWidth
    );
  }, []);

  return (
    <section className={styles['section2']}>
      <div className={styles['section2-row1']}>
        <div className={styles['section2-row1-offers']}>
          <div className={styles['section2-row1-offers-title']}>
            <h2>Deals and offers</h2>
            <p className={styles['section2-row1-offers-subtitle']}>
              Hygiene equipments
            </p>
          </div>

          <CountDown />
        </div>

        <motion.div
          className={styles['section2-row1-products-container']}
          ref={row1ProductsRef}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -row1ProductsWidth }}
            whileTap={{ cursor: 'grabbing' }}
            className={styles['section2-row1-products']}
          >
            {section2Discounted.map((product, index) => {
              return (
                <DiscountedProduct
                  key={index}
                  image={product.image}
                  title={product.title}
                  discount={product.discount}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <div className={styles['section2-row2']}>
        <div className={styles['section2-row2-bg']}>
          <div className={styles['section2-row2-home']}>
            <h3>
              Home and <br />
              outdoor
            </h3>
            <h4 className={styles['section2-row2-home-resptitle']}>
              Home and outdoor
            </h4>
            <button>Source now</button>
          </div>
        </div>

        <div className={styles['section2-row2-products']}>
          {section2HomeOutdoor.map((prod, index) => {
            return (
              <HomeOutdoorProduct
                key={index}
                title={prod.title}
                price={prod.price}
                image={prod.image}
              />
            );
          })}
        </div>

        <button className={styles['section2-row2-btn-resp']}>
          Source now <img src={frwdArrowIcon} alt="" />
        </button>
      </div>

      <div className={styles['section2-row3']}>
        <div className={styles['section2-row3-bg']}>
          <div className={styles['section2-row3-home']}>
            <h3>
              Consumer <br />
              electronics and
              <br />
              gadgets
            </h3>
            <h4 className={styles['section2-row3-home-resptitle']}>
              Consumer electronics
            </h4>

            <button>Source now</button>
          </div>
        </div>

        <div className={styles['section2-row3-products']}>
          {section2Electronics.map((prod, index) => {
            return (
              <ElectronicsProduct
                key={index}
                title={prod.title}
                price={prod.price}
                image={prod.image}
              />
            );
          })}
        </div>

        <button className={styles['section2-row3-btn-resp']}>
          Source now <img src={frwdArrowIcon} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Section2;
