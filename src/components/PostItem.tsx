import React from 'react';
import {type PostType} from '../models/post.interface';

export const PostItem = ({userId, body, title, id}: PostType) => (
	<div >
		{id && userId && <div>{id}</div>}
		<h1>{title}</h1>
		<p>{body}</p>
	</div>
);
