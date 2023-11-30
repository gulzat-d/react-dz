import { useEffect } from 'react';
import { useState } from 'react';
import { IAuthUser } from '../interfaces/user.interface';

export function useLocalStorage(key: string) {

	const [data, setData] = useState<IAuthUser[]>([]);

	useEffect(() => {
		const res  = JSON.parse(localStorage.getItem(key) || '') as IAuthUser[];
		if (res) {
			setData(res);
		}
	}, []);

	const saveData = (newData: IAuthUser[]) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData] as const;
}
