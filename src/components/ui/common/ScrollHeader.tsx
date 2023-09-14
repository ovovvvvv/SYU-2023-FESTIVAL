const ScrollHeader = () => {
  return (
    <div className="sticky top-0 text-center grid grid-cols-3 sm:grid-cols-6 w-full">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="border-solid border-[1px] border-[#5A5A5A] text-xs p-2 bg-[#E7E7E7] cursor-pointer text-black sticky top-0"
        >
          {index === 0 && '행사 개요 및 목표'}
          {index === 1 && 'TIME TABLE/출연진'}
          {index === 2 && '협업/협찬'}
          {index === 3 && '참여부스'}
          {index === 4 && '인사말'}
          {index === 5 && '축전영상'}
        </div>
      ))}
    </div>
  );
};

export default ScrollHeader;
