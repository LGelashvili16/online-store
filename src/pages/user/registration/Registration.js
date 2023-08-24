import { useState } from 'react';
import styles from './Registration.module.css';
import FormInput from './FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../../contexts/UserContext';

const Registration = () => {
  const [users, setUsers] = useUser();

  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    loggedIn: false,
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: 'firstname',
      type: 'text',
      placeholder: 'Firstname',
      label: 'Firstname',
      errorMessage: 'Firstname should be entered!',
      required: true,
    },
    {
      id: 2,
      name: 'lastname',
      type: 'text',
      placeholder: 'Lastname',
      label: 'Lastname',
      errorMessage: 'Lastname should be entered!',
      required: true,
    },
    {
      id: 3,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMessage:
        "Username should be 3-16 charachters and shouldn't include any special character!",
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 4,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      errorMessage: 'It should be a valid email address!',
      required: true,
    },
    {
      id: 5,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errorMessage:
        'Password should be 8-20 charachters and include at least 1 letter, 1 number and 1 special character!',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const existUser = users.find((user) => {
      return user.username.toLowerCase() === values.username.toLowerCase() ||
        user.email.toLowerCase() === values.email.toLowerCase()
        ? true
        : false;
    });

    if (existUser) {
      setIsRegistered(true);
      setIsSubmitted(false);
      window.scrollTo(0, 0);
    }

    if (!existUser) {
      setUsers((prev) => {
        return [...prev, values];
      });

      setIsRegistered(false);
      setIsSubmitted(true);

      setValues({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        loggedIn: false,
      });
      window.scrollTo(0, 0);
    }
  };

  const loginHandler = () => {
    navigate('/online-store/login');
  };

  return (
    <div className={styles['wrapper']}>
      {isSubmitted && (
        <div className={styles['registered-info']}>
          <h2>Registered successfully!</h2>
          <p>
            Go to <Link to={'/online-store/login'}>Log in</Link> page.
          </p>
        </div>
      )}

      {isRegistered && (
        <div className={styles['existed-info']}>
          <h2>Username or email already exists!</h2>
          <p>
            Go to <Link to={'/online-store/login'}>Log in</Link> page.
          </p>
        </div>
      )}
      <div className={styles['form-wrapper']}>
        <h2>Create an account</h2>
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
            Submit
          </button>
        </form>
        <div className={styles['btns-divider']}>
          <span>or</span>
        </div>
        <button className={styles['login-btn']} onClick={loginHandler}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Registration;
