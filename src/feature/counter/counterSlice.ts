/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */

import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type CounterState = {
	value: number;
};

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.value += 1;
		},
		decrement(state) {
			state.value -= 1;
		},
		reset(state) {
			return initialState;
		},
	},
});

// Action creators are generated for each case reducer function
export const {increment, decrement, reset} = counterSlice.actions;

export default counterSlice.reducer;
