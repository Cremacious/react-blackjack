import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/Home';
import Game from './pages/Game';
import Layout from './Layout';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
