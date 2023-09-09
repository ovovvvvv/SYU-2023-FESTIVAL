import { useState } from 'react';
import Layout from './components/ui/Layout';
import IntroPage from './pages/IntroPage';

function App() {
  return (
    <div className="flex justify-center w-screen h-screen">
      <IntroPage />
    </div>
  );
}

export default App;
