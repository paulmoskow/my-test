import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store'; 
import { setCards, toggleSaveCard } from './redux/cardsSlice';

import { api } from './utils/Api';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import CardDetails from './components/CardDetails';

function App() {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //filter saved cards
  const savedCards = cards.filter((card) => card.saved);

  //handle like click
  const handleLikeClick = (id: number) => {
    dispatch(toggleSaveCard(id));
  };

  //handle card click
  const handleCardClick = (id: number, event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('App-like') || target.classList.contains('App-trash')) {
      return; 
    }
    navigate(`/my-test/products/${id}`);
  };
  
  //fetch cards data from API
  React.useEffect(() => {
    api.getCards()
      .then((res: { data: string[] }) => {
        dispatch(setCards(res.data));
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/my-test' element={
          <>
            <Header />
            <Main
              cards={cards}
              onCardClick={handleCardClick}
              onLikeClick={handleLikeClick} 
            />     
          </>            
        } />
        <Route path='/my-test/products' element={
          <>
            <Header />
            {savedCards.length === 0 ? (
              <p>Add cats facts to your collection by clicking 'like' button</p>
            ) : (
              <Main
                cards={savedCards}
                onCardClick={handleCardClick}
                onLikeClick={handleLikeClick}   
              />            
            )}               
          </>            
        } />
        <Route path='my-test/products/:id' element={
          <>
            <Header/>
            <CardDetails
              onLikeClick={handleLikeClick}              
            />
          </>
        } />
       </Routes>

    </div>
  );
}

export default App;
