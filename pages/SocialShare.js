// SocialShare.js
import React from 'react';
import { 
  FacebookShareButton, 
  FacebookIcon, 
  TwitterShareButton, 
  TwitterIcon, 
  LinkedinShareButton, 
  LinkedinIcon, 
  WeiboShareButton, 
  WeiboIcon 
} from 'next-share';
  
const sharetext = 'Check out my dream house 😍 Get yours here: https://flodesigners.com/';

const SocialShare = ({ imageUrl }) => (
  <div className="mt-12">
    <div className="flex justify-center">
      <TwitterShareButton
        url={imageUrl}
        title={sharetext}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      
      <LinkedinShareButton url={imageUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      
      <FacebookShareButton
        url={imageUrl}
        quote={sharetext}
        hashtag={'#flozdesign'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      
      <WeiboShareButton
        url={imageUrl}
        title={sharetext}
      >
        <WeiboIcon size={32} round />
      </WeiboShareButton>
    </div>
  </div>
);

export default SocialShare;
