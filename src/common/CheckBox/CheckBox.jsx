import React from 'react';
import styles from './CheckBox.module.css';

export const CheckBox = (props) => (
  <div className={styles.wrapper}>
    <label className={`${styles.label} ${props.className}`}>
      <input
        type="checkbox"
        className={`${styles.optionInput} ${styles.checkbox}`}
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.label}
    </label>
    {props.hasError && (
      <span className={styles.error}>{props.errorMessage}</span>
    )}
  </div>
);