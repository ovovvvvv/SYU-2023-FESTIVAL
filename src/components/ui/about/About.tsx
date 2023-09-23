import { ReactNode } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

interface AboutProps {
  title: string;
  desc: ReactNode;
  link: ReactNode;
  logo: ReactNode;
  positionLogoLeft?: boolean;
}

const About = ({ title, desc, link, logo, positionLogoLeft }: AboutProps) => {
  return (
    <div className="my-4">
      <div
        className={`flex flex-row space-x-5 items-center ${
          positionLogoLeft ? '' : 'flex-row-reverse'
        }`}
      >
        <div className="mx-4">{logo}</div>
        <div className="flex flex-col ">
          <div
            className="text-[17px] underline underline-offset-8 my-4"
            style={{ fontFamily: 'Pretdendard-Semibold' }}
          >
            {title}
          </div>
          <div
            className="flex flex-col text-start text-[12px] "
            style={{ fontFamily: 'Pretendard-Regular' }}
          >
            {desc}
          </div>
          <div className="flex flex-row items-center justify-center bg-[#fff] text-black w-[160px] text-[12px] rounded-[19px] py-1 my-4 underline underline-offset-2">
            {link}
            <AiOutlineArrowRight className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
