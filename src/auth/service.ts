import { authorize } from 'react-native-app-auth';
import type { OAuthConfig } from './interfaces';

export async function startOAuthFlow({
  issuer,
  clientId,
  redirectUrl,
  scopes,
  additionalParameters,
}: OAuthConfig) {
  try {
    return await authorize({
      issuer,
      clientId,
      redirectUrl,
      scopes,
      additionalParameters,
    });
  } catch (err) {
    throw err;
  }
}
