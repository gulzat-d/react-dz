import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const FAVORITES_PERSISTENT_STATE = 'favorites';

export interface Movie {
	id: string;
	title?:string;
	imageUrl?: string;
	year?: number;
}

export interface FavoritesState {
	favorites: [{
		nameUser: string | null;
		movies: Movie[] | [];
	}]
}

const initialState: FavoritesState = loadState<FavoritesState>(FAVORITES_PERSISTENT_STATE) ?? {
	favorites: [{
		nameUser: null,
		movies: []
	}]
}

interface action {
	username: string;
	id: string | number;
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<action>) => {
			const index = state.findIndex(i => i.nameUser == action.payload.username);
			// console.log(`1${index}`);
			if (index < 0) {
				state.push(
					{
						'nameUser': action.payload.username,
						'movies': [action.payload.id]
					}
					)
			} else {
				const existed = state[index].movies.find(i => i === action.payload.id);
				if (!existed) {
					state[index].movies.push(action.payload.id);
					return;
				}
				state[index].movies = state[index].movies.filter(m => m !== action.payload.id);
			}

		},
		changeUser: (state, action: PayloadAction<string>) => {
			state.nameUser = action.payload.username;
		}
	}
});

export default favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;