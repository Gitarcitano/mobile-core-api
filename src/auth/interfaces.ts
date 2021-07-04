import type { Dispatch, ReactNode } from 'react';
import type { BuiltInParameters } from 'react-native-app-auth';

export interface OAuthConfig {
  issuer: string;
  clientId: string;
  redirectUrl: string;
  scopes: string[];
  additionalParameters: BuiltInParameters & { [name: string]: string };
}

export type LoginProps = OAuthConfig;

export interface AuthContextData {
  user: User;
  setUser: Dispatch<React.SetStateAction<User>>;
  checkIfUserIsLoggedIn: () => void;
}

export type WithChildren = {
  children: ReactNode;
};

export type User = {
  logged: boolean;
};
