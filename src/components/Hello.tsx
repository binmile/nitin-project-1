import React from 'react';

export const Hello = function () {
	// Whitout jsx
	// const paragraph = React.createElement('p', null, 'this is a paragraph');
	// const heading = React.createElement('h1', null, 'this is heading');
	// const result = React.createElement('div', null, paragraph, heading);
	// return result;
	// ----------------------------------------------------------------
	// With jsx
	return (
		<div>
			<p>this is paragraph</p>
			<h1>this is heading</h1>
		</div>
	);
};
