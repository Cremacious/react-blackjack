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
  setPlayerScore: (score: number) => void;
  setDealerScore: (score: number) => void;
  incrementWins: () => void;
  incrementLosses: () => void;
  resetGame: () => void;
}

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
    set((state) => ({ playerCards: [...state.playerCards, card] })),
  setDealerCards: (cards) =>
    set((state) => ({ dealerCards: [...state.dealerCards, ...cards] })),
  addDealerCard: (card) =>
    set((state) => ({ dealerCards: [...state.dealerCards, card] })),
  setPlayerScore: (score) => set({ playerScore: score }),
  setDealerScore: (score) => set({ dealerScore: score }),
  incrementWins: () => set((state) => ({ wins: state.wins + 1 })),
  incrementLosses: () => set((state) => ({ losses: state.losses + 1 })),
  resetGame: () =>
    set({
      deckId: '',
      gameState: 'waiting',
      playerCards: [],
      dealerCards: [],
      playerScore: 0,
      dealerScore: 0,
    }),
}));
