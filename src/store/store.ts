import { configureStore } from '@reduxjs/toolkit';
import userSlice, { USERNAME_PERSISTENT_STATE } from './user.slice';
import { saveState } from './storage';
import favoritesSlice, { FAVORITES_PERSISTENT_STATE } from './favorites.slice';

export const store = configureStore({
	reducer: {
		user: userSlice,
		favorites: favoritesSlice
	}
})

store.subscribe(()=>{
	saveState(store.getState().user, USERNAME_PERSISTENT_STATE);
	saveState(store.getState().favorites, FAVORITES_PERSISTENT_STATE);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;