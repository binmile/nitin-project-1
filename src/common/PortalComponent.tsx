import React from 'react';
import ReactDOM from 'react-dom';

export const PortalComponent = () => ReactDOM.createPortal(
	<div>PortalComponent</div>,
	document.getElementById('portal_root')!);

