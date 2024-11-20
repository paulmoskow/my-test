import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// set Cards properties
interface Card {
  id: number;
  text: string;
  saved: boolean;
}

interface CardsState {
  cards: Card[];
}

//set localStorage to keep cards locally
const initialState: CardsState = {
  cards: JSON.parse(localStorage.getItem('cards') || '[]'), 
};

//set reducers to handle cards
const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<string[]>) => {
      state.cards = action.payload.map((text, index) => ({
        id: index,
        text: text,
        saved: false,
      })); 
      localStorage.setItem('cards', JSON.stringify(state.cards)); 
    },
    toggleSaveCard: (state, action: PayloadAction<number>) => {
      const cardId = action.payload;
      const card = state.cards.find((card) => card.id === cardId);
      if(card) {
        card.saved = !card.saved;
        localStorage.setItem('cards', JSON.stringify(state.cards));
      }
    }
  },
});

export const { setCards, toggleSaveCard } = cardsSlice.actions;
export default cardsSlice.reducer;
