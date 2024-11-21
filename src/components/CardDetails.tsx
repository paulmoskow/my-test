import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import like from "../images/like.svg";
import trash from '../images/trash.svg';

interface Card {
  id: number;
  text: string;
  saved: boolean;
}

interface DetailsProps {
  cards: Card[]; 
  onLikeClick: (id: number, event: React.MouseEvent) => void; 
}

const CardDetails: React.FC<DetailsProps> = ({ cards, onLikeClick }) => {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>(); 
  const card = cards.find((card) => card.id === Number(id)); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  if (!card) {
    return <p>Card not found</p>;
  }

  return (
    <section className="App-card__details">
      <p className="App-card__text">{card.text}</p>
      <nav className="App-card__nav">
        <p onClick={handleGoBack}>&larr; Go back</p>
        {card.saved ? (
          <img
            src={trash}
            className="App-trash"
            alt="delete"
            onClick={(e) => onLikeClick(card.id, e)} 
          />
        ) : (
          <img
            src={like}
            className="App-like"
            alt="like"
            onClick={(e) => onLikeClick(card.id, e)} 
          />
        )}
      </nav>
    </section>
  );
};

export default CardDetails;
