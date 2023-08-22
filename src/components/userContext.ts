/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
const userContext = React.createContext<string>('2');

export const UserProvider = userContext.Provider;

export const UserConsumer = userContext.Consumer;

