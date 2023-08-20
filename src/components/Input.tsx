import React, {type ForwardedRef, forwardRef} from 'react';

// eslint-disable-next-line react/display-name
export const Input = forwardRef((_props: any, ref: ForwardedRef<HTMLInputElement>) => (<input ref={ref} />));
