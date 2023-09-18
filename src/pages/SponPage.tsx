import { forwardRef, ForwardedRef } from 'react';

const SponPage = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="flex flex-col my-20">
      <div className="flex flex-col items-center pt-[30%] pb-[30%]">
        <h1
          className="text-[25px] text-white underline underline-offset-8 mb-10"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          SPONSOR
        </h1>
        <div className="w-[176px] h-[100px] bg-[#D9D9D9]"></div>
        <p className="text-white mb-10">협찬: 토모스포츠</p>
        <div className="w-[176px] h-[100px] bg-[#D9D9D9]"></div>
        <p className="text-white">협업: 삼육대학교 일자리본부</p>
      </div>
    </div>
  );
});

export default SponPage;
