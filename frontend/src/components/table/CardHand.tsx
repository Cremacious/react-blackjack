import type { Card } from '@/types';

interface CardHandProps {
  cards: Card[];
}

const CardHand = ({ cards }: CardHandProps) => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <div className="grid grid-cols-3 md:grid-cols-5 justify-items-center place-content-center gap-2">
          {cards.map((card, idx) => (
            <img
              key={card.code + idx}
              src={card.image}
              alt={`${card.value} of ${card.suit}`}
              className="w-20 h-28"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardHand;
