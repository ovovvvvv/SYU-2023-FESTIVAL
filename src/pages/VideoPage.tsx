import { forwardRef, ForwardedRef } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const VideoPage = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-[#fff] pt-[40%] pb-[70%]"
    >
      <Link to="https://www.instagram.com/p/CxszYEnPfli/?igshid=MzRlODBiNWFlZA==">
        <p
          className="flex flex-row py-1 text-center  mb-10 items-center justify-center  text-[#fff] text-[15px] border-[1px] border-[#eeeeee] w-[200px] backdrop-blur-[2px] bg-white/10 whitespace-nowrap"
          style={{
            borderRadius: '34.5px',
            fontFamily: 'Pretendard-Semibold',
          }}
        >
          공연 입장 확인 안내
          <BsFillPlayFill className="ml-1 text-lg" />
        </p>
      </Link>
      <h1
        className="text-[25px] underline underline-offset-8 mb-16"
        style={{ fontFamily: 'Pretendard-semibold' }}
      >
        축전영상
      </h1>
      <div className="border-[3px] rounded-xl p-2">
        <video controls preload="metadata" className="w-[340px]">
          <source src="/video/festival.mp4#t=0.7" type="video/mp4" />
        </video>
      </div>
    </div>
  );
});

export default VideoPage;
