import { forwardRef, ForwardedRef } from 'react';
import TimeTableBox from '../components/ui/timeline/TimeTableBox';


const TimeTablePage = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className=" flex flex-col justify-center text-center">
      <div className="flex flex-col justify-center items-center ">
        <div
          className="flex flex-col justify-center text-[#fff] text-[25px] border-[1px] py-1 border-[#eeeeee] w-[200px] my-10 backdrop-blur-[2px] bg-white/10"
          style={{
            borderRadius: '34.5px',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          TIME-TABLE
        </div>

        <div
          className=" flex items-center justify-center text-sm w-[300px] h-[38px] rounded-t-lg bg-[#0047ff] text-[#fff] text-semibold"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          부스 진행 순서
        </div>
        <div
          className=" w-[300px] py-4 flex flex-col justify-center border-solid border-2 border-[#0047ff] bg-[#FAFAFA] rounded-b-lg"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          <TimeTableBox time="09:00 - 17:00" activity="부스활동 진행" />
          <TimeTableBox time="17:00 - 18:00" activity="핫 타임(할인) 진행" />
          <TimeTableBox time="18:00 - 21:00" activity="야간 운영 전환" />
          <TimeTableBox time="21:00 - 22:00" activity="부스 마무리 및 정리" />
          <img src="/images/map1.webp" width={250} className="mx-auto my-2" />
          <p
            className="text-[12px]"
            style={{ fontFamily: 'Pretendard-Semibold' }}
          >
            모든 부스는 도서관, 솔로몬 광장 앞에서 진행됩니다.
          </p>
        </div>

        <div className="my-5">
          <div
            className="flex items-center justify-center text-sm w-[300px] h-[38px] rounded-t-lg bg-[#7000ff] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Semibold' }}
          >
            행사 진행 순서
          </div>
          <div
            className="w-[300px] py-4 flex flex-col justify-center border-solid border-2 border-[#7000ff] bg-[#FAFAFA] rounded-b-lg"
            style={{
              fontFamily: 'Pretendard-Semibold',
            }}
          >
            <TimeTableBox time="15:00 - 16:00" activity="입장 및 안전 안내" />
            <TimeTableBox time="16:00 - 17:00" activity="밴드 공연" />
            <TimeTableBox time="17:00 - 17:40" activity="치어 응원전" />
            <TimeTableBox time="17:40 - 18:40" activity="개회식" />
            <TimeTableBox time="18:40 - 19:00" activity="레크레이션" />
            <TimeTableBox time="19:00 - 19:20" activity="클래시아 공연" />
            <TimeTableBox time="19:20 - 19:40" activity="D.M 공연" />
            <TimeTableBox time="19:40 - 20:00" activity="PLAGUE 공연" />
            <TimeTableBox
              time="20:00 - 20:30"
              activity={<div className="text-[#7000ff]">MAD CLOWN</div>}
            />
            <TimeTableBox
              time="20:30 - 21:00"
              activity={<div className="text-[#7000ff]">Car, the garden</div>}
            />
            <TimeTableBox
              time="21:00 - 21:30"
              activity={<div className="text-[#7000ff]">FROMIS_9</div>}
            />
            <TimeTableBox
              time="21:30 - 22:00"
              activity={<div className="text-[#7000ff]">EDM FESTIVAL</div>}
            />
            <img src="/images/map2.webp" width={250} className="mx-auto my-2" />
            <p
              className="text-[12px]"
              style={{ fontFamily: 'Pretendard-Semibold' }}
            >
              행사는 삼육대학교 종합경기장에서 진행됩니다.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
});

export default TimeTablePage;
