import type { BuiltInParameters } from 'react-native-app-auth';

export interface OAuthConfig {
  issuer: string;
  clientId: string;
  redirectUrl: string;
  scopes: string[];
  additionalParameters: BuiltInParameters & { [name: string]: string };
}

export type LoginProps = OAuthConfig;
