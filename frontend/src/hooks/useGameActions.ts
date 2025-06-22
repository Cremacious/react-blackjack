import { drawCards, fetchNewDeck, shuffleDeck } from '@/api/deckofcards';
import { useGameStore } from '@/stores/useGameStore';
import { useMutation } from '@tanstack/react-query';

export const useCreateDeck = () => {
  const { setDeckId, setGameState } = useGameStore();
  const drawCardsMutation = useDrawCards();
  return useMutation({
    mutationFn: fetchNewDeck,
    onSuccess: (data) => {
      setDeckId(data.deck_id);
      setGameState('in-progress');
      drawCardsMutation.mutate({
        deckId: data.deck_id,
        count: 2,
        target: 'player',
      });
      drawCardsMutation.mutate({
        deckId: data.deck_id,
        count: 2,
        target: 'dealer',
      });
    },
    onError: (error) => {
      console.error('Error creating new deck:', error);
    },
  });
};

export const useDrawCards = () => {
  const addPlayerCard = useGameStore((state) => state.addPlayerCard);
  const addDealerCard = useGameStore((state) => state.addDealerCard);

  return useMutation({
    mutationFn: ({
      deckId,
      count,
    }: {
      deckId: string;
      count: number;
      target: 'player' | 'dealer';
    }) => drawCards(deckId, count),
    onSuccess: (data, variables) => {
      data.cards.forEach((card: any) => {
        if (variables.target === 'player') {
          addPlayerCard(card);
        } else {
          addDealerCard(card);
        }
      });
    },
    onError: (error) => {
      console.error('Error drawing cards:', error);
    },
  });
};

export const useShuffleDeck = () => {
  return useMutation({
    mutationFn: (deckId: string) => shuffleDeck(deckId),
    onError: (error) => {
      console.error('Error shuffling deck:', error);
    },
  });
};

// export const useDealerTurn = () => {
//   const { deckId, dealerScore, incrementWins, incrementLosses, setGameState } =
//     useGameStore();
//   const { mutate: drawCard } = useDrawCards();
//   const playDealerTurn = () => {
//     if (dealerScore >= 17) {
//       console.log('Dealer stands at', dealerScore);
//       endGame();
//       return;
//     }
//     drawCard(
//       {
//         deckId,
//         count: 1,
//         target: 'dealer',
//       },
//       {
//         onSuccess: () => {
//           setTimeout(() => {
//             playDealerTurn();
//           }, 1000);
//         },
//         onError: (error) => {
//           console.error('Error drawing dealer card:', error);
//         },
//       }
//     );
//   };
//   const endGame = () => {
//     const state = useGameStore.getState();
//     const finalDealerScore = state.dealerScore;
//     const finalPlayerScore = state.playerScore;

//     console.log(
//       'Game ending - Player:',
//       finalPlayerScore,
//       'Dealer:',
//       finalDealerScore
//     );

//     setGameState('finished');

//     // Determine winner
//     if (finalDealerScore > 21) {
//       incrementWins(); // Dealer busted
//       console.log('Dealer busted!');
//     } else if (finalPlayerScore > finalDealerScore) {
//       incrementWins(); // Player wins
//       console.log('Player wins!');
//     } else if (finalDealerScore > finalPlayerScore) {
//       incrementLosses(); // Dealer wins
//       console.log('Dealer wins!');
//     } else {
//       console.log('Tie game!');
//     }
//   };

//   return playDealerTurn; // Return the function
// };
