import './Section1.css';
import avatar from '../../assets/home/section1/Avatar.svg';

import { section1Data } from '../../data/home/homeData';
import { Link } from 'react-router-dom';

const Section1 = () => {
  const addActiveHandler = (e) => {
    Array.from(e.target.closest('ul').children).forEach((element) => {
      element.classList.remove('active');
    });

    e.target.closest('li').classList.add('active');
  };

  return (
    <section className="section1">
      <ul className="section1-block1">
        {section1Data.map((title, index) => {
          return (
            <li
              key={index}
              data-id={index}
              className={index === 0 ? 'active' : ''}
            >
              <Link to="" onClick={addActiveHandler}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="section1-block2">
        <h2>Latest trending</h2>
        <h1>Electronic items</h1>
        <button>Learn more</button>
      </div>

      <div className="section1-block3">
        <div className="section1-block3-user">
          <div className="section1-block3-user-info">
            <img src={avatar} alt="avatar" />
            <div className="section1-block3-user-greeting">
              <p>
                Hi, user
                <br />
                let's get started
              </p>
            </div>
          </div>
          <button className="section1-block3-join">Join now</button>
          <button className="section1-block3-login">Log in</button>
        </div>

        <div className="section1-block3-offer">
          <h3>
            Get US $10 off
            <br />
            with a new
            <br />
            supplier
          </h3>
        </div>

        <div className="section1-block3-quote">
          <h3>
            Send quotes with
            <br />
            supplier
            <br />
            preferences
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Section1;
