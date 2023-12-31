import React from 'react';
import '../../App.css';
import styles from './index.module.css';

/**
 * Runs create toggle switch for react app
 *
 * @param {string} label Text to display for the toggle button.
 * @param {boolean} toggle Current value of the checkbox.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setToggle
 *   Sets toggle to on or off for use in app.
 * @param {string} localLabel Label for local storage of toggle.
 */
export const ToggleSwitch = ({ label, toggle, setToggle, localLabel}) => {
  return (
    <>
      {label}{" "}
      <div className={styles.toggle_switch}>
        <input type="checkbox" className={styles.checkbox}
          name={label} id={label} defaultChecked={toggle}
          onChange={() => {
              localStorage.setItem(localLabel, !toggle)
              setToggle(!toggle)
            }
          } />
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
    </>
  );
}
