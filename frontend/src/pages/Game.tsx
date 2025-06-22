import CardHand from '@/components/CardHand';
import PlayerControls from '@/components/PlayerControls';
import { useGameStore } from '@/stores/useGameStore';

const Game = () => {
  const { playerScore, deckId, playerCards, dealerScore, dealerCards } = useGameStore();

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
      Game
      <p className="bg-green-500 text-black">DealerScore:{dealerScore}</p>
      <p className="bg-green-500 text-black">PlayerScore:{playerScore}</p>
      <p className="bg-blue-500 text-black">Deckid: {deckId}</p>
      <CardHand />
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
