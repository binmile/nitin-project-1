/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/naming-convention */

import axios, {type AxiosResponse} from 'axios';
import {type PostType} from '../models/post.interface';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: async (url: string) => instance.get(url).then(responseBody),
	post: async (url: string, body: PostType) => instance.post(url, body).then(responseBody),
	put: async (url: string, body: PostType) => instance.put(url, body).then(responseBody),
	delete: async (url: string) => instance.delete(url).then(responseBody),
};

export const Post = {
	getPosts: async (): Promise<PostType[]> => requests.get('posts'),
	getAPost: async (id: number): Promise<PostType> => requests.get(`posts/${id}`),
	createPost: async (post: PostType): Promise<PostType> =>
		requests.post('posts', post),
	updatePost: async (post: PostType, id: number): Promise<PostType> =>
		requests.put(`posts/${id}`, post),
	async deletePost(id: number): Promise<void> {
		await requests.delete(`posts/${id}`);
	},
};

