/* eslint-disable @typescript-eslint/no-unsafe-return */

import axios, {type AxiosResponse} from 'axios';

const instance = axios.create({
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
	get: async <T>(url: string) => instance.get<T>(url).then(responseBody),
	post: async <T>(url: string, body: any) => instance.post<T>(url, body).then(responseBody),
	put: async <T>(url: string, body: any) => instance.put<T>(url, body).then(responseBody),
	delete: async <T>(url: string) => instance.delete<T>(url).then(responseBody),
};

