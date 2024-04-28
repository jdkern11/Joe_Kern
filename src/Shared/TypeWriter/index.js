import React from 'react';
import '../../index.scss';
import styles from './index.scss';

/**
 * Runs typewriter effect on input text
 *
 * @param {string} text Text to run type writer effect on.
 * @param {number} delay Delay in seconds until animation is run.
 * @param {boolean} reverse Whether or not to delete text after.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setAnimationDone
 *    Indicate animation is complete so other animations can run. Default is 
 *    null.
 * @param {number} typingSpeed Speed at which to type text.
 * @param {number} deletingSpeed Speed at which to delete text.
 */
export const TypeWriter = ({ textToWrite, delay=0.5, reverse=false,
    setAnimationDone=null, typingSpeed=0.1, deletingSpeed=0.025, elementType="p"}) => {
  const [written, setWritten] = React.useState(0);
  const [text, setText] = React.useState(""); 
  // Change timeout time after first pass to simulate typing
  const [writeDelay, setWriteDelay] = React.useState(delay);
  const [reversed, setReversed] = React.useState(false);
  const [spaceFill, setSpaceFill] = React.useState(true);
  const Element = elementType;
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setSpaceFill(false)
      setWriteDelay(typingSpeed)
      if (text !== textToWrite && !reversed) {
        setText(textToWrite.slice(0, written+1))
        setWritten(written + 1)
      } else if (reverse && !reversed) {
        setReversed(true)
        setWriteDelay(1)
        setWritten(written + 1)
      } else if (reversed) {
        setWriteDelay(deletingSpeed)
        if (written > 0) {
          setWritten(written - 1)
        }
        setText(textToWrite.slice(0, written))
      }
      if ((text === textToWrite && !reverse) || (written === 0 && reversed)) {
        // Set animation done so next animation knows to run
        if (setAnimationDone !== null) {
          setAnimationDone(true)
        }
      }
    }, writeDelay*1000);
    return () => clearTimeout(timer);
  }, [written, reverse, reversed, setAnimationDone, text, textToWrite, 
      writeDelay, deletingSpeed, typingSpeed]);

  return (
    <>
      {spaceFill ?
        <Element className="invisibleText">filler</Element>
        : <Element>{text}</Element>
      }
    </>
  );
}
