import DiscountedProduct from './DiscountedProduct';
import HomeOutdoorProduct from './HomeOutdoorProduct';
import ElectronicsProduct from './ElectronicsProduct';

import { homeOutdoorCategories } from '../../../data/homeAndOutdoor/homeAndOutdoorData';

import styles from './DealsAndCategories.module.css';
import frwdArrowIcon from '../../../assets/home/section2/arrow_forward.svg';
import CountDown from './CountDown';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { consumerElectronicsCategories } from '../../../data/consumerElectronics/consumerElectronicsData';

const DealsAndCategories = () => {
  const [row1ProductsWidth, setRow1ProductsWidth] = useState(0);
  const row1ProductsRef = useRef();
  const [row2ProductsWidth, setRow2ProductsWidth] = useState(0);
  const row2ProductsRef = useRef();
  const [row3ProductsWidth, setRow3ProductsWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const row3ProductsRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    setRow1ProductsWidth(
      row1ProductsRef.current.scrollWidth - row1ProductsRef.current.offsetWidth
    );

    setRow2ProductsWidth(
      row2ProductsRef.current.scrollWidth - row2ProductsRef.current.offsetWidth
    );

    setRow3ProductsWidth(
      row3ProductsRef.current.scrollWidth - row3ProductsRef.current.offsetWidth
    );
  }, []);

  const onDragStart = () => {
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  const homeAndOutdoorHandler = () => {
    navigate('home-and-outdoor');
  };

  const consumerElectronicsHandler = () => {
    navigate('consumer-electronics');
  };

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
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            drag="x"
            dragConstraints={{ right: 0, left: -row1ProductsWidth }}
            whileTap={{ cursor: 'grabbing' }}
            className={styles['section2-row1-products']}
          >
            {consumerElectronicsCategories.map((product, index) => {
              return (
                <DiscountedProduct
                  key={index}
                  image={product.images[0]}
                  title={product.title}
                  discount={product.discount}
                  isDragging={isDragging}
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
            <button onClick={homeAndOutdoorHandler}>Source now</button>
          </div>
        </div>

        <motion.div
          className={styles['section2-row2-products-container']}
          ref={row2ProductsRef}
        >
          <motion.div
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            drag="x"
            dragConstraints={{ right: 0, left: -row2ProductsWidth }}
            whileDrag={{ cursor: 'grabbing' }}
            className={styles['section2-row2-products']}
          >
            {homeOutdoorCategories.map((prod, index) => {
              return (
                <HomeOutdoorProduct
                  key={prod.id}
                  title={prod.title}
                  price={prod.price}
                  image={prod.images[0]}
                  isDragging={isDragging}
                />
              );
            })}
          </motion.div>
        </motion.div>

        <button
          className={styles['section2-row2-btn-resp']}
          onClick={homeAndOutdoorHandler}
        >
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

            <button onClick={consumerElectronicsHandler}>Source now</button>
          </div>
        </div>

        <motion.div
          className={styles['section2-row3-products-container']}
          ref={row3ProductsRef}
        >
          <motion.div
            // onDragStart={onElectronicsDragStart}
            // onDragEnd={onelectronicsDragEnd}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            drag="x"
            dragConstraints={{ right: 0, left: -row3ProductsWidth }}
            whileDrag={{ cursor: 'grabbing' }}
            className={styles['section2-row3-products']}
          >
            {consumerElectronicsCategories.map((prod, index) => {
              return (
                <ElectronicsProduct
                  key={index}
                  title={prod.title}
                  price={prod.price}
                  image={prod.images[0]}
                  isDragging={isDragging}
                />
              );
            })}
          </motion.div>
        </motion.div>

        <button
          className={styles['section2-row3-btn-resp']}
          onClick={consumerElectronicsHandler}
        >
          Source now <img src={frwdArrowIcon} alt="" />
        </button>
      </div>
    </section>
  );
};

export default DealsAndCategories;
