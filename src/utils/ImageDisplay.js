import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ImageDisplay = ({ imageUrls }) => {
  const images = imageUrls.map(url => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <ImageGallery
      items={images}
      showNav={false}
      showFullscreenButton={false}
      showPlayButton={false}
    />
  );
};

export default ImageDisplay;
