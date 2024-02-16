import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string) => {
    const savedData = localStorage.getItem(key);
    const parsedData = savedData != null ? JSON.parse(savedData) : null;
    const [storagedValue, setStoragedValue] = useState(parsedData);

    useEffect(() => {
        if (storagedValue != null) {
            localStorage.setItem(key, JSON.stringify(storagedValue));
        }

        // if (storagedValue == null && savedData) {
        //     localStorage.removeItem(key);
        // }
    }, [key, storagedValue]);

    const removeFromStorage = () => localStorage.removeItem(key);

    return { storagedValue, setStoragedValue, removeFromStorage };
};
