import { useEffect, useState } from 'react';
import { UseLocalStorageReturns } from './interfaces';

export const useLocalStorage = (key: string): UseLocalStorageReturns => {
    const savedData = localStorage.getItem(key);
    const parsedData = savedData != null ? JSON.parse(savedData) : null;
    const [storagedValue, setStoragedValue] = useState(parsedData);

    useEffect(() => {
        if (storagedValue != null) {
            localStorage.setItem(key, JSON.stringify(storagedValue));
        }

    }, [key, storagedValue]);

    const removeFromStorage = () => localStorage.removeItem(key);

    return { storagedValue, setStoragedValue, removeFromStorage };
};
