import { BsFillPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const LineupPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1
        className="text-[#fff] text-[27px] flex justify-center text-center mt-10 mb-4"
        style={{
          fontFamily: 'Montserrat, sans-serif',
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
            fontFamily: 'Montserrat, sans-serif',
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
          모든 공연은 삼육대학교 종합경기장에서 진행됩니다.
        </p>
      </div>
      <Link
        to="https://www.instagram.com/p/CxszYEnPfli/?igshid=MzRlODBiNWFlZA=="
        className="flex justify-center"
      >
        <p
          className="flex flex-row py-1 text-center mb-10 items-center justify-center  text-[#fff] text-[15px] border-[1px] border-[#eeeeee] w-[200px] backdrop-blur-[2px] bg-white/10 whitespace-nowrap"
          style={{
            borderRadius: '34.5px',
            fontFamily: 'Pretendard-Semibold',
          }}
        >
          공연 입장 확인 안내
          <BsFillPlayFill className="ml-1 text-lg" />
        </p>
      </Link>
    </div>
  );
};

export default LineupPage;
