import IntroPage from './IntroPage';
import OutlinePage from './OutlinePage';
import TimeTablePage from './TimeTablePage';
import ScrollHeader from '../components/ui/common/ScrollHeader';

const MainPage = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <IntroPage />
      <ScrollHeader />
      <OutlinePage />
      <TimeTablePage />
    </div>
  );
};

export default MainPage;
