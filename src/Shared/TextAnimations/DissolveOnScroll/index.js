import React from 'react';
import '../../../App.css';
import styles from './index.module.css';

/**
 * Creates animation to "dissolve" text into screen as user scrolls.
 *
 * @param {string} text Text to animate.
 * @param {HTMLImageElement} image Image to display to left of text.
 * @param {string} alt_image Text to display if image doesn't load
 * @param {Number} animationStart What location to start animation.
 */
export const DissolveOnScroll = ({ text, image, alt_image, 
  animationStart }) => {
  // rgba <- that a
  const [a, setA] = React.useState(0);
  // opacity
  const [opa, setOpa] = React.useState(0);
  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
       
    if (winScroll > animationStart) { 
      let val = Math.min((winScroll - animationStart) / 150, 1)
      setA(val);
      setOpa(val);
    } else {
      setA(0);
      setOpa(0);
    }  
  };
  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
      return () => 
           window.removeEventListener("scroll", listenToScroll); 
  });
  return (
    <div className={styles.mainFlex}>
      {
        <p style={{color: "rgba(0,0,0," + String(a) + ")"}}>{text}</p>
      }
      {
        <img className={styles.image} src={image} alt={alt_image} 
          style={{opacity: opa}}/>
      }
    </div>
  );
}
