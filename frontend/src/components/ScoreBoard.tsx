import { useGameStore } from '@/stores/useGameStore';

const ScoreBoard = () => {
  const { gameState, playerScore, dealerScore, playerCards, dealerCards } =
    useGameStore();

  let gameStateText = '';
  switch (gameState) {
    case 'waiting':
      gameStateText = 'Press Play To Start';
      break;
    case 'in-progress':
      gameStateText = '';
      break;
    case 'finished':
      if (playerScore === 21) {
        gameStateText = 'Blackjack! You win!';
      } else if (playerScore > 21) {
        gameStateText = 'You busted! Dealer wins.';
      } else if (dealerScore > 21) {
        gameStateText = 'Dealer busted! You win!';
      } else if (playerScore > dealerScore) {
        gameStateText = 'You win!';
      }
      break;
    default:
      gameStateText = 'Unknown state';
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center gap-8 mb-4">
        <div className="text-lg font-bold">Player Score: {playerScore}</div>
        <div className="text-lg font-bold">Dealer Score: {dealerScore}</div>
      </div>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-xl font-semibold mb-2">{gameStateText}</h2>
        <p className="text-sm text-gray-600">
          Player Cards: {playerCards.length} | Dealer Cards:{' '}
          {dealerCards.length}
        </p>
      </div>
    </div>
  );
};

export default ScoreBoard;
