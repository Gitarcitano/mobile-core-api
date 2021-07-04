import type { AxiosRequestConfig } from 'axios';
import { getStorageItem } from '../../storage';

export async function requestInterceptor(
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> {
  const token = await getStorageItem('userApiToken');
  const sellerId = await getStorageItem('userId');

  config.headers.Authorization = `JWT ${token}`;
  config.headers.sellerid = sellerId;
  config.headers['Accept-Language'] = 'pt-br';

  return config;
}
