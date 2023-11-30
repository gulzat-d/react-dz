import { FC, PropsWithChildren, ReactNode, createContext, useState } from 'react';
import { IAuthUser } from '../interfaces/user.interface';
import { valueProviderType } from '../interfaces/valueProvider.interface';

const dataOfLocalstorage: IAuthUser[] = JSON.parse(localStorage.getItem('users') || '');
const activeUser: IAuthUser | undefined = dataOfLocalstorage.find(i => i.isLogined === true);

export const UserContext = createContext({
	userName: activeUser?.name
});

export const UserContextProvider = ({ children }: any) => {

	const [userName, setUserName] = useState(activeUser?.name);
	const value = { userName, setUserName }

	return <UserContext.Provider value={value}>
		{children}
	</UserContext.Provider>
}