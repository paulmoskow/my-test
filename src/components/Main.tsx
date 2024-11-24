import React from "react";
import Card from "./Card"

type MainProps = {
  cards: { id: number; text: string; saved: boolean }[];
  onCardClick: (id: number, event: React.MouseEvent) => void;
  onLikeClick: (id: number) => void;
  onDeleteClick: (id: number) => void;
};

export default function Main({ cards, onCardClick, onLikeClick, onDeleteClick }: MainProps) {
  const [shortCards, setLongCards] = React.useState<MainProps['cards'] | null>(null)

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongCards(event.target.checked? cards.filter((card) => card.text.length < 100) : null);
  };

  const cardsToRender = shortCards || cards;

  return (    
    <main className="App-main">
      <section>
        <input
          type="checkbox"
          onChange={handleCheckbox}
        />     
        <label className="App-card__text">only short facts</label>
      </section>

      {cardsToRender.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
          saved={card.saved}
          onCardClick={onCardClick}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
        />
      ))}
  </main>     
  )
}