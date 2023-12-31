import React from 'react';
import styles from './index.module.css';

/**
 * Dissolves in content by creating a frame over it that slowly disappears
 *
 * @param {List<React.FunctionComponent>} items Content to dissolve in
 * @param {Number} animationStart When to start the animation. Default is 0.
 * @param {Number} animationDuration How long to maintain the animation 
 *    (seconds). Default is 5.
 * @param {union(null, boolean)} reset Whether to reset the animation. Default
 *    is null which means never restart.
 * @param {union(null, React.Dispatch<React.SetStateAction<boolean>>)} setReset.
 */
export const DissolveIn = ({ items, animationStart, animationDuration,
    reset, setReset }) => {
  const [a, setA] = React.useState(1);
  const [waitTime, setWaitTime] = React.useState(animationStart);
  const [h, setH] = React.useState(1000);
  const [scroll, setScroll] = React.useState(false);
  const itemRef = React.useRef();

  React.useEffect(() => {
    setH(itemRef.current.clientHeight);
    if (scroll) {
      itemRef.current.scrollIntoView()
      setWaitTime(animationStart);
      setScroll(false);
    }
    if (reset !== null) {
      if (reset) {
        setA(1);
        setReset(false);
        setScroll(true);
      }
    }
    const timer = setTimeout(() => {
      setWaitTime(animationDuration / 100);
      if (a > 0) {
        setA(a - animationDuration / 100);
      } else {
        setA(0);
      }
    }, waitTime*1000);
    return () => clearTimeout(timer);
  }, [a, animationDuration, animationStart, waitTime, reset, setReset, scroll]);
  return (
    <div className={styles.container}>
      <div className={styles.content} ref={itemRef}>
        {items.map(item => (
          item
        ))}
      </div>
      <div style={{backgroundColor: "rgba(255,255,255," + String(a) + ")",
                   height: h}}
        className={styles.overlay}>
      </div>
    </div>
  );
}

DissolveIn.defaultProps = {
  animationStart: 0.5,
  animationDuration: 5,
  reset: null,
  setReset: null
}
