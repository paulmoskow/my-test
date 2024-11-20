import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSaveCard } from '../redux/cardsSlice';
import { RootState } from '../redux/store';

import like from '../images/like.svg';
import likeActive from '../images/like_active.svg';

export default function Card({ id, text }: { id: number, text: string }) {
  const dispatch = useDispatch();

  const isSaved = useSelector((state: RootState) => 
    state.cards.cards.find((card) => card.id === id)?.saved
  );

  const filter = (input: string, length: number) => {
    if (input.length > length) {
      return input.substring(0, length) + '...';
    }
    return input;
  }

  const handleLikeClick = () => {
    dispatch(toggleSaveCard(id));
  }

  return (
    <section className="App-card">
      <p className="App-card__text">{filter(text, 100)}</p>
      <nav className="App-card__nav">
        <p>more info</p>
        <img 
          src={isSaved? likeActive : like} 
          className='App-like' 
          alt='like'
          onClick={handleLikeClick}
        />
      </nav>
    </section>
  )
}