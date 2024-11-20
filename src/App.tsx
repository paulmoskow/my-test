import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from './redux/cardsSlice';
import { RootState } from './redux/store'; 

import { api } from './utils/Api';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const cards = useSelector((state: RootState) => state.cards.cards);

  // Dispatch action to update Redux state
  const dispatch = useDispatch();

  //filter saved cards
  const savedCards = cards.filter((card) => card.saved);

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
        <Route path='/' element={
          <>
            <Header />
            <Main
              cards={cards}
            />     
          </>            
        } />
        <Route path='/products' element={
          <>
            <Header />
            {savedCards.length === 0 ? (
              <p>Add cats facts to your collection by clicking 'like' button</p>
            ) : (
              <Main
                cards={savedCards}   
              />            
            )}               
          </>            
        } />
       </Routes>

    </div>
  );
}

export default App;
