import {AxiosError} from 'axios';

export type StatesAllResponse = {
  states: (string | number | number[] | boolean)[][];
};

export type GetAllFlightsReturn = {
  time: string;
  airport: string;
  arriving: number;
  departing: number;
};

export type GetAllFlightsResponse =
  | GetAllFlightsReturn[]
  | AxiosError['message'];
