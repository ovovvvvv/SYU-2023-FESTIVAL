import { forwardRef, ForwardedRef } from 'react';
import './TimeTablePage.css';

const OutlinePage = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="bg-timetable flex flex-col justify-center  py-10">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col justify-center w-[330px] py-4 rounded-b-[20px] bg-[#FAFAFA] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.10)] ">
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            SAHMYOOK UNIV.FESTIVAL
          </p>
          <p
            className="text-[20px]"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
          >
            &lt;AGAIN, YOUTH!&gt;
          </p>
        </div>
        <div className="flex flex-col justify-center w-[330px] py-4 rounded-[20px] bg-[#FAFAFA] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.10)]">
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            FESTIVAL PURPOSE
          </p>
          <br />
          <p className="text-[11px]">
            비대면에서 대면으로 넘어가는 대학문화 도약의 시기에
            <br />
            <strong>학생 주도참여형 축제</strong>를 진행. 대학문화 창달 <br />
            <br />
            기존의 보수적인 축제의 형상을 탈피하고
            <br />
            <strong>지역사회와 함께 공존할수 있는 축제</strong> <br />
            <br />
            학업에 지친 학생들을 응원하는 축제의 장 마련
            <br />
            <br />
            <strong>다음 세대의 주역인 삼육대학 청년들</strong>에게 취.창업에
            대한
            <br />
            다양한 체험활동과 정보를 제공하여 미래를 향해 도전하는 기회 창출
            <br />
            <br />
            학생들이 직접 기획하고 주도하는 학생 주도형 축제
          </p>
        </div>
        <div className="outlineBox2 flex flex-col justify-center w-[330px] py-4 rounded-[20px] bg-[#FAFAFA] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.10)]">
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            FESTIVAL HISTORY
          </p>
          <br />
          <p
            className="text-[11px]
               style={{ fontFamily: 'Pretendard-Regular' }}"
          >
            삼육대학교는 1906년 개교 후, 1961년에 학생 자치기구를
            <br />
            조직하여 대학문화 창달의 이상을 기초로 삼아 2007년
            <br />
            처음 천보축전을 개최 하였습니다.
            <br />
            <br />
            제63대 삼육대학교 열림 총학생회는 개교 이래 최대 규모 야외 축제를
            <br />
            진행하여 기존의 보수적 형상을 띈 삼육대학교 축제의 전환을
            <br />
            시도함으로써 대학문화 창달이라는 목적에 그 의미가 극대화됩니다.
            <br />
            <br />
            2023 천보축전을 9년 만에 야외 축제로 결정하여 지역사회와
            <br />
            삼육대학교 학생들의 화합과 문화형성의 장이라는 의미가 있습니다.
          </p>
          <br />
          <p
            className="text-[8px]"
            style={{ fontFamily: 'Pretendard-Regular' }}
          >
            * 2022년 기준 천보축전 참여 재학생 약5000명, 2023년은
            <br />
            지역사회와 공존하는 방향으로 진행하기에 그 이상이 될 것으로 예상함.
          </p>
        </div>
      </div>
    </div>
  );
});

export default OutlinePage;
