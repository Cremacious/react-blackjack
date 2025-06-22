import { useNavigate } from 'react-router';
import { Button } from './ui/button';

const NewGameButton = () => {
  const navigate = useNavigate();

  const handleNewGame = () => {
    navigate('/game');
  };

  return (
    <div>
      <Button
        className="bg-blue-500 text-white hover:bg-blue-600"
        onClick={handleNewGame}
      >
        New Game
      </Button>
    </div>
  );
};

export default NewGameButton;
