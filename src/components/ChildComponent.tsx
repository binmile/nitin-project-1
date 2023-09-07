import React, {Component} from 'react';
import {UserConsumer} from './userContext';

const ChildComponent = () => (
	<UserConsumer>
		{
			value => (
				<div>
					{value}
				</div>
			)
		}
	</UserConsumer>
);

export default ChildComponent;
