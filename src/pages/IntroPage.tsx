import './IntroPage.css';
import HeaderAnimation from '../components/ui/HeaderAnimation';
import FlowerAnimation from '../components/ui/FlowerAnimation';

const IntroPage = () => {
  return (
    <div>
      <div className="bg-1ptitle3 flex flex-col justify-center overflow-hidden">
        {/* 상, 하단 애니메이션 텍스트 */}
        <HeaderAnimation />

        {/* 꽃 애니메이션 */}
        <FlowerAnimation />
      </div>
    </div>
  );
};

export default IntroPage;
