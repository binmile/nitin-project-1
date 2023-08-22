import React, {Component} from 'react';
import {Post} from '../api/api';
import {type PostListState} from './props';
import {PostItem} from './PostItem';

class PostList extends Component<any, PostListState> {
	constructor(props: any) {
		super(props);

		this.state = {
			post: [],
		};
	}

	componentDidMount(): void {
		Post.getPosts().then(data => {
			this.setState({post: data});
			console.log(data);
		}).catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<>
				<div>list of post</div>
				{this.state.post.map(post => <PostItem key={post.id ?? post.title} {...post}/>)}
			</>
		);
	}
}

export default PostList;
