import React, { ReactNode } from 'react';

import { CommonProvider } from './common';
import { ConfirmProvider } from './confirm';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <CommonProvider>
      <ConfirmProvider>{children}</ConfirmProvider>
    </CommonProvider>
  );
}

export { AppProvider };
