export const INITIAL_STATE = {
	values: {
		name: '',
		isLogined: ''
	}, 
	isValid: {
		name: true
	}
};

export function authorizationReducer(state, action) {
	switch (action.type) {
	// case 'SET_VALUE':
	// 	return {...state, values: {...state.values, ...action.payload}};
	case 'CLEAR':
		return {...state, values: INITIAL_STATE.values};
	case 'SUBMIT': {
		return {
			...state
		};
	}
	}
}
 