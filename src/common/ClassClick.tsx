import React from 'react';
import {type ClassClickStateInterface} from './interface.d';
class ClassClick extends React.Component<any, ClassClickStateInterface> {
	constructor(props: any) {
		super(props);
		this.state = {message: 'hi'};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		console.log('this is class click handler', e);
		this.setState({message: 'you clicked'});
	}

	render(): React.ReactNode {
		return (
			<div>
				<p>{this.state.message}</p>
				<button onClick={this.handleClick}>click</button>
			</div>
		);
	}
}

export default ClassClick;
