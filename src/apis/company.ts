import http from '@/utils/http';
import { FunctionScheme } from './apis';

export const getCompanyInfo: FunctionScheme = () => http.get('/company');

export const updateCompanyInfo: FunctionScheme = params => http.put('/company', params);

export const updateCompanyAuditInfo: FunctionScheme = params => http.put('/company/audit', params);

export const getCompanyBriefInfo: FunctionScheme = params => http.get('/company/brief', params);

export const registerCompany: FunctionScheme = params => http.post('/company', params);

export const uploadCompanyFile: string = '/api/company/audit/file';

export const uploadCompanyLogo: string = '/api/company/logo';



