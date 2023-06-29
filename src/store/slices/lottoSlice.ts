import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type LottoState = { lotto: number[][] };

const initialState: LottoState = { lotto: [] };

export const lottoSlice = createSlice({
  name: 'lottoSlice',
  initialState,
  reducers: {
    setLotto(state, action: PayloadAction<LottoState>) {
      state.lotto = action.payload.lotto;
    },
  },
});

export const { setLotto } = lottoSlice.actions;

export default lottoSlice;
