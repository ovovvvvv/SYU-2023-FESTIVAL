import Googlemap from '../common/GooglemapApi';

const BoothBox = () => {
  const center2 = {
    lat: 37.641534,
    lng: 127.107658,
  };
  const zoom2 = {
    minzoom: 12,
    maxzoom: 20,
  };

  return (
    <div className="flex flex-col items-center pb-20">
      <h1
        className="text-[25px] text-white underline underline-offset-8 mb-6"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        BOOTH
      </h1>

      <p
        className="text-[#fff] text-[17px]"
        style={{ fontFamily: 'Pretendard-medium' }}
      >
        성공적인 2023 천보축전을 위해
      </p>
      <p
        className="text-[#fff] text-[17px]"
        style={{ fontFamily: 'Pretendard-bold' }}
      >
        N개의 교외 부스와 N개의 교내 부스가 함께합니다.
      </p>
      <div className="flex flex-col justify-center items-center py-7 mb-10">
        <img src="/images/boothbox.webp" width={330} />
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

      {/* SPECIAL ZONE */}
      <h1
        className="text-[25px] text-white underline underline-offset-8 mb-6"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        SPECIAL ZONE
      </h1>

      <div className="flex flex-col items-center text-[#fff] my-4 text-center ">
        <p
          className="flex flex-col justify-center py-1 text-[#fff] text-[15px] border-[1px] border-[#eeeeee] w-[300px] my-4 backdrop-blur-[2px] bg-white/10 whitespace-nowrap"
          style={{
            borderRadius: '34.5px',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          BUSKING ZONE & PICNIC ZONE
        </p>
        <Googlemap
          lat={center2.lat}
          lng={center2.lng}
          minzoom={zoom2.minzoom}
          maxzoom={zoom2.maxzoom}
        />
        <p className="text-[13px]">
          버스킹존과 피크닉존은 에스라관 옆 잔디밭입니다.
        </p>
      </div>
      <div className="flex flex-col items-center text-[#fff] my-4 text-center">
        <p
          className="flex flex-col justify-center py-1 text-[#fff] text-[15px] border-[1px] border-[#eeeeee] w-[150px] my-4 backdrop-blur-[2px] bg-white/10 whitespace-nowrap"
          style={{
            borderRadius: '34.5px',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          EATING ZONE
        </p>
        <Googlemap
          lat={center2.lat}
          lng={center2.lng}
          minzoom={zoom2.minzoom}
          maxzoom={zoom2.maxzoom}
        />
        <p className="text-[13px]">
          취식존은 삼육대학교 다니엘관 앞 광장에 위치해있습니다.
        </p>
      </div>
    </div>
  );
};

export default BoothBox;
