interface TimeTableBoxProps {
  time: string;
  activity: string;
}

const TimeTableBox = ({ time, activity }: TimeTableBoxProps) => {
  return (
    <div>
      <div
        className=" flex flex-row justify-start space-x-5 text-sm
      "
      >
        <p className="mx-6  Pretendard-Regular">{time}</p>
        <p className="mx-6 Pretendard-SemiBold ">{activity}</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-t w-[322px] border-[#CECECE] my-2"></div>
      </div>
    </div>
  );
};

export default TimeTableBox;
