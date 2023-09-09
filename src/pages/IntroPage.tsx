import React from 'react';
import Layout from '../components/ui/Layout';
import './IntroPage.css';
import FooterAnimation from '../components/ui/FooterAnimation';
import { useMediaQuery } from 'react-responsive';

const IntroPage = () => {
  return (
    <Layout>
      <div className="bg-1ptitle3 relative flex flex-col justify-center items-center">
        {/* 상, 하단 애니메이션 텍스트 */}
        <h1 className="absolute top-1 text-4xl mt-1 text-white whitespace-nowrap">
          SAHMYOOK UNIVERSITY
        </h1>
        <h1 className="absolute bottom-8 text-4xl text-white whitespace-nowrap">
          SYU FESTIVAL
        </h1>

        {/* 꽃 애니메이션 */}
        <div>
          <img
            src="images/leftflower.png"
            width={80}
            className="absolute left-[2%] top-[15%]"
          />
          <img
            src="images/rightflower.png"
            width={100}
            className="absolute right-2 bottom-[27%]"
          />
        </div>

        <FooterAnimation />
      </div>
    </Layout>
  );
};

export default IntroPage;
