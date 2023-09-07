import React, {Component} from 'react';
import {type ParentType} from './type';

export class RegComp extends Component<ParentType, any> {
	componentDidUpdate(prevProps: Readonly<ParentType>, prevState: Readonly<any>, snapshot?: any): void {
		console.log('RegComp: componentDidUpdate');
	}

	render() {
		return (
			<div>{this.props.name}</div>
		);
	}
}

