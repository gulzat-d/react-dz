import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const USERNAME_PERSISTENT_STATE = 'users';

export interface User {
	name: string | null;
	isLogined: boolean;
}

export interface UserState {
	userList: User[];
}

const initialState: UserState = loadState<UserState>(USERNAME_PERSISTENT_STATE) ?? {
	userList: []
}
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addName: (state, action: PayloadAction<string>) => {
			const existed = state.find(i => i.name === action.payload);
			if (!existed) {
				state.map(i => i.isLogined=false);
				state.push({ name: action.payload, isLogined: true });
				return;
			}
			state.map(i => {
				if (i.name === action.payload) {
					i.isLogined=true;
				} else {
					i.isLogined=false;
				}
				return i;
			});
		},
		logout: (state) => {
			state.map(i => {
				i.isLogined = false;
				return i;
			})
		}
	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;