import React from 'react';
import { Button, View } from 'react-native';
import type { LoginProps } from './interfaces';
import { startOAuthFlow } from './service';
import { setStorageItem } from '../storage';
import jwtDecode, { JwtPayload } from 'jwt-decode';

export function Login({
  issuer,
  clientId,
  redirectUrl,
  scopes,
  additionalParameters,
}: LoginProps): JSX.Element {
  async function handleLoginPress() {
    const oAuthResponse = await startOAuthFlow({
      issuer,
      clientId,
      redirectUrl,
      scopes,
      additionalParameters,
    });

    const userId = jwtDecode<JwtPayload>(oAuthResponse.idToken).sub;

    console.log('userId: ', userId);
    console.log('oAuthResponse: ', oAuthResponse);

    await setStorageItem('userApiToken', oAuthResponse.idToken);
    await setStorageItem('userRefreshToken', oAuthResponse.refreshToken);
    await setStorageItem('userId', userId);
  }
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Login" onPress={handleLoginPress} />
    </View>
  );
}
