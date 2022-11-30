import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameItem {
  playGame: number;
  deviation: number;
  include: number[];
  exclude: number[];
  consecution: string;

  max: number;
  min: number;
}
export interface GameState {
  game: GameItem;
}

const initialState: GameState = {
  game: { playGame: 1, deviation: 0, include: [], exclude: [], consecution: 'any', max: 170, min: 160 },
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
