/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
const userContext = React.createContext<string>('2');

export const UserProvider: React.Provider<string> = userContext.Provider;

export const UserConsumer: React.Consumer<string> = userContext.Consumer;

