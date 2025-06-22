import { create } from 'zustand';

interface Card {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
}

interface GameState {
  deckId: string;
  gameState: 'waiting' | 'in-progress' | 'finished';
  playerCards: Card[];
  dealerCards: Card[];
  playerScore: number;
  dealerScore: number;
  wins: number;
  losses: number;
  setGameState: (state: 'waiting' | 'in-progress' | 'finished') => void;
  setDeckId: (deckId: string) => void;
  setPlayerCards: (card: Card[]) => void;
  addPlayerCard: (card: Card) => void;
  setDealerCards: (cards: Card[]) => void;
  addDealerCard: (card: Card) => void;
  incrementWins: () => void;
  incrementLosses: () => void;
  resetGame: () => void;
}

const calcHandScore = (cards: Card[]): number => {
  let score = 0;
  let aces = 0;

  cards.forEach((card) => {
    if (['KING', 'QUEEN', 'JACK'].includes(card.value)) {
      score += 10;
    } else if (card.value === 'ACE') {
      score += 11;
      aces += 1;
    } else {
      score += parseInt(card.value, 10);
    }
  });

  while (score > 21 && aces > 0) {
    score -= 10;
    aces -= 1;
  }

  return score;
};

export const useGameStore = create<GameState>((set) => ({
  deckId: '',
  gameState: 'waiting',
  playerCards: [],
  dealerCards: [],
  playerScore: 0,
  dealerScore: 0,
  wins: 0,
  losses: 0,
  setGameState: (state) => set({ gameState: state }),
  setDeckId: (deckId) => set({ deckId }),
  setPlayerCards: (cards) =>
    set((state) => ({ playerCards: [...state.playerCards, ...cards] })),
  addPlayerCard: (card) =>
    set((state) => {
      const newPlayerCards = [...state.playerCards, card];
      const newPlayerScore = calcHandScore(newPlayerCards);
      const newGameState = newPlayerScore > 21 ? 'finished' : state.gameState;

      return {
        playerCards: newPlayerCards,
        playerScore: newPlayerScore,
        gameState: newGameState,
      };
    }),
  setDealerCards: (cards) =>
    set((state) => ({ dealerCards: [...state.dealerCards, ...cards] })),
  addDealerCard: (card) =>
    set((state) => {
      const newDealerCards = [...state.dealerCards, card];
      const newDealerScore = calcHandScore(newDealerCards);

      return {
        dealerCards: newDealerCards,
        dealerScore: newDealerScore,
      };
    }),
  incrementWins: () => set((state) => ({ wins: state.wins + 1 })),
  incrementLosses: () => set((state) => ({ losses: state.losses + 1 })),
  resetGame: () =>
    set((state) => ({
      deckId: state.deckId,
      wins: state.wins,
      losses: state.losses,
      gameState: 'waiting',
      playerCards: [],
      dealerCards: [],
      playerScore: 0,
      dealerScore: 0,
    })),
}));
