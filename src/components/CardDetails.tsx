import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import like from "../images/like.svg";
import trash from '../images/trash.svg';

interface Card {
  id: number;
  text: string;
  saved: boolean;
}

interface CardDetailsProps {
  onLikeClick: (id: number) => void; 
}

const CardDetails: React.FC<CardDetailsProps> = ({ onLikeClick }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const card = useSelector((state: RootState) => 
    state.cards.cards.find((card) => card.id === Number(id))
  ) as Card | undefined;

  const handleGoBack = () => {
    navigate(-1); 
  };

  const handleLikeClick = (id: number, event: React.MouseEvent) => {
    event.stopPropagation(); 
    onLikeClick(id);  
  };

  if (!card) {
    return <p>Card not found</p>;
  }

  return (
    <section className="App-card__details">
      <p className="App-details__text">{card.text}</p>
      <nav className="App-card__nav">
        <p onClick={handleGoBack} className='App-link'>&larr; Go back</p>
        {card.saved ? (
          <img
            src={trash}
            className="App-trash"
            alt="delete"
            onClick={(e) => handleLikeClick(card.id, e)} 
          />
        ) : (
          <img
            src={like}
            className="App-like"
            alt="like"
            onClick={(e) => handleLikeClick(card.id, e)} 
          />
        )}
      </nav>
    </section>
  );
};

export default CardDetails;
