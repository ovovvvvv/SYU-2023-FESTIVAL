import { forwardRef, ForwardedRef } from 'react';
import TimeTableBox from '../components/ui/timeline/TimeTableBox';
import './TimeTablePage.css';
import Googlemap from '../components/ui/timeline/GooglemapApi';

const TimeTablePage = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  const center1 = {
    lat: 37.643126,
    lng: 127.106649,
  };
  const center2 = {
    lat: 37.641534,
    lng: 127.107658,
  };

  const zoom1 = {
    minzoom: 12,
    maxzoom: 20,
  };

  const zoom2 = {
    minzoom: 12,
    maxzoom: 20,
  };

  return (
    <div ref={ref} className=" flex flex-col justify-center text-center pt-10">
      <div className="flex flex-col justify-center items-center ">
        <div
          className="flex flex-col justify-center text-[#fff] text-[27px] border-[1px] border-[#eeeeee] w-[211px] my-8 backdrop-blur-[2px] bg-white/10"
          style={{
            borderRadius: '34.5px',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          TIME-TABLE
        </div>

        <div
          className=" flex items-center justify-center text-sm w-[330px] h-[38px] rounded-t-lg bg-[#0026ff] text-[#fff] text-semibold"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          부스 진행 순서
        </div>
        <div
          className=" w-[330px] py-4 flex flex-col justify-center border-solid border-2 border-[#0026ff] bg-[#FAFAFA] rounded-b-lg"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          <TimeTableBox time="09:00 - 17:00" activity="부스활동 진행" />
          <TimeTableBox time="17:00 - 18:00" activity="핫 타임(할인) 진행" />
          <TimeTableBox time="18:00 - 21:00" activity="야간 운영 전환" />
          <TimeTableBox time="21:00 - 22:00" activity="부스 마무리 및 정리" />
          <Googlemap
            lat={center1.lat}
            lng={center1.lng}
            minzoom={zoom1.minzoom}
            maxzoom={zoom2.maxzoom}
          />
          <p
            className="text-[15px]"
            style={{ fontFamily: 'Pretendard-Semibold' }}
          >
            모든 부스는 도서관, 솔로몬 광장 앞에서 진행됩니다.
          </p>
        </div>
        <div className="my-5">
          <div
            className="flex items-center justify-center text-sm w-[330px] h-[38px] rounded-t-lg bg-[#8f00ff] text-[#fff]"
            style={{ fontFamily: 'Pretendard-Semibold' }}
          >
            행사 진행 순서
          </div>
          <div
            className="w-[330px] py-4 flex flex-col justify-center border-solid border-2 border-[#8f00ff] bg-[#FAFAFA] rounded-b-lg"
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
            <TimeTableBox
              time="21:30 - 21:55"
              activity="EDM 공연 및 퇴장 안내"
            />
            <TimeTableBox time="21:55 - 22:00" activity="마무리" />
            <Googlemap
              lat={center2.lat}
              lng={center2.lng}
              minzoom={zoom2.minzoom}
              maxzoom={zoom2.maxzoom}
            />
            <p
              className="text-[15px]"
              style={{ fontFamily: 'Pretendard-Semibold' }}
            >
              행사는 삼육대학교 대운동장에서 진행됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TimeTablePage;
