import NewGameButton from '@/components/NewGameButton';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className="text-blue-500">
      Homepage
      <Link to="/game">
        <NewGameButton />
      </Link>
    </div>
  );
};

export default HomePage;
