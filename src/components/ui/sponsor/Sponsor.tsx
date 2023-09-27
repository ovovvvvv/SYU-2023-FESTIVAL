import { ReactNode } from 'react';

interface SponsorProps {
  sponImg: ReactNode;
  sponTitle: string;
}

const Sponsor = ({ sponImg, sponTitle }: SponsorProps) => {
  return (
    <div className="flex justify-center text-center my-3">
      <div style={{ display: 'block' }}>
        {sponImg}
        <div
          className="text-[#fff] text-[10px] mt-2"
          style={{ fontFamily: 'Pretendard-Semibold' }}
        >
          {sponTitle}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
