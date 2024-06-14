import React from 'react';
import styles from './TextBox.module.css';

export const TextBox = (props) => {
    return (
        <div
            className={styles.cp_iptxt}
            style={{ width: props.width }}
        >
            <label className={styles.ef}>
                <input
                    type="text"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
            </label>
            {props.hasError && (
                <span className={styles.error}>{props.errorMessage}</span>
            )}
        </div>
    );
};