import { useCallback, useState } from 'react';

import { UseModalReturns } from './interfaces';

export const useModal = (): UseModalReturns => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const openModal = useCallback(() => setIsModalOpened(true), []);
    const closeModal = useCallback(() => setIsModalOpened(false), []);

    return [isModalOpened, openModal, closeModal]
};
