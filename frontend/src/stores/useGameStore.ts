import { create } from 'zustand';

interface GameState {
  deckId: string;
  gameState: 'waiting' | 'in-progress' | 'finished';
  playerCards: string[];
  dealerCards: string[];
  playerScore: number;
  dealerScore: number;
  wins: number;
  losses: number;
  setGameState: (state: 'waiting' | 'in-progress' | 'finished') => void;
  setDeckId: (deckId: string) => void;
  setPlayerCards: (cards: string[]) => void;
  setDealerCards: (cards: string[]) => void;
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
  setPlayerCards: (cards) => set({ playerCards: cards }),
  setDealerCards: (cards) => set({ dealerCards: cards }),
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
