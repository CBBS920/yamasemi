import React from 'react';
import styles from './Dropdown.module.css';

export const Dropdown = (props) => {
    return (
        <div className={`${styles.wrapper} ${props.className}`}>
            <div className={`${styles.cp_ipselect}`}>
                <select
                    className={styles.cp_sl06}
                    value={props.value}
                    onChange={props.onChange}
                    required
                >
                    <option value="" hidden disabled>{props.placeholder}</option>
                    {props.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className={styles.cp_sl06_highlight}></span>
                <span className={styles.cp_sl06_selectbar}></span>
                <label className={styles.cp_sl06_selectlabel}>{props.placeholder}</label>
            </div>
            {props.hasError && (
                <span className={styles.error}>{props.errorMessage}</span>
            )}
        </div>
    );
};