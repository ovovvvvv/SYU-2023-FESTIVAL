import './TextAnimation.css';

const FooterAnimation = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 w-full
      h-[20px] bg-[#404040] text-white text-xs text-center
      flex justify-center items-center overflow-clip" // flex 및 justify-center 추가
    >
      <p className="text-flow">후원/협업 기업</p>
    </div>
  );
};

export default FooterAnimation;
