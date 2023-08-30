import React from 'react';
import {type FormState} from './type';

class Form extends React.Component<any, FormState> {
	constructor(props: any) {
		super(props);
		this.state = {
			name: '', comment: '', select: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleComment = this.handleComment.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
	}

	handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({name: event.target.value});
	}

	handleComment(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({comment: event.target.value});
	}

	handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
		this.setState({select: event.target.value});
	}

	render() {
		return (
			<div>
				<label htmlFor='name'>Username </label>
				<input id='name' type='text' value={this.state.name} onChange={this.handleChange}/>
				<label htmlFor='comment'>Comment</label>
				<input id='comment' type='text' value={this.state.comment} onChange={this.handleComment}/>
				<label htmlFor='select'>Tech</label>
				<select value={this.state.select} id='select' onChange={this.handleSelect}>
					<option value='React'>React</option>
					<option value='Redux'>Redux</option>
					<option value='Redux-Saga'>Redux-Saga</option>
					<option value='Redux-Toolkit'>Redux-Toolkit</option>
					<option value='React-Native'>React-Native</option>
					<option value='Vue'>Vue</option>
					<option value='Angular'>Angular</option>

				</select>
			</div>
		);
	}
}

export {Form};

