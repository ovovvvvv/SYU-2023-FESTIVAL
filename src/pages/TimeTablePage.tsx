import TimeTableBox from '../components/ui/timeline/TimeTableBox';
import './TimeTablePage.css';

const TimeTablePage = () => {
  return (
    <div className="bg-timetable h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center ">
        <div
          className="text-[#fff] border-2 p-2 my-5"
          style={{ borderRadius: '50%' }}
        >
          TIME-TABLE
        </div>
        <div className="flex items-center justify-center text-sm w-[352px] h-[38px] rounded-t-lg bg-black text-[#fff]">
          부스 시간표
        </div>
        <div className="w-[350px] h-[226px] flex flex-col justify-center bg-[#FAFAFA]">
          <TimeTableBox time="09:00 - 17:00" activity="부스활동 진행" />
          <TimeTableBox time="17:00 - 18:00" activity="핫 타임(할인) 진행" />
          <TimeTableBox time="18:00 - 21:00" activity="야간 운영 전환" />
          <TimeTableBox time="21:00 - 22:00" activity="부스 마무리 및 정리" />
        </div>
      </div>
    </div>
  );
};

export default TimeTablePage;
