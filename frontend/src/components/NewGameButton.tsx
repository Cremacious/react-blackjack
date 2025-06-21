import { useCreateDeck } from '@/hooks/useGameActions';
import { useGameStore } from '@/stores/useGameStore';
import { Button } from './ui/button';

const NewGameButton = () => {
  const { resetGame } = useGameStore();
  const { mutate: createNewDeck } = useCreateDeck();

  const handleNewGame = () => {
    resetGame();
    createNewDeck();
  };

  return (
    <div>
      <Button
        className="bg-blue-500 text-white hover:bg-blue-600"
        onClick={handleNewGame}
      >
        New Game
      </Button>
      <p className="text-sm text-gray-500 mt-2">
        Click to start a new game with a fresh deck.
      </p>
    </div>
  );
};

export default NewGameButton;
