import { useCreateDeck } from '@/hooks/useGameActions';
import { useGameStore } from '@/stores/useGameStore';
import { useNavigate } from 'react-router';
import { Button } from './ui/button';

const NewGameButton = () => {
  const navigate = useNavigate();
  const { resetGame } = useGameStore();
  const { mutate: createNewDeck, isPending } = useCreateDeck();

  const handleNewGame = () => {
    resetGame();
    navigate('/game');
    createNewDeck(undefined, {
      onSuccess: () => {
        navigate('/game');
      },
      onError: (error) => {
        console.error('Error creating new deck:', error);
      },
    });
  };

  return (
    <div>
      <Button
        className="bg-blue-500 text-white hover:bg-blue-600"
        onClick={handleNewGame}
        disabled={isPending}
      >
        {isPending ? 'Creating Deck...' : 'New Game'}
      </Button>
    </div>
  );
};

export default NewGameButton;
