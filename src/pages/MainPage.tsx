import IntroPage from './IntroPage';
import OutlinePage from './OutlinePage';
import TimeTablePage from './TimeTablePage';

const MainPage = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <IntroPage />
      <OutlinePage />
      <TimeTablePage />
    </div>
  );
};

export default MainPage;
