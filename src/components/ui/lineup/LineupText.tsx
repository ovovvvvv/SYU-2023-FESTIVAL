interface LineupTextProps {
  title: string;
  desc: string;
}

const LineupText = ({ title, desc }: LineupTextProps) => {
  return (
    <div className="flex flex-col w-[169px] h-[127px] my-5">
      <h1
        className="text-[#fff] text-[20px]"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {title}
      </h1>
      <p
        className="text-[11px] text-[#fff] leading-6 timeline-description"
        style={{ fontFamily: 'Pretendard-Medium' }}
      >
        {desc}
      </p>
    </div>
  );
};

export default LineupText;
