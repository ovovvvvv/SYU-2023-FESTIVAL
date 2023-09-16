import './TextAnimation.css';

const HeaderAnimation = () => {
  return (
    <div className="flex flex-col">
      {/* 상, 하단 애니메이션 텍스트 */}
      <div className="flex flex-row animate-slider absolute top-1 traking-wide text-4xl text-white whitespace-nowrap">
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
      </div>
      <div className="flex flex-row animate-slider absolute bottom-[20px] tracking-wide text-4xl text-white whitespace-nowrap">
        <h1 className="mx-2">SYU FESTIVAL</h1>
        <h1 className="mx-2">SYU FESTIVAL</h1>
        <h1 className="mx-2">SYU FESTIVAL</h1>
        <h1 className="mx-2">SYU FESTIVAL</h1>
        <h1 className="mx-2">SYU FESTIVAL</h1>
        <h1 className="mx-2">SYU FESTIVAL</h1>
      </div>
    </div>
  );
};

export default HeaderAnimation;
