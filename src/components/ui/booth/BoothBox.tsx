const BoothBox = () => {
  return (
    <div className="flex flex-col justify-center items-center py-7">
      <img src="/images/boothbox.png" width={330} />
      <div
        className="absolute flex flex-row  text-[15px] text-center"
        style={{ fontFamily: 'Pretendard-semibold' }}
      >
        <div className="flex flex-col space-y-1">
          <p>푸드트럭 : 더리얼키친</p>
          <p>노원구청 청년정책과</p>
          <p>노원 문화살롱5120</p>
          <p>노원 청년공유센터 청년공감</p>
          <p>노원문화재단</p>
          <p>대한민국해군</p>
          <p>공릉동 안마을 상인회</p>
          <p>상계중앙시장 상인회</p>
          <p>공릉 도깨비시장 상인회</p>
          <p>포토에이스</p>
          <p>밝은눈안과</p>
          <p>샌드밀리</p>
          <p>이찌</p>
          <p>시원스쿨</p>
        </div>
        <div className="flex flex-col space-y-1">
          <p>총학생회 삼육랜드</p>
          <p>일자리본부 이벤트부스 3</p>
          <p>일자리본부 직무부스 4</p>
          <p>동아리연합회 부스</p>
        </div>
      </div>
    </div>
  );
};

export default BoothBox;
