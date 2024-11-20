import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { api } from './utils/Api';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  //setting state for initial cards
  const [cards, setCards] = React.useState<string[]>([]);

  React.useEffect(() => {
    api.getCards()
      .then((res: { data: string[]}) => {
        setCards(res.data);
      })
      .catch((err: unknown) => {
        console.log(err);
      });
  }, []);

  console.log(cards);

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
       </Routes>

    </div>
  );
}

export default App;
