import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameItem {
  playGame: 1;
  deviation: 0;
  include: [];
  exclude: [];
}
export interface GameState {
  game: GameItem;
}

const initialState: GameState = {
  game: { playGame: 1, deviation: 0, include: [], exclude: [] },
};

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setGame(state, action: PayloadAction<GameItem>) {
      state.game = action.payload;
    },
  },
});

export const { setGame } = gameSlice.actions;

export default gameSlice;
