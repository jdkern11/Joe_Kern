import React from 'react';
import './index.scss';
import ImageScroll from './ImageScroll';

type Props = {
  min: int;
  max: int;
}

const ImageGallery = ({min, max}: Props) => {
  const imageNames = Array.from({ length: (max - min + 1) }, (_, i) => `${min + i}.jpg`);

  return (
    <div className="Gallery">
      {imageNames.map((imageName, index) => (
        <ImageScroll
          src={`images/${imageName}`}
          alt={`Image ${index + min + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
