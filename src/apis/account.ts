import { AxiosPromise } from 'axios';
import http from '@/utils/http';

type FunctionScheme = (params: object) => AxiosPromise<{result?: boolean}>;

export const signin: FunctionScheme = params => http.post('/', params);
