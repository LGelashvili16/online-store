import Breadcrumbs from '../../components/Breadcrumbs';
import Item from './Item';

import styles from './ProductPage.module.css';

const ProductPage = () => {
  return (
    <div className={styles['product-page-container']}>
      <Breadcrumbs />
      <Item />
    </div>
  );
};

export default ProductPage;
