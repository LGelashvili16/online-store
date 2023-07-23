import { useState } from 'react';
import styles from './CountDown.module.css';
import { useEffect } from 'react';

const defaultRemainingTime = {
  days: 4,
  hours: 13,
  minutes: 34,
  seconds: 59,
};

const CountDown = () => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      countDownTimer(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function countDownTimer(interval) {
    setRemainingTime((prev) => {
      const current = { ...prev, seconds: prev.seconds - 1 };

      if (current.seconds < 0) {
        setRemainingTime((prev) => {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        });
      }

      if (current.minutes === 0 && current.seconds < 0) {
        setRemainingTime((prev) => {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        });
      }

      if (current.hours === 0 && current.minutes === 0 && current.seconds < 0) {
        setRemainingTime((prev) => {
          return { ...prev, days: prev.days - 1, hours: 23 };
        });
      }

      if (
        current.days === 0 &&
        current.hours === 0 &&
        current.minutes === 0 &&
        current.seconds === 0
      ) {
        clearInterval(interval);
      }

      return current;
    });
  }

  return (
    <div className={styles['section2-row1-offers-countdown']}>
      <div className={styles['timer-card']}>
        <h3>{remainingTime.days}</h3>
        <p>Days</p>
      </div>
      <div className={styles['timer-card']}>
        <h3>{remainingTime.hours}</h3>
        <p>Hour</p>
      </div>
      <div className={styles['timer-card']}>
        <h3>{remainingTime.minutes}</h3>
        <p>Min</p>
      </div>
      <div className={styles['timer-card']}>
        <h3>{remainingTime.seconds}</h3>
        <p>Sec</p>
      </div>
    </div>
  );
};

export default CountDown;
