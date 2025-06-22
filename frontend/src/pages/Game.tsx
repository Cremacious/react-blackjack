// import CardHand from '@/components/CardHand';
import PlayerControls from '@/components/controls/PlayerControls';
import ScoreBoard from '@/components/ScoreBoard';
import { useGameStore } from '@/stores/useGameStore';
import { Link } from 'react-router';

const Game = () => {
  const { deckId, playerCards, dealerCards } = useGameStore();

  if (!deckId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg">
            <Link to={'/'}>You have no running game. Start a new one</Link>{' '}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {dealerCards.length > 0 && (
        <div className="flex flex-col items-center mb-4">
          {dealerCards.map((card: any, index: number) => (
            <div
              key={card.code + index}
              className="bg-white border border-gray-300 rounded p-2 mb-2"
            >
              <img
                src={card.image}
                alt={`${card.value} of ${card.suit}`}
                className="w-20 h-28"
              />
              <p className="text-xs text-center mt-1">{card.code}</p>
            </div>
          ))}
        </div>
      )}
      <ScoreBoard />
      <p className="bg-blue-500 text-black">Deckid: {deckId}</p>

      <PlayerControls />
      {playerCards.length > 0 ? (
        playerCards.map((card: any, index: number) => (
          <div
            key={card.code + index}
            className="bg-white border border-gray-300 rounded p-2"
          >
            <img
              src={card.image}
              alt={`${card.value} of ${card.suit}`}
              className="w-20 h-28"
            />
            <p className="text-xs text-center mt-1">{card.code}</p>
          </div>
        ))
      ) : (
        <div>Nothing</div>
      )}
    </div>
  );
};

export default Game;
