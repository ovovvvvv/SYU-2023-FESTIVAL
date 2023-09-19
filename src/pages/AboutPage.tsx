const AboutPage = () => {
  return (
    <div className="flex flex-col text-center items-center text-[#fff] py-20">
      <h1>LIKELION AT SYU</h1>
      <p>멋쟁이사자처럼 삼육대학교</p>
      <p>삼육대학교 제63대 총학생회 '열림'</p>

      <div
        className="flex flex-col justify-center py-4 text-[#fff] text-[12px] border-[1px] border-[#eeeeee] w-[300px] my-4 backdrop-blur-[2px] bg-white/10 whitespace-nowrap"
        style={{
          borderRadius: '9px',
          fontFamily: 'Montserrat, sans-serif',
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
    </div>
  );
};

export default AboutPage;
