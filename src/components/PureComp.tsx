import React, {PureComponent} from 'react';
import {type ParentType} from './type';

export class PureComp extends PureComponent<ParentType, any> {
	componentDidUpdate(prevProps: Readonly<ParentType>, prevState: Readonly<any>, snapshot?: any): void {
		console.log('Pure: componentDidUpdate');
	}

	render() {
		return (
			<div>{this.props.name}</div>
		);
	}
}

