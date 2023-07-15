import styles from './SelectedFilter.module.css';
import xIcon from '../../assets/mobile-accessories/clear.png';

const SelectedFilter = ({
  filteredOptions,
  setFilterItems,
  setBrandsForm,
  setFeaturesForm,
}) => {
  const onDeleteHandler = (e) => {
    // console.log(e.target.closest('span').innerText);
    setFilterItems((prev) => {
      return prev.filter((el) => e.target.closest('span').innerText !== el);
    });

    setBrandsForm((prev) => {
      return prev.map((el) => {
        if (el.name === e.target.closest('span').innerText) {
          el.check = false;
        }
        return el;
      });
    });

    setFeaturesForm((prev) => {
      return prev.map((el) => {
        if (el.name === e.target.closest('span').innerText) {
          el.checked = false;
        }
        return el;
      });
    });
  };

  const onClearAllHandler = () => {
    setFilterItems([]);
  };

  return (
    <div
      className={`${styles['filtered-items']} ${
        filteredOptions.length > 0 ? '' : styles['hidden']
      }`}
    >
      {filteredOptions.map((el, i) => {
        return (
          <span className={styles['filtered-item']} key={i}>
            {el}
            <img src={xIcon} alt="clear" onClick={onDeleteHandler} />
          </span>
        );
      })}

      <button onClick={onClearAllHandler}>Clear all filter</button>
    </div>
  );
};

export default SelectedFilter;
