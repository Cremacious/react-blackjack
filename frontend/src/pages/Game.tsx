import PlayerControls from '@/components/controls/PlayerControls';
import ScoreBoard from '@/components/ScoreBoard';
import CardHand from '@/components/table/CardHand';
import { useGameStore } from '@/stores/useGameStore';
import RestartButton from '@/components/controls/RestartButton';
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
      <RestartButton />
      <CardHand cards={dealerCards} />

      <ScoreBoard />
      <p className="bg-blue-500 text-black">Deckid: {deckId}</p>

      <CardHand cards={playerCards} />
      <PlayerControls />
    </div>
  );
};

export default Game;
