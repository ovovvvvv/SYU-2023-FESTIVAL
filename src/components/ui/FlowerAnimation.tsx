import React from 'react';
import './FlowerAnimation.css';

const FlowerAnimation = () => {
  return (
    <div>
      <div>
        <img
          src="images/leftflower.png"
          width={80}
          className="rotation absolute left-[2%] top-[15%]"
        />
        <img
          src="images/rightflower.png"
          width={100}
          className="rotation absolute right-2 bottom-[27%]"
        />
      </div>
    </div>
  );
};

export default FlowerAnimation;
