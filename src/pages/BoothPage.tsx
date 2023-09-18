import BoothBox from '../components/ui/booth/BoothBox';

const BoothPage = () => {
  return (
    <div className="flex flex-col items-center mt-10 pb-20">
      <h1
        className="text-[25px] text-white underline underline-offset-8 mb-6"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        BOOTH
      </h1>

      <p
        className="text-[#fff] text-[17px]"
        style={{ fontFamily: 'Pretendard-medium' }}
      >
        성공적인 2023 천보축전을 위해
      </p>
      <p
        className="text-[#fff] text-[17px]"
        style={{ fontFamily: 'Pretendard-bold' }}
      >
        N개의 교외 부스와 N개의 교내 부스가 함께합니다.
      </p>
      <BoothBox />
    </div>
  );
};

export default BoothPage;
