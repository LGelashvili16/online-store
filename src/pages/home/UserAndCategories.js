import styles from './UserAndCategories.module.css';
import avatar from '../../assets/home/section1/Avatar.svg';

import { section1Data } from '../../data/home/homeData';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const UserAndCategories = () => {
  const navigate = useNavigate();
  const [users, setUsers, loggedInUser, setLoggedInUsers] = useUser();

  const addActiveHandler = (e) => {
    Array.from(e.target.closest('ul').children).forEach((element) => {
      element.classList.remove(styles['active']);
    });

    e.target.closest('li').classList.add(styles['active']);
  };

  const learnMoreHandler = () => {
    navigate('mobile-accessory');
  };

  const registrationHandler = () => {
    navigate('registration');
  };

  const loginHandler = () => {
    navigate('login');
  };

  const profileHandler = () => {
    navigate('profile');
  };

  const logOutHandler = () => {
    setLoggedInUsers([]);

    const existUser = users.find((user) => {
      return user.loggedIn === true;
    });

    if (existUser) {
      setUsers((prev) => {
        return prev.map((user) => {
          if (user.loggedIn === true) {
            return { ...user, loggedIn: false };
          }
          return user;
        });
      });
    }
  };

  const saleHandler = () => {
    navigate('dummy/new-supplier-sale');
  };

  const sendQuoteHandler = () => {
    navigate('dummy/send-quotes');
  };

  return (
    <section className={styles['section1']}>
      <ul className={styles['section1-block1']}>
        {section1Data.map((title, index) => {
          return (
            <li
              key={index}
              data-id={index}
              className={index === 0 ? styles.active : ''}
            >
              <Link to="" onClick={addActiveHandler}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={styles['section1-block2']}>
        <h2>Latest trending</h2>
        <h1>Electronic items</h1>
        <button onClick={learnMoreHandler}>Learn more</button>
      </div>

      <div className={styles['section1-block3']}>
        <div className={styles['section1-block3-user']}>
          <div className={styles['section1-block3-user-info']}>
            <img src={avatar} alt="avatar" />
            <div className={styles['section1-block3-greeting']}>
              <p>
                Hi,{' '}
                {loggedInUser.loggedIn === true
                  ? loggedInUser.username
                  : 'user'}
                <br />
                let's get started
              </p>
            </div>
          </div>

          {loggedInUser.loggedIn === true ? (
            <div className={styles['section1-block3-btns-loggedin']}>
              <button
                className={styles['section1-block3-profile']}
                onClick={profileHandler}
              >
                Profile
              </button>
              <button
                className={styles['section1-block3-logout']}
                onClick={logOutHandler}
              >
                Log out
              </button>
            </div>
          ) : (
            <div className={styles['section1-block3-btns']}>
              <button
                className={styles['section1-block3-join']}
                onClick={registrationHandler}
              >
                Join now
              </button>
              <button
                className={styles['section1-block3-login']}
                onClick={loginHandler}
              >
                Log in
              </button>
            </div>
          )}
        </div>

        <div className={styles['section1-block3-offer']} onClick={saleHandler}>
          <h3>
            Get US $10 off
            <br />
            with a new
            <br />
            supplier
          </h3>
        </div>

        <div
          className={styles['section1-block3-quote']}
          onClick={sendQuoteHandler}
        >
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

export default UserAndCategories;
