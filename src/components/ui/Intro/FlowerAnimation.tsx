import './FlowerAnimation.css';

const FlowerAnimation = () => {
  return (
    <div>
      <div>
        <img
          src="images/leftflower.webp"
          width={95}
          className="rotation absolute left-[2%] top-[15%]"
        />
        <img
          src="images/rightflower.webp"
          width={110}
          className="rotation absolute right-2 bottom-[27%]"
        />
      </div>
    </div>
  );
};

export default FlowerAnimation;
