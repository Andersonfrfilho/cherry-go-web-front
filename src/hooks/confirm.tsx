import React, { createContext, ReactNode, useContext, useEffect } from 'react';

import { api } from '../services/api';

import { useCommon } from './common';

interface ConfirmContextData {
  confirmMail: (token: string) => Promise<boolean>;
}

interface ConfirmProviderProps {
  children: ReactNode;
}
const ConfirmContext = createContext<ConfirmContextData>(
  {} as ConfirmContextData,
);

function ConfirmProvider({ children }: ConfirmProviderProps) {
  const { setIsLoading } = useCommon();

  async function confirmMail(token: string): Promise<boolean> {
    setIsLoading(true);
    try {
      await api.get(`/v1/users/confirm/mail?token=${token}`);
      return true;
    } catch (error) {
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ConfirmContext.Provider value={{ confirmMail }}>
      {children}
    </ConfirmContext.Provider>
  );
}

function useConfirm(): ConfirmContextData {
  const context = useContext(ConfirmContext);
  return context;
}

export { ConfirmProvider, useConfirm };
