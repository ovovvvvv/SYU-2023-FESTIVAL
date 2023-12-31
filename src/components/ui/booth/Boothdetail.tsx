import { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const BoothBox = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative flex flex-col items-center pb-20">
      <h1
        className="text-[23px] text-white underline underline-offset-8 mb-6"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        BOOTH
      </h1>

      <p
        className="text-[#fff] text-[12px]"
        style={{ fontFamily: 'Pretendard-medium' }}
      >
        성공적인 2023 천보축전을 위해
      </p>
      <p
        className="text-[#fff] text-[12px]"
        style={{ fontFamily: 'Pretendard-bold' }}
      >
        24개의 교외 부스와 교내 부스가 함께합니다.
      </p>
      <div className="flex flex-col justify-center items-center py-7 mb-20">
        <div
          className="flex flex-col py-10 text-[#fff] text-start text-[15px] border-[1px] border-[#eeeeee] w-[320px] backdrop-blur-[75px] bg-gradient-to-br from-[#373737] via-transparent to-[#060606] whitespace-nowrap"
          style={{
            borderRadius: '9px',
          }}
        >
          <div
            className="flex flex-row justify-center text-[12px] text-center"
            style={{ fontFamily: 'Pretendard-semibold' }}
          >
            <div className="flex flex-col flex-grow space-y-2">
              <p>푸드트럭 9개 : 더리얼키친</p>
              <p>노원 문화살롱5120</p>
              <p>노원 청년공유센터 청년공감</p>
              <p>노원구 청년일자리센터 청년내일</p>
              <p>서울 청년센터 노원 오랑</p>
              <p>노원문화재단</p>
              <p>대한민국 해군</p>
              <p>공릉 도깨비 시장</p>
              <p>샌드밀리</p>
              <p>이찌</p>
              <p>시원스쿨</p>
              <p>밝은눈안과</p>
            </div>
            <div className="flex flex-col flex-grow space-y-2">
              <p>일자리본부 이벤트부스</p>
              <p>일자리본부 직무부스</p>
              <p>일자리본부 홍보부스</p>
              <p>동아리 연합회 부스</p>
              <p>사랑이흐르는 콩(닥)콩(닥)다방</p>
              <p>서울 동행</p>
              <p>나브르 스튜디오</p>
              <p>보건관리학과 학회</p>
              <p>상담심리학과 동아리 '또치'</p>
              <p>포토에이스</p>
              <p>삼육랜드</p>
              <p>CGV 구리갈매점</p>
            </div>
          </div>
        </div>
      </div>

      {/* SPECIAL ZONE */}
      <h1
        className="text-[23px] text-white underline underline-offset-8 mb-6"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        SPECIAL ZONE
      </h1>

      <div className="flex flex-col items-center text-[#fff] my-4 text-center ">
        <p
          className="flex flex-col justify-center py-1 text-[#fff] text-[15px] border-[1px] border-[#eeeeee] w-[350px] backdrop-blur-[2px] bg-white/10 whitespace-nowrap"
          style={{
            borderRadius: '34.5px',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          BUSKING & PICNIC & ATTRACTION ZONE
        </p>

        <img src="/images/map3.webp" width={250} className="my-4" />
        <p className="text-[13px]">
          버스킹존, 피크닉존, 어트랙션존은 에스라관 옆 잔디밭입니다.
        </p>
      </div>
      <div className="flex flex-col items-center text-[#fff] my-4 text-center">
        <p
          className="flex flex-col justify-center py-1 text-[#fff] text-[15px] border-[1px] border-[#eeeeee] w-[150px] backdrop-blur-[2px] bg-white/10 whitespace-nowrap"
          style={{
            borderRadius: '34.5px',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          EATING ZONE
        </p>

        <img src="images/map4.webp" width={250} className=" my-4" />
        <p className="text-[13px]">취식존은 다니엘관 앞 광장입니다.</p>
      </div>

      <div
        className="flex flex-row items-center text-[#fff] text-[12px]
         underline underline-offset-2 my-4 cursor-pointer"
        style={{ fontFamily: 'Pretendard-Semibold' }}
        onClick={handlePopup}
      >
        <BsFillPlayFill className="mr-auto" />
        SPECIAL ZONE 유의사항 및 이용방법 보러가기
      </div>

      {/* 팝업 모달 */}
      {isPopupOpen && (
        <div className="absolute top-1/2   ">
          <img src="/images/popup.webp" alt="팝업 이미지" width={300} />
          <div
            className="absolute top-0 right-0 mx-2 my-2"
            onClick={handlePopup}
          >
            <AiOutlineClose />
          </div>
        </div>
      )}
    </div>
  );
};

export default BoothBox;
