import React, {type ChangeEvent, Component} from 'react';
import {type PostType} from '../models/post.interface';
import {PostApi} from '../api/PostApi';

class PostForm extends Component<any, PostType> {
	constructor(props: any) {
		super(props);

		this.state = {
			body: '',
			title: '',

		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		PostApi.createPost(this.state).then(post => {
			console.log(post);
		}).catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<div>
				<h1>create post</h1>
				<form onSubmit={this.handleSubmit}>
					<div className='form-group'>
						<label htmlFor='title'>Title</label>
						<input type='text' value={this.state.title} onChange={(e: ChangeEvent<HTMLInputElement>) => {
							this.setState({...this.state, title: e.target.value});
						}} className='form-control' id='title' />
					</div>
					<div className='form-group'>
						<label htmlFor='body'>Body</label>
						<textarea className='form-control' value={this.state.body} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
							this.setState({...this.state, body: e.target.value});
						}} id='body' />
					</div>
					<button type='submit' className='btn btn-primary'>
            Submit
					</button>
				</form>
			</div>
		);
	}
}

export default PostForm;
