import { forwardRef, ForwardedRef } from 'react';
import TimeTableBox from '../components/ui/timeline/TimeTableBox';
import './TimeTablePage.css';

const TimeTablePage = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="bg-timetable h-screen h-full">
      <div className="flex flex-col justify-center items-center ">
        <div
          className="text-[#fff] border-2 p-2 my-5"
          style={{ borderRadius: '50%', fontFamily: 'Montserrat, sans-serif' }}
        >
          TIME-TABLE
        </div>
        <div
          className="flex items-center justify-center text-sm w-[342px] h-[38px] rounded-t-lg bg-black text-[#fff] text-semibold"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          부스 시간표
        </div>
        <div
          className="w-[340px] h-[226px] flex flex-col justify-center bg-[#FAFAFA] rounded-b-lg"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          <TimeTableBox time="09:00 - 17:00" activity="부스활동 진행" />
          <TimeTableBox time="17:00 - 18:00" activity="핫 타임(할인) 진행" />
          <TimeTableBox time="18:00 - 21:00" activity="야간 운영 전환" />
          <TimeTableBox time="21:00 - 22:00" activity="부스 마무리 및 정리" />
        </div>
        <div
          className="flex items-center justify-center text-sm w-[342px] h-[38px] mt-5 rounded-t-lg bg-black text-[#fff]"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          행사 진행 순서
        </div>
        <div
          className="w-[340px] h-[430px] flex flex-col justify-center bg-[#FAFAFA] rounded-b-lg mb-20"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          <TimeTableBox time="16:30 - 17:30" activity="개회식 + 레크레이션" />
          <TimeTableBox time="17:30 - 19:00" activity="밴드 공연" />
          <TimeTableBox time="19:00 - 19:15" activity="레크레이션 1" />
          <TimeTableBox time="19:15 - 19:45" activity="댄스동아리 공연" />
          <TimeTableBox time="19:45 - 20:00" activity="레크레이션 2" />
          <TimeTableBox time="20:00 - 20:30" activity="A 공연자 공연" />
          <TimeTableBox time="20:30 - 21:00" activity="B 공연자 공연" />
          <TimeTableBox time="21:00 - 21:30" activity="C 공연자 공연" />
          <TimeTableBox time="21:30 - 21:55" activity="EDM 공연 및 퇴장 안내" />
          <TimeTableBox time="21:55 - 22:00" activity="마무리" />
        </div>
      </div>
    </div>
  );
});

export default TimeTablePage;
