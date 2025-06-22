import { Button } from './ui/button';
import { useGameStore } from '@/stores/useGameStore';

const StayButton = () => {
  const { gameState } = useGameStore();
  return (
    <div>
      <Button disabled={gameState !== 'in-progress'}>Stay</Button>
    </div>
  );
};

export default StayButton;
