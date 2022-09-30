import {AxiosError} from 'axios';
import moment from 'moment-timezone';
import {toast} from 'react-toastify';

import client from '../client';
import Endpoints from '../endpoints';

import {
  GetAllFlightsResponse,
  GetAllFlightsReturn,
  StatesAllResponse,
} from './types';

export const getAllFlights = async (): Promise<GetAllFlightsResponse> => {
  try {
    const {data} = await client.get<StatesAllResponse>(Endpoints.States.All);

    const parsedData = data.states.map((state) => ({
      airport: state[2] as GetAllFlightsReturn['airport'],
      arriving: state[1] as GetAllFlightsReturn['arriving'],
      departing: state[1] as GetAllFlightsReturn['departing'],
      time: moment
        .unix(state[3] as number)
        .tz('America/Chicago')
        .format('HH:MM A Z'),
    }));

    return parsedData;
  } catch (error) {
    const axiosError = error as AxiosError;

    toast.error(axiosError.message);

    return axiosError.message;
  }
};
