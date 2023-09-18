import { useRef } from 'react';
import IntroPage from './IntroPage';
import OutlinePage from './OutlinePage';
import TimeTablePage from './TimeTablePage';
import ScrollHeader from '../components/ui/common/ScrollHeader';
import LineupPage from './LineupPage';
import './MainPage.css';

const MainPage = () => {
  const outlineRef = useRef<HTMLDivElement | null>(null);
  const timetableRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <IntroPage />
      <ScrollHeader outlineRef={outlineRef} timetableRef={timetableRef} />
      <OutlinePage ref={outlineRef} />
      <div className="bg-gradient">
        <TimeTablePage ref={timetableRef} />
        <LineupPage />
      </div>
    </div>
  );
};

export default MainPage;
