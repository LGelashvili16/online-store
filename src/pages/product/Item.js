import { useNavigate, useParams } from 'react-router-dom';
import styles from './Item.module.css';
import { products } from '../../data/mobileAccessories/mobileAccessoriesData';
import { useEffect, useRef, useState } from 'react';

import { generateStars } from '../../utils/starGenerator';
import checkIcon from '../../assets/item/check.png';
import reviewsIcon from '../../assets/item/message.png';
import salesIcon from '../../assets/item/shopping_basket.png';

import filledStar from '../../assets/mobile-accessories/filled-star.svg';
import emptyStar from '../../assets/mobile-accessories/empty-star.svg';

import germanyFlag from '../../assets/item/Germanyflag.png';
import verifiedIcon from '../../assets/item/verified_user.png';
import worldwideIcon from '../../assets/item/worldwide.png';
import saveIcon from '../../assets/item/favorite_border.png';
import saveFilledIcon from '../../assets/mobile-accessories/favorite_filled.png';
import prevIcon from '../../assets/item/arrow_back-resp.png';
import nextIcon from '../../assets/item/arrow_forward-resp.png';

import { useCart } from '../../contexts/CartContext';
import {
  useConsumerElectronics,
  useHomeOutdoor,
  useRecommendedProducts,
} from '../../contexts/ProductsContext';
import { useSaveForLater } from '../../contexts/SaveForLaterContext';

