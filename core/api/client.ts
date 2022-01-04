import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

const baseClient = axios.create({
  baseURL: "https://yts.mx/api",
});

export const apiClient = <R>(config: AxiosRequestConfig<any> = {}) => {
  return baseClient(config) as AxiosPromise<R>;
};
