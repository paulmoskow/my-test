import React from 'react';

export default function Card({ text }: { text: string }) {

  const filter = (input: string, length: number) => {
    if (input.length > length) {
      return input.substring(0, length) + '...';
    }
    return input;
  }

  return (
    <section className="App-card">
      <p className="App-card__text">{filter(text, 100)}</p>
      <nav className="App-card__nav">
        <p>more info</p>
        <p>like</p>
        <p>del</p>
      </nav>
    </section>
  )
}