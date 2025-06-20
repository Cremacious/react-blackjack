import { Button } from './ui/button';
import { useGameStore } from '@/stores/useGameStore';

const PlayerControls = () => {
  const { setGameState, resetGame } = useGameStore();
  const handleNewGame = () => {
    resetGame();
    setGameState('in-progress');
  };

  return (
    <div>
      Player controls
      <Button onClick={handleNewGame}>New Game</Button>
      <Button>Hit</Button>
      <Button>Stay</Button>
    </div>
  );
};

export default PlayerControls;
