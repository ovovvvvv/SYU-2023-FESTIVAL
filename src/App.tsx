import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="mx-auto max-w-[500px]">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
