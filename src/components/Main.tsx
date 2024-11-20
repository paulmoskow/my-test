import React from 'react';
import Card from "./Card"

export default function Main({ cards }: { cards: string[]}) {
  return (    
    <main className="App-main">
      {cards.map((card, index: number) => (
        <Card
          key={index}
          text={card}
        />
      ))}
  </main>     
  )
}