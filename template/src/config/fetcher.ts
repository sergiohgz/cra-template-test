import { AxiosRequestConfig } from 'axios';
import apiClient from './apiClient';

export const fetcher = <T>(
    url: string,
    params?: AxiosRequestConfig['params']
): Promise<T> =>
    apiClient
        .get<T>(url, { params })
        .then(response => response.data);

export default fetcher;
