import styles from './Profile.module.css';
import avatarImg from '../../../assets/user/avatar.png';
import xImg from '../../../assets/user/x.png';
import { useUser } from '../../../contexts/UserContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [, setUsers, loggedInUser, setLoggedInUsers] = useUser();

  const navigate = useNavigate();

  const onDeleteAccount = () => {
    setShowConfirmation((prev) => !prev);
  };

  const onClose = () => {
    setShowConfirmation(false);
  };

  const onConfirm = () => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.username !== loggedInUser.username;
      });
    });

    setLoggedInUsers({});

    setShowConfirmation(false);

    setTimeout(() => {
      navigate('/online-store/login');
    }, 500);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['user']}>
        <div className={styles['image']}>
          <img src={avatarImg} alt="avatar" />
        </div>

        <div className={styles['user-details']}>
          <div className={styles['user-info']}>
            <div className={styles['titles']}>
              <h4>Firstname:</h4>
              <h4>Lastname:</h4>
              <h4>Username:</h4>
              <h4>Email:</h4>
            </div>

            <div className={styles['values']}>
              <p>{loggedInUser.firstname}</p>
              <p>{loggedInUser.lastname}</p>
              <p>{loggedInUser.username}</p>
              <p>{loggedInUser.email}</p>
            </div>
          </div>

          <div className={styles['user-btns']}>
            <button className={styles['delete-btn']} onClick={onDeleteAccount}>
              Delete account
            </button>

            <div
              className={`${
                showConfirmation
                  ? styles['confirmation-window']
                  : styles['hidden']
              }`}
            >
              <div className={styles['confirmation-title']}>
                <h3>Confirm account deletion!</h3>
                <img src={xImg} alt="close" onClick={onClose} />
              </div>

              <div className={styles['confirmation-btns']}>
                <button onClick={onClose}>Cancel</button>
                <button onClick={onConfirm}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
