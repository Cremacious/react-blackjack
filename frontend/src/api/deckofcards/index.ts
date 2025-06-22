const API_URL = 'https://deckofcardsapi.com/api/deck/';

export type Deck = {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
};

export async function fetchNewDeck(): Promise<Deck> {
  const response = await fetch(`${API_URL}/new/shuffle/?deck_count=1`);
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
}

export async function drawCards(deckId: string, count: number) {
  const response = await fetch(`${API_URL}${deckId}/draw/?count=${count}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function shuffleDeck(deckId: string): Promise<Deck> {
  const response = await fetch(`${API_URL}${deckId}/shuffle/`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  console.log(data);
  return data;
}

// auth BWti34fjnGWD9CeW3zZuAuVkEZYMMlx