import { useState, useEffect } from 'react';

interface ScrollHeaderProps {
  outlineRef: React.RefObject<HTMLDivElement | null>;
  timetableRef: React.RefObject<HTMLDivElement | null>;
  sponserRef: React.RefObject<HTMLDivElement | null>;
  boothRef: React.RefObject<HTMLDivElement | null>;
  videoRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollHeader = ({
  outlineRef,
  timetableRef,
  sponserRef,
  boothRef,
  videoRef,
  aboutRef,
}: ScrollHeaderProps) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const [scrollingFromMenu, setScrollingFromMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollingFromMenu) {
        const refs = [
          outlineRef,
          timetableRef,
          sponserRef,
          boothRef,
          videoRef,
          aboutRef,
        ];

        // 각 섹션의 위치를 파악하고 활성 메뉴를 업데이트합니다.
        for (let i = 0; i < refs.length; i++) {
          const ref = refs[i];
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
              setActiveMenuIndex(i);
              break; // 첫 번째로 보이는 섹션을 활성화하고 나머지는 검사하지 않습니다.
            }
          }
        }
      }
    };

    // 스크롤 이벤트를 추가합니다.
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    outlineRef,
    timetableRef,
    sponserRef,
    boothRef,
    videoRef,
    aboutRef,
    scrollingFromMenu,
  ]);

  const handleMoveTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    setScrollingFromMenu(true);
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setTimeout(() => {
      setScrollingFromMenu(false);
    }, 1000); // 스크롤 버튼으로 이동하면 스크롤 이벤트는 1초 후에
  };

  const menuItems = [
    { label: '행사 목표 및 역사', ref: outlineRef },
    { label: 'TIME TABLE/출연진', ref: timetableRef },
    { label: '협업/협찬', ref: sponserRef },
    { label: '부스/SPECIAL ZONE', ref: boothRef },
    { label: '공연 입장 안내/축전 영상', ref: videoRef },
    { label: 'About', ref: aboutRef },
  ];

  const handleChangeMenuColor = (
    index: number,
    ref: React.RefObject<HTMLDivElement | null>,
  ) => {
    setActiveMenuIndex(index);
    handleMoveTo(ref);
  };

  return (
    <div className="z-[1] sticky top-0 text-center grid grid-cols-3 sm:grid-cols-6 w-full">
      {menuItems.map((menuItem, index) => (
        <div
          style={{ fontFamily: 'Pretendard-medium' }}
          key={index}
          className={`border-solid border-[0.3px] border-[#5A5A5A] text-[11px] p-[8px] cursor-pointer sticky top-0 ${
            activeMenuIndex === index
              ? 'bg-[#000000] text-[#ffffff]'
              : 'bg-[#E7E7E7] text-[#000000]'
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
