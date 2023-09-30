import { forwardRef, ForwardedRef } from 'react';
import Sponsor from '../components/ui/sponsor/Sponsor';

const sponsorItem = [
  { imgSrc: '/images/sponlogo/sponsor1.webp', title: '노원문화재단' },
  { imgSrc: '/images/sponlogo/sponsor2.webp', title: '노원 문화살롱 5120' },
  { imgSrc: '/images/sponlogo/sponsor3.webp', title: '공릉동 도깨비시장' },
  {
    imgSrc: '/images/sponlogo/sponsor4.webp',
    title: '노원 청년공유센터 청년공감',
  },
  { imgSrc: '/images/sponlogo/sponsor5.webp', title: '대한민국해군' },
  { imgSrc: '/images/sponlogo/sponsor6.webp', title: '토모스포츠' },
  { imgSrc: '/images/sponlogo/sponsor7.webp', title: '샌드밀리' },
  { imgSrc: '/images/sponlogo/sponsor8.webp', title: '더리얼컴퍼니' },
  { imgSrc: '/images/sponlogo/sponsor9.webp', title: '포토에이스' },
  { imgSrc: '/images/sponlogo/sponsor10.webp', title: '밝은눈안과' },
  { imgSrc: '/images/sponlogo/sponsor11.webp', title: '시원스쿨' },
  { imgSrc: '/images/sponlogo/sponsor12.webp', title: 'eazzy(이찌)' },
  { imgSrc: '/images/sponlogo/syu1.webp', title: '삼육대학교 일자리본부' },
  { imgSrc: '/images/sponlogo/syu2.webp', title: '동아리연합회 다원' },
  { imgSrc: '/images/sponlogo/syu3.webp', title: '제63대 열림 총학생회' },
];

const SponPage = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className="flex flex-col py-[30%] ">
      <div className="flex flex-col items-center">
        <h1
          className="text-[23px] text-white underline underline-offset-8 mb-10"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          SPONSOR
        </h1>
      </div>
      <div className="grid grid-cols-3 mx-3">
        {sponsorItem.map((item, index) => (
          <Sponsor
            key={index}
            sponImg={<img src={item.imgSrc} width={110} />}
            sponTitle={item.title}
          />
        ))}
      </div>
    </div>
  );
});

export default SponPage;
