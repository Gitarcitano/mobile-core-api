import React from 'react';
import { Button, View } from 'react-native';
import type { LoginProps } from './interfaces';
import { startOAuthFlow } from './service';
import { setStorageItem } from '../storage';
import jwtDecode from 'jwt-decode';

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

    console.log(jwtDecode(oAuthResponse.idToken));

    Promise.all([
      setStorageItem('userApiToken', oAuthResponse.idToken),
      setStorageItem('userRefreshToken', oAuthResponse.refreshToken),
    ]);
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Login" onPress={handleLoginPress} />
    </View>
  );
}
