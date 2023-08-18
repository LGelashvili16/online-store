import { useEffect, useState } from 'react';
import styles from './FormInput.module.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, errorMessage, onChange, id, isSubmitted, ...inputProps } =
    props;

  const blurHandler = () => {
    setFocused(true);
  };

  useEffect(() => {
    isSubmitted && setFocused(false);
  }, [isSubmitted]);

  return (
    <div className={styles['input-wrapper']}>
      <input
        className={styles['input']}
        {...inputProps}
        onChange={onChange}
        onBlur={blurHandler}
        onFocus={() => {
          inputProps.name === 'confirmPassword' && setFocused(true);
        }}
        focused={focused.toString()}
      />
      <label className={styles['label']}>{label}</label>
      <p className={styles['error-msg']}>{errorMessage}</p>
    </div>
  );
};

export default FormInput;
