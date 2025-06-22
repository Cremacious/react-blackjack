import { Button } from '@/components/ui/button';
import { useDrawCards } from '@/hooks/useGameActions';
import { useGameStore } from '@/stores/useGameStore';

const HitButton = () => {
  const { deckId, gameState } = useGameStore();
  const { mutate: drawCard, isPending } = useDrawCards();

  const handleHit = () => {
    if (deckId && gameState === 'in-progress') {
      drawCard({ deckId, count: 1, target: 'player' });
    }
  };

  // TODO: Bug, game doesn't end when drawing 21.

  return (
    <div>
      <Button
        onClick={handleHit}
        disabled={!deckId || gameState !== 'in-progress' || isPending}
      >
        {isPending ? 'Drawing...' : 'Hit'}
      </Button>
    </div>
  );
};

export default HitButton;
