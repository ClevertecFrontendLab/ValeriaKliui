import moment from 'moment';

export const getDateFromString = (stringDate: string | null) => moment(stringDate).format('DD.MM.YYYY');
