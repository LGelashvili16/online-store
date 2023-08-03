import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedProducts from '../../components/relatedProducts/RelatedProducts';
import SuperDoscount from '../../components/superDiscount/SuperDoscount';
import Item from './Item';
import ItemDetails from './ItemDetails';

import styles from './ProductPage.module.css';

const ProductPage = () => {
  return (
    <div className={styles['product-page-container']}>
      <Breadcrumbs />
      <Item />
      <ItemDetails />
      <RelatedProducts />
      <div className={styles['super-discount']}>
        <SuperDoscount />
      </div>
    </div>
  );
};

export default ProductPage;
