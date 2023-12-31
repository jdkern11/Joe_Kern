import React, { useEffect, useState } from 'react';
import './index.scss';

type ImageScrollProps = {
  src: String;
  alt: String;
}

const ImageScroll = ({src, alt}: ImageScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const image = document.getElementById(`scroll-image-${src}`);
    if (image) {
      const rect = image.getBoundingClientRect();
      setIsVisible(rect.top <= (window.innerHeight - 100) && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-image ${isVisible ? 'visible' : ''}`} id={`scroll-image-${src}`}>
      <img className="Image" key={src} src={src} alt={alt} loading="lazy" />
    </div>
  )
};

export default ImageScroll
