import { useState } from 'react';
import { Link } from 'react-router-dom';

import ReactSlider from 'react-slider';

import styles from './AsideList.module.css';
import expandArr from '../../assets/mobile-accessories/expand_less.svg';
import filledStar from '../../assets/mobile-accessories/filled-star.svg';
import emptyStar from '../../assets/mobile-accessories/empty-star.svg';

import {
  category,
  brands,
  features,
  condition,
} from '../../data/mobileAccessories/mobileAccessoriesData';

const MIN = 0;
const MAX = 999999;

const AsideList = ({ setFilterItems }) => {
  const [showCategory, setShowCategory] = useState(true);
  const [showBrands, setShowbrands] = useState(true);
  const [showFeatures, setShowFeatures] = useState(true);
  const [showPriceRange, setShowPriceRange] = useState(true);
  const [showCondition, setShowCondition] = useState(true);
  const [showRatings, setShowRatings] = useState(true);

  const [showCategoryList, setShowCategoryList] = useState(true);
  const [showBrandsList, setShowBrandsList] = useState(true);
  const [showFeaturesList, setShowFeaturesList] = useState(true);

  const [sliderValues, setSliderValues] = useState([MIN, MAX]);

  const shortenedCategory = category.slice(0, 4);
  const shortenedBrands = brands.slice(0, 5);
  const shortenedFeatures = features.slice(0, 5);

  const categoryHandler = () => {
    setShowCategoryList(!showCategoryList);
  };

  const brandsHandler = () => {
    setShowBrandsList(!showBrandsList);
  };

  const featuresHandler = () => {
    setShowFeaturesList(!showFeaturesList);
  };

  const minInputValueHandler = (e) => {
    setSliderValues([+e.target.value, sliderValues[1]]);
  };

  const maxInputValueHandler = (e) => {
    setSliderValues([sliderValues[0], +e.target.value]);
  };

  const filteredHandler = (e) => {
    // console.log(e.target.closest('li').children[0].checked);
    if (e.target.closest('li').children[0].checked) {
      setFilterItems((prev) => {
        return [...prev, e.target.closest('li').children[1].innerHTML];
      });
    }

    if (e.target.closest('li').children[0].checked === false) {
      setFilterItems((prev) => {
        return prev.filter((elem) => {
          return e.target.closest('li').children[1].innerHTML !== elem;
        });
      });
    }
  };

  return (
    <div className={styles['aside-container']}>
      <div className={styles['category']}>
        <div
          className={styles['title']}
          onClick={() => {
            setShowCategory(!showCategory);
          }}
        >
          <h3>Category</h3>
          <img
            src={expandArr}
            alt="arr"
            style={{ transform: !showCategory ? 'rotate(180deg)' : '' }}
          />
        </div>

        {showCategory ? (
          <ul>
            {showCategoryList
              ? shortenedCategory.map((cat, i) => {
                  return (
                    <li key={i}>
                      <Link>{cat}</Link>
                    </li>
                  );
                })
              : category.map((cat, i) => {
                  return (
                    <li key={i}>
                      <Link>{cat}</Link>
                    </li>
                  );
                })}
          </ul>
        ) : (
          ''
        )}

        {showCategory ? (
          <button className={styles['btn']} onClick={categoryHandler}>
            {showCategoryList ? 'See all' : 'Show less'}
          </button>
        ) : (
          ''
        )}
      </div>

      <div className={styles['brands']}>
        <div
          className={styles['title']}
          onClick={() => setShowbrands(!showBrands)}
        >
          <h3>Brands</h3>
          <img
            src={expandArr}
            alt="arr"
            style={{ transform: !showBrands ? 'rotate(180deg)' : '' }}
          />
        </div>

        {showBrands ? (
          <ul>
            {showBrandsList
              ? shortenedBrands.map((cat, i) => {
                  return (
                    <li key={i} onClick={filteredHandler}>
                      <input type="checkbox" name={cat} id={cat} />
                      <label htmlFor={cat}>{cat}</label>
                    </li>
                  );
                })
              : brands.map((cat, i) => {
                  return (
                    <li key={i} onClick={filteredHandler}>
                      <input type="checkbox" name={cat} id={cat} />
                      <label htmlFor={cat}>{cat}</label>
                    </li>
                  );
                })}
          </ul>
        ) : (
          ''
        )}

        {showBrands ? (
          <button className={styles['btn']} onClick={brandsHandler}>
            {showBrandsList ? 'See all' : 'Show less'}
          </button>
        ) : (
          ''
        )}
      </div>

      <div className={styles['features']}>
        <div
          className={styles['title']}
          onClick={() => setShowFeatures(!showFeatures)}
        >
          <h3>Features</h3>
          <img
            src={expandArr}
            alt="arr"
            style={{ transform: !showFeatures ? 'rotate(180deg)' : '' }}
          />
        </div>

        {showFeatures ? (
          <ul>
            {showFeaturesList
              ? shortenedFeatures.map((cat, i) => {
                  return (
                    <li key={i} onClick={filteredHandler}>
                      <input type="checkbox" name={cat} id={cat} />
                      <label htmlFor={cat}>{cat}</label>
                    </li>
                  );
                })
              : features.map((cat, i) => {
                  return (
                    <li key={i} onClick={filteredHandler}>
                      <input type="checkbox" name={cat} id={cat} />
                      <label htmlFor={cat}>{cat}</label>
                    </li>
                  );
                })}
          </ul>
        ) : (
          ''
        )}

        {showFeatures ? (
          <button className={styles['btn']} onClick={featuresHandler}>
            {showFeaturesList ? 'See all' : 'Show less'}
          </button>
        ) : (
          ''
        )}
      </div>

      <div className={styles['price-range']}>
        <div
          className={styles['title']}
          onClick={() => setShowPriceRange(!showPriceRange)}
        >
          <h3>Price range</h3>
          <img
            src={expandArr}
            alt="arr"
            style={{ transform: !showPriceRange ? 'rotate(180deg)' : '' }}
          />
        </div>
        {showPriceRange ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles['price-range-slider-wrapper']}>
              <ReactSlider
                className={styles['price-range-slider']}
                onChange={setSliderValues}
                value={sliderValues}
                min={MIN}
                max={MAX}
              />
            </div>

            <div className={styles['price-range-minmax']}>
              <div className={styles['price-range-min']}>
                <label htmlFor="min">Min</label>
                <input
                  type="number"
                  id="min"
                  min={MIN}
                  max={MAX - 1}
                  onChange={minInputValueHandler}
                  value={sliderValues[0]}
                />
              </div>

              <div className={styles['price-range-max']}>
                <label htmlFor="max">Max</label>
                <input
                  type="number"
                  id="max"
                  min={MIN + 1}
                  max={MAX}
                  onChange={maxInputValueHandler}
                  value={sliderValues[1]}
                />
              </div>
            </div>

            <button>Apply</button>
          </form>
        ) : (
          ''
        )}
      </div>

      <div className={styles['condition']}>
        <div
          className={styles['title']}
          onClick={() => setShowCondition(!showCondition)}
        >
          <h3>Condition</h3>
          <img
            src={expandArr}
            alt="arr"
            style={{ transform: !showCondition ? 'rotate(180deg)' : '' }}
          />
        </div>

        {showCondition ? (
          <ul>
            {condition.map((cat, i) => {
              return (
                <li key={i}>
                  <input type="radio" name="radio" id={cat} />
                  <label htmlFor={cat}>{cat}</label>
                </li>
              );
            })}
          </ul>
        ) : (
          ''
        )}
      </div>

      <div className={styles['ratings']}>
        <div
          className={styles['title']}
          onClick={() => setShowRatings(!showRatings)}
        >
          <h3>Ratings</h3>
          <img
            src={expandArr}
            alt="arr"
            style={{ transform: !showRatings ? 'rotate(180deg)' : '' }}
          />
        </div>

        {showRatings ? (
          <ul>
            <li>
              <input type="checkbox" name="" id="star-5" />
              <label htmlFor="star-5">
                <img src={filledStar} alt="star" />
                <img src={filledStar} alt="star" />
                <img src={filledStar} alt="star" />
                <img src={filledStar} alt="star" />
                <img src={filledStar} alt="star" />
              </label>
            </li>

            <li>
              <input type="checkbox" name="" id="star-4" />
              <label htmlFor="star-4">
                <img src={filledStar} alt="star" />
                <img src={filledStar} alt="star" />
                <img src={filledStar} alt="star" />
                <img src={filledStar} alt="star" />
                <img src={emptyStar} alt="star" />
              </label>
            </li>

            <li>
              <input type="checkbox" name="" id="star-3" />
              <label htmlFor="star-3">
                <img src={filledStar} alt="star" />
                <img src={filledStar} alt="star" />
                <img src={filledStar} alt="star" />
                <img src={emptyStar} alt="star" />
                <img src={emptyStar} alt="star" />
              </label>
            </li>

            <li>
              <input type="checkbox" name="" id="star-2" />
              <label htmlFor="star-2">
                <img src={filledStar} alt="star" />
                <img src={filledStar} alt="star" />
                <img src={emptyStar} alt="star" />
                <img src={emptyStar} alt="star" />
                <img src={emptyStar} alt="star" />
              </label>
            </li>
          </ul>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default AsideList;
