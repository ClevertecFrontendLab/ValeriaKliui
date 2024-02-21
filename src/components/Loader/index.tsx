import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { FC, } from 'react';
import Lottie from 'react-lottie';
import animationData from '@constants/styles/loader.json';
import styles from './index.module.css';

export const Loader: FC = () => {
    const isSomeQueryPending = useAppSelector((state) =>
        Object.values(state).some(
            (api) =>
                api.mutations &&
                Object.values(api.mutations)[0] &&
                Object.values(api.mutations)[0].status === 'pending',
        ),
    );
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    if (isSomeQueryPending)
        return (
            <div className={styles.Loader} data-test-id='loader'>
                <Lottie options={defaultOptions} height={150} width={150} />
            </div>
        );

    return <></>;
};