const Item = () => {
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

  const [
    mobileAccessoryProducts,
    headphonesProduct,
    gamingSetProduct,
    smartphonesProduct,
    camerasProduct,
    pcLaptopProduct,
  ] = useConsumerElectronics();

  const [
    recommendedProducts,
    youMayLikeProducts,
    relatedProducts,
    alsoLikeProducts,
  ] = useRecommendedProducts();

  const [saveForLater, setSaveForLater] = useSaveForLater();
  const [cart, setCart] = useCart();

  const navigate = useNavigate();
  const params = useParams();

  const [currentProducts, setCurrentProducts] = useState(
    mobileAccessoryProducts
  );

  const [currentProduct] = currentProducts.slice(+params.id - 1, +params.id);

  const [mainImg, setMainImg] = useState(currentProduct.images[0]);
  const [fromLeft, setFromLeft] = useState(0);

  const [isSaved, setIsSaved] = useState(false);
  const [currentSaved, setCurrentSaved] = useState({});
  const [readMore, setReadMore] = useState(false);
  // const [sliderIndex, setSliderIndex] = useState(1);
  console.log(isSaved);
  let sliderIndex = useRef(0);

  const imagesRef = useRef();
  const imageRef = useRef();

  const productTrue = { ...currentProduct, saved: true };

  useEffect(() => {
    if (params.from === 'mobile-accessory') {
      setCurrentProducts(mobileAccessoryProducts);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'soft-chairs') {
      setCurrentProducts(softChairsProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'sofa-&-chair') {
      setCurrentProducts(sofaChairProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'kitchen-dishes') {
      setCurrentProducts(kitcheDishesProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'smart-watches') {
      setCurrentProducts(smartWatchesProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'kitchen-mixer') {
      setCurrentProducts(kitchenMixerProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'blenders') {
      setCurrentProducts(blendersProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'home-appliance') {
      setCurrentProducts(homeApplianceProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'coffee-maker') {
      setCurrentProducts(coffeeMakerProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'headphones') {
      setCurrentProducts(headphonesProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'gaming-set') {
      setCurrentProducts(gamingSetProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'smartphones') {
      setCurrentProducts(smartphonesProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'cameras') {
      setCurrentProducts(camerasProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'laptops-&-pc') {
      setCurrentProducts(pcLaptopProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'smart-watches') {
      setCurrentProducts(smartWatchesProduct);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'recommended') {
      setCurrentProducts(recommendedProducts);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'you-may-like') {
      setCurrentProducts(youMayLikeProducts);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'related') {
      setCurrentProducts(relatedProducts);
      setMainImg(currentProduct.images[0]);
    }

    if (params.from === 'may-also-like') {
      setCurrentProducts(alsoLikeProducts);
      setMainImg(currentProduct.images[0]);
    }
  }, [
    params,
    softChairsProduct,
    sofaChairProduct,
    currentProduct,
    kitcheDishesProduct,
    smartWatchesProduct,
    kitchenMixerProduct,
    blendersProduct,
    homeApplianceProduct,
    coffeeMakerProduct,
    headphonesProduct,
    gamingSetProduct,
    smartphonesProduct,
    camerasProduct,
    pcLaptopProduct,
    recommendedProducts,
    mobileAccessoryProducts,
    youMayLikeProducts,
    relatedProducts,
    alsoLikeProducts,
  ]);

  useEffect(() => {
    saveForLater.forEach((el) => {
      if (el.id === currentProduct.id) {
        setIsSaved(true);
        setCurrentSaved(el);
      }
    });
  }, [saveForLater, currentProduct]);

  const previousHandler = () => {
    if (sliderIndex.current > 0) {
      sliderIndex.current -= 1;
    }

    setFromLeft(-(imageRef.current.offsetWidth + 2) * sliderIndex.current);
  };

  const nextHandler = () => {
    const imagesNumber =
      imagesRef.current.scrollWidth / imageRef.current.offsetWidth;

    if (sliderIndex.current < imagesNumber - 2) {
      sliderIndex.current += 1;
    }

    setFromLeft(-(imageRef.current.offsetWidth + 2) * sliderIndex.current);
  };

  const imageHandler = (e) => {
    Array.from(e.target.closest('ul').children).forEach((element) => {
      element.classList.remove(styles['active-image']);
    });

    e.target.closest('li').classList.add(styles['active-image']);

    setMainImg(e.target.closest('li').children[0].src);
  };

  const priceHandler = (e) => {
    Array.from(e.target.closest('[data-name]').children).forEach((el) => {
      el.children[0].classList.remove(styles['active-price']);
    });

    e.target.closest('div').children[0].classList.add(styles['active-price']);
  };

  const sellerProfileHandler = () => {
    navigate('/online-store/dummy/seller-profile');
  };

  const inquiryHandler = () => {
    navigate('/online-store/dummy/inquiry');
  };

  const addToCartHandler = (e) => {
    e.stopPropagation();

    setCart((prev) => {
      if (prev.length === 0) {
        return [currentProduct];
      }

      const findEl = prev.find((el) => {
        return el.id === currentProduct.id;
      });

      if (findEl) {
        return prev;
      }

      return [...prev, currentProduct];

      // return !prev.includes(productTrue) ? [...prev, productTrue] : prev;
    });
  };

  // const addToCartHandler = () => {
  //   setCart((prev) => {
  //     if (prev.length === 0) {
  //       return [currentProduct];
  //     }

  //     return !prev.includes(currentProduct) ? [...prev, currentProduct] : prev;
  //   });
  // };

  useEffect(() => {
    const find = saveForLater.find((prod) => prod.id === currentProduct.id);
    if (find) setIsSaved(true);
    if (!find?.saved) setIsSaved(false);
  }, [saveForLater, currentProduct]);

  const saveHandler = () => {
    setSaveForLater((prev) => {
      if (prev.length === 0) {
        return [productTrue];
      }

      if (prev.length > 0) {
        const map = prev.map((prod) => {
          if (prod.id === currentProduct.id) {
            return { ...prod, saved: !prod.saved };
          }

          return prod;
        });

        const find = map.find((prod) => prod.id === currentProduct.id);

        if (!find) map.push(productTrue);

        const filter = map.filter((prod) => prod.saved === true);

        return filter;
      }
    });
  };

  // const saveHandler = () => {

  //   setSaveForLater((prev) => {
  //     if (prev.length === 0) {
  //       return [productTrue];
  //     }

  //     return [...prev, currentProduct];
  //   });

  //   if (saveForLater.length > 0) {
  //     setSaveForLater((prev) => {
  //       const map = prev.map((prod) => {
  //         if (prod.id === currentProduct.id) {
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

  //   setTimeout(() => {
  //     setSaveForLater((prev) => {
  //       const filter = prev.filter((el) => {
  //         return el.saved === true;
  //       });

  //       setIsSaved(false);

  //       return filter;
  //     });
  //   }, 0);
  // };

  const readMoreHandler = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <div className={styles['item-wrapper']}>
      <div className={styles['item-images']}>
        <div className={styles['item-main-image']}>
          <img src={mainImg} alt="" />
        </div>

        <div className={styles['item-all-images-wrapper']}>
          <div className={styles['item-all-images-wrapper-inner']}>
            <ul
              style={{ left: `${fromLeft}px` }}
              className={styles['item-all-images']}
              ref={imagesRef}
            >
              {currentProduct.images.map((img, i) => {
                return (
                  <li
                    key={i}
                    className={`${styles['image']} ${
                      i === 0 ? styles['active-image'] : ''
                    }`}
                    onClick={imageHandler}
                    ref={imageRef}
                  >
                    <img src={img} alt="product" />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles['resp-images-switcher']}>
            <button
              className={styles['resp-images-switcher-prev']}
              onClick={previousHandler}
            >
              <img src={prevIcon} alt="previus" />
            </button>

            <button
              className={styles['resp-images-switcher-next']}
              onClick={nextHandler}
            >
              <img src={nextIcon} alt="next" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles['about-product']}>
        <div className={styles['stock']}>
          <img src={checkIcon} alt="check" /> <p>In stock</p>
        </div>

        <div className={styles['title']}>
          <h3>{currentProduct.title}</h3>
        </div>

        <div className={styles['rating']}>
          <div className={styles['rating-stars']}>
            <div className={styles['rating-stars-img']}>
              {generateStars(currentProduct.rating, filledStar, emptyStar)}
            </div>
            <span>9.3</span>
          </div>

          <span className={styles['dot']}></span>

          <div className={styles['rating-reviews']}>
            <img src={reviewsIcon} alt="review" />
            <span>32 reviews</span>
          </div>

          <span className={styles['dot']}></span>

          <div className={styles['rating-sales']}>
            <img src={salesIcon} alt="sales" />
            <span>154 sold</span>
          </div>
        </div>

        <div className={styles['prices']} data-name="prices">
          <div onClick={priceHandler}>
            <h4 className={styles['active-price']}>{currentProduct.price}</h4>
            <span>50-100 pcs</span>
          </div>

          <div onClick={priceHandler}>
            <h4>{currentProduct.price}</h4>
            <span>100-700 pcs</span>
          </div>

          <div onClick={priceHandler}>
            <h4>{currentProduct.price}</h4>
            <span>700+ pcs</span>
          </div>
        </div>

        <div className={styles['resp-seller-inquiry']}>
          <button onClick={inquiryHandler}>Send inquiry</button>
          <button
            className={styles['resp-add-cart-btn']}
            onClick={addToCartHandler}
          >
            Add to cart
          </button>

          <div
            className={styles['resp-product-favorite']}
            onClick={saveHandler}
          >
            <img src={isSaved ? saveFilledIcon : saveIcon} alt="favorite" />
          </div>
        </div>

        <div className={styles['product-description']}>
          <div className={styles['product-description-row1']}>
            <div className={styles['product-description-rows-title']}>
              <h4>Price:</h4>
            </div>
            <div className={styles['product-description-rows-description']}>
              <p>Negotiable</p>
            </div>
          </div>

          <div className={styles['product-description-row2']}>
            <div className={styles['product-description-rows-title']}>
              <h4>Type:</h4>
              <h4>Material:</h4>
              <h4>Design:</h4>
            </div>
            <div className={styles['product-description-rows-description']}>
              <p>Classic shoes</p>
              <p>Plastic material</p>
              <p>Modern nice</p>
            </div>
          </div>

          <div className={styles['product-description-row3']}>
            <div className={styles['product-description-rows-title']}>
              <h4>Customization:</h4>
              <h4>Protection:</h4>
              <h4>Warranty:</h4>
            </div>
            <div className={styles['product-description-rows-description']}>
              <p>Customized logo and design custom packages</p>
              <p>Refund Policy</p>
              <p>2 years full warranty</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['resp-item-description']}>
        <p>
          {readMore
            ? 'Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and'
            : 'Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and ...'}
        </p>

        <span onClick={readMoreHandler}>
          {readMore ? 'Read less' : 'Read more'}
        </span>
      </div>

      <div className={styles['seller-wrapper']}>
        <div className={styles['seller']}>
          <div className={styles['seller-name-wrapper']}>
            <span>R</span>

            <div className={styles['seller-name']}>
              <p>Supplier</p>
              <p>Guanjoi Trading LLC</p>
            </div>
          </div>

          <div className={styles['seller-info']}>
            <div className={styles['seller-counrty']}>
              <img src={germanyFlag} alt="flag" /> <span>Germany, Berlin</span>
            </div>

            <div className={styles['seller-verification']}>
              <img src={verifiedIcon} alt="flag" /> <span>Verified Seller</span>
            </div>

            <div className={styles['seller-shipTo']}>
              <img src={worldwideIcon} alt="flag" />{' '}
              <span>Worldwide Shipping</span>
            </div>
          </div>

          <div className={styles['seller-inquiry-profile']}>
            <button onClick={inquiryHandler}>Send inquiry</button>
            <button onClick={sellerProfileHandler}>Seller's profile</button>
          </div>
        </div>

        <div className={styles['save']} onClick={saveHandler}>
          <img src={isSaved ? saveFilledIcon : saveIcon} alt="save" />
          <span> {isSaved ? 'Saved' : 'Save for later'} </span>
        </div>
        <button className={styles['AddToCart']} onClick={addToCartHandler}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
