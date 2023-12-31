import React from 'react';
import '../../../App.css';

/**
 * Creates animation to "dissolve" text into screen.
 *
 * @param {string} text Text to animate.
 * @param {Number} animationStart When to start the animation.
 * @param {Number} animationDuration How long to maintain the animation.
 */
export const DissolveIn = ({ text, animationStart, animationDuration }) => {
  // rgba <- that a
  const [a, setA] = React.useState(0);
  const [waitTime, setWaitTime] = React.useState(animationStart)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setWaitTime(animationDuration / 100)
      if (a < 1) {
        setA(a + animationDuration / 100)
      } else {
        setA(1)
      }
    }, waitTime*1000);
    return () => clearTimeout(timer);
  }, [a, animationDuration, animationStart, waitTime]);
  return (
    <>
      {
        <p style={{color: "rgba(0,0,0," + String(a) + ")"}}>{text}</p>
      }
    </>
  );
}
