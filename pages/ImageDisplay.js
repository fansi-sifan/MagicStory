import React from 'react';
import SocialShare from './SocialShare';

const ImageDisplay = ({ imageUrl, loading }) => {
  if (!imageUrl || loading) {
    return null;
  }

  return (
    <>
      <div className="mt-12 flex justify-center">
        <img src={imageUrl} alt="Generated image" className="rounded-xl shadow-lg" />
      </div>
      <div className="mt-12 flex justify-center">
      <SocialShare imageUrl={imageUrl} />
      </div>
    </>
  );
};

export default ImageDisplay;