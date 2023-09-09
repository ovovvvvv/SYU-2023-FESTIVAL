import React from 'react';
import './IntroPage.css';
import FooterAnimation from '../components/ui/FooterAnimation';
import HeaderAnimation from '../components/ui/HeaderAnimation';
import FlowerAnimation from '../components/ui/FlowerAnimation';

const IntroPage = () => {
  return (
    <div className="flex flex-col w-full max-w-[500px] h-screen overflow-y-scroll custom-scrollbar-style">
      <div className="bg-1ptitle3 relative flex flex-col justify-center items-center">
        {/* 상, 하단 애니메이션 텍스트 */}
        <HeaderAnimation />

        {/* 꽃 애니메이션 */}
        <FlowerAnimation />

        <FooterAnimation />
      </div>
    </div>
  );
};

export default IntroPage;
