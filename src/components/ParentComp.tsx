import React, {Component} from 'react';
import {type ParentType} from './type';
import {RegComp} from './RegComp';
import {PureComp} from './PureComp';

export class ParentComp extends Component<any, ParentType> {
	constructor(props: any) {
		super(props);

		this.state = {
			name: 'Nitin',
		};
	}

	componentDidMount(): void {
		setInterval(() => {
			this.setState({
				name: 'Nitin Kukreti',
			});
		}, 2000);
	}

	componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<ParentType>, snapshot?: any): void {
		console.log('parentComponent: componentDidUpdate');
	}

	render() {
		return (
			<div>
				<RegComp name={this.state.name}/>
				<PureComp name={this.state.name}/>
			</div>
		);
	}
}

export default ParentComp;
