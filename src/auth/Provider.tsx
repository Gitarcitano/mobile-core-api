import React, { createContext, useContext, useState } from 'react';
import type { AuthContextData, User, WithChildren } from './interfaces';
import { getStorageItem, removeStorageItem } from '../storage';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: WithChildren): JSX.Element {
  const [user, setUser] = useState({} as User);

  async function checkIfUserIsLoggedIn(): Promise<void> {
    try {
      const loggedStatus = await getStorageItem('userApiToken');

      setUser({
        logged: !!loggedStatus,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function logout(): Promise<void> {
    try {
      await removeStorageItem('userApiToken');
      await checkIfUserIsLoggedIn();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        checkIfUserIsLoggedIn,
        setUser,
        user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
