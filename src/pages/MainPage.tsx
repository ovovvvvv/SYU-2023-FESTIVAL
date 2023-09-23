import { useRef } from 'react';
import IntroPage from './IntroPage';
import OutlinePage from './OutlinePage';
import TimeTablePage from './TimeTablePage';
import ScrollHeader from '../components/ui/common/ScrollHeader';
import LineupPage from './LineupPage';
import './MainPage.css';
import SponPage from './SponPage';
import BoothPage from './BoothPage';
import VideoPage from './VideoPage';
import AboutPage from './AboutPage';
import FooterAnimation from '../components/ui/common/FooterAnimation';

const MainPage = () => {
  const outlineRef = useRef<HTMLDivElement | null>(null);
  const timetableRef = useRef<HTMLDivElement | null>(null);
  const sponserRef = useRef<HTMLDivElement | null>(null);
  const boothRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <IntroPage />
      <ScrollHeader
        outlineRef={outlineRef}
        timetableRef={timetableRef}
        sponserRef={sponserRef}
        boothRef={boothRef}
        videoRef={videoRef}
        aboutRef={aboutRef}
      />
      <div className="bg-gradient">
        <OutlinePage ref={outlineRef} />
        <TimeTablePage ref={timetableRef} />
        <LineupPage />
        <SponPage ref={sponserRef} />
        <BoothPage ref={boothRef} />
        <VideoPage ref={videoRef} />
        <AboutPage ref={aboutRef} />
        <FooterAnimation />
      </div>
    </div>
  );
};

export default MainPage;
