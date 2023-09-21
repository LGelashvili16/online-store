import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import error404 from '../../assets/error/404.webp';

const NotFound = () => {
  return (
    <div className={styles['container']}>
      <h2>Page not found!</h2>
      <img src={error404} alt="" />
      <p className={styles['text']}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        porro?
      </p>

      <p className={styles['go-home']}>
        Go to <Link to={'/online-store'}>Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
