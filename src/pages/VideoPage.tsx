import { forwardRef, ForwardedRef } from 'react';

const VideoPage = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="flex flex-col items-center text-[#fff] py-[70%]">
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
