import { useRef } from 'react';
import IntroPage from './IntroPage';
import OutlinePage from './OutlinePage';
import TimeTablePage from './TimeTablePage';
import ScrollHeader from '../components/ui/common/ScrollHeader';
import LineupPage from './LineupPage';

const MainPage = () => {
  const outlineRef = useRef<HTMLDivElement | null>(null);
  const timetableRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="">
      <IntroPage />
      <ScrollHeader outlineRef={outlineRef} timetableRef={timetableRef} />
      <OutlinePage ref={outlineRef} />
      <TimeTablePage ref={timetableRef} />
      <LineupPage />
    </div>
  );
};

export default MainPage;
