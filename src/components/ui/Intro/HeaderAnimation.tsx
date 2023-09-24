const HeaderAnimation = () => {
  return (
    <div className="flex flex-col">
      {/* 상, 하단 애니메이션 텍스트 */}
      <div className="flex flex-row animate-slider absolute top-3 traking-wide text-4xl text-white whitespace-nowrap">
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
        <h1 className="mx-2">SAHMYOOK UNIVERSITY</h1>
      </div>
      <div className="flex flex-row animate-slider absolute bottom-[4%] tracking-wide text-4xl text-white whitespace-nowrap">
        <h1 className="mx-2">2023.10.04.WED SYU FESTIVAL</h1>
        <h1 className="mx-2">2023.10.04.WED SYU FESTIVAL</h1>
        <h1 className="mx-2">2023.10.04.WED SYU FESTIVAL</h1>
        <h1 className="mx-2">2023.10.04.WED SYU FESTIVAL</h1>
        <h1 className="mx-2">2023.10.04.WED SYU FESTIVAL</h1>
        <h1 className="mx-2">2023.10.04.WED SYU FESTIVAL</h1>
      </div>
    </div>
  );
};

export default HeaderAnimation;
