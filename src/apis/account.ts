import http from '@/utils/http';
import { FunctionScheme } from './apis';
import qs from 'qs';

export const signin: FunctionScheme = params => http.post('/login?returnUrl=/backtestbusiness/company/brief', qs.stringify(params), {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
});

export const register: FunctionScheme = params => http.post('/account/register', params);

export const createCompanyProfile: FunctionScheme = params => http.post('/company', params);

export const getCaptchaCode: FunctionScheme = params => http.post('/account/phone/vcode', params);

export const resetPassword: FunctionScheme = params => http.put('/account/password', params);

export const getAccountInfo: FunctionScheme = () => http.get('/account');

export const updatePhone: FunctionScheme = params => http.put('/account/phone', params);

export const updateEmail: FunctionScheme = params => http.put('/account/email', params);

export const updateAvatar: string = '/account/avatar';


// admin users management;
export const getEnterpriseUsers: FunctionScheme = params => http.get('/admin/account', { params });

export const createEnterpriseUser: FunctionScheme = params => http.post('/admin/account', params);

export const updateEnterpriseUser: FunctionScheme = (id: number, params: any) => http.put(`/admin/account/${id}`, params);

export const deleteEnterpriseUser: FunctionScheme = (id) => http.delete(`/admin/account/${id}`);
