import { createContext } from 'react';

const dataOfLocalstorage = JSON.parse(localStorage.getItem('users'));
const activeUser = dataOfLocalstorage.find(i => i.isLogined === true);

export const UserContext = createContext({
	userName: activeUser.name
});