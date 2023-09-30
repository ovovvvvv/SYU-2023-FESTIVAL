const FooterAnimation = () => {
  const sponsors = [
    '후원/협업 기업',
    '노원문화재단',
    '노원 문화살롱 5120',
    '공릉동도깨비시장',
    '노원 청년공유센터 청년공감',
    '대한민국해군',
    '토모스포츠',
    '샌드밀리',
    '더리얼컴퍼니',
    '포토에이스',
    '밝은눈안과',
    '시원스쿨',
    'eazzy',
    '삼육대학교 일자리본부',
    '동아리연합회 다원',
    '제63대 열림 총학생회',
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
