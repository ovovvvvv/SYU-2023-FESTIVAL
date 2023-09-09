import React from 'react';
import './TextAnimation.css';

const FooterAnimation = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 w-[100%] 
    h-[20px] bg-[#404040] text-white text-xs text-center
    flex flex-col justify-center"
    >
      <p className="text-flow">후원/협업 기업</p>
    </div>
  );
};

export default FooterAnimation;
