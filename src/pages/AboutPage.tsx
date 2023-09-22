import AboutMe from "../components/ui/about/AboutMe";

const AboutPage = () => {
  return (
    <div
      className="flex flex-col text-center items-center text-[#fff] py-20"
      style={{ fontFamily: 'Pretendard-Semibold' }}
    >
      <p className="text-[18px]">
        LIKELION AT SYU <br />
        멋쟁이사자처럼 삼육대학교 <br />X <br /> 삼육대학교 제63대 총학생회
        '열림'
      </p>

      <div
        className="flex flex-col justify-center py-8  text-[#fff] text-[12px] leading-5 border-[1px] border-[#eeeeee] w-[300px] my-4 backdrop-blur-[2px] bg-white/10 whitespace-nowrap"
        style={{
          borderRadius: '9px',
          fontFamily: 'Pretendard-Medium',
        }}
      >
        안녕하세요! 삼육대학교 학우 여러분.
        <br /> 학우분들께서 더욱 즐겁게 2023 천보축전을 즐기실 수 있도록 <br />
        학생회와 멋쟁이사자처럼 삼육대학교가 협업해 <br />
        2023 천보축전 페이지를 개발하였습니다.
        <br />
        <br />
        2023 천보축전 페이지와 함께 축제를 즐겁게 즐기시고 <br />
        소중한 청춘의 추억을 만드시길 바랍니다. 감사합니다.
      </div>
      <AboutMe title="멋쟁이사자처럼 삼육대학교 11기" desc="멋쟁이사자처럼 삼육대학교는 \n 테크 기반의 아이디어 실현을 위한 \n 전국 최대 규모의 대학연합 IT 동아리이자 \n 삼육대학교 중앙 동아리입니다." link="" logo="images/logo.webp" />
    </div>
  );
};

export default AboutPage;
