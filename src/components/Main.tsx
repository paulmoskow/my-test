import React from 'react';
import Card from "./Card"

interface Card {
  id: number;
  text: string;
  saved: boolean;
}

export default function Main({ cards }: { cards: Card[]}) {
  return (    
    <main className="App-main">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          text={card.text}
        />
      ))}
  </main>     
  )
}