import styles from './Pagination.module.css';
import expandMoreArrow from '../../assets/mobile-accessories/expand_more.png';
import PaginationItem from './PaginationItem';

import leftArr from '../../assets/mobile-accessories/chevron-left.png';
import rightArr from '../../assets/mobile-accessories/chevron-right.png';
import leftArrDisabled from '../../assets/mobile-accessories/chevron-left-disabled.png';
import rightArrDisabled from '../../assets/mobile-accessories/chevron-right-disabled.png';
import { useState } from 'react';

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

const Pagination = ({
  currentPage,
  total,
  limit,
  onPageChange,
  showProductsAmount,
}) => {
  const [showAmount, setShowAmount] = useState('Show 6');
  const [showAmountList, setShowAmountList] = useState(false);

  const pagesCount = Math.ceil(total / limit);

  const pages = range(1, pagesCount);

  const showAmountListHandler = () => {
    setShowAmountList(!showAmountList);
  };

  const showAmountHandler = (e) => {
    setShowAmount(e.target.closest('li').children[0].innerHTML);

    const extractNum = e.target.closest('li').children[0].innerHTML.split(' ');

    showProductsAmount(+extractNum[1]);
  };

  const rightArrHandler = () => {
    if (currentPage < pagesCount) {
      onPageChange(currentPage + 1);
    }
    return;
  };

  const leftArrHandler = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }

    return;
  };

  return (
    <div className={styles['pagination']}>
      <div className={styles['choose-amount']} onClick={showAmountListHandler}>
        <p>{showAmount}</p>
        <img src={expandMoreArrow} alt="expand" />
        <ul
          className={`${styles['choose-amount-list']} ${
            !showAmountList ? styles['hidden'] : ''
          }`}
        >
          <li onClick={showAmountHandler}>
            <span>Show 6</span>
          </li>
          <li onClick={showAmountHandler}>
            <span>Show 10</span>
          </li>
          <li onClick={showAmountHandler}>
            <span>Show 18</span>
          </li>
        </ul>
      </div>

      <div className={styles['switch-pages']}>
        <div className={styles['left-arrow']} onClick={leftArrHandler}>
          <img src={currentPage === 1 ? leftArrDisabled : leftArr} alt="left" />
        </div>

        <ul className={styles['pages']}>
          {pages.map((page) => (
            <PaginationItem
              page={page}
              key={page}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          ))}
        </ul>

        <div className={styles['right-arrow']} onClick={rightArrHandler}>
          <img
            src={currentPage === pagesCount ? rightArrDisabled : rightArr}
            alt="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
