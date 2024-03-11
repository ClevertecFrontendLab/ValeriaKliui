import { ExerciseDrawer } from '@components/ExerciseDrawer';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { useCalendar } from '@hooks/useCalendar';
import { useModal } from '@hooks/useModal';
import { useTrainings } from '@hooks/useTrainings';
import {
    useGetTrainingsQuery,
    useLazyGetTrainingsListQuery,
    usePostTrainingMutation,
} from '@redux/services/trainingsApi';
import { TRAINING_TYPE } from '@redux/slices/interfaces';
import { chooseTrainingType } from '@redux/slices/trainingsSlice';
import { getDateFromString } from '@utils/getDate';
import { Button, Calendar, Col, Form, Input, Row, Select, Space, Typography } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import moment from 'moment';
import { FC, useEffect, useState } from 'react';

const { Text } = Typography;

export const CalendarPage: FC = () => {
    const dispatch = useAppDispatch();
    const {
        isTrainingListLoaded,
        isTrainingListError,
        isErrorModalOpened,
        closeModal,
        getTrainingList,
        onDaySelect,
        isDayModalOpened,
        closeDayModal,
        selectedTrainingDate,
        isCreationModalOpened,
        addNewTraining,
        closeNewTrainingModal,
        trainingOptions,
    } = useCalendar();

    const trainingDate = getDateFromString(selectedTrainingDate);

    const [isExerciseDrawerOpened, setIsExerciseDrawerOpened] = useState(false);
    const [postTraining] = usePostTrainingMutation();

    const showDrawer = () => {
        setIsExerciseDrawerOpened(true);
    };

    const onClose = () => {
        setIsExerciseDrawerOpened(false);
        postTraining({
            name: 'Ноги',
            date: '2024-03-11T13:39:07.051Z',
            exercises: [
                {
                    name: 'LEGS',
                    replays: 0,
                    weight: 0,
                    approaches: 0,
                    isImplementation: false,
                },
            ],
        });
    };

    const onChangeTrainingType = (trainingValue: string) => {
        const trainingKey = trainingValue.toUpperCase() as TRAINING_TYPE;
        dispatch(chooseTrainingType(trainingKey));
    };

    return (
        <>
            {isTrainingListLoaded && <Calendar onSelect={onDaySelect} />}
            {isTrainingListError && (
                <Modal
                    open={isErrorModalOpened}
                    onCancel={closeModal}
                    onOk={() => getTrainingList({})}
                />
            )}
            <Modal
                open={isDayModalOpened}
                onCancel={closeDayModal}
                onOk={closeDayModal}
                footer={[
                    <Button type='primary' onClick={addNewTraining}>
                        Создать тренировку
                    </Button>,
                ]}
            >
                <Text> Тренировки на {trainingDate}</Text>
                <Text> Нет активных тренировок</Text>
            </Modal>
            <Modal
                open={isCreationModalOpened}
                onCancel={closeNewTrainingModal}
                footer={[
                    <>
                        <Button type='primary' onClick={showDrawer}>
                            Добавить упражнение
                        </Button>
                        <Button type='primary' disabled>
                            Сохранить
                        </Button>
                    </>,
                ]}
            >
                <Select
                    options={trainingOptions}
                    style={{ width: '100%' }}
                    placeholder='Выбор типа тренировки'
                    onChange={onChangeTrainingType}
                />
            </Modal>
            <ExerciseDrawer onClose={onClose} isOpened={isExerciseDrawerOpened} />
        </>
    );
};
