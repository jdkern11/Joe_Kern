import 'index.scss';
import './index.scss';
import React, { useState, useEffect } from 'react';
import { TypeWriter } from 'Shared/TypeWriter';

const AboutBanner = () => {
  const [showElement, setShowElement] = useState(false);
  useEffect(() => {
    console.log(showElement)
    const display = () => {
      setTimeout(() => {
        setShowElement(!showElement);
      }, 5000);
    };
    display();
  }, [showElement]);

  return (
    <div className="Banner">
      <div className="CenterBox">
        <TypeWriter textToWrite="Hey there, I'm Joe" elementType="h1"/>
        <p>I like to write scientific code!</p>
        <div className="Links">
          <div className="ImageBox">
            <a href="https://github.com/jdkern11" target="_blank" rel="noopener noreferrer">
              <img src="/logos/github.png" alt="GitHub Logo" />
            </a>
          </div>
          <div className="ImageBox">
            <a href="https://linkedin.com/in/joe-d-kern" target="_blank" rel="noopener noreferrer">
              <img src="/logos/linkedin.png" alt="LinkedIn Logo" />
            </a>
          </div>
          <div className="ImageBox">
            <a href="https://scholar.google.com/citations?user=hgaNFOsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              <img src="/logos/gschol.png" alt="Google Scholar Logo" />
            </a>
          </div>
        </div>
      </div>
      <div className={`Mouse ${showElement ? 'appeared' : ''}`} >
        <div className={`Scroll ${showElement ? 'appeared' : ''}`} />
      </div> 
    </div>
  )
}
export default AboutBanner
