import React from 'react';

/**
 * Contructor for a component called first
 * then getDerivedStateFromProps get called we usually call it when out state is dependent on the props passed to the component
 * render function get called
 * in last didComponentDidMount method get called after component and all its sub components get rendered
 */
class LifecycleA extends React.Component <any, any> {
	static getDerivedStateFromProps(props: any, state: any): any {
		console.log('getDerivedStateFromProps called of lifecycle A');
		return null;
	}

	constructor(props: any) {
		super(props);
		console.log('constructor called of lifecycle A');
	}

	componentDidMount(): void {
		console.log('compenentDidMount called of lifecycle A');
	}

	render(): JSX.Element {
		console.log('render called of lifecycle A');
		return <div>Lifecycle A</div>;
	}
}
export {LifecycleA};
