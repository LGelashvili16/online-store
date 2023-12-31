import { Link, useLocation } from 'react-router-dom';

import styles from './Breadcrumbs.module.css';
import breadcrumbsArr from '../assets/home/breadcrumbs/chevron_right.svg';

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className={styles['crumb']} key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
          <img src={breadcrumbsArr} alt="" />
        </div>
      );
    });

  return <div className={styles['breadcrumbs']}>{crumbs}</div>;
};

export default Breadcrumbs;
