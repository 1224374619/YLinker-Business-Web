import http from '@/utils/http';
import { FunctionScheme } from './apis';

export const getAllEnterpriseTypes: FunctionScheme = () => http.get('/constant/enterpriseForm');

export const getAllIndustries: FunctionScheme = () => http.get('/constant/industry');

export const getAllPositionCatalogs: FunctionScheme = () => http.get('/constant/positionCatalog');

export const getAllDistricts: FunctionScheme = () => http.get('/constant/district');

export const getAllOptions: FunctionScheme = () => http.get('/option');
