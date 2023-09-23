const FooterAnimation = () => {
  const sponsors = ['후원/협업 기업', '토모스포츠', '삼육대학교 일자리본부'];

  // 스폰서 배열을 30번 반복합니다.
  const repeatSponsors = Array(30).fill(sponsors).flat();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 w-full
      h-[18px] bg-[#404040] text-white text-xs text-center
      flex justify-center items-center overflow-clip
      z-[1]"
    >
      <div className="animate-slider flex flex-row space-x-6 whitespace-nowrap">
        {repeatSponsors.map((sponsor, index) => (
          <p key={index}>{sponsor}</p>
        ))}
      </div>
    </div>
  );
};

export default FooterAnimation;
