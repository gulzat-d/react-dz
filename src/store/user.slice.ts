import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const USERNAME_PERSISTENT_STATE = 'users';

export interface UserState {
	userName: string | null
}

const initialState: UserState = {
	userName: null
}

// loadState(USERNAME_PERSISTENT_STATE)?.filter(i => i.isLogined === true)?.name;

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addName: (state, action: PayloadAction<string>) => {
			state.userName = action.payload;
		},
		logout: (state) => {
			state.userName = null;
		}
	}
})

export default userSlice.reducer;
export const userActions = userSlice.actions;