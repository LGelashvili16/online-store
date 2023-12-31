import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ReactSlider from 'react-slider';
import { generateStars } from '../../utils/starGenerator';

import styles from './AsideList.module.css';
import expandArr from '../../assets/mobile-accessories/expand_less.svg';

const MIN = 0;
const MAX = 30000;

const AsideList = ({
  category,
  brands,
  setBrandsForm,
  features,
  setFeaturesForm,
  ratings,
  setRatingsForm,
  condition,
  filterItems,
  setFilterItems,
  showRespFilters,
}) => {
  const shortenedCategory = category.slice(0, 4);
  const shortBrandsForm = brands.slice(0, 5);
  const shorFeaturesForm = features.slice(0, 5);

  // Showing tabs
  const [showCategory, setShowCategory] = useState(true);
  const [showBrands, setShowbrands] = useState(true);
  const [showFeatures, setShowFeatures] = useState(true);
  const [showPriceRange, setShowPriceRange] = useState(true);
  const [showCondition, setShowCondition] = useState(true);
  const [showRatings, setShowRatings] = useState(true);

  // Showing lists
  const [showCategoryList, setShowCategoryList] = useState(true);
  const [showBrandsList, setShowBrandsList] = useState(true);
  const [showFeaturesList, setShowFeaturesList] = useState(true);

  // Slider values
  const [sliderValues, setSliderValues] = useState([MIN, MAX]);

  // useEffect
  useEffect(() => {
    if (filterItems.length === 0) {
      setBrandsForm((prev) => {
        return prev.map((el) => {
          el.check = false;
          return { ...el };
        });
      });

      setFeaturesForm((prev) => {
        return prev.map((el) => {
          el.checked = false;
          return { ...el };
        });
      });

      setRatingsForm((prev) => {
        return prev.map((el) => {
          el.checked = false;
          return el;
        });
      });
    }
  }, [filterItems, setBrandsForm, setFeaturesForm, setRatingsForm]);

  // Handlers
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
    const identifier = +e.target.id;
    // Click on CHECKBOX & LABEL - Unchecked
    if (e.target.checked) {
      setBrandsForm((prev) => {
        return prev.map((elem) => {
          if (elem.name === brands[identifier - 1].name) {
            elem.check = true;
          }
          return elem;
        });
      });

      setFilterItems((prev) => {
        const final = [...prev, brands[identifier - 1].name];
        return final;
      });
    }

    // Click on CHECKBOX & LABEL - Checked
    if (!e.target.checked) {
      setBrandsForm((prev) => {
        return prev.map((elem) => {
          if (elem.name === brands[identifier - 1].name) {
            elem.check = false;
          }
          return elem;
        });
      });

      setFilterItems((prev) => {
        return prev.filter((elem) => {
          return brands[identifier - 1].name !== elem;
        });
      });
    }
  };

  const featuresListHandler = (e) => {
    const identifier = parseInt(e.target.id);
    console.log(identifier);
    // Click on CHECKBOX & LABEL - Unchecked
    if (e.target.checked) {
      setFeaturesForm((prev) => {
        return prev.map((elem) => {
          if (elem.name === features[identifier - 1].name) {
            elem.checked = true;
          }
          return elem;
        });
      });

      setFilterItems((prev) => {
        const final = [...prev, features[identifier - 1].name];
        return final;
      });
    }

    // Click on CHECKBOX & LABEL - Checked
    if (!e.target.checked) {
      setFeaturesForm((prev) => {
        return prev.map((elem) => {
          if (elem.name === features[identifier - 1].name) {
            elem.checked = false;
          }
          return elem;
        });
      });

      setFilterItems((prev) => {
        return prev.filter((elem) => {
          return features[identifier - 1].name !== elem;
        });
      });
    }
  };

  // Ratings
  const ratingsHandler = (e) => {
    const identifier = parseInt(e.target.id);

    setRatingsForm((prev) => {
      return prev.map((elem) => {
        if (ratings[identifier - 1].name === elem.name) {
          return { ...elem, checked: !elem.checked };
        }

        return elem;
      });
    });

    if (e.target.checked) {
      setFilterItems((prev) => {
        return [...prev, ratings[identifier - 1].name];
      });
    }

    if (!e.target.checked) {
      setFilterItems((prev) => {
        return prev.filter((elem) => {
          return ratings[identifier - 1].name !== elem;
        });
      });
    }
  };

  //! ****************************** JSX

  return (
    <div
      className={`${styles['aside-container']} ${
        showRespFilters && styles['resp-show']
      }`}
    >
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
                      <Link to={cat.link}>{cat.name}</Link>
                    </li>
                  );
                })
              : category.map((cat, i) => {
                  return (
                    <li key={i}>
                      <Link to={cat.link}>{cat.name}</Link>
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
              ? shortBrandsForm.map((category, i) => {
                  return (
                    <li className={styles['brands-li']} key={i}>
                      <input
                        type="checkbox"
                        id={category.id}
                        checked={category.check}
                        onChange={filteredHandler}
                      />
                      <label htmlFor={category.id}>{category.name}</label>
                    </li>
                  );
                })
              : brands.map((category, i) => {
                  return (
                    <li key={i}>
                      <input
                        type="checkbox"
                        name={category.name}
                        id={category.id}
                        checked={category.check}
                        onChange={filteredHandler}
                      />
                      <label htmlFor={category.id}>{category.name}</label>
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
              ? shorFeaturesForm.map((cat, i) => {
                  return (
                    <li className={styles['features-li']} key={i}>
                      <input
                        type="checkbox"
                        name={cat.name}
                        id={cat.id}
                        checked={cat.checked}
                        onChange={featuresListHandler}
                      />
                      <label htmlFor={cat.id}>{cat.name}</label>
                    </li>
                  );
                })
              : features.map((cat, i) => {
                  return (
                    <li className={styles['features-li']} key={i}>
                      <input
                        type="checkbox"
                        name={cat.name}
                        id={cat.id}
                        checked={cat.checked}
                        onChange={featuresListHandler}
                      />
                      <label htmlFor={cat.id}>{cat.name}</label>
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
          <ul className={styles['ratings-list']}>
            {ratings.map((rating) => {
              return (
                <li key={rating.id}>
                  <input
                    type="checkbox"
                    name={rating.name}
                    id={rating.id}
                    checked={rating.checked}
                    onChange={ratingsHandler}
                  />
                  <label htmlFor={rating.id}>
                    {generateStars(
                      rating.stars,
                      rating.filledImg,
                      rating.emptyImg
                    )}
                  </label>
                </li>
              );
            })}
          </ul>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default memo(AsideList);
