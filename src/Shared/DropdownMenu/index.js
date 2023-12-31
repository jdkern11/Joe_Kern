import React from 'react';
import '../../App.css';
import styles from './index.module.css';

/**
 * Creates dropdown menu
 *
 * @param {string} label Text for the dropdown menu
 */
export const DropdownMenu = ({ label, items }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false) 
  return (
    <div className={styles.dropdown}>
      <button onClick={() => setToggleMenu(!toggleMenu)} 
        className={styles.dropbtn}>{label}</button>
        { toggleMenu ?
            <div className={styles.dropdown_content}>
              {items.map(item => (
                item
              ))}
            </div>
          : 
            <></> 
        }
    </div>
  )
}
