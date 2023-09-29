import HeaderAnimation from '../components/ui/Intro/HeaderAnimation';
import FlowerAnimation from '../components/ui/Intro/FlowerAnimation';

const IntroPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: 'black',
          backgroundImage: 'url(/images/title4.webp)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative',
          zIndex: -1,
        }}
        className="h-screen flex flex-col justify-center overflow-hidden"
      >
        {/* 상, 하단 애니메이션 텍스트 */}
        <HeaderAnimation />

        {/* 꽃 애니메이션 */}
        <FlowerAnimation />
      </div>
    </div>
  );
};

export default IntroPage;
