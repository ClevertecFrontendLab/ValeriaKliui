import { useGetTrainingsQuery, useLazyGetTrainingsListQuery } from "@redux/services/trainingsApi";

export const useTrainings = () => {
    const { data: trainings, isSuccess: isTrainingsLoaded } = useGetTrainingsQuery({});
    const [getTrainingList, { data: trainingList, isSuccess: isTrainingListLoaded, isError: isTrainingListError }] =
        useLazyGetTrainingsListQuery();

    console.log(trainings)

    return { isTrainingsLoaded, isTrainingListLoaded, isTrainingListError, getTrainingList, trainingList }
}