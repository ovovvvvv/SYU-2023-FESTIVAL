const FooterAnimation = () => {
  const sponsors = [
    '후원/협업 기업',
    '일자리본부',
    '삼육대학교',
    '토모스포츠',
    '샌드밀리',
    '더리얼컴퍼니',
    '밝은눈안과',
    '시원스쿨',
    '안마을 상인회',
  ];

  // 스폰서 배열을 30번 반복합니다.
  const repeatSponsors = Array(28).fill(sponsors).flat();

  return (
    <div
      className="fixed flex items-center bottom-0 left-0 right-0 w-[500px]
      h-[18px] bg-[#404040] text-white
      mx-auto overflow-clip
       z-[1]"
    >
      <div className="animate-slider flex flex-row text-[10px] space-x-6 whitespace-nowrap">
        {repeatSponsors.map((sponsor, index) => (
          <p key={index}>{sponsor}</p>
        ))}
      </div>
    </div>
  );
};

export default FooterAnimation;
