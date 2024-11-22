import Card from "./Card"

type MainProps = {
  cards: { id: number; text: string; saved: boolean }[];
  onCardClick: (id: number, event: React.MouseEvent) => void;
  onLikeClick: (id: number) => void;
  onDeleteClick: (id: number) => void;
};

export default function Main({ cards, onCardClick, onLikeClick, onDeleteClick }: MainProps) {

  return (    
    <main className="App-main">
      {cards.map((card) => (
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