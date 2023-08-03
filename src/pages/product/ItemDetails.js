import styles from './ItemDetails.module.css';
import YouMayLike from './youMayLike/YouMayLike';
import tickIcon from '../../assets/item/tick.png';

const ItemDetails = () => {
  const tabHandler = (e) => {
    Array.from(e.target.closest('div').children).forEach((el) => {
      el.classList.remove(styles['active-tab']);
    });

    e.target.classList.add(styles['active-tab']);
  };

  return (
    <div className={styles['item-details-wrapper']}>
      <div className={styles['item-details']}>
        <div className={styles['item-details-tabs']} onClick={tabHandler}>
          <span className={styles['active-tab']}>Description</span>
          <span>Reviews</span>
          <span>Shipping</span>
          <span>About seller</span>
        </div>

        <div className={styles['item-details-description']}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            <br /> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <table>
          <tbody>
            <tr>
              <td className={styles['table-column']}>Model</td>
              <td>#8786867</td>
            </tr>
            <tr>
              <td className={styles['table-column']}>Style</td>
              <td>Classic style</td>
            </tr>
            <tr>
              <td className={styles['table-column']}>Certificate</td>
              <td>ISO-898921212</td>
            </tr>
            <tr>
              <td className={styles['table-column']}>Size</td>
              <td>34mm x 450mm x 19mm</td>
            </tr>
            <tr>
              <td className={styles['table-column']}>Memory</td>
              <td>36GB RAM</td>
            </tr>
          </tbody>
        </table>

        <div className={styles['item-features']}>
          <div className={styles['item-feature']}>
            <img src={tickIcon} alt="tick" />
            <p>Some great feature name here</p>
          </div>

          <div className={styles['item-feature']}>
            <img src={tickIcon} alt="tick" />
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>

          <div className={styles['item-feature']}>
            <img src={tickIcon} alt="tick" />
            <p>Duis aute irure dolor in reprehenderit</p>
          </div>

          <div className={styles['item-feature']}>
            <img src={tickIcon} alt="tick" />
            <p>Some great feature name here</p>
          </div>
        </div>
      </div>

      <YouMayLike />
    </div>
  );
};

export default ItemDetails;
