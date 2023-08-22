import styles from './ProductItem.module.css';
import favoriteIcon from '../../../assets/mobile-accessories/favorite.svg';
import favoriteFilledIcon from '../../../assets/mobile-accessories/favorite_filled.png';
import filledStarImg from '../../../assets/mobile-accessories/filled-star.svg';
import emptyStarImg from '../../../assets/mobile-accessories/empty-star.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useSaveForLater } from '../../../contexts/SaveForLaterContext';
import { useHomeOutdoor } from '../../../contexts/ProductsContext';

const ProductItem = ({ product, layout }) => {
  const [saveForLater, setSaveForLater] = useSaveForLater();
  // const [mobileAccessoryProducts, setMobileAccessoryProducts] =
  //   useMobileAccessoryProducts();

  const [
    softChairsProduct,
    sofaChairProduct,
    kitcheDishesProduct,
    smartWatchesProduct,
    kitchenMixerProduct,
    blendersProduct,
    homeApplianceProduct,
    coffeeMakerProduct,
  ] = useHomeOutdoor();

  const defaultIsSaved =
    JSON.parse(window.localStorage.getItem('saved')) !== null &&
    JSON.parse(window.localStorage.getItem('saved')).length > 0
      ? JSON.parse(window.localStorage.getItem('saved'))
      : false;

  const [isSaved, setIsSaved] = useState(product.saved);

  const favoriteRef = useRef();
  const navigate = useNavigate();

  const params = useParams();

  const productTrue = { ...product, saved: true };
  const productFalse = { ...product, saved: false };

  useEffect(() => {
    if (saveForLater.length > 0) {
      const findEl = saveForLater.find((el) => el.id === product.id);

      findEl ? setIsSaved(true) : setIsSaved(false);

      // saveForLater.forEach((el) => {

      //   el.id === product.id && setIsSaved(true);
      // });
    }
    saveForLater.length === 0 && setIsSaved(false);
  }, [saveForLater, product]);

  const productClickHandler = (e) => {
    if (
      e.target !== favoriteRef.current &&
      e.target !== favoriteRef.current.children[0]
    )
      navigate(`../product/${`${params.name}`}/${parseInt(product.id)}`);
  };

  // Add to saved
  useEffect(() => {
    const find = saveForLater.find((prod) => prod.id === product.id);
    if (find) setIsSaved(true);
    if (!find?.saved) setIsSaved(false);
  }, [saveForLater, product]);

  const favoriteHandler = () => {
    setSaveForLater((prev) => {
      if (prev.length === 0) {
        return [productTrue];
      }

      if (prev.length > 0) {
        const map = prev.map((prod) => {
          if (prod.id === product.id) {
            return { ...prod, saved: !prod.saved };
          }

          return prod;
        });

        const find = map.find((prod) => prod.id === product.id);

        if (!find) map.push(productTrue);

        const filter = map.filter((prod) => prod.saved === true);

        return filter;
      }
    });
  };

  // const favoriteHandler = () => {

  //   // add if there is no product
  //   setSaveForLater((prev) => {
  //     if (prev.length === 0) {
  //       return [productTrue];
  //     }

  //     return [...prev, productFalse];
  //   });

  //   // change "saved" propery
  //   if (saveForLater.length > 0) {
  //     setSaveForLater((prev) => {
  //       const map = prev.map((prod) => {
  //         if (prod.id === product.id) {
  //           return { ...prod, saved: !prod.saved };
  //         }

  //         return prod;
  //       });

  //       return map;
  //     });
  //   }

  //   setSaveForLater((prev) => {
  //     const unique = prev.filter((el, index) => {
  //       return index === prev.findIndex((o) => el.id === o.id);
  //     });

  //     return unique;
  //   });

  //   setSaveForLater((prev) => {
  //     const filter = prev.filter((el) => {
  //       return el.saved === true;
  //     });

  //     setIsSaved(false);

  //     return filter;
  //   });
  // };

  return (
    <div
      className={`${layout ? styles['product'] : styles['g-product']}`}
      onClick={productClickHandler}
    >
      <div
        className={`${
          layout ? styles['product-image'] : styles['g-product-image']
        }`}
      >
        <img src={product.images[0]} alt="product images" />
      </div>

      <div
        className={`${
          layout ? styles['product-details'] : styles['g-product-details']
        }`}
      >
        <h4
          className={`${
            layout
              ? styles['product-details-title']
              : styles['g-product-details-title']
          }`}
        >
          {product.title}
        </h4>

        <div
          className={`${
            layout ? styles['product-price'] : styles['g-product-price']
          }`}
        >
          <h2>{product.price}</h2>
          <h3>{product.oldPrice}</h3>
        </div>

        <div className={styles['product-rating']}>
          <div className={styles['product-rating-stars']}>
            <img src={filledStarImg} alt="star" />
            <img src={filledStarImg} alt="star" />
            <img src={filledStarImg} alt="star" />
            <img src={filledStarImg} alt="star" />
            <img src={emptyStarImg} alt="star" />
            <p>7.5</p>
          </div>

          <div
            className={`${
              layout ? styles['product-rating-dot'] : styles['hidden']
            }`}
          ></div>

          <p
            className={`${
              layout ? styles['product-rating-orders'] : styles['hidden']
            }`}
          >
            {product.orders} orders
          </p>

          <div
            className={`${
              layout ? styles['product-rating-dot'] : styles['hidden']
            } ${styles['dot2']}`}
          ></div>

          <p
            className={`${
              layout ? styles['product-rating-shipping'] : styles['hidden']
            }`}
          >
            {product.shipping}
          </p>
        </div>

        <p
          className={`${
            layout ? styles['product-description'] : styles['hidden']
          }`}
        >
          {product.description}
        </p>
        <button
          className={`${
            layout ? styles['product-details-btn'] : styles['hidden']
          }`}
        >
          View details
        </button>
      </div>

      <div
        className={`${
          layout ? styles['product-favorite'] : styles['g-product-favorite']
        }`}
        ref={favoriteRef}
        onClick={favoriteHandler}
      >
        <img src={isSaved ? favoriteFilledIcon : favoriteIcon} alt="favorite" />
      </div>
    </div>
  );
};

export default ProductItem;
