import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FooterAnimation from './components/ui/common/FooterAnimation';
import OutlinePage from './pages/OutlinePage';
import SponPage from './pages/SponPage';
import BoothPage from './pages/BoothPage';
import GreetPage from './pages/GreetPage';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <div className="mx-auto max-w-[500px]">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/outline" element={<OutlinePage />} />
        <Route path="/spon" element={<SponPage />} />
        <Route path="/booth" element={<BoothPage />} />
        <Route path="/greet" element={<GreetPage />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>

      <FooterAnimation />
    </div>
  );
}

export default App;
