import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className="text-blue-500">
      Homepage
      <Link to="/game">
        <Button>Play</Button>
      </Link>
    </div>
  );
};

export default HomePage;
