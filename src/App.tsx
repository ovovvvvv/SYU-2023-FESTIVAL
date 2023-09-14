import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import FooterAnimation from './components/ui/common/FooterAnimation';

import ScrollHeader from './components/ui/common/ScrollHeader';

function App() {
  return (
    <div className="mx-auto max-w-[500px]">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>

      <FooterAnimation />
    </div>
  );
}

export default App;
