import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedProducts from '../../components/relatedProducts/RelatedProducts';
import SuperDoscount from '../../components/superDiscount/SuperDoscount';
import Item from './Item';
import ItemDetails from './ItemDetails';

import styles from './ProductPage.module.css';
import germanyFlag from '../../assets/item/Germanyflag.png';
import verifiedIcon from '../../assets/item/verified_user.png';
import worldwideIcon from '../../assets/item/worldwide.png';
import angleIcon from '../../assets/item/angle_right.png';
import MayAlsoLike from '../mobile-accessories/mayAlsoLike/MayAlsoLike';

const ProductPage = () => {
  return (
    <div className={styles['product-page-container']}>
      <Breadcrumbs />
      <Item />

      <div className={styles['resp-seller']}>
        <div className={styles['resp-seller-name-wrapper']}>
          <div className={styles['resp-seller-name-container']}>
            <span>R</span>

            <div className={styles['resp-seller-name']}>
              <p>Supplier</p>
              <p>Guanjoi Trading LLC</p>
            </div>
          </div>

          <img
            src={angleIcon}
            alt=""
            className={styles['resp-seller-angle-img']}
          />
        </div>

        <div className={styles['resp-seller-info']}>
          <div className={styles['resp-seller-counrty']}>
            <img src={germanyFlag} alt="flag" /> <span>Germany</span>
          </div>

          <div className={styles['resp-seller-verification']}>
            <img src={verifiedIcon} alt="flag" /> <span>Verified</span>
          </div>

          <div className={styles['resp-seller-shipTo']}>
            <img src={worldwideIcon} alt="flag" /> <span>Shipping</span>
          </div>
        </div>
      </div>

      <div className={styles['you-may-also-like']}>
        <MayAlsoLike />
      </div>

      <ItemDetails />

      <div className={styles['related-products']}>
        <RelatedProducts />
      </div>

      <div className={styles['super-discount']}>
        <SuperDoscount />
      </div>
    </div>
  );
};

export default ProductPage;
