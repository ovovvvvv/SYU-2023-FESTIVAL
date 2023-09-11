import React, { useRef } from 'react';

const ScrollHeader = () => {
  const scrollRef = useRef(null);

  const handleScrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative top-0 flex text-center grid grid-cols-3 sm:grid-cols-6">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="border-2 border-[#5A5A5A] text-sm p-2 bg-[#E7E7E7] cursor-pointer text-black"
          onClick={() => handleScrollToSection(`section${index + 1}`)}
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
