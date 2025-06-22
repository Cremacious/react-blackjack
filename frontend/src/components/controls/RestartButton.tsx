import { Button } from '@/components/ui/button';
import { useShuffleDeck, useDrawCards } from '@/hooks/useGameActions';
import { useGameStore } from '@/stores/useGameStore';

const RestartButton = () => {
  const { deckId, resetGame, setGameState } = useGameStore();
  const { mutate: shuffleDeck } = useShuffleDeck();
  const { mutate: drawCards } = useDrawCards();

  const handleRestart = () => {
    if (!deckId) {
      console.error('No deck ID available for restart');
      return;
    }
    const currentDeckId = deckId;
    resetGame();
    shuffleDeck(currentDeckId, {
      onSuccess: () => {
        setGameState('in-progress');
        drawCards({
          deckId: currentDeckId,
          count: 2,
          target: 'player',
        });
        setTimeout(() => {
          drawCards({
            deckId: currentDeckId,
            count: 2,
            target: 'dealer',
          });
        }, 500);
      },
      onError: (error) => {
        console.error('Error shuffling deck:', error);
      },
    });
  };

  return (
    <div>
      <Button onClick={handleRestart} disabled={!deckId}>
        Restart
      </Button>
    </div>
  );
};

export default RestartButton;
