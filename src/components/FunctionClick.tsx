import React from 'react';

export const FunctionClick = function () {
	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		console.log('this is function event handler', e);
	}

	return (
		<div>
			<button onClick={handleClick}>click</button>
		</div>
	);
};
