import './Section3.css';
import dropdownArrow from '../../assets/header/icons/expand-arrow.svg';
import { pcsAmount } from '../../data/home/homeData';
import { useRef, useState } from 'react';

const Section3 = () => {
  const [showPcsList, setShowPcsList] = useState(false);

  const pcsListHandler = () => {
    setShowPcsList(!showPcsList);
  };

  const pcsRef = useRef();
  const pcsListRef = useRef();

  window.addEventListener('click', (e) => {
    if (e.target !== pcsRef.current && e.target !== pcsListRef.current) {
      setShowPcsList(false);
    }
  });

  return (
    <section className="section3">
      <div className="section3-send-quote">
        <div className="section3-gradient-bg">
          <div className="section3-title">
            <h2>
              An easy way to send
              <br />
              requests to all suppliers
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              <br /> elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          <form className="section3-form">
            <h3>Send quote to suppliers</h3>
            <input type="text" placeholder="What item you need?" />

            <textarea placeholder="Type more details"></textarea>

            <div className="section3-form-quantity">
              <input type="number" placeholder="Quantity" />
              <div
                className="pcs-dropdown"
                onClick={pcsListHandler}
                ref={pcsRef}
              >
                <p>Pcs</p>
                <img src={dropdownArrow} alt="Arrow" />
                <ul
                  className={`pcs-list ${!showPcsList ? 'hidden' : ''}`}
                  ref={pcsListRef}
                >
                  {pcsAmount.map((n, i) => {
                    return <li key={i}>{n}</li>;
                  })}
                </ul>
              </div>
            </div>
            <button>Send inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section3;
