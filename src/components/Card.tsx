import like from '../images/like.svg';
import likeActive from '../images/like_active.svg';
import trash from '../images/trash.svg';

type CardProps = {
  id: number;
  text: string;
  saved: boolean;
  onCardClick: (id: number, event: React.MouseEvent) => void;
  onLikeClick: (id: number) => void;
  onDeleteClick: (id: number) => void;
};

export default function Card({ id, text, saved, onCardClick, onLikeClick, onDeleteClick }: CardProps) {

  const filter = (input: string, length: number) => {
    if (input.length > length) {
      return input.substring(0, length) + '...';
    }
    return input;
  }

  const handleLikeClick = () => {
    onLikeClick(id);
  }

  const handleCardClick = (event: React.MouseEvent) => {
    onCardClick(id, event);
  }

  const handleDeleteClick = () => {
    onDeleteClick(id);
  }

  return (
    <section className="App-card" onClick={handleCardClick}>
      <p className="App-card__text">{filter(text, 100)}</p>
      <nav className="App-card__nav">
        <p className="App-card__info">more info</p>
          <img 
            src={trash} 
            className='App-trash' 
            alt='delete'
            onClick={handleDeleteClick}
          />      
          <img 
            src={saved? likeActive : like} 
            className='App-like' 
            alt='like'
            onClick={handleLikeClick}
          />          
        
      </nav>
    </section>
  )
}