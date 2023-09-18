import Googlemap from '../components/ui/timeline/GooglemapApi';

const LineupPage = () => {
  const center2 = {
    lat: 37.641534,
    lng: 127.107658,
  };
  const zoom2 = {
    minzoom: 12,
    maxzoom: 20,
  };

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
      <div className="flex flex-col items-center space-y-5 mb-10 text-center">
        <img src="/images/lineup.png" width={330} />
        <h1
          className="absolute bottom-[40.5%] text-black text-[27px] flex justify-center text-center mt-10 mb-4"
          style={{
            fontFamily: 'Pretendard-Semibold',
          }}
        >
          LOCATION
        </h1>
        <div className="absolute bottom-[37%]">
          <Googlemap
            lat={center2.lat}
            lng={center2.lng}
            minzoom={zoom2.minzoom}
            maxzoom={zoom2.maxzoom}
          />
        </div>
        <p
          className="text-[15px] absolute bottom-[35.8%]"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          모든 공연은 삼육대학교 대운동장 <br />
          무대에서 진행됩니다.
        </p>
      </div>
    </div>
  );
};

export default LineupPage;
