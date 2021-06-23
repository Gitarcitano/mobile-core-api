import axios from 'axios';
import { requestInterceptor } from './interceptors';

const DEFAULT_TIMEOUT = 10000;
const DEFAULT_HEADER = { 'content-type': 'application/json' };

export const apiClient = axios.create({
  headers: DEFAULT_HEADER,
  timeout: DEFAULT_TIMEOUT,
});

apiClient.interceptors.request.use(requestInterceptor);
