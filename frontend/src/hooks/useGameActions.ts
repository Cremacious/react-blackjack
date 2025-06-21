import { drawCards, fetchNewDeck } from '@/api/deckofcards';
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
      console.log('Cards drawn:', data.cards);
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
