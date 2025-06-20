import { useMutation } from '@tanstack/react-query';
import { fetchNewDeck, drawCards, shuffleDeck } from '@/api/deckofcards';
import { useGameStore } from '@/stores/useGameStore';

export const useCreateDeck = () => {
  const setDeckId = useGameStore((state) => state.setDeckId);
  return useMutation({
    mutationFn: fetchNewDeck,
    onSuccess: (data) => {
      setDeckId(data.deck_id);
    },
    onError: (error) => {
      console.error('Error creating new deck:', error);
    },
  });
};
