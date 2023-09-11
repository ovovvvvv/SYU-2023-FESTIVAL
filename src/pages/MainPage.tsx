import IntroPage from './IntroPage';
import OutlinePage from './OutlinePage';

const MainPage = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <IntroPage />
      <OutlinePage />
    </div>
  );
};

export default MainPage;
