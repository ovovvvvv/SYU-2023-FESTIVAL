import { useState, RefObject } from 'react';

interface ScrollHeaderProps {
  outlineRef: RefObject<HTMLDivElement | null>;
  timetableRef: RefObject<HTMLDivElement | null>;
  sponserRef: RefObject<HTMLDivElement | null>;
}

const ScrollHeader = ({
  outlineRef,
  timetableRef,
  sponserRef,
}: ScrollHeaderProps) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const handleMoveTo = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const menuItems = [
    { label: '행사 개요 및 목표', ref: outlineRef },
    { label: 'TIME TABLE/출연진', ref: timetableRef },
    { label: '협업/협찬', ref: sponserRef },
    { label: '부스/SPECIAL ZONE' },
    { label: '축전 영상' },
    { label: 'About' },
  ];

  const handleChangeMenuColor = (
    index: number,
    ref: RefObject<HTMLDivElement | null>,
  ) => {
    setActiveMenuIndex(index); // 클릭한 메뉴의 인덱스를 활성화 상태로 설정!!
    handleMoveTo(ref);
  };

  return (
    <div className="sticky top-0 text-center grid grid-cols-3 sm:grid-cols-6 w-full">
      {menuItems.map((menuItem, index) => (
        <div
          style={{ fontFamily: 'Pretendard-Regular' }}
          key={index}
          className={` border-solid border-[1px] border-[#5A5A5A] text-xs p-2 cursor-pointer sticky top-0 ${
            activeMenuIndex === index
              ? 'bg-[#000000] text-[#ffffff]'
              : 'bg-[#E7E7E7] text-black'
          }`}
          onClick={() => handleChangeMenuColor(index, menuItem.ref!)}
        >
          {menuItem.label}
        </div>
      ))}
    </div>
  );
};

export default ScrollHeader;
