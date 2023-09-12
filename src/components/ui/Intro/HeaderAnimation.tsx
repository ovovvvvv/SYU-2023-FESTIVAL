import './TextAnimation.css';

const HeaderAnimation = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* 상, 하단 애니메이션 텍스트 */}
      <h1 className="text-flow absolute top-1 text-4xl text-white whitespace-nowrap">
        SAHMYOOK UNIVERSITY
      </h1>
      <h1 className="text-flow absolute bottom-8 text-4xl text-white whitespace-nowrap">
        SYU FESTIVAL
      </h1>
    </div>
  );
};

export default HeaderAnimation;
