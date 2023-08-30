/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import {type PostType} from '../models/post.interface';
import {requests} from './ApiSetup';

const BaseUrl = 'https://jsonplaceholder.typicode.com/';

export const PostApi = {
	getPosts: async (): Promise<PostType[]> =>
		requests.get<Promise<PostType[]>>(`${BaseUrl}posts`),
	getPost: async (id: number): Promise<PostType> =>
		requests.get<Promise<PostType>>(`${BaseUrl}posts/${id}`),
	createPost: async (post: PostType): Promise<PostType> =>
		requests.post(`${BaseUrl}posts`, post),
	updatePost: async (post: PostType, id: number): Promise<PostType> =>
		requests.put<Promise<PostType>>(`${BaseUrl}posts/${id}`, post),
	async deletePost(id: number): Promise<void> {
		await requests.delete<Promise<void>>(`${BaseUrl}posts/${id}`);
	},
};
