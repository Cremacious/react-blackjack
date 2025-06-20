import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/Home';
import Game from './pages/Game';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
