interface TimeTableBoxProps {
  time: string;
  activity: string;
}

const TimeTableBox = ({ time, activity }: TimeTableBoxProps) => {
  return (
    <div>
      <div className="flex flex-row justify-start items-center text-[13px]">
        <p
          className="mx-5"
          style={{
            fontFamily: 'Pretendard-Semibold',
          }}
        >
          {time}
        </p>
        <p
          className="mx-5"
          style={{
            fontFamily: 'Pretendard-Semibold',
          }}
        >
          {activity}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-t w-[280px] border-[#CECECE] my-2"></div>
      </div>
    </div>
  );
};

export default TimeTableBox;
