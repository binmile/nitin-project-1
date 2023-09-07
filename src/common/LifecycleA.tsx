import React from 'react';
import {type LifecycleState} from './type';

/**
 * Contructor for a component called first
 * then getDerivedStateFromProps get called we usually call it when out state is dependent on the props passed to the component
 * render function get called
 * in last didComponentDidMount method get called after component and all its sub components get rendered
 */
class LifecycleA extends React.Component <any, LifecycleState> {
	static getDerivedStateFromProps(props: any, state: LifecycleState): any {
		console.log('getDerivedStateFromProps called of lifecycle A');
		return null;
	}

	constructor(props: any) {
		super(props);
		this.state = {
			count: 0,
		};
		console.log('constructor called of lifecycle A');
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
		this.setState({
			count: this.state.count + 1,
		});
	}

	componentDidMount(): void {
		console.log('compenentDidMount called of lifecycle A');
	}

	shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean {
		console.log('shouldComponentUpdate called of lifecycle A');
		return true;
	}

	componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<LifecycleState>, snapshot?: any): void {
		console.log('componentDidUpdate called of lifecycle A');
	}

	componentWillUnmount(): void {
		console.log('componentWillUnmount called of lifecycle A');
	}

	getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<LifecycleState>) {
		console.log('getSnapshotBeforeUpdate called of lifecycle A');
		return null;
	}

	render(): JSX.Element {
		console.log('render called of lifecycle A');
		return <>
			<div>Lifecycle A</div>
			<button onClick={this.handleClick}>Click me</button>
		</>;
	}
}
export {LifecycleA};
