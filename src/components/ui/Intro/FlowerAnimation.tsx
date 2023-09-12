import './FlowerAnimation.css';

const FlowerAnimation = () => {
  return (
    <div>
      <div>
        <img
          src="images/leftflower.png"
          width={95}
          className="rotation absolute left-[2%] top-[15%]"
        />
        <img
          src="images/rightflower.png"
          width={110}
          className="rotation absolute right-2 bottom-[27%]"
        />
      </div>
    </div>
  );
};

export default FlowerAnimation;
