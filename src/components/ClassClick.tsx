import React from 'react';

class ClassClick extends React.Component {
	handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		console.log('this is class click handler', e);
	}

	render(): React.ReactNode {
		return (
			<div>
				<button onClick={this.handleClick}>click</button>
			</div>
		);
	}
}

export default ClassClick;
