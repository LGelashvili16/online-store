import { useParams } from 'react-router-dom';
import styles from './Item.module.css';
import { products } from '../../data/mobileAccessories/mobileAccessoriesData';
import { useState } from 'react';

import { generateStars } from '../../utils/starGenerator';
import checkIcon from '../../assets/item/check.png';
import reviewsIcon from '../../assets/item/message.png';
import salesIcon from '../../assets/item/shopping_basket.png';

import filledStar from '../../assets/mobile-accessories/filled-star.svg';
import emptyStar from '../../assets/mobile-accessories/empty-star.svg';

const Item = () => {
  console.log('PRODUCT COMPONENT');

  const params = useParams();
  const [currentProduct] = products.slice(+params.id - 1, +params.id);

  const [mainImg, setMainImg] = useState(currentProduct.images[0]);

  const imageHandler = (e) => {
    Array.from(e.target.closest('ul').children).forEach((element) => {
      element.classList.remove(styles['active-image']);
    });

    e.target.closest('li').classList.add(styles['active-image']);

    setMainImg(e.target.closest('li').children[0].src);
  };

  const priceHandler = (e) => {
    Array.from(e.target.closest('.Item_prices__efD63').children).forEach(
      (el) => {
        el.children[0].classList.remove(styles['active-price']);
      }
    );

    e.target.closest('div').children[0].classList.add(styles['active-price']);
  };

  return (
    <div className={styles['item-wrapper']}>
      <div className={styles['item-images']}>
        <div className={styles['item-main-image']}>
          <img src={mainImg} alt="" />
        </div>
        <ul className={styles['item-all-images']}>
          {currentProduct.images.map((img, i) => {
            return (
              <li
                key={i}
                className={`${styles['image']} ${
                  i === 0 ? styles['active-image'] : ''
                }`}
                onClick={imageHandler}
              >
                <img src={img} alt="product" />
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles['about-product']}>
        <div className={styles['stock']}>
          <img src={checkIcon} alt="check" /> <p>In stock</p>
        </div>

        <div className={styles['title']}>
          <h3>{currentProduct.title}</h3>
        </div>

        <div className={styles['rating']}>
          <div className={styles['rating-stars']}>
            <div className={styles['rating-stars-img']}>
              {generateStars(currentProduct.rating, filledStar, emptyStar)}
            </div>
            <span>9.3</span>
          </div>

          <span className={styles['dot']}></span>

          <div className={styles['rating-reviews']}>
            <img src={reviewsIcon} alt="review" />
            <span>32 reviews</span>
          </div>

          <span className={styles['dot']}></span>

          <div className={styles['rating-sales']}>
            <img src={salesIcon} alt="sales" />
            <span>154 sold</span>
          </div>
        </div>

        <div className={styles['prices']}>
          <div onClick={priceHandler}>
            <h4 className={`${styles['price']} ${styles['active-price']}`}>
              {currentProduct.price}
            </h4>
            <span>50-100 pcs</span>
          </div>

          <div onClick={priceHandler}>
            <h4>{currentProduct.price}</h4>
            <span>100-700 pcs</span>
          </div>

          <div onClick={priceHandler}>
            <h4>{currentProduct.price}</h4>
            <span>700+ pcs</span>
          </div>
        </div>

        <div className={styles['product-description']}>
          <div className={styles['product-description-row1']}>
            <div className={styles['product-description-rows-title']}>
              <h4>Price:</h4>
            </div>
            <div className={styles['product-description-rows-description']}>
              <p>Negotiable</p>
            </div>
          </div>

          <div className={styles['product-description-row2']}>
            <div className={styles['product-description-rows-title']}>
              <h4>Type:</h4>
              <h4>Material:</h4>
              <h4>Design:</h4>
            </div>
            <div className={styles['product-description-rows-description']}>
              <p>Classic shoes</p>
              <p>Plastic material</p>
              <p>Modern nice</p>
            </div>
          </div>

          <div className={styles['product-description-row3']}>
            <div className={styles['product-description-rows-title']}>
              <h4>Customization:</h4>
              <h4>Protection:</h4>
              <h4>Warranty:</h4>
            </div>
            <div className={styles['product-description-rows-description']}>
              <p>Customized logo and design custom packages</p>
              <p>Refund Policy</p>
              <p>2 years full warranty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
