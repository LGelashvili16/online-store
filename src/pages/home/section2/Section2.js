import DiscountedProduct from './DiscountedProduct';
import HomeOutdoorProduct from './HomeOutdoorProduct';
import ElectronicsProduct from './ElectronicsProduct';

import {
  section2Discounted,
  section2HomeOutdoor,
  section2Electronics,
} from '../../../data/home/homeData';

import './Section2.css';

const Section2 = () => {
  return (
    <section className="section2">
      <div className="section2-row1">
        <div className="section2-row1-offers">
          <h2>Deals and offers</h2>
          <p className="section2-row1-offers-subtitle">Hygiene equipments</p>

          <div className="section2-row1-offers-countdown">
            <div className="timer-card">
              <h3>04</h3>
              <p>Days</p>
            </div>
            <div className="timer-card">
              <h3>13</h3>
              <p>Hour</p>
            </div>
            <div className="timer-card">
              <h3>34</h3>
              <p>Min</p>
            </div>
            <div className="timer-card">
              <h3>56</h3>
              <p>Sec</p>
            </div>
          </div>
        </div>

        {section2Discounted.map((product, index) => {
          return (
            <DiscountedProduct
              key={index}
              image={product.image}
              title={product.title}
              discount={product.discount}
            />
          );
        })}
      </div>

      <div className="section2-row2">
        <div className="section2-row2-bg">
          <div className="section2-row2-home">
            <h3>
              Home and
              <br />
              outdoor
            </h3>
            <button>Source now</button>
          </div>
        </div>

        <div className="section2-row2-products">
          {section2HomeOutdoor.map((prod, index) => {
            return (
              <HomeOutdoorProduct
                key={index}
                title={prod.title}
                price={prod.price}
                image={prod.image}
              />
            );
          })}
        </div>
      </div>

      <div className="section2-row3">
        <div className="section2-row3-bg">
          <div className="section2-row3-home">
            <h3>
              Consumer
              <br />
              electronics and
              <br />
              gadgets
            </h3>
            <button>Source now</button>
          </div>
        </div>

        <div className="section2-row3-products">
          {section2Electronics.map((prod, index) => {
            return (
              <ElectronicsProduct
                key={index}
                title={prod.title}
                price={prod.price}
                image={prod.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section2;
