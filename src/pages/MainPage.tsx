import React from 'react';
import IntroPage from './IntroPage';
import OutlinePage from './OutlinePage';

const MainPage = () => {
  return (
    <div className="flex flex-col justify-center max-w-[500px]">
      <IntroPage />
      <OutlinePage />
    </div>
  );
};

export default MainPage;
