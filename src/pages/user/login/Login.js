import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import FormInput from './FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../../contexts/UserContext';

const Login = () => {
  const [users, setUsers, loggedInUser, setLoggedInUser] = useUser();

  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username or email',
      errorMessage: 'Username or email should be entered!',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errorMessage: 'Password should be entered!',
      required: true,
    },
  ];

  useEffect(() => {
    if (loggedInUser && loggedInUser.loggedIn === true)
      setTimeout(() => {
        navigate('/online-store/profile');
      }, 1000);
    else navigate('/online-store/login');
  }, [loggedInUser, navigate]);

  const onChange = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const existUser = users.find((user) => {
      return (
        user.username.toLowerCase() === values.username.toLowerCase() ||
        user.email.toLowerCase() === values.username.toLowerCase()
      );
    });

    if (existUser) {
      setWrongPassword(false);
      setIsSubmitted(false);

      setUsers((prev) => {
        return prev.map((user) => {
          if (
            (user.username.toLowerCase() === values.username.toLowerCase() ||
              user.email.toLowerCase() === values.username.toLowerCase()) &&
            user.password === values.password
          ) {
            setIsSubmitted(true);
            setLoggedInUser({ ...existUser, loggedIn: true });
            return { ...user, loggedIn: true };
          }

          if (
            (user.username.toLowerCase() === values.username.toLowerCase() ||
              user.email.toLowerCase() === values.username.toLowerCase()) &&
            user.password !== values.password
          ) {
            setWrongPassword(true);
            return { ...user, loggedIn: false };
          }

          return user;
        });
      });

      setIsRegistered(false);

      // navigate('/online-store');
    }

    if (!existUser) {
      setIsRegistered(true);
    }
  };

  const createAccountHandler = () => {
    navigate('/online-store/registration');
  };

  return (
    <div className={styles['wrapper']}>
      {isSubmitted && (
        <div className={styles['registered-info']}>
          <h2>Logged in successfully!</h2>
        </div>
      )}

      {isRegistered && (
        <div className={styles['existed-info']}>
          <h2>Username or email doesn't exist!</h2>
          <p>
            Go to <Link to={'/online-store/login'}>Log in</Link> page.
          </p>
        </div>
      )}

      {wrongPassword && (
        <div className={styles['existed-info']}>
          <h2>Oops, wrong password!</h2>
        </div>
      )}
      <div className={styles['form-wrapper']}>
        <h2>Log in</h2>
        <form className={styles['form']} onSubmit={onSubmit}>
          {inputs.map((input) => {
            return (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                isSubmitted={isSubmitted}
              />
            );
          })}
          <button type="submit" className={styles['submit-btn']}>
            Log in
          </button>
        </form>

        <div className={styles['btns-divider']}>
          <span>or</span>
        </div>
        <button
          className={styles['create-account-btn']}
          onClick={createAccountHandler}
        >
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Login;
