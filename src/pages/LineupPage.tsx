const LineupPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1
        className="text-[#fff] text-[27px] flex justify-center text-center mt-10 mb-4"
        style={{
          fontFamily: 'Pretendard-Semibold',
        }}
      >
        AGAIN,YOUTH! <br />
        LINE UP
      </h1>
      <div className="relative flex flex-col items-center space-y-5 mb-10 text-center">
        <img src="/images/lineup.webp" width={300} />
        <h1
          className="absolute bottom-[17.5%] text-black text-[23px] flex justify-center text-center mt-10 mb-4"
          style={{
            fontFamily: 'Pretendard-Semibold',
          }}
        >
          LOCATION
        </h1>
        <img
          src="/images/map2.webp"
          width={220}
          className="absolute bottom-[5%] mx-auto"
        />
        <p
          className="text-[12px] absolute bottom-[3%]"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          모든 공연은 삼육대학교 대운동장 무대에서 진행됩니다.
        </p>
      </div>
    </div>
  );
};

export default LineupPage;
