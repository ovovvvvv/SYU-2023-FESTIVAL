import './IntroPage.css';
import HeaderAnimation from '../components/ui/Intro/HeaderAnimation';
import FlowerAnimation from '../components/ui/Intro/FlowerAnimation';

const IntroPage = () => {
  return (
    <div>
      <div className="bg-titleimg h-screen flex flex-col justify-center overflow-hidden">
        {/* 상, 하단 애니메이션 텍스트 */}
        <HeaderAnimation />
        <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 text-[#fff] ">
          <p
            className="tracking-[10px] whitespace-nowrap"
            style={{ fontFamily: 'GmarketSansBold' }}
          >
            SCROLL-DOWN
          </p>
        </div>

        {/* 꽃 애니메이션 */}
        <FlowerAnimation />
      </div>
    </div>
  );
};

export default IntroPage;
