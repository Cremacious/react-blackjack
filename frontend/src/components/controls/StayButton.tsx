import { useDrawCards } from '@/hooks/useGameActions';
import { Button } from '@/components/ui/button';
import { useGameStore } from '@/stores/useGameStore';

const StayButton = () => {
  const { deckId, gameState, setGameState, incrementWins, incrementLosses } =
    useGameStore();
  const { mutate: drawCard } = useDrawCards();

  const handleStay = () => {
    if (gameState !== 'in-progress' || !deckId) return;
    playDealerTurn();
  };

  const playDealerTurn = () => {
    const currentDealerScore = useGameStore.getState().dealerScore;
    if (currentDealerScore >= 17) {
      endGame();
      return;
    }
    drawCard(
      { deckId, count: 1, target: 'dealer' },
      {
        onSuccess: () => {
          setTimeout(() => {
            playDealerTurn();
          }, 1000);
        },
      }
    );
  };

  const endGame = () => {
    const { dealerScore: finalDealer, playerScore: finalPlayer } =
      useGameStore.getState();
    setGameState('finished');
    if (finalDealer > 21) {
      incrementWins();
    } else if (finalPlayer > finalDealer) {
      incrementWins();
    } else if (finalDealer > finalPlayer) {
      incrementLosses();
    } else {
      incrementLosses();
    }
  };

  return (
    <div>
      <Button onClick={handleStay} disabled={gameState !== 'in-progress'}>
        Stay
      </Button>
    </div>
  );
};

export default StayButton;
