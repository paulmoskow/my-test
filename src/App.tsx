import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store'; 
import { setCards, addCard, toggleSaveCard, deleteCard } from './redux/cardsSlice';

import { api } from './utils/Api';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import CardDetails from './components/CardDetails';
import Form from './components/Form';
import NotFound from './components/NotFound';
import Footer from "./components/Footer";

function App() {
  const cards = useSelector((state: RootState) => state.cards.cards);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //filter saved cards
  const savedCards = cards.filter((card) => card.saved);
  const [preloader, setPreloader] = React.useState(false);

  //handle like click
  const handleLikeClick = (id: number) => {
    dispatch(toggleSaveCard(id));
  };

  //handle delete click
  const handleDeleteClick = (id: number) => {
    dispatch(deleteCard(id));
  };

  //handle card click
  const handleCardClick = (id: number, event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains('App-like') || target.classList.contains('App-trash')) {
      return; 
    }
    navigate(`/products/${id}`);
  };
  
  //handle form submit
  const handleFormSubmit = (data: { text: string }) => {
    const newCard = {
      id: cards.length,
      text: data.text,
      saved: true,
    };
    dispatch(addCard(newCard));
    navigate('/');
  } 

  //fetch cards data from API
  React.useEffect(() => {
    setPreloader(true);
    api.getCards()
      .then((res: { data: string[] }) => {
        dispatch(setCards(res.data));
        setPreloader(false);
      })
      .catch((err: unknown) => {
        console.log(err);
        setPreloader(false);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            {preloader ? (
              <h3 className='App-preloader'>loading...</h3>
            ):(
            <Main
              cards={cards}
              onCardClick={handleCardClick}
              onLikeClick={handleLikeClick} 
              onDeleteClick={handleDeleteClick}
            />    
            )}
            <Footer />
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
                onCardClick={handleCardClick}
                onLikeClick={handleLikeClick}
                onDeleteClick={handleDeleteClick}   
              />            
            )}      
            <Footer />         
          </>            
        } />
        <Route path='/products/:id' element={
          <>
            <Header/>
            <CardDetails
              onLikeClick={handleLikeClick}
              onDeleteClick={handleDeleteClick}              
            />
            <Footer />
          </>
        } />
        <Route path='/create-product' element={
          <>
            <Header/>
            <Form
              onSubmit={handleFormSubmit}   
            />
            <Footer />
          </>
        } />
        <Route path='/*' element={
          <>
            <NotFound/>
          </>
        } />
       </Routes>

    </div>
  );
}

export default App;
