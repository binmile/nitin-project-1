import React, {Component} from 'react';
import {Input} from './Input';

export class RefDemo extends Component<any, any> {
	inputRef: React.RefObject<HTMLInputElement>;
	childRef: React.RefObject<HTMLInputElement>;
	constructor(props: any) {
		super(props);
		this.inputRef = React.createRef<HTMLInputElement>();
		this.childRef = React.createRef<HTMLInputElement>();
		this.handelClick = this.handelClick.bind(this);
	}

	componentDidMount() {
		this.inputRef.current?.focus();
	}

	handelClick() {
		if (this.childRef.current) {
			this.childRef.current?.focus();
		}
	}

	render() {
		return (
			<div>
				<input ref={this.inputRef} />
				<Input ref={this.childRef} />
				<button onClick={this.handelClick}>click me</button>
			</div>
		);
	}
}

export default RefDemo;
