import React from 'react';
import styles from './RadioButton.module.css';

export const RadioButton = (props) => (
  <div className={styles.wrapper}>
    <label className={`${styles.label} ${props.className}`}>
      <input
        type="radio"
        className={`${styles.optionInput} ${styles.radio}`}
        checked={props.checked}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      />
      {props.label}
    </label>
    {props.hasError && (
      <span className={styles.error}>{props.errorMessage}</span>
    )}
  </div>
);