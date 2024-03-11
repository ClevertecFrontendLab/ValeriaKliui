import type { Moment } from 'moment';
import { useEffect, useState } from 'react';

import { useModal } from './useModal';
import { useTrainings } from './useTrainings';
import { useAppDispatch, useAppSelector } from './typed-react-redux-hooks';
import { chooseTrainingDay, selectTrainingDay } from '@redux/slices/trainingsSlice';

export const useCalendar = () => {
    const {
        trainingList,
        isTrainingsLoaded,
        isTrainingListLoaded,
        isTrainingListError,
        getTrainingList,
    } = useTrainings();
    const [isErrorModalOpened, openModal, closeModal] = useModal();
    const [isDayModalOpened, openDayModal, closeDayModal] = useModal();
    const [isCreationModalOpened, openNewTrainingModal, closeNewTrainingModal] = useModal();
    const dispatch = useAppDispatch();
    const selectedTrainingDate = useAppSelector(selectTrainingDay)
    console.log(selectedTrainingDate)

    useEffect(() => {
        if (isTrainingsLoaded) getTrainingList({});
    }, [isTrainingsLoaded, getTrainingList]);

    useEffect(() => {
        if (isTrainingListError) openModal();
    }, [isTrainingListError, openModal]);

    const onDaySelect = (date: Moment) => {
        dispatch(chooseTrainingDay(date.toISOString()))
        openDayModal();
    };

    const addNewTraining = () => {
        closeDayModal();
        openNewTrainingModal();
    };

    const trainingOptions = trainingList?.map(({ name, key }) => ({ label: name, value: key }));

    return {
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
    };
};
